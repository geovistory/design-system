/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@geovistory/design-system-web';




export declare interface GeovCarousel extends Components.GeovCarousel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['images']
})
@Component({
  selector: 'geov-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['images']
})
export class GeovCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { GeovClassRadioGroupEvent as IGeovClassRadioGroupGeovClassRadioGroupEvent } from '@geovistory/design-system-web';
export declare interface GeovClassRadioGroup extends Components.GeovClassRadioGroup {
  /**
   *  
   */
  selectionChanged: EventEmitter<CustomEvent<IGeovClassRadioGroupGeovClassRadioGroupEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initValue', 'items', 'loading']
})
@Component({
  selector: 'geov-class-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initValue', 'items', 'loading']
})
export class GeovClassRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}

import type { ClassSelectEvent as IGeovClassSelectClassSelectEvent } from '@geovistory/design-system-web';
export declare interface GeovClassSelect extends Components.GeovClassSelect {
  /**
   *  
   */
  selectionChanged: EventEmitter<CustomEvent<IGeovClassSelectClassSelectEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checkedOnInit', 'items', 'loading']
})
@Component({
  selector: 'geov-class-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checkedOnInit', 'items', 'loading']
})
export class GeovClassSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}

import type { GeovClassSelectPopupEvent as IGeovClassSelectPopupGeovClassSelectPopupEvent } from '@geovistory/design-system-web';
export declare interface GeovClassSelectPopup extends Components.GeovClassSelectPopup {
  /**
   *  
   */
  selectionChanged: EventEmitter<CustomEvent<IGeovClassSelectPopupGeovClassSelectPopupEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initValue', 'items']
})
@Component({
  selector: 'geov-class-select-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initValue', 'items']
})
export class GeovClassSelectPopup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}


export declare interface GeovCode extends Components.GeovCode {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['code', 'copyButton', 'language']
})
@Component({
  selector: 'geov-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['code', 'copyButton', 'language']
})
export class GeovCode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovDataFetchExample extends Components.GeovDataFetchExample {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint'],
  methods: ['fetchData']
})
@Component({
  selector: 'geov-data-fetch-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
export class GeovDataFetchExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovDisplayGeosparqlWktliteral extends Components.GeovDisplayGeosparqlWktliteral {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['value']
})
@Component({
  selector: 'geov-display-geosparql-wktliteral',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class GeovDisplayGeosparqlWktliteral {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovDisplayTimeDatetimedescription extends Components.GeovDisplayTimeDatetimedescription {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-display-time-datetimedescription',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['entityId', 'sparqlEndpoint']
})
export class GeovDisplayTimeDatetimedescription {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityClassLabel extends Components.GeovEntityClassLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-entity-class-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
export class GeovEntityClassLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityDefinition extends Components.GeovEntityDefinition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-entity-definition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
export class GeovEntityDefinition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityLabel extends Components.GeovEntityLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
@Component({
  selector: 'geov-entity-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_ssrId', 'entityId', 'sparqlEndpoint']
})
export class GeovEntityLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityList extends Components.GeovEntityList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['defaultPageSize', 'items', 'loading', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-entity-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['defaultPageSize', 'items', 'loading', 'uriRegex', 'uriReplace']
})
export class GeovEntityList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovEntityProperties extends Components.GeovEntityProperties {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['entityId', 'fetchBeforeRender', 'language', 'sparqlEndpoint', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-entity-properties',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['entityId', 'fetchBeforeRender', 'language', 'sparqlEndpoint', 'uriRegex', 'uriReplace']
})
export class GeovEntityProperties {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['entityId', 'isOutgoing', 'language', 'pageSize', 'predicateLabel', 'predicateUri', 'sparqlEndpoint', 'totalCount', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-entity-props-by-predicate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['entityId', 'isOutgoing', 'language', 'pageSize', 'predicateLabel', 'predicateUri', 'sparqlEndpoint', 'totalCount', 'uriRegex', 'uriReplace']
})
export class GeovEntityPropsByPredicate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageChanged']);
  }
}


