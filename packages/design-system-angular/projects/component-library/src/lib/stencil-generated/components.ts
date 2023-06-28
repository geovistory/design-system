/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@geovistory/design-system-web';


@ProxyCmp({
  inputs: ['apis', 'displayCopyBtn', 'displayOpenBtn', 'displaySelectBtn', 'initSearch', 'initSearchType', 'nbColMax', 'nbOccurencesMax', 'types']
})
@Component({
  selector: 'geov-authority-lookup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['apis', 'displayCopyBtn', 'displayOpenBtn', 'displaySelectBtn', 'initSearch', 'initSearchType', 'nbColMax', 'nbOccurencesMax', 'types'],
})
export class GeovAuthorityLookup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selected']);
  }
}


import type { ItemSelectedEvent as IGeovAuthorityLookupItemSelectedEvent } from '@geovistory/design-system-web';

export declare interface GeovAuthorityLookup extends Components.GeovAuthorityLookup {
  /**
   * Event emitted when the select button has been clicked.
   */
  selected: EventEmitter<CustomEvent<IGeovAuthorityLookupItemSelectedEvent>>;
}


@ProxyCmp({
  inputs: ['api', 'displayCopyBtn', 'displayOpenBtn', 'displaySelectBtn', 'keywords', 'nbOccurencesMax', 'type']
})
@Component({
  selector: 'geov-authority-lookup-explorer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['api', 'displayCopyBtn', 'displayOpenBtn', 'displaySelectBtn', 'keywords', 'nbOccurencesMax', 'type'],
})
export class GeovAuthorityLookupExplorer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selected']);
  }
}


import type { ItemSelectedEvent as IGeovAuthorityLookupExplorerItemSelectedEvent } from '@geovistory/design-system-web';

export declare interface GeovAuthorityLookupExplorer extends Components.GeovAuthorityLookupExplorer {
  /**
   * Event emitted when the select button has been clicked.
The event does not bubble up through the DOM.
   */
  selected: EventEmitter<CustomEvent<IGeovAuthorityLookupExplorerItemSelectedEvent>>;
}


@ProxyCmp({
  inputs: ['images']
})
@Component({
  selector: 'geov-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['images'],
})
export class GeovCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovCarousel extends Components.GeovCarousel {}


@ProxyCmp({
  inputs: ['height', 'sparqlEndpoint', 'width']
})
@Component({
  selector: 'geov-class-distri',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'sparqlEndpoint', 'width'],
})
export class GeovClassDistri {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovClassDistri extends Components.GeovClassDistri {}


@ProxyCmp({
  inputs: ['initValue', 'items', 'loading', 'preferredItems', 'uriPrefix']
})
@Component({
  selector: 'geov-class-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['initValue', 'items', 'loading', 'preferredItems', 'uriPrefix'],
})
export class GeovClassRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}


import type { GeovClassRadioGroupEvent as IGeovClassRadioGroupGeovClassRadioGroupEvent } from '@geovistory/design-system-web';

export declare interface GeovClassRadioGroup extends Components.GeovClassRadioGroup {

  selectionChanged: EventEmitter<CustomEvent<IGeovClassRadioGroupGeovClassRadioGroupEvent>>;
}


@ProxyCmp({
  inputs: ['checkedOnInit', 'items', 'loading']
})
@Component({
  selector: 'geov-class-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkedOnInit', 'items', 'loading'],
})
export class GeovClassSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}


import type { ClassSelectEvent as IGeovClassSelectClassSelectEvent } from '@geovistory/design-system-web';

export declare interface GeovClassSelect extends Components.GeovClassSelect {

  selectionChanged: EventEmitter<CustomEvent<IGeovClassSelectClassSelectEvent>>;
}


@ProxyCmp({
  inputs: ['initValue', 'items']
})
@Component({
  selector: 'geov-class-select-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['initValue', 'items'],
})
export class GeovClassSelectPopup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}


import type { GeovClassSelectPopupEvent as IGeovClassSelectPopupGeovClassSelectPopupEvent } from '@geovistory/design-system-web';

export declare interface GeovClassSelectPopup extends Components.GeovClassSelectPopup {

  selectionChanged: EventEmitter<CustomEvent<IGeovClassSelectPopupGeovClassSelectPopupEvent>>;
}


@ProxyCmp({
  inputs: ['code', 'copyButton', 'language']
})
@Component({
  selector: 'geov-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['code', 'copyButton', 'language'],
})
export class GeovCode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovCode extends Components.GeovCode {}


@ProxyCmp({
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint'],
  methods: ['fetchData']
})
@Component({
  selector: 'geov-data-fetch-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint'],
})
export class GeovDataFetchExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovDataFetchExample extends Components.GeovDataFetchExample {}


