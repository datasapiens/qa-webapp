Cypress.Commands.add('signUp', (username, password) => {
     /**
     * Signup
     * @param username — A user name for the user that needs to sign up
     * @param password — A password for the user that needs to sign up
     */
    cy.visit('/signup');
    cy.get("input[type='username']").type(username)
    cy.get(".sc-pVTFL.fpjaXA").eq(1).type(password)
    cy.get(".sc-pVTFL.fpjaXA").eq(2).type(password)
    cy.get(".sc-kDTinF.bzvhtv").click()
})

Cypress.Commands.add('signIn', (username, password) => {
     /**
     * Login
     * @param username — The user name for first user for login
     * @param password — The password for first user for login
     */
    cy.visit("/login")
    cy.get("input[type='username']").type(username)
    cy.get("input[type='password']").type(password)
    cy.get(".sc-kDTinF.bzvhtv").click()
})

Cypress.Commands.add('addBudgets', (budgetForUserOne, budgetForUserTwo) => {
    /**
     * Add budget for a user
     * @param budgetForUserOne — Name of the first budget of first user
     * @param budgetForUserTwo — Name of the second budget of second user
     */
    cy.get(".sc-pVTFL.fpjaXA").type(budgetForUserOne)
    cy.get(".sc-kDTinF.iOwzpW").should('not.be.disabled').click()
    cy.get(".sc-pVTFL.fpjaXA").type(budgetForUserTwo)
    cy.get(".sc-kDTinF.iOwzpW").should('not.be.disabled').click()
})

Cypress.Commands.add('addCategory', (userCategory, categoryName, categoryDOMValue, addedExpense, user ) => {
    /**
     * Add Category for a user
     * @param userCategory — Name of the category that user adds
     * @param categoryName — Name of the category that user selects for the dropdown
     * @param categoryDOMValue — The DOM value of a category for assertion
     * @param addedExpense — The expense that is either added or substracted for a category
     * @param user — user flag to substract expense for one of the category
     */
    cy.get(".sc-iCfMLu.jilgKd .sc-pVTFL.fpjaXA").type(userCategory)
    cy.get("select").select(categoryName).should("have.value", categoryDOMValue)
    if(user){
        cy.get(".sc-kDTinF.bzvhtv.sc-bqiRlB.gEpkpj").click()
    }
    cy.get(".sc-iCfMLu.hqlXrq .sc-pVTFL.fpjaXA").type(addedExpense)
    cy.get(".sc-kDTinF.iOwzpW").click()
})

Cypress.Commands.add('verifyStats', (budget, user, addedIncome, flag) => {
    /**
     * Verify the expense added for both users with that displayed in stats page
     * @param budget — Name of the budget to select from the dropdown
     * @param user — Username of the user to select from the dropdown
     * @param addedIncome — One of the income which is either an addition or 
     * reduction so that it can be compared with that in the stats page
     * @param flag — A flag to distinguish between the two users because each 
     * user's stat data needs different split functionm
     */
    cy.visit("/stats")
    cy.get(".sc-jrQzAO.hDXECM").eq(0).select(budget)
    cy.get(".sc-jrQzAO.hDXECM").eq(1).select(user)
    cy.get(".sc-ieecCq.fbsIfr").invoke("text").then((text) => {
        var addedExpenseForUser = text
        if(flag){
            var expenseForUser = addedExpenseForUser.split(/\s+/);
            var correctStat = expenseForUser[1] == addedIncome
        }
        else{
            var expenseForUser = addedExpenseForUser.split(' ')
            var correctStat = expenseForUser[2] == addedIncome
        }
        if(correctStat){
            cy.task('log', "The stats of "+user+" is correct")
        }
        else{
            throw new Error("The stats of "+user+" is incorrect")
        }
    })
})

Cypress.Commands.add('deleteBudget', () => {
    /**
     * Delete all the budget(both - userOne and userTwo)
     */
    cy.visit("/lists")
    cy.get(".sc-kDTinF.kEvPAM").click({ multiple: true })
})