export declare interface GeovExplorer extends Components.GeovExplorer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['_ssrId', 'fetchBeforeRender', 'initSearchString', 'sparqlEndpoint', 'uriRegex', 'uriReplace']
})
@Component({
  selector: 'geov-explorer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_ssrId', 'fetchBeforeRender', 'initSearchString', 'sparqlEndpoint', 'uriRegex', 'uriReplace']
})
export class GeovExplorer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GeovIf extends Components.GeovIf {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['_ssrId', 'sparqlEndpoint', 'sparqlQuery']
})
@Component({
  selector: 'geov-if',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_ssrId', 'sparqlEndpoint', 'sparqlQuery']
})
export class GeovIf {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { PageEvent as IGeovPaginatorPageEvent } from '@geovistory/design-system-web';
export declare interface GeovPaginator extends Components.GeovPaginator {
  /**
   *  
   */
  pageChanged: EventEmitter<CustomEvent<IGeovPaginatorPageEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hidePageSize', 'length', 'pageIndex', 'pageSize', 'showFirstLastButtons']
})
@Component({
  selector: 'geov-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hidePageSize', 'length', 'pageIndex', 'pageSize', 'showFirstLastButtons']
})
export class GeovPaginator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageChanged']);
  }
}


export declare interface GeovToc extends Components.GeovToc {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['indentPx']
})
@Component({
  selector: 'geov-toc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['indentPx']
})
export class GeovToc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAccordion extends Components.IonAccordion {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})
@Component({
  selector: 'ion-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})
export class IonAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { AccordionGroupChangeEventDetail as IAccordionGroupAccordionGroupChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonAccordionGroup extends Components.IonAccordionGroup {
  /**
   * Emitted when the value property has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IAccordionGroupAccordionGroupChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'disabled', 'expand', 'multiple', 'readonly', 'value']
})
@Component({
  selector: 'ion-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'disabled', 'expand', 'multiple', 'readonly', 'value']
})
export class IonAccordionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}

import type { OverlayEventDetail as IActionSheetOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionActionSheetWillDismiss: EventEmitter<CustomEvent<IActionSheetOverlayEventDetail>>;
  /**
   * Emitted after the alert has dismissed. 
   */
  ionActionSheetDidDismiss: EventEmitter<CustomEvent<IActionSheetOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'subHeader', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-action-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'subHeader', 'translucent']
})
export class IonActionSheet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionActionSheetDidPresent', 'ionActionSheetWillPresent', 'ionActionSheetWillDismiss', 'ionActionSheetDidDismiss']);
  }
}

import type { OverlayEventDetail as IAlertOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionAlertWillDismiss: EventEmitter<CustomEvent<IAlertOverlayEventDetail>>;
  /**
   * Emitted after the alert has dismissed. 
   */
  ionAlertDidDismiss: EventEmitter<CustomEvent<IAlertOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'keyboardClose', 'leaveAnimation', 'message', 'subHeader', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'keyboardClose', 'leaveAnimation', 'message', 'subHeader', 'translucent']
})
export class IonAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionAlertDidPresent', 'ionAlertWillPresent', 'ionAlertWillDismiss', 'ionAlertDidDismiss']);
  }
}


export declare interface IonApp extends Components.IonApp {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAvatar extends Components.IonAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBackButton extends Components.IonBackButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'defaultHref', 'disabled', 'icon', 'routerAnimation', 'text', 'type']
})
@Component({
  selector: 'ion-back-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'defaultHref', 'disabled', 'icon', 'routerAnimation', 'text', 'type']
})
export class IonBackButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBackdrop extends Components.IonBackdrop {
  /**
   * Emitted when the backdrop is tapped. 
   */
  ionBackdropTap: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['stopPropagation', 'tappable', 'visible']
})
@Component({
  selector: 'ion-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['stopPropagation', 'tappable', 'visible']
})
export class IonBackdrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionBackdropTap']);
  }
}


