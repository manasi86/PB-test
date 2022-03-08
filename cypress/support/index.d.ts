declare namespace Cypress {
    interface  Chainable {
        visitURLUsingAuthentication(): Chainable<Element>;
        visitURLUsingHref(href:any): Chainable<Element>;
        getElementByClass(selector: string): Chainable<JQuery<HTMLElement>>;
        getElementByDataTestId(selector: string) : Chainable<JQuery<HTMLElement>>;
        closeCookiesBanner(): Chainable<Element>;
        getElementById(selector: string) : Chainable<JQuery<HTMLElement>>;
    }
}