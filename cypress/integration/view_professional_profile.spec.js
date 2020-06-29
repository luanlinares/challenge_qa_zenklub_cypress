/// <reference types="cypress" />


describe('Visualizar detalhes do perfil profissional', () => {
    beforeEach(()=>{
        cy.reload
        cy.viewport(1400, 1000)
        cy.visit('https://zenklub.com.br/auth/login/')
    })

    it('Fazer login', () => {
        cy.get('#login-form-email').type('qachallenge@zenklub.com')
        cy.get('#login-form-password').type('qachallenge')
        cy.get('.medium-size-button').click
        cy.url().should('eq', 'https://zenklub.com.br/profile/sessions/')
    })

    it('Validar a inexistência de sessões agendadas', () => {
        cy.page().should('be equal', 'Você ainda não fez nenhuma sessão. Encontre o profissional perfeito para você ainda hoje')
        cy.page().should('be equal', 'AGENDAR SESSÃO') 
    })

    it('Acessar o perfil do primeiro profissional da lista', () => {
        cy.get(':nth-child(3) > .nav-page-link > span').click
        cy.get(':nth-child(1) > app-professional-search > .container > .row > .professional-link > .btn').click
        cy.page().should('contain', 'Encontre seu especialista')
        cy.get('> div > div > div.col-12.col-lg-5.position-relative > div')
            .should('be.visible')
        cy.get('#testimonials > div.section_bg > div > div > div.col-12.mb-5.text-center.text-white > h3')
            .should('be.visible')
    })
})
