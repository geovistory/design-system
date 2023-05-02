import { Component, h, Host, Prop, State } from '@stencil/core';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { GeovClassSelectItem } from '../geov-class-select/geov-class-select';
import { ClassSelectData, ClassFilterFetcher } from './lib/ClassFilterFetcher';
import { EntityListData, EntityListFetcher } from './lib/EntityListFetcher';
import { FullCountFetcher, FullCountData } from './lib/FullCountFetcher';

export interface GeovExplorerData {
  classSelect?: ClassSelectData;
  entityList?: EntityListData;
  fullCount?: FullCountData;
}

@Component({
  tag: 'geov-explorer',
  styleUrl: 'geov-explorer.css',
  // shadow: true,
})
export class GeovExplorer {
  /**
   * _ssrId is short for server side rendering id and
   * identifies this component and the fetched data
   * respectively. Set this only if you want to
   * enable this component to fetch serve side
   */
  @Prop({ reflect: true }) _ssrId?: string;

  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;

  /**
   * If true, the component will not render before the
   * initial data is fetched
   */
  @Prop() fetchBeforeRender = false;

  /**
   * initialize the component with a given search string
   */
  @Prop() initSearchString?: string;

  /**
   * uriRegex
   * Optional regex with capturing groups to transform
   * the uri into the desired url. To use together
   * with uriReplace.
   */
  @Prop() uriRegex?: string;
  /**
   * uriReplace
   * String used to replace the uriRegex.
   *
   * Example (pseudo code):
   * const uriRegex = (http:\/\/geovistory.org\/)(.*)
   * const uriReplace = "http://dev.geovistory.org/resource/$2?p=123"
   * http://geovistory.org/resource/i54321 => http://dev.geovistory.org/resource/54321?p=123
   */
  @Prop() uriReplace?: string;

  __data: GeovExplorerData;
  set data(d: GeovExplorerData) {
    this.entityList = d?.entityList;
    this.classSelect = d?.classSelect;
    this.fullCount = d?.fullCount;
    this.__data = d;
  }
  get data(): GeovExplorerData {
    return this.__data;
  }

  @State() entityList: EntityListData;
  @State() classSelect: ClassSelectData;
  @State() fullCount: FullCountData;

  /**
   * Pagination
   */
  @State()
  _offset = 0;
  set offset(val: number) {
    this._offset = val;
    this.fetchEntityListData();
  }
  get offset() {
    return this._offset;
  }
  limit = 10;

  /**
   * Filters
   */
  _searchString: string;
  set searchString(val: string) {
    this._searchString = val;
    this.offset = 0;
    this.fetchClassSelectData();
    this.fetchEntityListData();
    this.fetchFullCountData();
  }
  get searchString() {
    return this._searchString;
  }

  _selectedClass: GeovClassSelectItem;
  set selectedClass(val: GeovClassSelectItem) {
    if (this._selectedClass?.classUri !== val?.classUri) {
      this._selectedClass = val;
      this._offset = 0;
      this.fetchEntityListData();
      this.fetchFullCountData();
    }
  }
  get selectedClass() {
    return this._selectedClass;
  }

  /**
   * called once when component is ready. good for data fetching.
   * if `componentWillLoad()` returns a promise, stencil hydrate
   * awaits this promise for server side rendering. See:
   * https://stenciljs.com/docs/static-site-generation-basics
   */
  componentWillLoad() {
    this._searchString = this.initSearchString;

    // try to get data from ssr
    this.data = getSSRData(this._ssrId);
    // if no data found, fetchData
    if (!this.data) {
      // fetch data via http
      const promise = this.fetchData()
        .then(d => {
          this.data = d;
          setSSRData(this._ssrId, d);
          return d;
        })
        .catch(d => {
          this.data = d;
          return d;
        });
      if (this.fetchBeforeRender) return promise; // <- await this promise!
    }
  }
  constructor() {
    // set id for server side rendering of dynamic data
    setSSRId(this);
  }
  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  async fetchData(): Promise<GeovExplorerData> {
    return Promise.all([await this.fetchClassSelectData(), this.fetchEntityListData(), this.fetchFullCountData()]).then(([classSelect, entityList, fullCount]) => {
      return { classSelect, entityList, fullCount, loading: false };
    });
  }