@ProxyCmp({
  inputs: ['value']
})
@Component({
  selector: 'geov-display-geosparql-wktliteral',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
})
export class GeovDisplayGeosparqlWktliteral {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovDisplayGeosparqlWktliteral extends Components.GeovDisplayGeosparqlWktliteral {}


@ProxyCmp({
  inputs: ['entityId', 'fetchBeforeRender', 'language', 'sparqlEndpoint', 'ssrIdPrefix', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-entity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['entityId', 'fetchBeforeRender', 'language', 'sparqlEndpoint', 'ssrIdPrefix', 'uriRegex', 'uriReplace'],
})
export class GeovEntity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntity extends Components.GeovEntity {}


@ProxyCmp({
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-entity-class-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint'],
})
export class GeovEntityClassLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityClassLabel extends Components.GeovEntityClassLabel {}


@ProxyCmp({
  inputs: ['_ssrId', 'emptyPlaceholder', 'entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-entity-definition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'emptyPlaceholder', 'entityId', 'sparqlEndpoint'],
})
export class GeovEntityDefinition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityDefinition extends Components.GeovEntityDefinition {}


@ProxyCmp({
  inputs: ['buttonIcon', 'buttonLabel', 'color', 'entityId', 'expand', 'fill']
})
@Component({
  selector: 'geov-entity-download-rdf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonIcon', 'buttonLabel', 'color', 'entityId', 'expand', 'fill'],
})
export class GeovEntityDownloadRdf {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityDownloadRdf extends Components.GeovEntityDownloadRdf {}


@ProxyCmp({
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-entity-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint'],
})
export class GeovEntityLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityLabel extends Components.GeovEntityLabel {}


@ProxyCmp({
  inputs: ['defaultPageSize', 'items', 'loading', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-entity-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultPageSize', 'items', 'loading', 'uriRegex', 'uriReplace'],
})
export class GeovEntityList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityList extends Components.GeovEntityList {}


@ProxyCmp({
  inputs: ['_ssrId', 'color', 'entityId', 'fetchBeforeRender', 'fixedGrid', 'language', 'predicateExclude', 'predicateInclude', 'sparqlEndpoint', 'uriRegex', 'uriReplace'],
  methods: ['fetchData']
})
@Component({
  selector: 'geov-entity-properties',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'color', 'entityId', 'fetchBeforeRender', 'fixedGrid', 'language', 'predicateExclude', 'predicateInclude', 'sparqlEndpoint', 'uriRegex', 'uriReplace'],
})
export class GeovEntityProperties {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dataFetched']);
  }
}


import type { GeovEntityPropertiesData as IGeovEntityPropertiesGeovEntityPropertiesData } from '@geovistory/design-system-web';

export declare interface GeovEntityProperties extends Components.GeovEntityProperties {
  /**
   * Emits fetched data, after being fetched.
   */
  dataFetched: EventEmitter<CustomEvent<IGeovEntityPropertiesGeovEntityPropertiesData>>;
}


@ProxyCmp({
  inputs: ['_ssrId', 'color', 'entityId', 'fetchBeforeRender', 'language', 'pageSize', 'predicateLabel', 'predicateUri', 'sparqlEndpoint', 'totalCount', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-entity-props-by-predicate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'color', 'entityId', 'fetchBeforeRender', 'language', 'pageSize', 'predicateLabel', 'predicateUri', 'sparqlEndpoint', 'totalCount', 'uriRegex', 'uriReplace'],
})
export class GeovEntityPropsByPredicate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageChanged']);
  }
}


import type { PageEvent as IGeovEntityPropsByPredicatePageEvent } from '@geovistory/design-system-web';

export declare interface GeovEntityPropsByPredicate extends Components.GeovEntityPropsByPredicate {
  /**
   * pageChanged
Listener of change page
   */
  pageChanged: EventEmitter<CustomEvent<IGeovEntityPropsByPredicatePageEvent>>;
}


@ProxyCmp({
  inputs: ['_ssrId', 'classUriPrefix', 'fetchBeforeRender', 'initSearchString', 'preferredItems', 'sparqlEndpoint', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-explorer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'classUriPrefix', 'fetchBeforeRender', 'initSearchString', 'preferredItems', 'sparqlEndpoint', 'uriRegex', 'uriReplace'],
})
export class GeovExplorer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovExplorer extends Components.GeovExplorer {}


@ProxyCmp({
  inputs: ['_ssrId', 'sparqlEndpoint', 'sparqlQuery']
})
@Component({
  selector: 'geov-if',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['_ssrId', 'sparqlEndpoint', 'sparqlQuery'],
})
export class GeovIf {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovIf extends Components.GeovIf {}


@ProxyCmp({
  inputs: ['color', 'hidePageSize', 'length', 'pageIndex', 'pageSize', 'showFirstLastButtons']
})
@Component({
  selector: 'geov-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'hidePageSize', 'length', 'pageIndex', 'pageSize', 'showFirstLastButtons'],
})
export class GeovPaginator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageChanged']);
  }
}


import type { PageEvent as IGeovPaginatorPageEvent } from '@geovistory/design-system-web';

export declare interface GeovPaginator extends Components.GeovPaginator {

  pageChanged: EventEmitter<CustomEvent<IGeovPaginatorPageEvent>>;
}


@ProxyCmp({
  inputs: ['height', 'sparqlEndpoint', 'width']
})
@Component({
  selector: 'geov-property-distri',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'sparqlEndpoint', 'width'],
})
export class GeovPropertyDistri {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovPropertyDistri extends Components.GeovPropertyDistri {}


@ProxyCmp({
  inputs: ['indentPx']
})
@Component({
  selector: 'geov-toc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indentPx'],
})
export class GeovToc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovToc extends Components.GeovToc {}


@ProxyCmp({
  inputs: ['disabled', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})
@Component({
  selector: 'ion-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value'],
})
export class IonAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAccordion extends Components.IonAccordion {}


