Cypress.Commands.add('signupAndLogin', (usernameOne, passwordOne, usernameTwo, passwordTwo) => {
    cy.session([usernameOne, passwordOne, usernameTwo, passwordTwo], () => {
      cy.visit('/signup');
      cy.get("input[type='username']").type(usernameOne)
      cy.get(".sc-pVTFL.fpjaXA").eq(1).type(passwordOne)
      cy.get(".sc-pVTFL.fpjaXA").eq(2).type(passwordOne)
      cy.get(".sc-kDTinF.bzvhtv").click()
      cy.visit('/signup');
      cy.get("input[type='username']").type(usernameTwo)
      cy.get(".sc-pVTFL.fpjaXA").eq(1).type(passwordTwo)
      cy.get(".sc-pVTFL.fpjaXA").eq(2).type(passwordTwo)
      cy.get(".sc-kDTinF.bzvhtv").click()
      cy.visit("/login")
      cy.get("input[type='username']").type(usernameOne)
      cy.get("input[type='password']").type(passwordOne)
      cy.get(".sc-kDTinF.bzvhtv").click()
    })
  })
  
  export {}