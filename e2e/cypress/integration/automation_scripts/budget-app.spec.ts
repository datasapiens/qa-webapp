describe("Verify End to End Test of Budget Web App", function() {

    before(() => {
        cy.clearLocalStorageSnapshot();
      });
    
      beforeEach(() => {
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

})

export {}
