import {NavigationHelper, NavigationMobileHelper} from "../utils/navigationHelper";

const navigationHeader = new NavigationHelper();
const navigationMobile = new NavigationMobileHelper();

describe('Navigation Header', () =>{

    beforeEach(() =>{
        cy.visitURLUsingAuthentication();
        cy.closeCookiesBanner();
    })

    context('Using navigation header, User ', () =>{
        it('should be able to navigate to About us page via <About Us> link ', () =>{
            navigationHeader.navigateUsingVisitCommand(1, 'about');
            cy.url().should('include', '/about')
        })

        it('should be able to navigate to About page by clicking on <About Us> link', () => {
          navigationHeader.clickOnLink(0, 'About Us')
            cy.url().should('include', '/about')
        })
    })

    context('Using navigation hamburger Menu, User ', () => {
        beforeEach(() => {
            cy.viewport('samsung-s10');
        });

        it('should be able to navigate to About page by clicking on <About Us> tab', () => {
            navigationMobile.clickOnHamburgerMenuButton();
            navigationMobile.clickOnLinkIsSlideInMenu(1);
            cy.url().should('include', '/about');
            navigationMobile.clickOnCloseButtonInSlideInMenu();
            cy.get('h2').should('contain.text', '\n' +
                '                    About Us\n' +
                '                ')
        })
    })
})