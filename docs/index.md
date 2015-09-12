## What Is It?

[bootstrap-drawer](http://github.com/clineamb/bootstrap-drawer) is a Bootstrap add-on/plugin that, in Bootstrap style, adds an "off-canvas" element to your pages and containers. We call it a "drawer" in these parts.*

I've looked around for fast-and-easy ways of implementing this constantly (and consistently), and I've had to rebuild it a few times. Tired of doing this, I created this! I imagine there's a lot of people like me looking for something like this, especially one that easily works with their front-end framework of choice, Bootstrap.

<small>* Mostly because "bootstrap-offcanvas" was taken, and I've always referred to it as a mobile "drawer".</small>

----------

## Requirements

<a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> is required for this plugin, since bootstrap-drawer is built on top of the framework. (Thus, <a href="http://jquery.com" target="_blank">jQuery</a> is also required.)

### Download

`bower install bootstrap-drawer` or `npm install bootstrap-drawer`

You can also find all the release on the <a href="https://github.com/clineamb/bootstrap-drawer/releases" target="_blank">GitHub repo releases page</a>.  For your convenience, here are some links to the latest releases:

<a href="http://github.com/clineamb/bootstrap-drawer/releases/latest" target="_blank" class="btn btn-lg btn-primary"><i class="fa fa-github-alt"></i> Get Latest Vesion (1.0.1)</a>
<a href="http://github.com/clineamb/bootstrap-drawer/archive/1.0.1.zip" target="_blank" class="btn btn-lg btn-primary"><i class="fa fa-archive"></i> Download bootstrap-drawer-1.0.1.zip</a>

----------

## Basic Setup

If you simply just want to quickly use bootstrap-drawer with Bootstrap, you just need to include `dist/bootstrap-drawer.css` after Bootstrap, and then include any other files after that.

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

## Basic Usage

### Full Page Drawer

To get a simple, full-page drawer, like the one here in the docs, simply add `.has-drawer` to your body, and add the `.drawer` container like so:

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

### Container-nested Drawer

<div class="panel panel-default has-inner-drawer example-container">
    <div id="drawerExample2" class="drawer drawer-inside dw-xs-5 fold" aria-labelledby="drawerExample2">
        <div class="drawer-controls">
            <a href="#drawerExample2" data-toggle="drawer" href="#drawerExample2" aria-foldedopen="false" aria-controls="drawerExample2" class="btn btn-primary btn-sm">Menu</a>
        </div>
        <div class="drawer-contents">
            <div class="drawer-heading">
                <h2 class="drawer-title">Menu</h2>
            </div>
            <ul class="drawer-nav">
                <li role="presentation" class="active"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
    <div class="panel-body">
        <p>You can also nest the drawer in a block container by adding the <code>.drawer-inside</code> class to <code>.drawer</code> and adding <code>.has-inner-drawer</code> to your parent container, like so:</p>
        <p>You can also use panels inside of other elements that have a defined with and height. A <code>z-index</code> will also need to be defined.</p>
        <p>You'll also have to make sure that you give your controls (however you do them) are visible. In this example, the `.panel-body` was given `padding-left: 10%` so that the Menu button isn't running into the content of the panel.</p>
    </div>
</div>

```html
<div class="panel panel-default has-inner-drawer">
    <div id="drawerExample2" class="drawer drawer-inside dw-xs-5 fold" aria-labelledby="drawerExample2">
        <div class="drawer-controls">
            <a href="#drawerExample2" data-toggle="drawer" href="#drawerExample2" aria-foldedopen="false" aria-controls="drawerExample2" class="btn btn-primary btn-sm">Menu</a>
        </div>
        <div class="drawer-contents">
            <div class="drawer-heading">
                <h2 class="drawer-title">Menu</h2>
            </div>
            <ul class="drawer-nav">
                <li role="presentation" class="active"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
    <div class="panel-body" style="padding-left: 10%">
        <p>You can also use panels inside of other elements that have
        a defined with and height.</p>
        <p>You'll have to be responsible for making sure your controls accessible.</p>
    </div>
</div>
```
<br>

## bootstrap-drawer components

**bootstrap_drawer** was built with a Bootstrap-minded style.  The classes used are very similar to the `.nav` and `.panel` classes in Bootstrap.  The Bootstrap `data-api` for toggling the drawer is, likewise, built like `.collapse` and its javascript component.

bootstrap-drawer does **not** (yet) have a class that expands to a navbar on bigger screens. For now, the main focus of bootstrap-drawer was to do one thing well.  In a later version, there may be an additional ".drawer-navbar" class to remove the drawer on larger screens.


### Class Breakdown

`.drawer` is the main class.  The sizing system is based on the 12-column system of Bootstrap, using `.dw-SIZE-#COLS`.  The drawer is built mobile-first, like the rest of Bootstrap, and the size in width is based on the document's fluid width (a percentage of it, based on the columns).  This size becomes relative when using it inside another container.

`.fold` started the menu closed (`.fold.open` starts the menu opened).  This class, as well as the
[javascript component](javascript.html) are built similarly to the `.collapse` components.  It had to
be named differently because bootstrap-drawer is folding horizontally and not collapsing vertically.

```html
<div class="drawer dw-xs-10 dw-sm-6 dw-md-4 fold">
    ...
</div>
```

`.drawer-controls` is a special drawer column made to house a toggle button for the drawer that moves with the component.  It's an optional piece, since the menu can be toggled by other buttons either using the built-in `data-toggle="drawer"` or the jQuery API (`$('.drawer').drawer();`).

```html
<div id="drawerExample2" class="drawer dw-xs-5 fold" aria-labelledby="drawerExample2">
    <div class="drawer-controls">
        <a href="#drawerExample2" data-toggle="drawer" href="#drawerExample2" aria-foldedopen="false" aria-controls="drawerExample2" class="btn btn-primary btn-sm">Menu</a>
    </div>
    <div class="drawer-contents">
        ...
    </div>
</div>
```
<br>

#### Drawer Contents

`.drawer-contents` wraps the main parts of the drawer: `.drawer-heading`, `.drawer-body`, `.drawer-nav` / `.drawer-fullnav`, `.drawer-footer`.  These classes are very similar to how Bootstrap's `.panel` inner classes work.  

`.drawer-nav` and `.drawer-fullnav` are already-built nav classes that are based on the `.nav.nav-pills.nav-stacked` combination of classes.  The difference between the two is that `.drawer-nav` has padding on the left and right, while `.drawer-fullnav` goes the entire width of the drawer.

You can use `.drawer-body` to wrap you own navigation, as well, or just include content.

**DEMOS:**

<div class="row">
    <div class="col-xs-12 col-sm-6">
        <div class="panel panel-default has-inner-drawer example-container">
            <div id="drawerExample3a" class="drawer drawer-inside dw-xs-8 fold open">
                <div class="drawer-contents">
                    <div class="drawer-heading">
                        <h4 class="drawer-title">.drawer-nav example</h4>
                    </div>
                    <ul class="drawer-nav">
                        <li role="presentation" class="active"><a href="#">Link</a></li>
                        <li role="presentation"><a href="#">Link</a></li>
                        <li role="presentation"><a href="#">Link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6">
        <div class="panel panel-default has-inner-drawer example-container">
            <div id="drawerExample3a" class="drawer drawer-inside dw-xs-8 fold open">
                <div class="drawer-contents">
                    <div class="drawer-heading">
                        <h4 class="drawer-title">.drawer-fullnav example</h4>
                    </div>
                    <ul class="drawer-fullnav">
                        <li role="presentation" class="active"><a href="#">Link</a></li>
                        <li role="presentation"><a href="#">Link</a></li>
                        <li role="presentation"><a href="#">Link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

`.drawer-heading`, like `.panel-heading`  is specially styled to be the top of the drawer.  In addition, there is a `.drawer-title` class that can be put within `.drawer-heading` for a specially styled `<h#>` tag.

`.drawer-footer` finishes off the components of the drawer (again, like `.panel-footer`).  Additionally, by giving the `.drawer-footer` an additional `locked` class, the footer will then stick to the bottom of the drawer.  This is absolutely positioned within the drawer, and you should be careful that your content does not overlap the `.drawer-footer`.