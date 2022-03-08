export class NavigationHelper {
    navigateUsingVisitCommand(index: number, text: string) {
        cy.getElementByClass('navigation__link').eq(index)
            .should('have.attr', 'href')
            .and('include', text)
            .then((href) => {
                cy.visitURLUsingHref(href);
            })
    }

    clickOnLink(index: number, text: string) {
        cy.getElementByClass('row navigation__row d-flex align-items-center').children().eq(1)
            .children('a').eq(index)
            .should('have.text', text).click();
    }

    clickOnSignUpButton() {
        cy.getElementByClass('button button--narrow button--teal')
            .should("include.text", 'Sign up').click();
    }
}

export class NavigationMobileHelper {
    clickOnHamburgerMenuButton() {
        cy.getElementByClass('icon-burger').click();
    }

    clickOnLinkIsSlideInMenu(index : number) {
        cy.getElementByClass('slide-in-menu__items slide__items slide__items--animated')
            .children().eq(index).children().click();
    }

    clickOnCloseButtonInSlideInMenu() {
        cy.getElementByClass('slide-in-menu__header').within(() => {
            cy.getElementByClass('button slide-in-close-button button--outline-teal')
                .click();
        });
    }
}