export declare interface IonBadge extends Components.IonBadge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ion-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class IonBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})
@Component({
  selector: 'ion-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})
export class IonBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}

import type { BreadcrumbCollapsedClickEventDetail as IBreadcrumbsBreadcrumbCollapsedClickEventDetail } from '@geovistory/design-system-web';
export declare interface IonBreadcrumbs extends Components.IonBreadcrumbs {
  /**
   * Emitted when the collapsed indicator is clicked on. 
   */
  ionCollapsedClick: EventEmitter<CustomEvent<IBreadcrumbsBreadcrumbCollapsedClickEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems']
})
@Component({
  selector: 'ion-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems']
})
export class IonBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCollapsedClick']);
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
  defineCustomElementFn: undefined,
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'ion-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
export class IonButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonButtons extends Components.IonButtons {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse']
})
@Component({
  selector: 'ion-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse']
})
export class IonButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCard extends Components.IonCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
@Component({
  selector: 'ion-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
export class IonCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardContent extends Components.IonCardContent {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardHeader extends Components.IonCardHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'translucent']
})
@Component({
  selector: 'ion-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'translucent']
})
export class IonCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardSubtitle extends Components.IonCardSubtitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ion-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class IonCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardTitle extends Components.IonCardTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ion-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class IonCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { CheckboxChangeEventDetail as ICheckboxCheckboxChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonCheckbox extends Components.IonCheckbox {
  /**
   * Emitted when the checked property has changed. 
   */
  ionChange: EventEmitter<CustomEvent<ICheckboxCheckboxChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'value']
})
@Component({
  selector: 'ion-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'name', 'value']
})
export class IonCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonChip extends Components.IonChip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'outline']
})
@Component({
  selector: 'ion-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'outline']
})
export class IonChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCol extends Components.IonCol {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'ion-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
export class IonCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ScrollBaseDetail as IContentScrollBaseDetail } from '@geovistory/design-system-web';
import type { ScrollDetail as IContentScrollDetail } from '@geovistory/design-system-web';
export declare interface IonContent extends Components.IonContent {
  /**
   * Emitted when the scroll has started. 
   */
  ionScrollStart: EventEmitter<CustomEvent<IContentScrollBaseDetail>>;
  /**
   * Emitted while scrolling. This event is disabled by default.
Look at the property: `scrollEvents` 
   */
  ionScroll: EventEmitter<CustomEvent<IContentScrollDetail>>;
  /**
   * Emitted when the scroll has ended. 
   */
  ionScrollEnd: EventEmitter<CustomEvent<IContentScrollBaseDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
  methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']
})
@Component({
  selector: 'ion-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']
})
export class IonContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
  }
}

import type { DatetimeChangeEventDetail as IDatetimeDatetimeChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonDatetime extends Components.IonDatetime {
  /**
   * Emitted when the datetime selection was cancelled. 
   */
  ionCancel: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the value (selected date) has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IDatetimeDatetimeChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'hourCycle', 'hourValues', 'locale', 'max', 'min', 'minuteValues', 'monthValues', 'name', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'value', 'yearValues'],
  methods: ['confirm', 'reset', 'cancel']
})
@Component({
  selector: 'ion-datetime',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'hourCycle', 'hourValues', 'locale', 'max', 'min', 'minuteValues', 'monthValues', 'name', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'value', 'yearValues']
})
export class IonDatetime {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonFab extends Components.IonFab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
  methods: ['close']
})
@Component({
  selector: 'ion-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'edge', 'horizontal', 'vertical']
})
export class IonFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})
@Component({
  selector: 'ion-fab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})
export class IonFabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonFabList extends Components.IonFabList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'side']
})
@Component({
  selector: 'ion-fab-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'side']
})
export class IonFabList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFooter extends Components.IonFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse', 'translucent']
})
@Component({
  selector: 'ion-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse', 'translucent']
})
export class IonFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonGrid extends Components.IonGrid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fixed']
})
@Component({
  selector: 'ion-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fixed']
})
export class IonGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonHeader extends Components.IonHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse', 'translucent']
})
@Component({
  selector: 'ion-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse', 'translucent']
})
export class IonHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonIcon extends Components.IonIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
@Component({
  selector: 'ion-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
export class IonIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['alt', 'src']
})
@Component({
  selector: 'ion-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'src']
})
export class IonImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
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
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'position', 'threshold'],
  methods: ['complete']
})
@Component({
  selector: 'ion-infinite-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'position', 'threshold']
})
export class IonInfiniteScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInfinite']);
  }
}


export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['loadingSpinner', 'loadingText']
})
@Component({
  selector: 'ion-infinite-scroll-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['loadingSpinner', 'loadingText']
})
export class IonInfiniteScrollContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { InputChangeEventDetail as IInputInputChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonInput extends Components.IonInput {
  /**
   * Emitted when a keyboard input occurred. 
   */
  ionInput: EventEmitter<CustomEvent<InputEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IInputInputChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']
})
export class IonInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
  }
}