@ProxyCmp({
  inputs: ['animated', 'disabled', 'expand', 'multiple', 'readonly', 'value']
})
@Component({
  selector: 'ion-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'disabled', 'expand', 'multiple', 'readonly', 'value'],
})
export class IonAccordionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { AccordionGroupChangeEventDetail as IIonAccordionGroupAccordionGroupChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonAccordionGroup extends Components.IonAccordionGroup {
  /**
   * Emitted when the value property has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonAccordionGroupAccordionGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'subHeader', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-action-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'subHeader', 'translucent'],
})
export class IonActionSheet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionActionSheetDidPresent', 'ionActionSheetWillPresent', 'ionActionSheetWillDismiss', 'ionActionSheetDidDismiss']);
  }
}


import type { OverlayEventDetail as IIonActionSheetOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonActionSheet extends Components.IonActionSheet {
  /**
   * Emitted after the alert has presented.
   */
  ionActionSheetDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has presented.
   */
  ionActionSheetWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has dismissed.
   */
  ionActionSheetWillDismiss: EventEmitter<CustomEvent<IIonActionSheetOverlayEventDetail>>;
  /**
   * Emitted after the alert has dismissed.
   */
  ionActionSheetDidDismiss: EventEmitter<CustomEvent<IIonActionSheetOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'keyboardClose', 'leaveAnimation', 'message', 'subHeader', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'keyboardClose', 'leaveAnimation', 'message', 'subHeader', 'translucent'],
})
export class IonAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionAlertDidPresent', 'ionAlertWillPresent', 'ionAlertWillDismiss', 'ionAlertDidDismiss']);
  }
}


import type { OverlayEventDetail as IIonAlertOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonAlert extends Components.IonAlert {
  /**
   * Emitted after the alert has presented.
   */
  ionAlertDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has presented.
   */
  ionAlertWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the alert has dismissed.
   */
  ionAlertWillDismiss: EventEmitter<CustomEvent<IIonAlertOverlayEventDetail>>;
  /**
   * Emitted after the alert has dismissed.
   */
  ionAlertDidDismiss: EventEmitter<CustomEvent<IIonAlertOverlayEventDetail>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ion-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonApp extends Components.IonApp {}


@ProxyCmp({
})
@Component({
  selector: 'ion-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAvatar extends Components.IonAvatar {}


@ProxyCmp({
  inputs: ['color', 'defaultHref', 'disabled', 'icon', 'routerAnimation', 'text', 'type']
})
@Component({
  selector: 'ion-back-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'defaultHref', 'disabled', 'icon', 'routerAnimation', 'text', 'type'],
})
export class IonBackButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBackButton extends Components.IonBackButton {}


@ProxyCmp({
  inputs: ['stopPropagation', 'tappable', 'visible']
})
@Component({
  selector: 'ion-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['stopPropagation', 'tappable', 'visible'],
})
export class IonBackdrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionBackdropTap']);
  }
}


export declare interface IonBackdrop extends Components.IonBackdrop {
  /**
   * Emitted when the backdrop is tapped.
   */
  ionBackdropTap: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ion-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IonBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBadge extends Components.IonBadge {}


@ProxyCmp({
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})
@Component({
  selector: 'ion-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target'],
})
export class IonBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonBreadcrumb extends Components.IonBreadcrumb {
  /**
   * Emitted when the breadcrumb has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the breadcrumb loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems']
})
@Component({
  selector: 'ion-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems'],
})
export class IonBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCollapsedClick']);
  }
}


import type { BreadcrumbCollapsedClickEventDetail as IIonBreadcrumbsBreadcrumbCollapsedClickEventDetail } from '@geovistory/design-system-web';

export declare interface IonBreadcrumbs extends Components.IonBreadcrumbs {
  /**
   * Emitted when the collapsed indicator is clicked on.
   */
  ionCollapsedClick: EventEmitter<CustomEvent<IIonBreadcrumbsBreadcrumbCollapsedClickEventDetail>>;
}


@ProxyCmp({
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'ion-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type'],
})
export class IonButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonButton extends Components.IonButton {
  /**
   * Emitted when the button has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['collapse']
})
@Component({
  selector: 'ion-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse'],
})
export class IonButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonButtons extends Components.IonButtons {}


@ProxyCmp({
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
@Component({
  selector: 'ion-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type'],
})
export class IonCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCard extends Components.IonCard {}


@ProxyCmp({
})
@Component({
  selector: 'ion-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardContent extends Components.IonCardContent {}


@ProxyCmp({
  inputs: ['color', 'translucent']
})
@Component({
  selector: 'ion-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'translucent'],
})
export class IonCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardHeader extends Components.IonCardHeader {}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ion-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IonCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardSubtitle extends Components.IonCardSubtitle {}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ion-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IonCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardTitle extends Components.IonCardTitle {}


@ProxyCmp({
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'value']
})
@Component({
  selector: 'ion-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'value'],
})
export class IonCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { CheckboxChangeEventDetail as IIonCheckboxCheckboxChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonCheckbox extends Components.IonCheckbox {
  /**
   * Emitted when the checked property has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonCheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the checkbox has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'disabled', 'outline']
})
@Component({
  selector: 'ion-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'outline'],
})
export class IonChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonChip extends Components.IonChip {}


@ProxyCmp({
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'ion-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'],
})
export class IonCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCol extends Components.IonCol {}


@ProxyCmp({
  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
  methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']
})
@Component({
  selector: 'ion-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
})
export class IonContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
  }
}


import type { ScrollBaseDetail as IIonContentScrollBaseDetail } from '@geovistory/design-system-web';
import type { ScrollDetail as IIonContentScrollDetail } from '@geovistory/design-system-web';

export declare interface IonContent extends Components.IonContent {
  /**
   * Emitted when the scroll has started.
   */
  ionScrollStart: EventEmitter<CustomEvent<IIonContentScrollBaseDetail>>;
  /**
   * Emitted while scrolling. This event is disabled by default.
Look at the property: `scrollEvents`
   */
  ionScroll: EventEmitter<CustomEvent<IIonContentScrollDetail>>;
  /**
   * Emitted when the scroll has ended.
   */
  ionScrollEnd: EventEmitter<CustomEvent<IIonContentScrollBaseDetail>>;
}


@ProxyCmp({
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'hourCycle', 'hourValues', 'locale', 'max', 'min', 'minuteValues', 'monthValues', 'name', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'value', 'yearValues'],
  methods: ['confirm', 'reset', 'cancel']
})
@Component({
  selector: 'ion-datetime',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'hourCycle', 'hourValues', 'locale', 'max', 'min', 'minuteValues', 'monthValues', 'name', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'value', 'yearValues'],
})
export class IonDatetime {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { DatetimeChangeEventDetail as IIonDatetimeDatetimeChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonDatetime extends Components.IonDatetime {
  /**
   * Emitted when the datetime selection was cancelled.
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the value (selected date) has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonDatetimeDatetimeChangeEventDetail>>;
  /**
   * Emitted when the datetime has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the datetime loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
  methods: ['close']
})
@Component({
  selector: 'ion-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
})
export class IonFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFab extends Components.IonFab {}


@ProxyCmp({
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})
@Component({
  selector: 'ion-fab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type'],
})
export class IonFabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonFabButton extends Components.IonFabButton {
  /**
   * Emitted when the button has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['activated', 'side']
})
@Component({
  selector: 'ion-fab-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'side'],
})
export class IonFabList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFabList extends Components.IonFabList {}


@ProxyCmp({
  inputs: ['collapse', 'translucent']
})
@Component({
  selector: 'ion-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'translucent'],
})
export class IonFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFooter extends Components.IonFooter {}


@ProxyCmp({
  inputs: ['fixed']
})
@Component({
  selector: 'ion-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fixed'],
})
export class IonGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonGrid extends Components.IonGrid {}


@ProxyCmp({
  inputs: ['collapse', 'translucent']
})
@Component({
  selector: 'ion-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'translucent'],
})
export class IonHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonHeader extends Components.IonHeader {}


@ProxyCmp({
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
@Component({
  selector: 'ion-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src'],
})
export class IonIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonIcon extends Components.IonIcon {}


@ProxyCmp({
  inputs: ['alt', 'src']
})
@Component({
  selector: 'ion-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'src'],
})
export class IonImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
  }
}


export declare interface IonImg extends Components.IonImg {
  /**
   * Emitted when the img src has been set
   */
  ionImgWillLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the image has finished loading
   */
  ionImgDidLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the img fails to load
   */
  ionError: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'position', 'threshold'],
  methods: ['complete']
})
@Component({
  selector: 'ion-infinite-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'position', 'threshold'],
})
export class IonInfiniteScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInfinite']);
  }
}


