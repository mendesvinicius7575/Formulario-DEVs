Cypress.Commands.add('fillformSubmit', () => {
    cy.get('#nome').as('name').type('Vinicius')
    cy.get('#sobrenome').as('lastname').type('Mendes')
    cy.get('#email').as('email').type('olaolaola@gmail.com')
    cy.get('input[type="radio"][value="fullstack"]').as('fullstackradio').check()
    cy.get('#senioridade').as('seniority').select('Sênior')
    cy.get('input[type="checkbox"][value="HTML"]').as('htmlCheckbox').check()
    cy.get('input[type="checkbox"][value="CSS"]').as('cssCheckbox').check()
    cy.get('input[type="checkbox"][value="Javascript"]').as('jsCheckbox').check()

    cy.get('.botao').click()
})

Cypress.Commands.add('assertForm', () => {
    cy.get('@name').should('be.empty')
    cy.get('@lastname').should('be.empty')
    cy.get('@email').should('be.empty')

    cy.get('@fullstackradio').should('not.be.checked')
    cy.get('input[type="radio"][value="frontend"]').should('be.checked')
    cy.get('@seniority').find('option').contains('Selecione').should('be.selected')
    cy.get('input[type="checkbox"][value="PHP"]').should('not.be.checked')
    cy.get('input[type="checkbox"][value="C#"]').should('not.be.checked')
    cy.get('input[type="checkbox"][value="Python"]').should('not.be.checked')
    cy.get('input[type="checkbox"][value="Java"]').should('not.be.checked')
})



