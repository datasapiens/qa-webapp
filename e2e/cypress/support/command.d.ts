// load type definitions that come with Cypress module
declare namespace Cypress {
    interface Chainable {
  
      /**
       * Signup
       * @param username — The username of the user that needs to sign up.
       * @param password — The password of the user that needs to sign up.
       */
       signUp(username: string, password: string)
    }
    interface Chainable {
  
    /**
     * Login
     * @param username — The username of the user that needs to sign in.
     * @param password — The password of the user that needs to sign in.
     */
       signIn(username: string, password: string)
    }
}
  