export declare interface IonItem extends Components.IonItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['button', 'color', 'counter', 'detail', 'detailIcon', 'disabled', 'download', 'fill', 'href', 'lines', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'target', 'type']
})
@Component({
  selector: 'ion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['button', 'color', 'counter', 'detail', 'detailIcon', 'disabled', 'download', 'fill', 'href', 'lines', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'target', 'type']
})
export class IonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemDivider extends Components.IonItemDivider {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'sticky']
})
@Component({
  selector: 'ion-item-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'sticky']
})
export class IonItemDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemGroup extends Components.IonItemGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemOption extends Components.IonItemOption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'rel', 'target', 'type']
})
@Component({
  selector: 'ion-item-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'rel', 'target', 'type']
})
export class IonItemOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemOptions extends Components.IonItemOptions {
  /**
   * Emitted when the item has been fully swiped. 
   */
  ionSwipe: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['side']
})
@Component({
  selector: 'ion-item-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['side']
})
export class IonItemOptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSwipe']);
  }
}


export declare interface IonItemSliding extends Components.IonItemSliding {
  /**
   * Emitted when the sliding position changes. 
   */
  ionDrag: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled'],
  methods: ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']
})
@Component({
  selector: 'ion-item-sliding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class IonItemSliding {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionDrag']);
  }
}


export declare interface IonLabel extends Components.IonLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'position']
})
@Component({
  selector: 'ion-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'position']
})
export class IonLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonList extends Components.IonList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['inset', 'lines'],
  methods: ['closeSlidingItems']
})
@Component({
  selector: 'ion-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inset', 'lines']
})
export class IonList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonListHeader extends Components.IonListHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'lines']
})
@Component({
  selector: 'ion-list-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'lines']
})
export class IonListHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { OverlayEventDetail as ILoadingOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionLoadingWillDismiss: EventEmitter<CustomEvent<ILoadingOverlayEventDetail>>;
  /**
   * Emitted after the loading has dismissed. 
   */
  ionLoadingDidDismiss: EventEmitter<CustomEvent<ILoadingOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'message', 'showBackdrop', 'spinner', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'message', 'showBackdrop', 'spinner', 'translucent']
})
export class IonLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionLoadingDidPresent', 'ionLoadingWillPresent', 'ionLoadingWillDismiss', 'ionLoadingDidDismiss']);
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
  defineCustomElementFn: undefined,
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
  methods: ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']
})
@Component({
  selector: 'ion-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type']
})
export class IonMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
  }
}


export declare interface IonMenuButton extends Components.IonMenuButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'type']
})
@Component({
  selector: 'ion-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'type']
})
export class IonMenuButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenuToggle extends Components.IonMenuToggle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoHide', 'menu']
})
@Component({
  selector: 'ion-menu-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoHide', 'menu']
})
export class IonMenuToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { OverlayEventDetail as IModalOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionModalWillDismiss: EventEmitter<CustomEvent<IModalOverlayEventDetail>>;
  /**
   * Emitted after the modal has dismissed. 
   */
  ionModalDidDismiss: EventEmitter<CustomEvent<IModalOverlayEventDetail>>;
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
  willDismiss: EventEmitter<CustomEvent<IModalOverlayEventDetail>>;
  /**
   * Emitted after the modal has dismissed.
Shorthand for ionModalDidDismiss. 
   */
  didDismiss: EventEmitter<CustomEvent<IModalOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'backdropBreakpoint', 'backdropDismiss', 'breakpoints', 'enterAnimation', 'handle', 'htmlAttributes', 'initialBreakpoint', 'isOpen', 'keyboardClose', 'leaveAnimation', 'presentingElement', 'showBackdrop', 'swipeToClose', 'trigger'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'backdropBreakpoint', 'backdropDismiss', 'breakpoints', 'enterAnimation', 'handle', 'htmlAttributes', 'initialBreakpoint', 'isOpen', 'keyboardClose', 'leaveAnimation', 'presentingElement', 'showBackdrop', 'swipeToClose', 'trigger']
})
export class IonModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionModalDidPresent', 'ionModalWillPresent', 'ionModalWillDismiss', 'ionModalDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
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
  defineCustomElementFn: undefined,
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'],
  methods: ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']
})
@Component({
  selector: 'ion-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture']
})
export class IonNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionNavWillChange', 'ionNavDidChange']);
  }
}


