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

Cypress.Commands.add('addCategoriesForUserOne', (userCategory, categoryName, categoryDOMValue, addedExpense ) => {
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type(userCategory)
    cy.get("select").select(categoryName).should("have.value", categoryDOMValue)
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type(addedExpense)
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('addsecondCategoriesForUserOne', (userCategory, categoryName, categoryDOMValue, addedExpense ) => {
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type(userCategory)
    cy.get("select").select(categoryName).should("have.value", categoryDOMValue)
    cy.get(".sc-kDTinF.bzvhtv.sc-bqiRlB.gEpkpj").click()
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type(addedExpense)
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('addCategoriesForUserTwo', (userCategory, categoryName, categoryDOMValue, addedExpense) => {
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type(userCategory)
    cy.get("select").select(categoryName).should("have.value", categoryDOMValue)
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type(addedExpense)
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('addsecondCategoriesForUserTwo', (userCategory, categoryName, categoryDOMValue, addedExpense ) => {
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type(userCategory)
    cy.get("select").select(categoryName).should("have.value", categoryDOMValue)
    cy.get(".sc-kDTinF.bzvhtv.sc-bqiRlB.gEpkpj").click()
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type(addedExpense)
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('verifyStatsForUserOne', (budget, user, addedIncome) => {
    cy.visit("/stats")
    cy.get(".sc-jrQzAO.hDXECM").eq(0).select(budget)
    cy.get(".sc-jrQzAO.hDXECM").eq(1).select(user)
    cy.get(".sc-ieecCq.fbsIfr").invoke("text").then((text) => {
        var addedExpenseForUser = text
        var expenseForUser = addedExpenseForUser.split(/\s+/);
        var flag = expenseForUser[1] == addedIncome
        if(flag){
            cy.task('log', "The stats of User One is correct")
        }
        else{
            throw new Error("The stats of User One is incorrect")
        }
    })
})

Cypress.Commands.add('verifyStatsForUserTwo', (budget, user, addedIncome) => {
    cy.visit("/stats")
    cy.get(".sc-jrQzAO.hDXECM").eq(0).select(budget)
    cy.get(".sc-jrQzAO.hDXECM").eq(1).select(user)
    cy.get(".sc-ieecCq.fbsIfr").invoke("text").then((text) => {
        var addedExpenseForUser = text
        var expenseForUser = addedExpenseForUser.split(' ')
        var flag = expenseForUser[2] == addedIncome
        if(flag){
            cy.task('log', "The stats of User Two is correct")
        }
        else{
            throw new Error("The stats of User Two is incorrect")
        }
    })
})

Cypress.Commands.add('deleteBudget', () => {
    cy.visit("/lists")
    cy.get(".sc-kDTinF.kEvPAM").click({ multiple: true })
})
