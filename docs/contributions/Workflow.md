### Ideas
All good this start with an Ideas. At this state you are encourages to open an Issue and discuss your Idea with other.Before creating an Issue in GitHub it is recommended that you go through any past issues to prevent any duplication of efforts.It is advised that your issue should be structured as shown blew, this way all the participant in the discussion have clear picture of your idea.

```
Title: [Bug] Extension crashes when clicking on the options page

Description:
When a user clicks on the options page, the extension crashes unexpectedly. 

Steps to Reproduce:
1. Install the extension.
2. Click on the extension icon in the Chrome toolbar.
3. Navigate to the options page.
4. Observe the crash.

Expected Behavior:
The options page should open without crashing.

Screenshots/Logs:
[Attach any relevant screenshots or console logs]
```


### Triaging the Issue
The purpose of this step is to assess the importance, priority, and complexity of the issue. At this stage all all the participant are expected to direct constructive criticism towards the idea.During these discussions participants are request to be respectful and professional.

After these discussions there are three possible ways the issue can be handles, the Ideas is either Accepted, Stashed or tagged `wontfix` 
If Idea is viable it will be Accepted and work can be started on the Issue to move to the next stage.
However if the Idea is Stashed then the programmer can write there idea in `docs/incoming/ideas.md` so to keep it for future versions if the ideas become sustainable later on. 

### Getting the Hands Dirty
This stage is all about implement a solution in a form of a path and preparing the patch for the review. Below is the recommended workflow for writing a patch.
#### Create a New Branch 
All the patchwork for an Issue should be done in a separate branch for keeping the untested code separate form the production code. You can create a branch be using the following command 
```bash
git checkout -b issue-#<issue-num>-title
```

#### Implementing the Solution 
Finally you can do what you love the most, Implement the solution for the Issue. 

#### Write the Tests 
If applicable, write tests to cover the new code or to validate the bug fix. This project uses Cypress. To run all of the test just run the following command 
```
npm run tests
```
If you are interested in running the test interactively in Cypress Browser just run 
```
npm run cypress
```

#### Commit the Changes 
Well you seem confident in you changes, you should commit your changes to the local branch. The commit message should be atomic, clear and descriptive. Use the following command to commit the changes to the local branch.
```bash
git commit -m "Fix issue #<issue-num>: <commit-description>"
```
#### Push the Branch to you Fork 
Now its time to push your code to you fork using the command 
```bash
git push origin
```

### Pull Request 
After you have uploaded your branch to your fork ,you can open a pull request to merge the resolved code with the original codebase after review. Here are the steps to create an PR for the project
#### Open a Pull Request 
The first step is to navigate to the original repository and click on "Compare & pull request."

#### Link the Issue and write a Description 
In the PR description, reference the issue number to automatically link them (e.g., "Fixes #123"). Include a summary of the changes, how they address the issue, and any other relevant information (e.g., new dependencies).

Example for a well defined Pull Request is given below:
```
## Summary
This PR fixes the crash that occurs when users click on the options page in the Chrome extension. The root cause was identified as a [specific issue] in the options page component.

## Changes
- Fixed the error handling in the options page component.
- Added unit tests to cover the changes.
- Updated the options page layout to prevent similar issues in the future.

Fixes #123
```
### Reviews and Discussions  
At this stage reviewers will go through the Pull Request to ensure code quality and alignment with project standards.Reviewers check the code for correctness, style, performance, and alignment with project goals. They might leave comments directly on lines of code if needed or provide general feedback in the PR discussion. The original author should address the feedback by making additional commits to the same branch using the following command.
```bash
git commit -m "<Commit-Message>"
```
### Merging
Once all feedback is addressed, and the reviewers approve, the PR can be merged into the main branch. You can use "Squash and merge" or "Rebase and merge" to keep the commit history clean, if necessary.


