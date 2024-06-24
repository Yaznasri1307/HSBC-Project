describe('Login Test Scenarios', () => {
    it('Login', () => {
        cy.visit('https://www.hsbc.co.in/');
        cy.get('img[alt="HSBC India Bank"]').first().should('be.visible');
        cy.title().should('eq',"HSBC India - Credit Cards, NRI Services, Saving and Deposit");
        cy.get('a').contains('Log On').click({force: true});
        
    });
});
describe('HSBC India Login Page Tests', () => {
    it('should navigate to the login page', () => {
        cy.visit('https://www.hsbc.co.in/security/');
        cy.screenshot('Login page');
        cy.title().should('eq', 'Username | Log on | HSBC');
        cy.get('button#username_submit_btn').should('be.visible');
        cy.get('button#username_submit_btn').should('be.disabled');
        cy.get('.username-field').type('yazna@xyz.com');
        cy.get('button#username_submit_btn').should('be.enabled');
        cy.get('a#username_help_link').click({force: true});
        cy.get("#help_content_1>h3>span").contains("Username");
        cy.get("a.close-btn>span>span[aria-hidden='true']").should('be.visible');
        cy.get("a.close-btn>span>span[aria-hidden='true']").click();
        cy.screenshot('Login Test Scenario');


    })
})
  