export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
  /**
   * Emitted when the scroll reaches
the threshold distance. From within your infinite handler,
you must call the infinite scroll's `complete()` method when
your async operation has completed.
   */
  ionInfinite: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['loadingSpinner', 'loadingText']
})
@Component({
  selector: 'ion-infinite-scroll-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loadingSpinner', 'loadingText'],
})
export class IonInfiniteScrollContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {}


@ProxyCmp({
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
})
export class IonInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
  }
}


import type { InputChangeEventDetail as IIonInputInputChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonInput extends Components.IonInput {
  /**
   * Emitted when a keyboard input occurred.
   */
  ionInput: EventEmitter<CustomEvent<InputEvent>>;
  /**
   * Emitted when the value has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['button', 'color', 'counter', 'detail', 'detailIcon', 'disabled', 'download', 'fill', 'href', 'lines', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'target', 'type']
})
@Component({
  selector: 'ion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'color', 'counter', 'detail', 'detailIcon', 'disabled', 'download', 'fill', 'href', 'lines', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'target', 'type'],
})
export class IonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItem extends Components.IonItem {}


@ProxyCmp({
  inputs: ['color', 'sticky']
})
@Component({
  selector: 'ion-item-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'sticky'],
})
export class IonItemDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemDivider extends Components.IonItemDivider {}


@ProxyCmp({
})
@Component({
  selector: 'ion-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemGroup extends Components.IonItemGroup {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'rel', 'target', 'type']
})
@Component({
  selector: 'ion-item-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'rel', 'target', 'type'],
})
export class IonItemOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemOption extends Components.IonItemOption {}


@ProxyCmp({
  inputs: ['side']
})
@Component({
  selector: 'ion-item-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['side'],
})
export class IonItemOptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSwipe']);
  }
}


export declare interface IonItemOptions extends Components.IonItemOptions {
  /**
   * Emitted when the item has been fully swiped.
   */
  ionSwipe: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled'],
  methods: ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']
})
@Component({
  selector: 'ion-item-sliding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class IonItemSliding {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionDrag']);
  }
}


export declare interface IonItemSliding extends Components.IonItemSliding {
  /**
   * Emitted when the sliding position changes.
   */
  ionDrag: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'position']
})
@Component({
  selector: 'ion-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'position'],
})
export class IonLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonLabel extends Components.IonLabel {}


