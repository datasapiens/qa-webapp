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

Cypress.Commands.add('addBudgets', (budgetForUserOne, budgetForUserTwo) => {
    cy.get(".sc-pVTFL.fpjaXA").type(budgetForUserOne)
    cy.get(".sc-kDTinF.iOwzpW").should('not.be.disabled').click()
    cy.get(".sc-pVTFL.fpjaXA").type(budgetForUserTwo)
    cy.get(".sc-kDTinF.iOwzpW").should('not.be.disabled').click()
})

Cypress.Commands.add('addCategory', (userCategory, categoryName, categoryDOMValue, addedExpense, user ) => {
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type(userCategory)
    cy.get("select").select(categoryName).should("have.value", categoryDOMValue)
    if(user){
        cy.get(".sc-kDTinF.bzvhtv.sc-bqiRlB.gEpkpj").click()
    }
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type(addedExpense)
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('verifyStats', (budget, user, addedIncome, flag) => {
    cy.visit("/stats")
    cy.get(".sc-jrQzAO.hDXECM").eq(0).select(budget)
    cy.get(".sc-jrQzAO.hDXECM").eq(1).select(user)
    cy.get(".sc-ieecCq.fbsIfr").invoke("text").then((text) => {
        var addedExpenseForUser = text
        if(flag){
            var expenseForUser = addedExpenseForUser.split(/\s+/);
            var flag = expenseForUser[1] == addedIncome
        }
        else{
            var expenseForUser = addedExpenseForUser.split(' ')
            var flag = expenseForUser[2] == addedIncome
        }
        if(flag){
            cy.task('log', "The stats of"+user+"is correct")
        }
        else{
            throw new Error("The stats of"+user+"is incorrect")
        }
    })
})

Cypress.Commands.add('deleteBudget', () => {
    cy.visit("/lists")
    cy.get(".sc-kDTinF.kEvPAM").click({ multiple: true })
})
