### Utilities 🧰
As discussed in the `00intro.md`  the `utils` folder provides programs to improve the developer experience. These include some backend-frontend links and TypeScript types for exporting to be used all over the project.

Following is a brief note about the purpose of the files in the utilities folder
- `data.ts` has TypeScript classes that are exported so it can be used in different part of the object.
- `local.ts` has function that interact with the local storage.
- `utils.ts` contains all the utility functions that provide easy to use ways to perform CRUD operations on the data.

`utils.ts` act as the bridge between the backend and frontend of the project. This is designed in such a manner so that the frontend part of the project is decoupled form the backend, if in the future the community decides to change the backend of the project it would turn out to be comparatively easier.