@ProxyCmp({
  inputs: ['inset', 'lines'],
  methods: ['closeSlidingItems']
})
@Component({
  selector: 'ion-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['inset', 'lines'],
})
export class IonList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonList extends Components.IonList {}


@ProxyCmp({
  inputs: ['color', 'lines']
})
@Component({
  selector: 'ion-list-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'lines'],
})
export class IonListHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonListHeader extends Components.IonListHeader {}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'message', 'showBackdrop', 'spinner', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'message', 'showBackdrop', 'spinner', 'translucent'],
})
export class IonLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionLoadingDidPresent', 'ionLoadingWillPresent', 'ionLoadingWillDismiss', 'ionLoadingDidDismiss']);
  }
}


import type { OverlayEventDetail as IIonLoadingOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonLoading extends Components.IonLoading {
  /**
   * Emitted after the loading has presented.
   */
  ionLoadingDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the loading has presented.
   */
  ionLoadingWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the loading has dismissed.
   */
  ionLoadingWillDismiss: EventEmitter<CustomEvent<IIonLoadingOverlayEventDetail>>;
  /**
   * Emitted after the loading has dismissed.
   */
  ionLoadingDidDismiss: EventEmitter<CustomEvent<IIonLoadingOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
  methods: ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']
})
@Component({
  selector: 'ion-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
})
export class IonMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
  }
}


export declare interface IonMenu extends Components.IonMenu {
  /**
   * Emitted when the menu is about to be opened.
   */
  ionWillOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the menu is about to be closed.
   */
  ionWillClose: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the menu is open.
   */
  ionDidOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the menu is closed.
   */
  ionDidClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'type']
})
@Component({
  selector: 'ion-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'type'],
})
export class IonMenuButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenuButton extends Components.IonMenuButton {}


@ProxyCmp({
  inputs: ['autoHide', 'menu']
})
@Component({
  selector: 'ion-menu-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoHide', 'menu'],
})
export class IonMenuToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenuToggle extends Components.IonMenuToggle {}


@ProxyCmp({
  inputs: ['animated', 'backdropBreakpoint', 'backdropDismiss', 'breakpoints', 'enterAnimation', 'handle', 'htmlAttributes', 'initialBreakpoint', 'isOpen', 'keyboardClose', 'leaveAnimation', 'presentingElement', 'showBackdrop', 'swipeToClose', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropBreakpoint', 'backdropDismiss', 'breakpoints', 'enterAnimation', 'handle', 'htmlAttributes', 'initialBreakpoint', 'isOpen', 'keyboardClose', 'leaveAnimation', 'presentingElement', 'showBackdrop', 'swipeToClose', 'trigger'],
})
export class IonModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionModalDidPresent', 'ionModalWillPresent', 'ionModalWillDismiss', 'ionModalDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonModalOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonModal extends Components.IonModal {
  /**
   * Emitted after the modal has presented.
   */
  ionModalDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the modal has presented.
   */
  ionModalWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the modal has dismissed.
   */
  ionModalWillDismiss: EventEmitter<CustomEvent<IIonModalOverlayEventDetail>>;
  /**
   * Emitted after the modal has dismissed.
   */
  ionModalDidDismiss: EventEmitter<CustomEvent<IIonModalOverlayEventDetail>>;
  /**
   * Emitted after the modal has presented.
Shorthand for ionModalWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the modal has presented.
Shorthand for ionModalWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the modal has dismissed.
Shorthand for ionModalWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonModalOverlayEventDetail>>;
  /**
   * Emitted after the modal has dismissed.
Shorthand for ionModalDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonModalOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'],
  methods: ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']
})
@Component({
  selector: 'ion-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'],
})
export class IonNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionNavWillChange', 'ionNavDidChange']);
  }
}


export declare interface IonNav extends Components.IonNav {
  /**
   * Event fired when the nav will change components
   */
  ionNavWillChange: EventEmitter<CustomEvent<void>>;
  /**
   * Event fired when the nav has changed components
   */
  ionNavDidChange: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})
@Component({
  selector: 'ion-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection'],
})
export class IonNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNavLink extends Components.IonNavLink {}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ion-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IonNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNote extends Components.IonNote {}


@ProxyCmp({
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'showBackdrop'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss', 'getColumn']
})
@Component({
  selector: 'ion-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'showBackdrop'],
})
export class IonPicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionPickerDidPresent', 'ionPickerWillPresent', 'ionPickerWillDismiss', 'ionPickerDidDismiss']);
  }
}


import type { OverlayEventDetail as IIonPickerOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonPicker extends Components.IonPicker {
  /**
   * Emitted after the picker has presented.
   */
  ionPickerDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the picker has presented.
   */
  ionPickerWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the picker has dismissed.
   */
  ionPickerWillDismiss: EventEmitter<CustomEvent<IIonPickerOverlayEventDetail>>;
  /**
   * Emitted after the picker has dismissed.
   */
  ionPickerDidDismiss: EventEmitter<CustomEvent<IIonPickerOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['col']
})
@Component({
  selector: 'ion-picker-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['col'],
})
export class IonPickerColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonPickerColumn extends Components.IonPickerColumn {}


@ProxyCmp({
  inputs: ['color', 'items', 'value']
})
@Component({
  selector: 'ion-picker-column-internal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'items', 'value'],
})
export class IonPickerColumnInternal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { PickerColumnItem as IIonPickerColumnInternalPickerColumnItem } from '@geovistory/design-system-web';

