Cypress.Commands.add('signUp', (username, password) => {
    cy.visit('/signup');
    cy.get("input[type='username']").type(username)
    cy.get(".sc-pVTFL.fpjaXA").eq(1).type(password)
    cy.get(".sc-pVTFL.fpjaXA").eq(2).type(password)
    cy.get(".sc-kDTinF.bzvhtv").click()
})

Cypress.Commands.add('signIn', (username, password) => {
    cy.visit("/login")
    cy.get("input[type='username']").type(username)
    cy.get("input[type='password']").type(password)
    cy.get(".sc-kDTinF.bzvhtv").click()
})

Cypress.Commands.add('addBudget', () => {
    cy.visit("/lists")
    cy.get(".sc-pVTFL.fpjaXA").type("Salary")
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('addCategory', () => {
    cy.get(".sc-eCImPb.bnYItG").click()
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type("Food expense")
    cy.get("select").select("Food and Drinks").should("have.value", "Food")
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type("5000")
    cy.get(".sc-kDTinF.iOwzpW").click()
})
