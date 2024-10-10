This repo uses Cypress Testing Library for testing itself in a E2E manner. All the files related to the testing suit is present in the `cypress` folder in the root directory. This document will provide explanations regarding the testing suit. 

# Organization
Cypress can perform various types of tests but currently this repo only exploits its E2E abilities. The `cypress` folder has the following high level structure

```
cypress
├── downloads
├── e2e
├── fixtures
├── screenshots
└── support
```

The `downloads` folder in a Cypress project is where Cypress stores files that are downloaded during the execution of your tests. When your test interacts with a website and triggers a file download (e.g., downloading a PDF, CSV, or other files), those files are automatically saved in this folder. 

The `screenshots` folder in a Cypress project stores screenshots that are automatically captured during the test execution. These screenshots are typically taken under the following conditions:

1. **Test Failures**: Cypress automatically takes a screenshot whenever a test fails, helping you visualize the state of the application at the time of failure.
2. **Manual Screenshots**: You can manually capture screenshots during your tests using the `cy.screenshot()` command at any point in your test scripts.
3. **Visual Testing**: Cypress can capture screenshots of specific elements or the entire page to compare visual changes across different test runs.

The `fixtures` folder in a Cypress project is used to store static data files that your tests can use. These files typically contain mock data, often in JSON format, which your tests can load and use to simulate API responses or provide inputs.You can use fixture files to:
- Mock API responses.
- Provide test data (such as user information or product details).
- Simulate different data scenarios.

The `support` folder in a Cypress project contains files that help set up and configure global behaviors for your tests. It is used to define reusable code, custom commands, and setup logic that applies across multiple test files. The two main files in the `support` folder are:

1. **`e2e.js`**: This file is loaded automatically before every test and is typically used to import custom commands, set up global configurations, or define behaviors like intercepting requests or handling uncaught exceptions.

2. **`commands.js`**: This file is where you define custom Cypress commands that can be reused across tests, making test scripts cleaner and more efficient.

The `e2e` folder in a Cypress project (short for "end-to-end") is where you store your **end-to-end test files**. These test files contain the actual test scripts that Cypress runs to simulate user interactions and verify that your application works as expected from start to finish.