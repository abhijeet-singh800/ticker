Documentation for a project is as important as the project itself, because if the documentation of a project is bad no one will use the project. Here are some reproducible steps for everyone to make changes to the documentation of the project.

#### Change in the appropriate files
First make change to the appropriate files. Make sure that the documentation reflect any changes in the internal working of the application. After that you just need to push those change to the GitHub

#### Committing and Pushing Changes  
Before pushing we need to commit the changes, and assuming that the only thing you did was to modify the docs you need to run the following commands. 

```
git add * 
git commit -m 'Updated Wiki'
```

After this just push the command to you remote branch using the following command 
```
git push
```

#### Pull Request 
After pushing the command to your remote branch you need just one extra step that is to create a pull request to the main branch. After that pull request is accepted then GitHub Actions will take over and automatically publish those changes to the Repository's Wiki section.