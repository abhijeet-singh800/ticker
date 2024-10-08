This document aims to explain `src` folder of the repository that contains the main code for the project. Reading this document you will have a strong understanding for the code of this project. As mentioned in the `Repository Structure` this folder has levels hierarchy based structure. 
<div align="center">
<img src="media/structure.png" alt="App Structure" width='350'/>
</div>

To build an deep understanding of the project we will start form the bottom of this structure and lead upwards. The bottom most components are Shadcn-UI Components that are imported form the UI Component Library Library and Utilities written for easy access to some core functionalities while working on more higher levels.

### Shadcn UI Components 
These are React Components that have been imported form the [Shadcn UI](https://ui.shadcn.com/) Component Library. This component is build on Tailwind and Radix UI, and all of the code for the components is present in `/src/shadcn/components/ui` in form of `tsx` files that you can import in above levels. These components are designed to be used as starting point, to be modified and used as your application demands.Documentation for these components is provide on [Shadcn Docs](https://ui.shadcn.com/docs).

### Utilities 
This project uses Chrome's Local Storage for storing user data, without ever accessing internet. All the files in `/src/utils` are provide easy to use methods for interacting with Local Storage and processing the data generated by these operations. 

#### `data.ts`
This file is used to define all the TypeScript data types that are going to be required while programming the upper levels of the project. Currently these are `TaskListObj` , `TaskObj` and `Settings`. 

`TaskListObj` is a TS type that is used for static type check for all the Objects stored in Local Storage related to Task Lists for the repo and is imported when interacting with this type of data. 

`TaskObj` is a TS type that is concerned about the Task Objects. These object store the Task created by used and accompanying information about the task.

`Settings` type defines the Setting object stored in Local Storage that is used for storing App Settings like the names user enters in the onboarding process.

#### `local.ts`
This modules is concerned about providing helper function to perform I/O operation on the Chrome Local Storage. These function can be imported by higher level components to perform I/O tasks easily. This files provide `get` and `set` methods for all type of data defined in `data.ts` plus one more variable `isFirst` that tracks that weather this app is opened for the first time or not. 

As the Local Storage can only store data in form of `Strings` these methods also stringify and parse the data weather its written or read for the Local Storage so that all the above levels have useable objects without any further processing. 

#### `utils.ts`
Data stored is stored in the Local Storage in form of List of Objects (after getting processed) in most cases. The methods present in this file will provide you with ways to perform CRUD operations on this data in a declarative fashion without worrying about the inner details.

In this file there are methods for creating, reading, updating and deleting both the data types for the app that are `TaskObj` and `TaskListObj`

### Components
These modules are independent UI components are are mixed together to form Pages (higher level modules).Code for all of these modules is stored in `/src/components`. These may or may not be used at multiple places, this help reduce the code for the App. These modules are inturn formed by using `Shadcn` components as an starting point and combining it with `Utilities`. 

### Pages 
Pages represent the modules that are full page interfaces for the user to interact with like the home page of the application. These modules are stored in `src/pages` and are made from using different `Components` together, sometimes in different configurations. For example `/src/components/TaskForm.tsx` is used in both `/src/pages/New.tsx` and `/src/pages/Task.tsx` but in `New.tsx` its used as a form to create a new Task Object in the local storage where is in `Task.tsx` its used as a form that is for updating previous data. 

### Applications 
This is the module where it all comes together into a single application. This modules imports all the Applications and manages the shared state between them. With the help of React Router it also redirects the user to appropriate logics. Thus modules is `/src/App.tsx` and contains all the logic for state management and page routing.