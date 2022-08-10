describe('Form Devs', () => {
  beforeEach(() => cy.visit('../../formulario.html'))
  it.only('fills the form and submit', () => {
    cy.get('#titulo').should('be.visible').and('have.text', 'Cadastro de DEVs')
    cy.get('#subtitulo').should('have.text', 'Complete suas informações')
  })
  

    it('Comando Inserção', () =>{
      cy.fillformSubmit();
      cy.assertForm();
    })

  it('fills the form and submit', () => {
    cy.get('#nome').as('nameOne').type('Vinicius')

    cy.get('.botao').click()

    cy.get('@nameOne').should('be.empty')
  })
})