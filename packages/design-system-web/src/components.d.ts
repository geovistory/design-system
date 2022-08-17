import { JSX as IonJSX } from '@ionic/core';
import { Components as IonComponents } from '@ionic/core';
/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GeovDataFetchExampleData } from "./components/geov-data-fetch-example/geov-data-fetch-example";
import { SparqlBinding } from "./lib/sparqlJson";
import { GeovEntityLabelData } from "./components/geov-entity-label/geov-entity-label";

export namespace Components {
    export interface IonAccordion extends IonComponents.IonAccordion { }
    export interface IonAccordionGroup extends IonComponents.IonAccordionGroup { }
    export interface IonActionSheet extends IonComponents.IonActionSheet { }
    export interface IonAlert extends IonComponents.IonAlert { }
    export interface IonApp extends IonComponents.IonApp { }
    export interface IonAvatar extends IonComponents.IonAvatar { }
    export interface IonBackButton extends IonComponents.IonBackButton { }
    export interface IonBackdrop extends IonComponents.IonBackdrop { }
    export interface IonBadge extends IonComponents.IonBadge { }
    export interface IonBreadcrumb extends IonComponents.IonBreadcrumb { }
    export interface IonBreadcrumbs extends IonComponents.IonBreadcrumbs { }
    export interface IonButton extends IonComponents.IonButton { }
    export interface IonButtons extends IonComponents.IonButtons { }
    export interface IonCard extends IonComponents.IonCard { }
    export interface IonCardContent extends IonComponents.IonCardContent { }
    export interface IonCardHeader extends IonComponents.IonCardHeader { }
    export interface IonCardSubtitle extends IonComponents.IonCardSubtitle { }
    export interface IonCardTitle extends IonComponents.IonCardTitle { }
    export interface IonCheckbox extends IonComponents.IonCheckbox { }
    export interface IonChip extends IonComponents.IonChip { }
    export interface IonCol extends IonComponents.IonCol { }
    export interface IonContent extends IonComponents.IonContent { }
    export interface IonDatetime extends IonComponents.IonDatetime { }
    export interface IonFab extends IonComponents.IonFab { }
    export interface IonFabButton extends IonComponents.IonFabButton { }
    export interface IonFabList extends IonComponents.IonFabList { }
    export interface IonFooter extends IonComponents.IonFooter { }
    export interface IonGrid extends IonComponents.IonGrid { }
    export interface IonHeader extends IonComponents.IonHeader { }
    export interface IonIcon extends IonComponents.IonIcon { }
    export interface IonImg extends IonComponents.IonImg { }
    export interface IonInfiniteScroll extends IonComponents.IonInfiniteScroll { }
    export interface IonInfiniteScrollContent extends IonComponents.IonInfiniteScrollContent { }
    export interface IonInput extends IonComponents.IonInput { }
    export interface IonItem extends IonComponents.IonItem { }
    export interface IonItemDivider extends IonComponents.IonItemDivider { }
    export interface IonItemGroup extends IonComponents.IonItemGroup { }
    export interface IonItemOption extends IonComponents.IonItemOption { }
    export interface IonItemOptions extends IonComponents.IonItemOptions { }
    export interface IonItemSliding extends IonComponents.IonItemSliding { }
    export interface IonLabel extends IonComponents.IonLabel { }
    export interface IonList extends IonComponents.IonList { }
    export interface IonListHeader extends IonComponents.IonListHeader { }
    export interface IonLoading extends IonComponents.IonLoading { }
    export interface IonMenu extends IonComponents.IonMenu { }
    export interface IonMenuButton extends IonComponents.IonMenuButton { }
    export interface IonMenuToggle extends IonComponents.IonMenuToggle { }
    export interface IonModal extends IonComponents.IonModal { }
    export interface IonNav extends IonComponents.IonNav { }
    export interface IonNavLink extends IonComponents.IonNavLink { }
    export interface IonNote extends IonComponents.IonNote { }
    export interface IonPicker extends IonComponents.IonPicker { }
    export interface IonPickerColumn extends IonComponents.IonPickerColumn { }
    export interface IonPickerColumnInternal extends IonComponents.IonPickerColumnInternal { }
    export interface IonPickerInternal extends IonComponents.IonPickerInternal { }
    export interface IonPopover extends IonComponents.IonPopover { }
    export interface IonProgressBar extends IonComponents.IonProgressBar { }
    export interface IonRadio extends IonComponents.IonRadio { }
    export interface IonRadioGroup extends IonComponents.IonRadioGroup { }
    export interface IonRange extends IonComponents.IonRange { }
    export interface IonRefresher extends IonComponents.IonRefresher { }
    export interface IonRefresherContent extends IonComponents.IonRefresherContent { }
    export interface IonReorder extends IonComponents.IonReorder { }
    export interface IonReorderGroup extends IonComponents.IonReorderGroup { }
    export interface IonRippleEffect extends IonComponents.IonRippleEffect { }
    export interface IonRoute extends IonComponents.IonRoute { }
    export interface IonRouteRedirect extends IonComponents.IonRouteRedirect { }
    export interface IonRouter extends IonComponents.IonRouter { }
    export interface IonRouterLink extends IonComponents.IonRouterLink { }
    export interface IonRouterOutlet extends IonComponents.IonRouterOutlet { }
    export interface IonRow extends IonComponents.IonRow { }
    export interface IonSearchbar extends IonComponents.IonSearchbar { }
    export interface IonSegment extends IonComponents.IonSegment { }
    export interface IonSegmentButton extends IonComponents.IonSegmentButton { }
    export interface IonSelect extends IonComponents.IonSelect { }
    export interface IonSelectOption extends IonComponents.IonSelectOption { }
    export interface IonSelectPopover extends IonComponents.IonSelectPopover { }
    export interface IonSkeletonText extends IonComponents.IonSkeletonText { }
    export interface IonSlide extends IonComponents.IonSlide { }
    export interface IonSlides extends IonComponents.IonSlides { }
    export interface IonSpinner extends IonComponents.IonSpinner { }
    export interface IonSplitPane extends IonComponents.IonSplitPane { }
    export interface IonTab extends IonComponents.IonTab { }
    export interface IonTabBar extends IonComponents.IonTabBar { }
    export interface IonTabButton extends IonComponents.IonTabButton { }
    export interface IonTabs extends IonComponents.IonTabs { }
    export interface IonText extends IonComponents.IonText { }
    export interface IonTextarea extends IonComponents.IonTextarea { }
    export interface IonThumbnail extends IonComponents.IonThumbnail { }
    export interface IonTitle extends IonComponents.IonTitle { }
    export interface IonToast extends IonComponents.IonToast { }
    export interface IonToggle extends IonComponents.IonToggle { }
    export interface IonToolbar extends IonComponents.IonToolbar { }
    export interface IonVirtualScroll extends IonComponents.IonVirtualScroll { }

