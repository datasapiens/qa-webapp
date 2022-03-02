// load type definitions that come with Cypress module
declare namespace Cypress {
    interface Chainable {
  
      /**
       * Signup
       */
       signupAndLogin(usernameOne: string, passwordOne: string, usernameTwo: string, passwordTwo: string)
    }
  }
  