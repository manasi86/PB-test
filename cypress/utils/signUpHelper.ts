import * as Chance from 'chance';

export class SignUpHelper {
    chance = new Chance();

    enterRandomEmailInEmailInput(email: string) {
        let randomEmail = email.split('@')[0] + '+' + this.chance.timestamp() + '@' + email.split('@')[1];
        cy.get('input[name="email"]').type(randomEmail);
    };

    enterPasswordInPasswordInput(pwd: string) {
        cy.get('input[name="password"]').type(pwd);
    }

    enterPasswordInConfirmPasswordInput(pwd: string) {
        cy.get('input[name="confirmPassword"]').type(pwd);
    }

    clickOnSubmitButton() {
        cy.wait(150)
        cy.get('button[type= "submit"]').within(() => {
            cy.getElementByClass('inner-text').contains('Submit')
                .click({force:true});
        })
    }

}