    interface GeovCarousel {
        /**
          * array of image URLs passed to src attribute of the <img src="">
         */
        "images": string[];
    }
    interface GeovDataFetchExample {
        /**
          * data (optional) if provided, component won't fetchData()
         */
        "data"?: GeovDataFetchExampleData | string;
        /**
          * entityId ID number of entity, e.g. 'i315800'
         */
        "entityId": string;
        /**
          * does the sparql request(s)
          * @returns a Promise with the data for this component
         */
        "fetchData": () => Promise<GeovDataFetchExampleData>;
        /**
          * sparqlEndpoint URL of the sparql endpoint
         */
        "sparqlEndpoint": string;
    }
    interface GeovEntityLabel {
        /**
          * data (optional) if provided, component won't fetchData()
         */
        "data"?: GeovEntityLabelData | string;
        /**
          * entityId ID number of entity, e.g. 'i315800'
         */
        "entityId": string;
        /**
          * does the sparql request(s)
          * @returns a Promise with the data for this component
         */
        "fetchData": () => Promise<GeovEntityLabelData>;
        /**
          * sparqlEndpoint URL of the sparql endpoint
         */
        "sparqlEndpoint": string;
    }
}
declare global {
    interface HTMLGeovCarouselElement extends Components.GeovCarousel, HTMLStencilElement {
    }
    var HTMLGeovCarouselElement: {
        prototype: HTMLGeovCarouselElement;
        new (): HTMLGeovCarouselElement;
    };
    interface HTMLGeovDataFetchExampleElement extends Components.GeovDataFetchExample, HTMLStencilElement {
    }
    var HTMLGeovDataFetchExampleElement: {
        prototype: HTMLGeovDataFetchExampleElement;
        new (): HTMLGeovDataFetchExampleElement;
    };
    interface HTMLGeovEntityLabelElement extends Components.GeovEntityLabel, HTMLStencilElement {
    }
    var HTMLGeovEntityLabelElement: {
        prototype: HTMLGeovEntityLabelElement;
        new (): HTMLGeovEntityLabelElement;
    };
    interface HTMLElementTagNameMap {
        "geov-carousel": HTMLGeovCarouselElement;
        "geov-data-fetch-example": HTMLGeovDataFetchExampleElement;
        "geov-entity-label": HTMLGeovEntityLabelElement;
    }
}

