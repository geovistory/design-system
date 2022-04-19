/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface GvButton {
    }
    interface GvNumber {
        "attributeNumber": number;
    }
    interface GvPersonRdf {
        "pkEntity": string;
    }
    interface GvTest {
        "birthdate": string;
        "lastname": string;
        "name": string;
    }
}
declare global {
    interface HTMLGvButtonElement extends Components.GvButton, HTMLStencilElement {
    }
    var HTMLGvButtonElement: {
        prototype: HTMLGvButtonElement;
        new (): HTMLGvButtonElement;
    };
    interface HTMLGvNumberElement extends Components.GvNumber, HTMLStencilElement {
    }
    var HTMLGvNumberElement: {
        prototype: HTMLGvNumberElement;
        new (): HTMLGvNumberElement;
    };
    interface HTMLGvPersonRdfElement extends Components.GvPersonRdf, HTMLStencilElement {
    }
    var HTMLGvPersonRdfElement: {
        prototype: HTMLGvPersonRdfElement;
        new (): HTMLGvPersonRdfElement;
    };
    interface HTMLGvTestElement extends Components.GvTest, HTMLStencilElement {
    }
    var HTMLGvTestElement: {
        prototype: HTMLGvTestElement;
        new (): HTMLGvTestElement;
    };
    interface HTMLElementTagNameMap {
        "gv-button": HTMLGvButtonElement;
        "gv-number": HTMLGvNumberElement;
        "gv-person-rdf": HTMLGvPersonRdfElement;
        "gv-test": HTMLGvTestElement;
    }
}
declare namespace LocalJSX {
    interface GvButton {
    }
    interface GvNumber {
        "attributeNumber"?: number;
    }
    interface GvPersonRdf {
        "pkEntity"?: string;
    }
    interface GvTest {
        "birthdate"?: string;
        "lastname"?: string;
        "name"?: string;
    }
    interface IntrinsicElements {
        "gv-button": GvButton;
        "gv-number": GvNumber;
        "gv-person-rdf": GvPersonRdf;
        "gv-test": GvTest;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gv-button": LocalJSX.GvButton & JSXBase.HTMLAttributes<HTMLGvButtonElement>;
            "gv-number": LocalJSX.GvNumber & JSXBase.HTMLAttributes<HTMLGvNumberElement>;
            "gv-person-rdf": LocalJSX.GvPersonRdf & JSXBase.HTMLAttributes<HTMLGvPersonRdfElement>;
            "gv-test": LocalJSX.GvTest & JSXBase.HTMLAttributes<HTMLGvTestElement>;
        }
    }
}
