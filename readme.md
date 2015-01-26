# bootstrap-drawer

A [Bootstrap](http://getbootstrap.com) add-on to create drawer (off-canvas) styled navigation.

## 1/25/2015

This readme was written assuming the documentation was done.  Currently, the
documentation is a work-in-progress, but feel free to checkout the example folder
and use the quickstart to start using this!

Also, had to change the name from "offcanvas" to drawer, because bootstrap-offcanvas
was already taken.

----------

As of Bootstrap 3.2.2, there is no "drawer" element - a drawer-like menu that
goes off screen.  This is an add-on to the core Bootstrap framewrk that adds various
`.drawer` classes to quickly and easily create the drawer component.

This Readme is actually a quick start. [Check out the full documentation](http://clineamb.github.io/bootstrap-drawer) for detailed
usage and style guide.

**Version:** 0.9.0

## Requirements

*  [Bootstrap](http://getbootstrap.com)
*  [jQuery](http://jquery.com/) (already a Bootstrap dependency)
*  [Node](http://nodejs.org/)/[io.js](https://iojs.org/) & [gulp](http://gulpjs.com/) if you want to build your own version.

## Download

### Get it via Bower or NPM:

`bower install bootstrap-drawer` / `npm install bootstrap-drawer`

or you can [download the latest release](https://github.com/clineamb/bootstrap-drawer/releases) from the release page.


## Installing

For more detailed use on the bootstrap-drawer framework, check out the [style guide documentation](http://clineamb.github.io/bootstrap-drawer).

### When using the full Bootstrap Framework:

```html
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
            <link rel="stylesheet" type="text/css" href="bootstrap-drawer.min.css">
            <link rel="stylesheet" type="text/css" href="YOUR_OTHER_STYLES.css">
        </head>
        <body class="has-canvas">
            <!-- Off Canvas & other HTML here -->
            <script src="jquery.min.js"></script>
            <script src="bootstrap.min.js"></script>
            <script src="drawer.min.js"></script>
            <script src="YOUR_CUSTOM_JS.js"></script>
        </body>
    </html>
```

### Basic Usage

You can check out [example/index.html](example/index.html) for a more robust example,
but the basic usage is very similar to using Bootstrap's col-SIZE-# classes, when it comes
to sizing the component.  In addition, the inner elements (`.drawer-heading`, `-nav/-navfull`,
 `-body`, `-footer`) are similar to how the `.panel` class family works.

 The `.fold` class starts the drawer closed.  Becomes `.fold.open` when it's opened.

 The sizing classes are dictated by the screen size to be responsive.  `.dw-SIZE-12` will cover
 the whole screen/canvas of that size.  If you want to use the drawer in another container
 instead of the `<body>`, check out [the full documentation](http://clineamb.github.io/bootstrap-drawer).

```html
    <body class="has-drawer"> <!-- add this class to your body for proper sizing -->
        <div id="drawerExample" class="drawer dw-xs-10 dw-sm-6 dw-md-4 fold" aria-labelledby="drawerExample">
            <div class="drawer-controls">
                <a href="#drawerExample" data-toggle="drawer" href="#drawerExample" aria-foldedopen="false" aria-controls="drawerExample" class="btn btn-primary btn-sm">Menu</a>
            </div>
            <div class="drawer-contents">
                <div class="drawer-heading">
                    <h2 class="drawer-title">Menu</h2>
                </div>
                <div class="drawer-body">
                    <p>
                        This is a properly padded container for content in the
                        drawer that isn't a navigation.
                    </p>
                    <a href="#">A Regular Link</a>
                </div>
                <ul class="drawer-nav">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Profile</a></li>
                    <li role="presentation"><a href="#">Messages</a></li>
                </ul>
                <div class="drawer-footer">
                    <small>&copy; Caroline Amaba</small>
                </div>
            </div>
        </div>
        <div class="container">
            <!-- content as per usual -->
        </div>
    </body>
```

### Using LESS

I am assuming for this section you are familiar with using less and the Bootstrap less source. 
There are files in the `less/` directory that are parallel to Bootstrap's less source files.
`drawer.less` already includes its custom variable package as well as less loop framework.
To include the less in your build files, you can do one of the following:

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

Feel free to move `drawer-variables.less` and `drawer-framework.less` to appropriate
folders to maintain bootstrap structure.  The component's variables rely on a few variables from the core bootstrap framework, likewise for the mixin framework.  Be sure to simply include them after the bootstrap core variables/mixins files:

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

### Building Your Own Flavor of Drawer

You'll need [gulp](http://gulpjs.com/) if you want to build your own version.

Most of the tasks are outlined in `gulpfile.js`.  The `gulp build` will also update
the assets for `example/index.html` so you can see your changes.

To customize bootstrap-drawer, just edit some of the variables in `less/drawer-variables.less` to
the sizes and colors, etc. you want.  Then run `gulp build` and a new `dist/css/bootstrap-drawer(.min).css` 
should be made just for you!  Include the file right after the Bootstrap core file, and you should be
good to go!  

Things to keep in mind:
*  bootstrap-drawer uses some variables (`@grid-gutter-width`, `@zindex-navbar-fixed`, `@link-color`, to
name most of them), so if you're using a different `varibles.less file`, be sure to replace it in
`less/bootstrap-drawer.less`.

### Javascript

The Javascript/jQuery plugin requires the `transition.js` file from the core Bootstrap
framework in order to work.  Usage is nearly the same as the [collapse](http://getbootstrap.com/javascript/#collapse) component, but checkout out the documentation for more detailed usage for `$('.drawer').drawer()`.  The events emitted are `*.bs.drawer`.

----------------------------------------------------

## License

Copyright (c) 2014, [Caroline Amaba](mailto:github@carolineamaba.com)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.