export declare interface IonPickerColumnInternal extends Components.IonPickerColumnInternal {
  /**
   * Emitted when the value has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonPickerColumnInternalPickerColumnItem>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ion-picker-internal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonPickerInternal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInputModeChange']);
  }
}


import type { PickerInternalChangeEventDetail as IIonPickerInternalPickerInternalChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonPickerInternal extends Components.IonPickerInternal {

  ionInputModeChange: EventEmitter<CustomEvent<IIonPickerInternalPickerInternalChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['alignment', 'animated', 'arrow', 'backdropDismiss', 'component', 'componentProps', 'dismissOnSelect', 'enterAnimation', 'event', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'reference', 'showBackdrop', 'side', 'size', 'translucent', 'trigger', 'triggerAction'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'animated', 'arrow', 'backdropDismiss', 'component', 'componentProps', 'dismissOnSelect', 'enterAnimation', 'event', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'reference', 'showBackdrop', 'side', 'size', 'translucent', 'trigger', 'triggerAction'],
})
export class IonPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionPopoverDidPresent', 'ionPopoverWillPresent', 'ionPopoverWillDismiss', 'ionPopoverDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


import type { OverlayEventDetail as IIonPopoverOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonPopover extends Components.IonPopover {
  /**
   * Emitted after the popover has presented.
   */
  ionPopoverDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has presented.
   */
  ionPopoverWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has dismissed.
   */
  ionPopoverWillDismiss: EventEmitter<CustomEvent<IIonPopoverOverlayEventDetail>>;
  /**
   * Emitted after the popover has dismissed.
   */
  ionPopoverDidDismiss: EventEmitter<CustomEvent<IIonPopoverOverlayEventDetail>>;
  /**
   * Emitted after the popover has presented.
Shorthand for ionPopoverWillDismiss.
   */
  didPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has presented.
Shorthand for ionPopoverWillPresent.
   */
  willPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has dismissed.
Shorthand for ionPopoverWillDismiss.
   */
  willDismiss: EventEmitter<CustomEvent<IIonPopoverOverlayEventDetail>>;
  /**
   * Emitted after the popover has dismissed.
Shorthand for ionPopoverDidDismiss.
   */
  didDismiss: EventEmitter<CustomEvent<IIonPopoverOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['buffer', 'color', 'reversed', 'type', 'value']
})
@Component({
  selector: 'ion-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buffer', 'color', 'reversed', 'type', 'value'],
})
export class IonProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonProgressBar extends Components.IonProgressBar {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ion-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'name', 'value'],
})
export class IonRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonRadio extends Components.IonRadio {
  /**
   * Emitted when the radio button has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio button loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['allowEmptySelection', 'name', 'value']
})
@Component({
  selector: 'ion-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowEmptySelection', 'name', 'value'],
})
export class IonRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { RadioGroupChangeEventDetail as IIonRadioGroupRadioGroupChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonRadioGroup extends Components.IonRadioGroup {
  /**
   * Emitted when the value has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonRadioGroupRadioGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})
@Component({
  selector: 'ion-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value'],
})
export class IonRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { RangeChangeEventDetail as IIonRangeRangeChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonRange extends Components.IonRange {
  /**
   * Emitted when the value property has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonRangeRangeChangeEventDetail>>;
  /**
   * Emitted when the range has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the range loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
  methods: ['complete', 'cancel', 'getProgress']
})
@Component({
  selector: 'ion-refresher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
})
export class IonRefresher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
  }
}


import type { RefresherEventDetail as IIonRefresherRefresherEventDetail } from '@geovistory/design-system-web';

export declare interface IonRefresher extends Components.IonRefresher {
  /**
   * Emitted when the user lets go of the content and has pulled down
further than the `pullMin` or pulls the content down and exceeds the pullMax.
Updates the refresher state to `refreshing`. The `complete()` method should be
called when the async operation has completed.
   */
  ionRefresh: EventEmitter<CustomEvent<IIonRefresherRefresherEventDetail>>;
  /**
   * Emitted while the user is pulling down the content and exposing the refresher.
   */
  ionPull: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user begins to start pulling down.
   */
  ionStart: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})
@Component({
  selector: 'ion-refresher-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'],
})
export class IonRefresherContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRefresherContent extends Components.IonRefresherContent {}


@ProxyCmp({
})
@Component({
  selector: 'ion-reorder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonReorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonReorder extends Components.IonReorder {}


@ProxyCmp({
  inputs: ['disabled'],
  methods: ['complete']
})
@Component({
  selector: 'ion-reorder-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class IonReorderGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionItemReorder']);
  }
}


import type { ItemReorderEventDetail as IIonReorderGroupItemReorderEventDetail } from '@geovistory/design-system-web';

export declare interface IonReorderGroup extends Components.IonReorderGroup {
  /**
   * Event that needs to be listened to in order to complete the reorder action.
Once the event has been emitted, the `complete()` method then needs
to be called in order to finalize the reorder action.
   */
  ionItemReorder: EventEmitter<CustomEvent<IIonReorderGroupItemReorderEventDetail>>;
}


