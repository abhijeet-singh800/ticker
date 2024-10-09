Before you start contributing, you’ll need to set up the project on your local machine. This document will walk you through setting up your development environment in your local machine. 

### Prerequisites
You will need to have the following tools installed on you local machine for development
- Node.js 
- npm 

### DevEnv Setup 
#### Fork the Repository
Fork the Repo on GitHub onto your own profile. 
#### Clone the Fork 
Clone the Repo toy you local machine using the following command 
```
git clone https://github.com/your-username/ticker
```
#### Install Dependencies
In the project folder run the following command to prompt `npm` to install all the Dependencies
```
npm install
```
This will create a `node_modules` folder and install all the dependencies there.
#### Build the Extension
You can build the extension with the following command
```
npm run build
```
This will create a `dist` folder where it will store all the compiled code that is ready for production environment. 
#### Running the Project in Different Environment
During development you can run different command to view the project in different environments. If you want to run the project in developer Environment run the following command 
```
npm run dev
```
And if you want to run the project in the production environment run 
```
npm run preview
```
#### Load the Extension
Open `chrome://extensions/` in Chrome and enable Developer Mode.Click "Load unpacked" and select the `dist` directory. 