export declare interface IonNavLink extends Components.IonNavLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})
@Component({
  selector: 'ion-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})
export class IonNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNote extends Components.IonNote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ion-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class IonNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { OverlayEventDetail as IPickerOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionPickerWillDismiss: EventEmitter<CustomEvent<IPickerOverlayEventDetail>>;
  /**
   * Emitted after the picker has dismissed. 
   */
  ionPickerDidDismiss: EventEmitter<CustomEvent<IPickerOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'showBackdrop'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss', 'getColumn']
})
@Component({
  selector: 'ion-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'keyboardClose', 'leaveAnimation', 'showBackdrop']
})
export class IonPicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionPickerDidPresent', 'ionPickerWillPresent', 'ionPickerWillDismiss', 'ionPickerDidDismiss']);
  }
}


export declare interface IonPickerColumn extends Components.IonPickerColumn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['col']
})
@Component({
  selector: 'ion-picker-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['col']
})
export class IonPickerColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { PickerColumnItem as IPickerColumnInternalPickerColumnItem } from '@geovistory/design-system-web';
export declare interface IonPickerColumnInternal extends Components.IonPickerColumnInternal {
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IPickerColumnInternalPickerColumnItem>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'items', 'value']
})
@Component({
  selector: 'ion-picker-column-internal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'items', 'value']
})
export class IonPickerColumnInternal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}

import type { PickerInternalChangeEventDetail as IPickerInternalPickerInternalChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonPickerInternal extends Components.IonPickerInternal {
  /**
   *  
   */
  ionInputModeChange: EventEmitter<CustomEvent<IPickerInternalPickerInternalChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-picker-internal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonPickerInternal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInputModeChange']);
  }
}

import type { OverlayEventDetail as IPopoverOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionPopoverWillDismiss: EventEmitter<CustomEvent<IPopoverOverlayEventDetail>>;
  /**
   * Emitted after the popover has dismissed. 
   */
  ionPopoverDidDismiss: EventEmitter<CustomEvent<IPopoverOverlayEventDetail>>;
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
  willDismiss: EventEmitter<CustomEvent<IPopoverOverlayEventDetail>>;
  /**
   * Emitted after the popover has dismissed.
Shorthand for ionPopoverDidDismiss. 
   */
  didDismiss: EventEmitter<CustomEvent<IPopoverOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alignment', 'animated', 'arrow', 'backdropDismiss', 'component', 'componentProps', 'dismissOnSelect', 'enterAnimation', 'event', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'reference', 'showBackdrop', 'side', 'size', 'translucent', 'trigger', 'triggerAction'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignment', 'animated', 'arrow', 'backdropDismiss', 'component', 'componentProps', 'dismissOnSelect', 'enterAnimation', 'event', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'reference', 'showBackdrop', 'side', 'size', 'translucent', 'trigger', 'triggerAction']
})
export class IonPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionPopoverDidPresent', 'ionPopoverWillPresent', 'ionPopoverWillDismiss', 'ionPopoverDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
  }
}


export declare interface IonProgressBar extends Components.IonProgressBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['buffer', 'color', 'reversed', 'type', 'value']
})
@Component({
  selector: 'ion-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buffer', 'color', 'reversed', 'type', 'value']
})
export class IonProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ion-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'name', 'value']
})
export class IonRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}

import type { RadioGroupChangeEventDetail as IRadioGroupRadioGroupChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonRadioGroup extends Components.IonRadioGroup {
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IRadioGroupRadioGroupChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowEmptySelection', 'name', 'value']
})
@Component({
  selector: 'ion-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmptySelection', 'name', 'value']
})
export class IonRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}

import type { RangeChangeEventDetail as IRangeRangeChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonRange extends Components.IonRange {
  /**
   * Emitted when the value property has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IRangeRangeChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})
@Component({
  selector: 'ion-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})
export class IonRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}

import type { RefresherEventDetail as IRefresherRefresherEventDetail } from '@geovistory/design-system-web';
export declare interface IonRefresher extends Components.IonRefresher {
  /**
   * Emitted when the user lets go of the content and has pulled down
further than the `pullMin` or pulls the content down and exceeds the pullMax.
Updates the refresher state to `refreshing`. The `complete()` method should be
called when the async operation has completed. 
   */
  ionRefresh: EventEmitter<CustomEvent<IRefresherRefresherEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
  methods: ['complete', 'cancel', 'getProgress']
})
@Component({
  selector: 'ion-refresher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration']
})
export class IonRefresher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
  }
}


