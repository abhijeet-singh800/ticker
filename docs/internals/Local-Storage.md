This app uses the Chrome Local Storage for storing the Task and Task List data. This will change in future in favour of interacting with the Google Services like Tasks so that users will be ables to see the changes made reflecting in all there devices. But current lets study how this app store this data on the browser. 

The Chrome Local Storage can only store the data in form of strings, this means that all the data and objects created by the user must be converted to strings. This is done by methods present in the `/src/utils` provided to the programmers so they can code the components in much more declarative fashion. 

### Data Organization 
Data is organized in Local Storage over 4 key pair values. These 4 keys are as follows 
- isFirst
- settings
- task
- taskList

`isFirst` is an boolean value that signifies wither the app is used of the first time or not. `settings` is an object that that contains the settings for the app such as name of the user that is to be printed in the greetings on the home page.`task` and `taskList` are list of objects that contain there respective data.