  private fetchClassSelect: ClassFilterFetcher;
  private async fetchClassSelectData(): Promise<ClassSelectData> {
    this.classSelect = { loading: true };

    // if there is an ongoing fetch, cancel it
    if (this.fetchClassSelect) this.fetchClassSelect.promiseWithCancel.cancel();

    this.fetchClassSelect = new ClassFilterFetcher();
    this.classSelect = await this.fetchClassSelect.fetch(this.sparqlEndpoint, this.searchString);

    // unset ongoing fetch
    this.fetchClassSelect = undefined;

    return this.classSelect;
  }

  private fetchEntityList: EntityListFetcher;
  private async fetchEntityListData(): Promise<EntityListData> {
    this.entityList = { loading: true };

    // if there is an ongoing fetch, cancel it
    if (this.fetchEntityList) this.fetchEntityList.promiseWithCancel.cancel();

    this.fetchEntityList = new EntityListFetcher();
    this.entityList = await this.fetchEntityList.fetch(this.sparqlEndpoint, this.searchString, this.selectedClass ? [this.selectedClass.classUri] : [], this.limit, this.offset);

    // unset ongoing fetch
    this.fetchEntityList = undefined;

    return this.entityList;
  }

  private fetchFullCount: FullCountFetcher;
  private async fetchFullCountData(): Promise<EntityListData> {
    this.fullCount = { loading: true };

    // if there is an ongoing fetch, cancel it
    if (this.fetchFullCount) this.fetchFullCount.promiseWithCancel.cancel();

    this.fetchFullCount = new FullCountFetcher();
    this.fullCount = await this.fetchFullCount.fetch(this.sparqlEndpoint, this.searchString, this.selectedClass ? [this.selectedClass.classUri] : []);

    // unset ongoing fetch
    this.fetchFullCount = undefined;

    return this.fullCount;
  }

  render() {
    return (
      <Host>
        <ion-grid>
          <ion-row>
            <ion-col sizeMd="0" sizeLg="6" sizeXl="3" class="entity-count-col ion-hide-lg-down"></ion-col>
            <ion-col sizeMd="12" sizeLg="6" sizeXl="9">
              <ion-searchbar
                value={this.searchString}
                debounce={300}
                onIonChange={e => {
                  this.searchString = e.detail.value;
                }}
              ></ion-searchbar>

              <geov-class-select-popup
                class="ion-hide-lg-up"
                onSelectionChanged={e => {
                  this.selectedClass = e.detail.value;
                }}
                ref={el => {
                  el.initValue = this.selectedClass;
                  el.items = this.classSelect?.items;
                }}
              ></geov-class-select-popup>
              <ion-note class="entity-count-sm entity-count-label">
                {this.fullCount?.loading ? <ion-skeleton-text animated={true} style={{ width: '40px' }}></ion-skeleton-text> : <span>{this.fullCount?.count} Entities</span>}{' '}
              </ion-note>

              {/* <ion-item>
                  <ion-label position="stacked">Filtered by class:</ion-label>
                  <ion-select value="person">
                    <ion-select-option value="person">Person <ion-note>(938123)</ion-note></ion-select-option>
                    <ion-select-option value="oranges">Oranges</ion-select-option>
                    <ion-select-option value="bananas">Bananas</ion-select-option>
                  </ion-select>
                </ion-item> */}
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col sizeMd="0" sizeLg="6" sizeXl="3" class="ion-hide-lg-down">
              <geov-class-radio-group
                onSelectionChanged={e => {
                  this.selectedClass = e.detail.value;
                }}
                ref={el => {
                  el.initValue = this.selectedClass;
                  el.items = this.classSelect?.items;
                  el.loading = this.classSelect?.loading;
                }}
              ></geov-class-radio-group>
              {/* <geov-class-select
                ref={el => {
                  el.items = this.classSelect?.items;
                  el.loading = this.classSelect?.loading;
                }}
              ></geov-class-select> */}
            </ion-col>
            <ion-col sizeMd="12" sizeLg="6" sizeXl="9">
              <geov-entity-list
                defaultPageSize={this.limit}
                uriRegex={this.uriRegex}
                uriReplace={this.uriReplace}
                ref={el => {
                  el.items = this.entityList?.items;
                  el.loading = this.entityList?.loading;
                }}
              ></geov-entity-list>
              <ion-item class="paginator-container" lines="none">
                {this.fullCount?.count && !this.fullCount?.loading && (
                  <geov-paginator
                    class="paginator"
                    onPageChanged={e => {
                      console.log('onPageChanged');
                      this.offset = e.detail.pageSize * e.detail.pageIndex;
                    }}
                    pageSize={this.limit}
                    length={this.fullCount?.count}
                  ></geov-paginator>
                )}
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
        <slot></slot>
      </Host>
    );
  }
}
