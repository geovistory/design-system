import { Component, h, Host, Prop, State } from '@stencil/core';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { GeovClassSelectItem } from '../geov-class-select/geov-class-select';
import { ClassSelectData, fetchClassSelect } from './lib/fetchClassSelect';
import { EntityListData, fetchEntityList } from './lib/fetchEntityList';
import { fetchFullCount, FullCountData } from './lib/fetchFullCount';

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
    this._selectedClass = val;
    this.offset = 0;
    this.fetchEntityListData();
    this.fetchFullCountData();
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
  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);
    // if no data found, fetchData
    if (!this.data) {
      // fetch data via http
      await this.fetchData() // <- await this promise!
        .then(d => {
          this.data = d;
          setSSRData(this._ssrId, d);
          return d;
        })
        .catch(d => {
          this.data = d;
          return d;
        });
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
    const classSelect = await this.fetchClassSelectData();
    const firstClass = classSelect.items[0];
    this.selectedClass = firstClass;
    return Promise.all([this.fetchClassSelectData(), this.fetchEntityListData(), this.fetchFullCountData()]).then(([classSelect, entityList, fullCount]) => {
      return { classSelect, entityList, fullCount, loading: false };
    });
  }

  private async fetchClassSelectData(): Promise<ClassSelectData> {
    this.classSelect = { loading: true };
    this.classSelect = await fetchClassSelect(this.sparqlEndpoint, this.searchString);
    return this.classSelect;
  }

  private async fetchEntityListData(): Promise<EntityListData> {
    this.entityList = { loading: true };
    this.entityList = await fetchEntityList(this.sparqlEndpoint, this.searchString, this.selectedClass.classUri, this.selectedClass.classLabel, this.limit, this.offset);
    return this.entityList;
  }

  private async fetchFullCountData(): Promise<EntityListData> {
    this.fullCount = { loading: true };
    this.fullCount = await fetchFullCount(this.sparqlEndpoint, this.searchString, this.selectedClass.classUri);
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
                {this.fullCount?.loading ? <ion-skeleton-text animated={true} style={{ width: '40px' }}></ion-skeleton-text> : <small>{this.fullCount?.count} Entities</small>}{' '}
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
                ref={el => {
                  el.items = this.entityList?.items;
                  el.loading = this.entityList?.loading;
                }}
              ></geov-entity-list>
              <ion-item class="paginator-container" lines="none">
                {this.fullCount.count && !this.fullCount.loading && (
                  <geov-paginator
                    class="paginator"
                    onPageChanged={e => {
                      this.offset = e.detail.pageSize * e.detail.pageIndex;
                    }}
                    pageSize={this.limit}
                    length={this.fullCount.count}
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
