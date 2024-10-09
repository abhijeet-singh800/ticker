GitHub Actions is a CI/CD (Continuous Integration and Continuous Deployment) tool that automates workflows directly within GitHub. It allows users to define custom tasks, called "actions," that run in response to events like pushing code, creating pull requests, or publishing releases. These workflows are defined in YAML files and can automate tasks like testing, building, and deploying applications. Actions run in virtual environments, such as Ubuntu, Windows, or macOS, and can integrate with other services or APIs.

There are currently two Actions defined for this repo , YAML files for these actions can be found in `.github/workflows` folder in the repo

# Cypress Tests Action 
`.github/workflows/cypress-tests.yml`

Cypress is a testing library that is used to perform E2E testing for this project. This action is responsible for testing all of the code pushed to the repository. It runs on every push to every branch of the repository and executes all the tests stored in `cypress` folder in a Chrome environment.

# Publish Wiki Action
`.github/workflows/publish-wiki.yml`

This project uses GitHub Wiki to document itself and this actionsis responsible for enabling the developers to write the wiki in a continuous integration manner. This action is triggered when you push to the master brach and there are some changes in the `docs` or action file. Once triggered this will publish the wiki by rebuilding every time form the files in the `docs` this ensure there are no pages form the previous versions of the wiki still in the project. 