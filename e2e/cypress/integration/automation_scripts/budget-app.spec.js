describe("Verify End to End Test of Budget Web App", function() {

    let userData;
    let budgetData;
    let categoryUserOne;
    let categoryUserTwo;

    before(() => {
        cy.clearLocalStorageSnapshot();
      });
    
      beforeEach(() => {
        cy.fixture("userTestData").then(function(user){
            userData = user
        })
        cy.fixture("budgetTestData").then(function(budget){
            budgetData = budget
        })
        cy.fixture("categoryTestUserOne").then(function(categoryOne){
            categoryUserOne = categoryOne
        })
        cy.fixture("categoryTestUserTwo").then(function(categoryTwo){
            categoryUserTwo = categoryTwo
        })
        cy.restoreLocalStorage();
      });
    
      afterEach(() => {
        cy.saveLocalStorage();
      });

    const userType = new Map([
        ["UserOne", "@Test123"],
        ["UserTwo", "@Test1234"]
    ]);
        for (const [key, value] of userType.entries()) {
            it(`SignUp as ${key}`, () => {
                cy.signUp(key, value)
        });
    }

    it("Sign-In", () => {
        cy.task('log', userData.userOneUsername + "Logging in")
        cy.signIn(userData.userOneUsername, userData.userOnePassword)
    })

    it("Add multiple budgets", () => {
        cy.addBudgets(budgetData.budgetUserOne, budgetData.budgetUserTwo)
        cy.task('log', "Multiple budgets have been added")
    })

    it("Add another user to the budget", () => {
        cy.get(".sc-jrQzAO.hDXECM", {timeout: 15000}).eq(1).select(userData.userTwoUsername)
        cy.task('log', "User Two has been assigned to a budget")
    })

    it("Add multiple categories for User One", () => {
        cy.get(".sc-eCImPb.bnYItG").eq(0).click()
        cy.addCategory(categoryUserOne.firstCategoryName, categoryUserOne.firstCategory, categoryUserOne.firstCategoryValue, categoryUserOne.firstCategoryExpense)
        cy.task('log', "First category has been created for User One")
        cy.addCategory(categoryUserOne.secondCategoryName, categoryUserOne.secondCategory, categoryUserOne.secondCategoryValue, categoryUserOne.secondCategoryExpense, userData.userOneUsername)
        cy.task('log', "Second category has been created for User One")
        cy.get(".sc-kDTinF.fMjHiC.sc-crHmcD.dVfNok").click()
    })

    it("Add multiple categories for User Two", () => {
        cy.get(".sc-eCImPb.bnYItG").eq(1).click()
        cy.addCategory(categoryUserTwo.firstCategoryName, categoryUserTwo.firstCategory, categoryUserTwo.firstCategoryValue, categoryUserTwo.firstCategoryExpense)
        cy.task('log', "First category has been created for User One")
        cy.addCategory(categoryUserTwo.secondCategoryName, categoryUserTwo.secondCategory, categoryUserTwo.secondCategoryValue, categoryUserTwo.secondCategoryExpense, userData.userTwoUsername)
        cy.task('log', "Second category has been created for User One")
    })

    it("Verify Income/Expense stats for User One", () => {
        cy.verifyStats(budgetData.budgetUserOne, userData.userOneUsername, categoryUserOne.firstCategoryExpense, true)
    })

    it("Verify Income/Expense stats for User Two", () => {
        cy.verifyStats(budgetData.budgetUserTwo, userData.userTwoUsername, categoryUserTwo.secondCategoryExpense, false)
    })
    
    it("Delete budget's of both users", () => {
        cy.deleteBudget()
        cy.task("log", "Budget's for both users have been deleted")
    })

})

