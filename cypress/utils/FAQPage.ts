export class FAQPageHelper {
    expectSearchBoxForFAQsPageIsVisible() {
        cy.get('input')
            .invoke('attr', 'placeholder')
            .should('contain', 'Type here to search our FAQs')
    }

    expectHeaderTextIsTopics() {
        cy.get('h2').should('contain.text', 'Topics');
    }
}