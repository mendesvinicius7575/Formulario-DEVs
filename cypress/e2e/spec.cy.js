describe('Form Devs', () => {
  beforeEach(() => cy.visit('../../formulario.html'))
  it('fills the form and submit', () => {
    
  })
  

    it.only('Comando Inserção', () =>{
      cy.fillformSubmit();
      cy.assertForm();
    })

  it('fills the form and submit', () => {
    cy.get('#nome').as('nameOne').type('Vinicius')

    cy.get('.botao').click()

    cy.get('@nameOne').should('be.empty')
  })
})