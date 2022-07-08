## Tools used

### Cypress

An automation framework called cypress is used for automating the test cases for the Income Expense app. Cypress is a JavaScript based front end testing tool built for the modern web. It is more developer-friendly and allows unique DOM manipulation that other automation frameworks cannot. Also, this runs directly on the browser so, one can manipulate with the requests and responses too. 

Components of Cypress
- Cypress Test Runner
    - Cypress allows tests to run in a unique interactive runner that allows the user to see commands as they execute while also viewing the application under test. This is achieved using a component of Cypress called Test runner. For this project, please go inside the `e2e` folder and then use the command below to access test runner or, use makefile to run the command - `make test-gui` directly.
    `npx cypress open`

- Cypress Dashboard
    - Use this invitation link to join a project I created for this automated suite. Cypress dashboard can be used to provide insights on tests ran, DOM request/response, recorded videos, screenshots so that we understand the tests better. 
    
    https://dashboard.cypress.io/invitation/800a9c22-b9ca-4acd-93a9-336316c316a5


### Docker

Docker is used to building services and running an automated test script against that.

### MakeFile

A makefile has also been included that contains the basic recipe required to cook the program. 

### Github Actions

A yml file has been included which is intended to run cypress test script on each push to the repository. This is a first step taken towards a complete CI/CD pipeline for automated tests. 

## Project Structure

The project structure and how each sub-folders are utilized are listed below:

```
e2e
└──cypress
    └── Fixtures
        └── budgetTestData.json
        └── categoryTestUserOne.json
        └── ...
    └── integration
        └── automation_scripts
            └── budget-app.spec.js
    └── plugins
        └── index.js
    └── support
        └── commands.js
        └── index.js
└── cypress.json
└── package.json
```

- Fixtures: 
    All test data has been stored inside fixtures folder. This is a recommended practice encouraged by cypress and, allows effective capture of test data in our main test suite file.

- integration: 
    The integration folder consists of our main test script file. `budget-app.spec.js` is the main test suite file which governs the entire automated test of this particular app.

- plugins: 
    The plugins folder contains a js file where we need to declare any plugins that we might use for testing purpose. In our case, a plugin has been used to log messages in headless mode.

- support: 
    Here is where all the magic happens. Cypress basically allows developers to create custom commands and there commands are declared in a commands.js file. Here in our case too, we have made use to multiple custom commands and used those re-usable commands in the test.
    
- cypress.json: 
    This is a cypress configuration file where we include items required to configure cypress behaviour. 

## Test Cases Covered

- [x] Verify sign-up of multiple users.
- [x] Verify log-in functionality.
- [x] Verify budgets can be created.
- [x] Verify budget can be allocated to another user.
- [x] Verify multiple categories can be added to a single user budget.
- [x] Verify multiple categories can be added to a multi-user budget.
- [x] Compare the expense for categories with respect to users in Stats page.
- [x] Verify deletion of the budget created.

## Testing/Execution Strategy

Multiple execution techniques have been included for easy execution of the test suite.

### Using shell file

The shell file can be used to run all services and automation suite using a single command.

````
./cypress-run.sh
````
### Using Makefile

A makefile has been included to perform some of the basic tasks required.

- Build services: 
```
make docker-build
````
- Run services: 
```
make docker-up
````
- Run tests headlessly: 
```
make test
````
- Run tests using a test runner:
```
make test-gui
```
### Using docker compose

Use docker compose to build services

```
docker-compose build
```
```
docker-compose up
```

### Using Test Runner

Test runner can be built locally and used to test the automated scripts. For this test runner should be opened. In order to open the test run, go inside the `e2e` folder and then use the command below:

```
make test-gui
```

OR,

```
npx cypress open
```