declare namespace LocalJSX {
    export interface IonAccordion extends IonJSX.IonAccordion { }
    export interface IonAccordionGroup extends IonJSX.IonAccordionGroup { }
    export interface IonActionSheet extends IonJSX.IonActionSheet { }
    export interface IonAlert extends IonJSX.IonAlert { }
    export interface IonApp extends IonJSX.IonApp { }
    export interface IonAvatar extends IonJSX.IonAvatar { }
    export interface IonBackButton extends IonJSX.IonBackButton { }
    export interface IonBackdrop extends IonJSX.IonBackdrop { }
    export interface IonBadge extends IonJSX.IonBadge { }
    export interface IonBreadcrumb extends IonJSX.IonBreadcrumb { }
    export interface IonBreadcrumbs extends IonJSX.IonBreadcrumbs { }
    export interface IonButton extends IonJSX.IonButton { }
    export interface IonButtons extends IonJSX.IonButtons { }
    export interface IonCard extends IonJSX.IonCard { }
    export interface IonCardContent extends IonJSX.IonCardContent { }
    export interface IonCardHeader extends IonJSX.IonCardHeader { }
    export interface IonCardSubtitle extends IonJSX.IonCardSubtitle { }
    export interface IonCardTitle extends IonJSX.IonCardTitle { }
    export interface IonCheckbox extends IonJSX.IonCheckbox { }
    export interface IonChip extends IonJSX.IonChip { }
    export interface IonCol extends IonJSX.IonCol { }
    export interface IonContent extends IonJSX.IonContent { }
    export interface IonDatetime extends IonJSX.IonDatetime { }
    export interface IonFab extends IonJSX.IonFab { }
    export interface IonFabButton extends IonJSX.IonFabButton { }
    export interface IonFabList extends IonJSX.IonFabList { }
    export interface IonFooter extends IonJSX.IonFooter { }
    export interface IonGrid extends IonJSX.IonGrid { }
    export interface IonHeader extends IonJSX.IonHeader { }
    export interface IonIcon extends IonJSX.IonIcon { }
    export interface IonImg extends IonJSX.IonImg { }
    export interface IonInfiniteScroll extends IonJSX.IonInfiniteScroll { }
    export interface IonInfiniteScrollContent extends IonJSX.IonInfiniteScrollContent { }
    export interface IonInput extends IonJSX.IonInput { }
    export interface IonItem extends IonJSX.IonItem { }
    export interface IonItemDivider extends IonJSX.IonItemDivider { }
    export interface IonItemGroup extends IonJSX.IonItemGroup { }
    export interface IonItemOption extends IonJSX.IonItemOption { }
    export interface IonItemOptions extends IonJSX.IonItemOptions { }
    export interface IonItemSliding extends IonJSX.IonItemSliding { }
    export interface IonLabel extends IonJSX.IonLabel { }
    export interface IonList extends IonJSX.IonList { }
    export interface IonListHeader extends IonJSX.IonListHeader { }
    export interface IonLoading extends IonJSX.IonLoading { }
    export interface IonMenu extends IonJSX.IonMenu { }
    export interface IonMenuButton extends IonJSX.IonMenuButton { }
    export interface IonMenuToggle extends IonJSX.IonMenuToggle { }
    export interface IonModal extends IonJSX.IonModal { }
    export interface IonNav extends IonJSX.IonNav { }
    export interface IonNavLink extends IonJSX.IonNavLink { }
    export interface IonNote extends IonJSX.IonNote { }
    export interface IonPicker extends IonJSX.IonPicker { }
    export interface IonPickerColumn extends IonJSX.IonPickerColumn { }
    export interface IonPickerColumnInternal extends IonJSX.IonPickerColumnInternal { }
    export interface IonPickerInternal extends IonJSX.IonPickerInternal { }
    export interface IonPopover extends IonJSX.IonPopover { }
    export interface IonProgressBar extends IonJSX.IonProgressBar { }
    export interface IonRadio extends IonJSX.IonRadio { }
    export interface IonRadioGroup extends IonJSX.IonRadioGroup { }
    export interface IonRange extends IonJSX.IonRange { }
    export interface IonRefresher extends IonJSX.IonRefresher { }
    export interface IonRefresherContent extends IonJSX.IonRefresherContent { }
    export interface IonReorder extends IonJSX.IonReorder { }
    export interface IonReorderGroup extends IonJSX.IonReorderGroup { }
    export interface IonRippleEffect extends IonJSX.IonRippleEffect { }
    export interface IonRoute extends IonJSX.IonRoute { }
    export interface IonRouteRedirect extends IonJSX.IonRouteRedirect { }
    export interface IonRouter extends IonJSX.IonRouter { }
    export interface IonRouterLink extends IonJSX.IonRouterLink { }
    export interface IonRouterOutlet extends IonJSX.IonRouterOutlet { }
    export interface IonRow extends IonJSX.IonRow { }
    export interface IonSearchbar extends IonJSX.IonSearchbar { }
    export interface IonSegment extends IonJSX.IonSegment { }
    export interface IonSegmentButton extends IonJSX.IonSegmentButton { }
    export interface IonSelect extends IonJSX.IonSelect { }
    export interface IonSelectOption extends IonJSX.IonSelectOption { }
    export interface IonSelectPopover extends IonJSX.IonSelectPopover { }
    export interface IonSkeletonText extends IonJSX.IonSkeletonText { }
    export interface IonSlide extends IonJSX.IonSlide { }
    export interface IonSlides extends IonJSX.IonSlides { }
    export interface IonSpinner extends IonJSX.IonSpinner { }
    export interface IonSplitPane extends IonJSX.IonSplitPane { }
    export interface IonTab extends IonJSX.IonTab { }
    export interface IonTabBar extends IonJSX.IonTabBar { }
    export interface IonTabButton extends IonJSX.IonTabButton { }
    export interface IonTabs extends IonJSX.IonTabs { }
    export interface IonText extends IonJSX.IonText { }
    export interface IonTextarea extends IonJSX.IonTextarea { }
    export interface IonThumbnail extends IonJSX.IonThumbnail { }
    export interface IonTitle extends IonJSX.IonTitle { }
    export interface IonToast extends IonJSX.IonToast { }
    export interface IonToggle extends IonJSX.IonToggle { }
    export interface IonToolbar extends IonJSX.IonToolbar { }
    export interface IonVirtualScroll extends IonJSX.IonVirtualScroll { }

