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

or you can (download the latest release)[https://github.com/clineamb/bootstrap-drawer/releases] from the release page.


## Installing

For more detailed use on the bootstrap-drawer framework, check out the [style guide documentation](http://clineamb.github.io/bootstrap-drawer).

### When using the full Bootstrap Framework:

```html
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
            <link rel="stylesheet" type="text/css" href="drawer.min.css">
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

### Javascript

The Javascript/jQuery plugin requires the `transition.js` file from the core Bootstrap
framework in order to work.  Usage is nearly the same as the [collapse](http://getbootstrap.com/javascript/#collapse) component, but checkout out the documentation for more detailed usage for `$('.drawer').drawer()`.  The events emitted are `*.bs.drawer`.

----------------------------------------------------

## License

Copyright (c) 2014, [Caroline Amaba](mailto:github@carolineamaba.com)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.