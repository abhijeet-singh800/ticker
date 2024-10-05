### Testing the Project 
This Project uses Cypress to write all the tests. It is an easy to use tool as compared to Selenium as it provide many interactive tool for testing. You can run all the tests in the terminal using the command 
```bash
npm run tests
```
 But the real power of Cypress Lies with its interactive browser testing environment. To use the Browser environment use the following command 
 ```bash
 npm run cypress
 ```
 
 This project uses the End to End testing principles to test, thus testing in a more comprehensive and real world manner.

 All the tests are written in the `/cypress` and a brief explanation for the folder structure is provided below

 
 `/cypress/e2e` - Contains all the files for End to End Tests

 `/cypress/fixtures` - Contains dummy data `.json` files for using in tests.
 
 `/cypress/support/commands.ts` - Have custom command that are frequently used in the testing process
 
 `/cypress/support/e2e.ts` - Have configurations for end to end tests

 Hello world
 