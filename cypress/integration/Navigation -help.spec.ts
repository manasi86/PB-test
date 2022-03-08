import {NavigationHelper, NavigationMobileHelper} from "../utils/navigationHelper";
import {FAQPageHelper} from '../utils/FAQPage'

const navigationHeader = new NavigationHelper();
const navigationMobile = new NavigationMobileHelper();
const FAQPage = new FAQPageHelper();

describe('Navigation Header', () =>{

    beforeEach(() =>{
        cy.visitURLUsingAuthentication();
        cy.closeCookiesBanner();
    })

    context('Using navigation header, User ', () =>{
        it('should be able to navigate to FAQs page via <Help> tab ', () =>{
            navigationHeader.navigateUsingVisitCommand(2, 'faqs');
            cy.url().should('include', '/faqs');
            FAQPage.expectSearchBoxForFAQsPageIsVisible();
            FAQPage.expectHeaderTextIsTopics();
        })

        it('should be able to navigate to About page by clicking on <About Us> link', () => {
            navigationHeader.clickOnLink(1, '\n                        Help\n                    ')
            cy.url().should('include', '/faqs')
            FAQPage.expectSearchBoxForFAQsPageIsVisible();
            FAQPage.expectHeaderTextIsTopics();
        })
    })

    context('Using navigation hamburger Menu, User ', () => {
        beforeEach(() => {
            cy.viewport('samsung-s10');
        });

        it('should be able to navigate to FAQs page by clicking on <FAQs > tab', () => {
            navigationMobile.clickOnHamburgerMenuButton();
            navigationMobile.clickOnLinkIsSlideInMenu(3);
            cy.url().should('include', '/faqs');
            // navigationMobile.clickOnCloseButtonInSlideInMenu();
            FAQPage.expectSearchBoxForFAQsPageIsVisible();
            FAQPage.expectHeaderTextIsTopics();

        })
    })
})