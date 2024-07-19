# Ticker
Ticker is an Open Source Chrome Extension that can (currently) manage your ToDo List. In near future it will be also able to manage your Google Calender, Google Task and Google Keeps. Transforming it into a single stop life management solution. 

### Notable Technologies Used
![Static Badge](https://img.shields.io/badge/Vite-Vite?style=flat&logo=vite&color=%23000000)
![Static Badge](https://img.shields.io/badge/React-React?style=flat&logo=react&color=%23000000)
![Static Badge](https://img.shields.io/badge/React_Router-React_Router?style=flat&logo=reactrouter&color=%23000000)
![Static Badge](https://img.shields.io/badge/TypeScript-TypeScript?style=flat&logo=typescript&color=%23000000)
![Static Badge](https://img.shields.io/badge/TailWind-TailWind?style=flat&logo=tailwindcss&color=%23000000)
![Static Badge](https://img.shields.io/badge/Zod-Zod?logo=zod&logoColor=white&labelColor=black&color=black)
![Static Badge](https://img.shields.io/badge/shadcnUI-shadcnUI?style=flat&logo=shadcnui&color=%23000000)
![Static Badge](https://img.shields.io/badge/ESLint-ESLint?style=flat&logo=eslint&color=%23000000)
![Static Badge](https://img.shields.io/badge/PostCSS-PostCSS?style=flat&logo=postcss&color=%23000000)

### Installation Instructions
As this extension is not present on Web Store the Install Instructions are little different. Clone this git by using `git clone <repo-url>` and open the terminal into this repository to run the following commands 

```bash
$ npm install
$ npm run build
```

This will create a `dist` folder inside the repository. Now open chrome browser and go to this URL : `chrome://extensions/` and then toggle `Developer Mode` at top right corner of the page.

This will reavel three buttons on the screen as shown blow 
![alt text](<ChromeScreenShort.png>)

Now click `Load Unpacked` and select the `dist` folder in repository and the Extension will be installed and listed in the Extension List on the same page.

### Uninstall Instructions 
The uninstall procedure is same as all other Extensions, just go to `chrome://extensions/` page on Chrome. Find the Ticker Extension Card and click `Remove` to uninstall.

### TODO
This section lists the things that I am currently working on for this Repo
- Nested Tasks
- Adding Google OAuth 
- Intigrating Google Tasks API
- Intigrating Google Calenders API
- Intigrating Google Keeps API