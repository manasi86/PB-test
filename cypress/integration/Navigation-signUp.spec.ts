import {NavigationHelper} from '../utils/navigationHelper';
import {SignUpHelper} from '../utils/signUpHelper';

const navigation = new NavigationHelper();
const signUp = new SignUpHelper();

describe('Sign Up/ Login', () => {
    context('Navigation - Sign Up, User ', () => {
        beforeEach(() =>{
            cy.visitURLUsingAuthentication();
            cy.closeCookiesBanner();
        })

        it('should be able to navigate to sign up page from <Sign up> button', () => {
            navigation.clickOnSignUpButton();
            cy.url().should('includes', '/user/signup/');
        })
    })

    context('Account Management, User', () => {
        beforeEach(() => {
            cy.visitURLUsingAuthentication();
            cy.visitURLUsingHref('/user/signup/');
            cy.wait(200)
        })

        let email = Cypress.env('email');
        let password = Cypress.env('password');

        /* This test is a bit flaky due to 2 requests which sometime takes time to complete
       * */
        it('should not be able to sign up with empty value', () =>{
            signUp.clickOnSubmitButton()
                cy.getElementByClass('error').eq(0)
                    .should('contain.text', 'The email you have entered is not valid');
                cy.getElementByClass('error').eq(1)
                    .should('contain.text', 'Password must be at least 6 characters');
        })


        it('should see validation message when passwords dont match', () => {
            signUp.enterRandomEmailInEmailInput(email);
            signUp.enterPasswordInPasswordInput('passssword');
            signUp.enterPasswordInConfirmPasswordInput('password');
            signUp.clickOnSubmitButton()
            cy.getElementByClass('error').eq(0)
                .should('contain.text', 'Passwords do not match');
        })

        it('should be able to sign up', () => {
            signUp.enterRandomEmailInEmailInput(email);
            signUp.enterPasswordInPasswordInput(password);
            signUp.enterPasswordInConfirmPasswordInput(password);
            signUp.clickOnSubmitButton();
            cy.url().should('includes', '/user/personal-details');
            cy.getElementByClass('primarybidLogo').click();
            cy.getElementByClass('button button--narrow button--outline-teal')
                .contains('Profile').click();
            cy.url().should('includes', '/user/profile');
        })
    })
})