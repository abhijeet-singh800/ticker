This section of the documentation will discuss the internals of the Project in technical manner so any future developer have to right perspective when they decide to jump onboard. 

This is the list of the technologies used in the extension.

![Static Badge](https://img.shields.io/badge/Vite-Vite?style=flat&logo=vite&color=%23000000)
![Static Badge](https://img.shields.io/badge/React-React?style=flat&logo=react&color=%23000000)
![Static Badge](https://img.shields.io/badge/React_Router-React_Router?style=flat&logo=reactrouter&color=%23000000)
![Static Badge](https://img.shields.io/badge/TypeScript-TypeScript?style=flat&logo=typescript&color=%23000000)
![Static Badge](https://img.shields.io/badge/TailWind-TailWind?style=flat&logo=tailwindcss&color=%23000000)
![Static Badge](https://img.shields.io/badge/Zod-Zod?logo=zod&logoColor=white&labelColor=black&color=black)
![Static Badge](https://img.shields.io/badge/shadcnUI-shadcnUI?style=flat&logo=shadcnui&color=%23000000)
![Static Badge](https://img.shields.io/badge/ESLint-ESLint?style=flat&logo=eslint&color=%23000000)
![Static Badge](https://img.shields.io/badge/PostCSS-PostCSS?style=flat&logo=postcss&color=%23000000)

Before jumping into the details of the extension you should be familiar with the overall organization of the project.
- `src/pages` contains the code for the pages that are going to be displayed on the extension.
- `src/components` contains all the components that we use to create pages for the extension.
- This extension uses the [ShadcnUi](https://ui.shadcn.com/) components as a starting point for creating our own custom components to be used as building blocks, all the the code related the ShadcnUI Component Library is stored in  `src/shadcn`
- There are utilities programs that greatly help with the developer experience, these utilities are present in `src/utils`