export declare interface IonRefresherContent extends Components.IonRefresherContent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})
@Component({
  selector: 'ion-refresher-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})
export class IonRefresherContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonReorder extends Components.IonReorder {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-reorder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonReorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ItemReorderEventDetail as IReorderGroupItemReorderEventDetail } from '@geovistory/design-system-web';
export declare interface IonReorderGroup extends Components.IonReorderGroup {
  /**
   * Event that needs to be listened to in order to complete the reorder action.
Once the event has been emitted, the `complete()` method then needs
to be called in order to finalize the reorder action. 
   */
  ionItemReorder: EventEmitter<CustomEvent<IReorderGroupItemReorderEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled'],
  methods: ['complete']
})
@Component({
  selector: 'ion-reorder-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class IonReorderGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionItemReorder']);
  }
}


export declare interface IonRippleEffect extends Components.IonRippleEffect {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['type'],
  methods: ['addRipple']
})
@Component({
  selector: 'ion-ripple-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['type']
})
export class IonRippleEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRoute extends Components.IonRoute {
  /**
   * Used internally by `ion-router` to know when this route did change. 
   */
  ionRouteDataChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['beforeEnter', 'beforeLeave', 'component', 'componentProps', 'url']
})
@Component({
  selector: 'ion-route',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['beforeEnter', 'beforeLeave', 'component', 'componentProps', 'url']
})
export class IonRoute {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRouteDataChanged']);
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
  defineCustomElementFn: undefined,
  inputs: ['from', 'to']
})
@Component({
  selector: 'ion-route-redirect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['from', 'to']
})
export class IonRouteRedirect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRouteRedirectChanged']);
  }
}

import type { RouterEventDetail as IRouterRouterEventDetail } from '@geovistory/design-system-web';
export declare interface IonRouter extends Components.IonRouter {
  /**
   * Event emitted when the route is about to change 
   */
  ionRouteWillChange: EventEmitter<CustomEvent<IRouterRouterEventDetail>>;
  /**
   * Emitted when the route had changed 
   */
  ionRouteDidChange: EventEmitter<CustomEvent<IRouterRouterEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['root', 'useHash'],
  methods: ['push', 'back']
})
@Component({
  selector: 'ion-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['root', 'useHash']
})
export class IonRouter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRouteWillChange', 'ionRouteDidChange']);
  }
}


export declare interface IonRouterLink extends Components.IonRouterLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target']
})
@Component({
  selector: 'ion-router-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target']
})
export class IonRouterLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRouterOutlet extends Components.IonRouterOutlet {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'animation', 'mode']
})
@Component({
  selector: 'ion-router-outlet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'animation', 'mode']
})
export class IonRouterOutlet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRow extends Components.IonRow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { SearchbarChangeEventDetail as ISearchbarSearchbarChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonSearchbar extends Components.IonSearchbar {
  /**
   * Emitted when a keyboard input occurred. 
   */
  ionInput: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<CustomEvent<ISearchbarSearchbarChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value']
})
export class IonSearchbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
  }
}

import type { SegmentChangeEventDetail as ISegmentSegmentChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonSegment extends Components.IonSegment {
  /**
   * Emitted when the value property has changed and any
dragging pointer has been released from `ion-segment`. 
   */
  ionChange: EventEmitter<CustomEvent<ISegmentSegmentChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})
@Component({
  selector: 'ion-segment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})
export class IonSegment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


export declare interface IonSegmentButton extends Components.IonSegmentButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'layout', 'type', 'value']
})
@Component({
  selector: 'ion-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'layout', 'type', 'value']
})
export class IonSegmentButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { SelectChangeEventDetail as ISelectSelectChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonSelect extends Components.IonSelect {
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<CustomEvent<ISelectSelectChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'],
  methods: ['open']
})
@Component({
  selector: 'ion-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value']
})
export class IonSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonSelectOption extends Components.IonSelectOption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ion-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'value']
})
export class IonSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSelectPopover extends Components.IonSelectPopover {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['header', 'message', 'multiple', 'options', 'subHeader']
})
@Component({
  selector: 'ion-select-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['header', 'message', 'multiple', 'options', 'subHeader']
})
export class IonSelectPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSkeletonText extends Components.IonSkeletonText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated']
})
@Component({
  selector: 'ion-skeleton-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated']
})
export class IonSkeletonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSlide extends Components.IonSlide {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['options', 'pager', 'scrollbar'],
  methods: ['update', 'updateAutoHeight', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes', 'getSwiper']
})
@Component({
  selector: 'ion-slides',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options', 'pager', 'scrollbar']
})
export class IonSlides {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
  }
}


