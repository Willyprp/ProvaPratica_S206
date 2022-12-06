/// <reference types = "cypress"/>


describe('Criando cenário de teste para o site globalsqa/bankingproject', () => {
  it("Caso de teste: Criando um cliente com sucesso.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    let info = gerandoInfos()
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type(info[0])
    cy.get(':nth-child(2) > .form-control').type(info[1])
    cy.get(':nth-child(3) > .form-control').type(info[2])
    cy.get('form.ng-dirty > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.marTop').should('contain.text',info[0])
  })

  it("Caso de teste: Tentando sacar uma quantia maior que o saldo atual.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(1)
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type(10000)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain.text','Transaction Failed')
  })

  it("Caso de teste: Criando nova conta para um cliente.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(4)
    cy.get('#currency').select(1)
    cy.get('form.ng-dirty > button').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('tbody > :nth-child(4) > :nth-child(4)').should('contain.text','1016')
  })

  it("Caso de teste: Realizando um depósito.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(3)
    cy.get('form.ng-valid > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').type(1478963)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text','Deposit Successful')
  })  

  it("Caso de teste: Verificando filtro de primeiro nome em ordem alfabética decrescente.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get(':nth-child(1) > a').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text','Ron')
 
  }) 
  
  it("Caso de teste: Verificando filtro de último nome em ordem alfabética decrescente.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get(':nth-child(2) > a').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text','Weasly')
 
  }) 
  
  it("Caso de teste: Verificando filtro de Post Code em ordem decrescente.", () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get(':nth-child(3) > a').click()
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text','E89898')
 
  })
})


function gerandoInfos(){
  let dia = new Date().getDay().toString()
  let minutos = new Date().getMinutes().toString()
  let mes = new Date().getMonth().toString()
  let segundos = new Date().getSeconds().toString()
  let ms = new Date().getMilliseconds().toString()
  let nome1 = 'user' + mes + minutos + segundos
  let nome2 = ms + minutos + dia +'senha'
  let cep = dia + mes + dia + '0-000'
  let infos = [nome1,nome2,cep]
  return infos
}
