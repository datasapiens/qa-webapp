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

})

export {}
