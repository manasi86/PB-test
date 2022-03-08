import {NewsPage} from './selectors'

export class NewsPageHelper {
    expectTheHeaderTextIsVisible(text: string, index:number) {
        cy.get('h4.title--line-teal-flex').eq(index).should('contain.text', text)
            .should('be.visible')
    }

    expectTheFeaturedContentShowsTheNewsData(noOfCards: number) {
        cy.getElementByClass('card-grid margin--l').within(() =>{
            cy.getElementByClass('pb_news_item__inner_1EQv')
                .should('have.length', noOfCards);
        })
    }

    expectFilterByForAllContent() {
        cy.getElementByDataTestId(NewsPage.filterDropDown)
            .should('be.visible')
    }

    selectCheckboxInFilterDropDown(text: string) {
        cy.getElementByDataTestId(NewsPage.filterDropDown).click();
        cy.getElementByDataTestId(`news-filter-checkbox-${text}`)
            .click({force:true});
    }
}