export declare interface IonSpinner extends Components.IonSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'duration', 'name', 'paused']
})
@Component({
  selector: 'ion-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'duration', 'name', 'paused']
})
export class IonSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSplitPane extends Components.IonSplitPane {
  /**
   * Expression to be called when the split-pane visibility has changed 
   */
  ionSplitPaneVisible: EventEmitter<CustomEvent<{visible: boolean}>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['contentId', 'disabled', 'when']
})
@Component({
  selector: 'ion-split-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['contentId', 'disabled', 'when']
})
export class IonSplitPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
  }
}


export declare interface IonTab extends Components.IonTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['component', 'tab'],
  methods: ['setActive']
})
@Component({
  selector: 'ion-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['component', 'tab']
})
export class IonTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabBar extends Components.IonTabBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'selectedTab', 'translucent']
})
@Component({
  selector: 'ion-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'selectedTab', 'translucent']
})
export class IonTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabButton extends Components.IonTabButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'download', 'href', 'layout', 'rel', 'selected', 'tab', 'target']
})
@Component({
  selector: 'ion-tab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'download', 'href', 'layout', 'rel', 'selected', 'tab', 'target']
})
export class IonTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  methods: ['select', 'getTab', 'getSelected']
})
@Component({
  selector: 'ion-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionTabsWillChange', 'ionTabsDidChange']);
  }
}


export declare interface IonText extends Components.IonText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ion-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class IonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { TextareaChangeEventDetail as ITextareaTextareaChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonTextarea extends Components.IonTextarea {
  /**
   * Emitted when the input value has changed. 
   */
  ionChange: EventEmitter<CustomEvent<ITextareaTextareaChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap']
})
export class IonTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
  }
}


export declare interface IonThumbnail extends Components.IonThumbnail {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-thumbnail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonThumbnail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTitle extends Components.IonTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'size']
})
@Component({
  selector: 'ion-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'size']
})
export class IonTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { OverlayEventDetail as IToastOverlayEventDetail } from '@geovistory/design-system-web';
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
  ionToastWillDismiss: EventEmitter<CustomEvent<IToastOverlayEventDetail>>;
  /**
   * Emitted after the toast has dismissed. 
   */
  ionToastDidDismiss: EventEmitter<CustomEvent<IToastOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'keyboardClose', 'leaveAnimation', 'message', 'position', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'ion-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'keyboardClose', 'leaveAnimation', 'message', 'position', 'translucent']
})
export class IonToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionToastDidPresent', 'ionToastWillPresent', 'ionToastWillDismiss', 'ionToastDidDismiss']);
  }
}

import type { ToggleChangeEventDetail as IToggleToggleChangeEventDetail } from '@geovistory/design-system-web';
export declare interface IonToggle extends Components.IonToggle {
  /**
   * Emitted when the value property has changed. 
   */
  ionChange: EventEmitter<CustomEvent<IToggleToggleChangeEventDetail>>;
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
  defineCustomElementFn: undefined,
  inputs: ['checked', 'color', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ion-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'name', 'value']
})
export class IonToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonToolbar extends Components.IonToolbar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ion-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class IonToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonVirtualScroll extends Components.IonVirtualScroll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['approxFooterHeight', 'approxHeaderHeight', 'approxItemHeight', 'footerFn', 'footerHeight', 'headerFn', 'headerHeight', 'itemHeight', 'items', 'nodeRender', 'renderFooter', 'renderHeader', 'renderItem'],
  methods: ['positionForItem', 'checkRange', 'checkEnd']
})
@Component({
  selector: 'ion-virtual-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['approxFooterHeight', 'approxHeaderHeight', 'approxItemHeight', 'footerFn', 'footerHeight', 'headerFn', 'headerHeight', 'itemHeight', 'items', 'nodeRender', 'renderFooter', 'renderHeader', 'renderItem']
})
export class IonVirtualScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
