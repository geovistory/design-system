/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'web-components';




export declare interface GvButton extends Components.GvButton {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'gv-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class GvButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GvNumber extends Components.GvNumber {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['attributeNumber']
})
@Component({
  selector: 'gv-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['attributeNumber']
})
export class GvNumber {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GvPersonRdf extends Components.GvPersonRdf {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['pkEntity']
})
@Component({
  selector: 'gv-person-rdf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['pkEntity']
})
export class GvPersonRdf {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GvTest extends Components.GvTest {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['birthdate', 'lastname', 'name']
})
@Component({
  selector: 'gv-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['birthdate', 'lastname', 'name']
})
export class GvTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