    interface GeovCarousel {
        /**
          * array of image URLs passed to src attribute of the <img src="">
         */
        "images"?: string[];
    }
    interface GeovDataFetchExample {
        /**
          * data (optional) if provided, component won't fetchData()
         */
        "data"?: GeovDataFetchExampleData | string;
        /**
          * entityId ID number of entity, e.g. 'i315800'
         */
        "entityId"?: string;
        /**
          * sparqlEndpoint URL of the sparql endpoint
         */
        "sparqlEndpoint"?: string;
    }
    interface GeovEntityLabel {
        /**
          * data (optional) if provided, component won't fetchData()
         */
        "data"?: GeovEntityLabelData | string;
        /**
          * entityId ID number of entity, e.g. 'i315800'
         */
        "entityId"?: string;
        /**
          * sparqlEndpoint URL of the sparql endpoint
         */
        "sparqlEndpoint"?: string;
    }
    interface IntrinsicElements {
        "geov-carousel": GeovCarousel;
        "geov-data-fetch-example": GeovDataFetchExample;
        "geov-entity-label": GeovEntityLabel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "geov-carousel": LocalJSX.GeovCarousel & JSXBase.HTMLAttributes<HTMLGeovCarouselElement>;
            "geov-data-fetch-example": LocalJSX.GeovDataFetchExample & JSXBase.HTMLAttributes<HTMLGeovDataFetchExampleElement>;
            "geov-entity-label": LocalJSX.GeovEntityLabel & JSXBase.HTMLAttributes<HTMLGeovEntityLabelElement>;
        }
    }
}
