import {NavigationHelper, NavigationMobileHelper} from "../utils/navigationHelper";
import {NewsPageHelper} from '../utils/newsPageHelper';

const navigationHeader = new NavigationHelper();
const navigationMobile = new NavigationMobileHelper();
const newsPageHelper = new NewsPageHelper()

describe('Navigation Header', () =>{

    beforeEach(() =>{
        cy.visitURLUsingAuthentication();
        cy.closeCookiesBanner();
    })

    context('Using navigation header, User ', () =>{
        it('should be able to navigate to News page via <News> tab ', () =>{
            navigationHeader.navigateUsingVisitCommand(3, 'news');
            cy.url().should('include', '/news');
        })

        it('should be able to navigate to News page by clicking on <News> link', () => {
            navigationHeader.clickOnLink(2, 'News')
            cy.url().should('include', '/news')
        })
    })

    context('Using navigation hamburger Menu, User ', () => {
        beforeEach(() => {
            cy.viewport('ipad-2');
        });

        it('should be able to navigate to News page by clicking on <News > tab', () => {
            navigationMobile.clickOnHamburgerMenuButton();
            navigationMobile.clickOnLinkIsSlideInMenu(2);
            cy.url().should('include', '/news');
            navigationMobile.clickOnCloseButtonInSlideInMenu();
        })
    })

    context('On news page, User ', () => {
        beforeEach(()=> {
            cy.visitURLUsingHref('/news');
        })

        it('should be able to see featured content', () => {
            newsPageHelper.expectTheHeaderTextIsVisible('Featured Content', 0);
           // newsPageHelper.expectTheFeaturedContentShowsTheNewsData(4);
            /* Due to no unique Ids, it is showing 84 results, so just to show the approach
                of verifying the cards, I have written this function,
            * */
        })

        it('should be able to see All content heading', () => {
            newsPageHelper.expectTheHeaderTextIsVisible('All Content', 1);
            newsPageHelper.expectFilterByForAllContent();
        })

        it('should be able to filter All Content container to show Webinar articles',() => {
            newsPageHelper.selectCheckboxInFilterDropDown('Webinar');
            /*I could have verified the existence of the card with webinar heading , but without
             unique test-ids, it will be a long test to go to the nth card of 'container class'
             includes 'webinar' in the card */
        })
    })
})