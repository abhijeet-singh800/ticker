# Building Distribution Files 
Building Distribution Files is quite a simple process you just need to run the command 
```bash
npm run build
```

This will create a dist folder in the root directory of the project that is ignored by Git. This will have all the distribution files. Now if you want to install the extension based on this files you just need to go to the extension page by visiting `chrome://extensions/` and switch on Developer Mode on the top right corner of the screen.

Now click on the Load unpacked on the top left corner of the screen and select the distribution folder downloaded prior, now you are ready to use the extension.
<img src="/screenshots/ChromeScreenShort.png" alt="Home Page Screenshot" style="display: block; margin:auto; box-shadow: 0 0 10px grey; margin-top:50px; margin-bottom:50px;" width='500'/>