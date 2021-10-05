describe('Smoke Test', () => {
    it('can view the home page', () => {
        // eslint-disable-next-line no-undef
        cy.visit('/');
        // eslint-disable-next-line no-undef
        cy.contains('Learn React')
    })
})
