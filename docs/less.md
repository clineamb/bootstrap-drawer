## LESS / Custom Builds

If you're familiar with <a href="http://lesscss.org" target="_blank">LESS</a>, bootstrap-drawer has less files that you can use to either build your own custom bootstrap-drawer or directly incoroprate with other LESS files in your project.

bootstrap-drawer currently uses Gulp and LESS, but it'd be great if people can contribute grunt and SASS components! <a href="http://github.com/clineamb/bootstrap-drawer" target="_blank">Check out the repo to contribute</a>!

--------

### Building Your Own Flavor of Drawer

You'll need <a href="http://gulpjs.com" target="_blank">gulp</a> and <a href="http://nodejs.org" target="_blank">Node</a> if you want to build your own version.

Run `npm install` in order to get all the devDependencies from the `package.json`.

Most of the tasks are outlined in `gulpfile.js`.  The `gulp build` will also update the assets for `example/index.html` so you can see your changes.

To customize bootstrap-drawer, just edit some of the variables in `less/drawer-variables.less` to the sizes and colors, etc. you want.  Then run `gulp build` and a new `dist/css/bootstrap-drawer(.min).css` should be made just for you!  Include the file right after the Bootstrap core file, and you should be good to go!  

Things to keep in mind:
*  bootstrap-drawer uses some variables (`@grid-gutter-width`, `@zindex-navbar-fixed`, `@link-color`, to
name most of them), so if you're using a different `varibles.less file`, be sure to replace it in `less/bootstrap-drawer.less`.
*  The `.dw-SIZE-#` columns are built in LESS loops, and can change as you change the `@grid-columns` variable. If you're using 16-columns instead of 12, `less/mixins/drawer-framework.less` is built to build more columns (like `.dw-md-13`, etc.).


---------

### Using Less

I am assuming for this section you are familiar with using less and the Bootstrap less source. There are files in the `less/` directory that are parallel to Bootstrap's less source files. `drawer.less` already includes its custom variable package as well as less loop framework. To include the less in your build files, you can do one of the following:

#### Add to your main less file after bootstrap

```less
    @import "bootstrap.less";
    @import "path/to/drawer.less";

    /* Your styles */
```

#### Add to bootstrap.less

```less
    @import "variables.less";
    @import "mixins.less";

    // Bootstrap Core
    // ...

    // ... etc ...

    // Components w/ JavaScript
    @import "modals.less";
    @import "tooltip.less";
    @import "popovers.less";
    @import "carousel.less";
    @import "path/to/drawer.less";

    // Utility Classes
    // ... etc ...
```

#### Move Contents

The first two lines in `less/drawer.less` can be removed and moved

Feel free to move `drawer-variables.less` and `drawer-framework.less` to appropriate folders to maintain bootstrap structure.  The component's variables rely on a few variables from the core bootstrap framework, likewise for the mixin framework.  Be sure to simply include them after the bootstrap core variables/mixins files:

*  `@import "./drawer-variables";` can be put after importing `variables.less`
*  `@import "./mixins/drawer-framework";` can be put after importing `mixins.less`

```less
    @import "variables.less";
    @import "path/to/drawer-variables.less"
    @import "mixins.less";
    @import "path/to/drawer-framework.less";

    // Bootstrap Core
    // ...

    // ... etc ...

    // Components w/ JavaScript
    @import "modals.less";
    @import "tooltip.less";
    @import "popovers.less";
    @import "carousel.less";
    @import "path/to/drawer.less";

    // Utility Classes
    // ... etc ...
```