@ProxyCmp({
  inputs: ['type'],
  methods: ['addRipple']
})
@Component({
  selector: 'ion-ripple-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class IonRippleEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRippleEffect extends Components.IonRippleEffect {}


@ProxyCmp({
  inputs: ['beforeEnter', 'beforeLeave', 'component', 'componentProps', 'url']
})
@Component({
  selector: 'ion-route',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['beforeEnter', 'beforeLeave', 'component', 'componentProps', 'url'],
})
export class IonRoute {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRouteDataChanged']);
  }
}


export declare interface IonRoute extends Components.IonRoute {
  /**
   * Used internally by `ion-router` to know when this route did change.
   */
  ionRouteDataChanged: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['from', 'to']
})
@Component({
  selector: 'ion-route-redirect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['from', 'to'],
})
export class IonRouteRedirect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRouteRedirectChanged']);
  }
}


export declare interface IonRouteRedirect extends Components.IonRouteRedirect {
  /**
   * Internal event that fires when any value of this rule is added/removed from the DOM,
or any of his public properties changes.

`ion-router` captures this event in order to update his internal registry of router rules.
   */
  ionRouteRedirectChanged: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['root', 'useHash'],
  methods: ['push', 'back']
})
@Component({
  selector: 'ion-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['root', 'useHash'],
})
export class IonRouter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRouteWillChange', 'ionRouteDidChange']);
  }
}


import type { RouterEventDetail as IIonRouterRouterEventDetail } from '@geovistory/design-system-web';

export declare interface IonRouter extends Components.IonRouter {
  /**
   * Event emitted when the route is about to change
   */
  ionRouteWillChange: EventEmitter<CustomEvent<IIonRouterRouterEventDetail>>;
  /**
   * Emitted when the route had changed
   */
  ionRouteDidChange: EventEmitter<CustomEvent<IIonRouterRouterEventDetail>>;
}


@ProxyCmp({
  inputs: ['color', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target']
})
@Component({
  selector: 'ion-router-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target'],
})
export class IonRouterLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRouterLink extends Components.IonRouterLink {}


@ProxyCmp({
  inputs: ['animated', 'animation', 'mode']
})
@Component({
  selector: 'ion-router-outlet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'animation', 'mode'],
})
export class IonRouterOutlet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRouterOutlet extends Components.IonRouterOutlet {}


@ProxyCmp({
})
@Component({
  selector: 'ion-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRow extends Components.IonRow {}


@ProxyCmp({
  inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
})
export class IonSearchbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
  }
}


import type { SearchbarChangeEventDetail as IIonSearchbarSearchbarChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonSearchbar extends Components.IonSearchbar {
  /**
   * Emitted when a keyboard input occurred.
   */
  ionInput: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonSearchbarSearchbarChangeEventDetail>>;
  /**
   * Emitted when the cancel button is clicked.
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the clear input button is clicked.
   */
  ionClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'disabled', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})
@Component({
  selector: 'ion-segment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value'],
})
export class IonSegment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


import type { SegmentChangeEventDetail as IIonSegmentSegmentChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonSegment extends Components.IonSegment {
  /**
   * Emitted when the value property has changed and any
dragging pointer has been released from `ion-segment`.
   */
  ionChange: EventEmitter<CustomEvent<IIonSegmentSegmentChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['disabled', 'layout', 'type', 'value']
})
@Component({
  selector: 'ion-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'layout', 'type', 'value'],
})
export class IonSegmentButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSegmentButton extends Components.IonSegmentButton {}


@ProxyCmp({
  inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'],
  methods: ['open']
})
@Component({
  selector: 'ion-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'],
})
export class IonSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionFocus', 'ionBlur']);
  }
}


import type { SelectChangeEventDetail as IIonSelectSelectChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonSelect extends Components.IonSelect {
  /**
   * Emitted when the value has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonSelectSelectChangeEventDetail>>;
  /**
   * Emitted when the selection is cancelled.
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ion-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'value'],
})
export class IonSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSelectOption extends Components.IonSelectOption {}


@ProxyCmp({
  inputs: ['header', 'message', 'multiple', 'options', 'subHeader']
})
@Component({
  selector: 'ion-select-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['header', 'message', 'multiple', 'options', 'subHeader'],
})
export class IonSelectPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSelectPopover extends Components.IonSelectPopover {}


@ProxyCmp({
  inputs: ['animated']
})
@Component({
  selector: 'ion-skeleton-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated'],
})
export class IonSkeletonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSkeletonText extends Components.IonSkeletonText {}


@ProxyCmp({
})
@Component({
  selector: 'ion-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSlide extends Components.IonSlide {}


@ProxyCmp({
  inputs: ['options', 'pager', 'scrollbar'],
  methods: ['update', 'updateAutoHeight', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes', 'getSwiper']
})
@Component({
  selector: 'ion-slides',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['options', 'pager', 'scrollbar'],
})
export class IonSlides {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
  }
}


export declare interface IonSlides extends Components.IonSlides {
  /**
   * Emitted after Swiper initialization
   */
  ionSlidesDidLoad: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user taps/clicks on the slide's container.
   */
  ionSlideTap: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user double taps on the slide's container.
   */
  ionSlideDoubleTap: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the active slide has changed.
   */
  ionSlideWillChange: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted after the active slide has changed.
   */
  ionSlideDidChange: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the next slide has started.
   */
  ionSlideNextStart: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the previous slide has started.
   */
  ionSlidePrevStart: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the next slide has ended.
   */
  ionSlideNextEnd: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the previous slide has ended.
   */
  ionSlidePrevEnd: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the slide transition has started.
   */
  ionSlideTransitionStart: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the slide transition has ended.
   */
  ionSlideTransitionEnd: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the slider is actively being moved.
   */
  ionSlideDrag: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the slider is at its initial position.
   */
  ionSlideReachStart: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the slider is at the last slide.
   */
  ionSlideReachEnd: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user first touches the slider.
   */
  ionSlideTouchStart: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user releases the touch.
   */
  ionSlideTouchEnd: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'duration', 'name', 'paused']
})
@Component({
  selector: 'ion-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'duration', 'name', 'paused'],
})
export class IonSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSpinner extends Components.IonSpinner {}


