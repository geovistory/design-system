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


export declare interface GvPerson extends Components.GvPerson {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['birthdate', 'lastname', 'name']
})
@Component({
  selector: 'gv-person',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['birthdate', 'lastname', 'name']
})
export class GvPerson {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