@ProxyCmp({
  inputs: ['contentId', 'disabled', 'when']
})
@Component({
  selector: 'ion-split-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentId', 'disabled', 'when'],
})
export class IonSplitPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
  }
}


export declare interface IonSplitPane extends Components.IonSplitPane {
  /**
   * Expression to be called when the split-pane visibility has changed
   */
  ionSplitPaneVisible: EventEmitter<CustomEvent<{visible: boolean}>>;
}


@ProxyCmp({
  inputs: ['component', 'tab'],
  methods: ['setActive']
})
@Component({
  selector: 'ion-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['component', 'tab'],
})
export class IonTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTab extends Components.IonTab {}


@ProxyCmp({
  inputs: ['color', 'selectedTab', 'translucent']
})
@Component({
  selector: 'ion-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'selectedTab', 'translucent'],
})
export class IonTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabBar extends Components.IonTabBar {}


@ProxyCmp({
  inputs: ['disabled', 'download', 'href', 'layout', 'rel', 'selected', 'tab', 'target']
})
@Component({
  selector: 'ion-tab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'download', 'href', 'layout', 'rel', 'selected', 'tab', 'target'],
})
export class IonTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabButton extends Components.IonTabButton {}


@ProxyCmp({
  methods: ['select', 'getTab', 'getSelected']
})
@Component({
  selector: 'ion-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionTabsWillChange', 'ionTabsDidChange']);
  }
}


export declare interface IonTabs extends Components.IonTabs {
  /**
   * Emitted when the navigation is about to transition to a new component.
   */
  ionTabsWillChange: EventEmitter<CustomEvent<{tab: string}>>;
  /**
   * Emitted when the navigation has finished transitioning to a new component.
   */
  ionTabsDidChange: EventEmitter<CustomEvent<{tab: string}>>;
}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ion-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonText extends Components.IonText {}


@ProxyCmp({
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'],
})
export class IonTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
  }
}


import type { TextareaChangeEventDetail as IIonTextareaTextareaChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonTextarea extends Components.IonTextarea {
  /**
   * Emitted when the input value has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonTextareaTextareaChangeEventDetail>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  ionInput: EventEmitter<CustomEvent<InputEvent>>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ion-thumbnail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IonThumbnail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonThumbnail extends Components.IonThumbnail {}


@ProxyCmp({
  inputs: ['color', 'size']
})
@Component({
  selector: 'ion-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size'],
})
export class IonTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTitle extends Components.IonTitle {}


@ProxyCmp({
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'keyboardClose', 'leaveAnimation', 'message', 'position', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'keyboardClose', 'leaveAnimation', 'message', 'position', 'translucent'],
})
export class IonToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionToastDidPresent', 'ionToastWillPresent', 'ionToastWillDismiss', 'ionToastDidDismiss']);
  }
}


import type { OverlayEventDetail as IIonToastOverlayEventDetail } from '@geovistory/design-system-web';

export declare interface IonToast extends Components.IonToast {
  /**
   * Emitted after the toast has presented.
   */
  ionToastDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the toast has presented.
   */
  ionToastWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the toast has dismissed.
   */
  ionToastWillDismiss: EventEmitter<CustomEvent<IIonToastOverlayEventDetail>>;
  /**
   * Emitted after the toast has dismissed.
   */
  ionToastDidDismiss: EventEmitter<CustomEvent<IIonToastOverlayEventDetail>>;
}


@ProxyCmp({
  inputs: ['checked', 'color', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ion-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'color', 'disabled', 'name', 'value'],
})
export class IonToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


import type { ToggleChangeEventDetail as IIonToggleToggleChangeEventDetail } from '@geovistory/design-system-web';

export declare interface IonToggle extends Components.IonToggle {
  /**
   * Emitted when the value property has changed.
   */
  ionChange: EventEmitter<CustomEvent<IIonToggleToggleChangeEventDetail>>;
  /**
   * Emitted when the toggle has focus.
   */
  ionFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the toggle loses focus.
   */
  ionBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'ion-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class IonToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonToolbar extends Components.IonToolbar {}


@ProxyCmp({
  inputs: ['approxFooterHeight', 'approxHeaderHeight', 'approxItemHeight', 'footerFn', 'footerHeight', 'headerFn', 'headerHeight', 'itemHeight', 'items', 'nodeRender', 'renderFooter', 'renderHeader', 'renderItem'],
  methods: ['positionForItem', 'checkRange', 'checkEnd']
})
@Component({
  selector: 'ion-virtual-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['approxFooterHeight', 'approxHeaderHeight', 'approxItemHeight', 'footerFn', 'footerHeight', 'headerFn', 'headerHeight', 'itemHeight', 'items', 'nodeRender', 'renderFooter', 'renderHeader', 'renderItem'],
})
export class IonVirtualScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonVirtualScroll extends Components.IonVirtualScroll {}


