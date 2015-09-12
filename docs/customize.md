## Drawer Customization

**bootstrap-drawer** comes with some built-in classes to customize some basics about your drawer. These utility classes are modeled after Bootstrap's Navbar components.

----------

## Position

Sometimes you might want the drawer to the right.  You can do this quickly by adding `.drawer-right` to the `.drawer` container.

```html
<div id="drawerExample2" class="drawer drawer-right ...">
    ...
</div>
```

<div class="panel panel-default has-inner-drawer example-container-right">
    <div id="drawerExample2" class="drawer drawer-right drawer-inside dw-xs-5 fold" aria-labelledby="drawerExample2">
        <div class="drawer-controls">
            <a href="#drawerExample2" data-toggle="drawer" href="#drawerExample2" aria-foldedopen="false" aria-controls="drawerExample2" class="btn btn-primary btn-sm">Menu</a>
        </div>
        <div class="drawer-contents">
            <div class="drawer-heading">
                <strong>right menu example</strong>
            </div>
            <ul class="drawer-nav">
                <li role="presentation" class="active"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
    <div class="panel-body">
        <p>You can position the drawer to the right by adding the <code>.drawer-right</code> class.  This also works on full-page drawers.</p>
    </div>
</div>

----------

## Inverse Color

Like the Bootstrap navbar, there is an inverse color option to the drawer.  Just add `.drawer-inverse` to your `.drawer` container.

```html
<div id="drawerExample2" class="drawer drawer-inverse ...">
    ...
</div>
```

<div class="panel panel-default has-inner-drawer example-container">
    <div id="drawerExample3" class="drawer drawer-inverse drawer-inside dw-xs-5 fold" aria-labelledby="drawerExample3">
        <div class="drawer-controls">
            <a href="#drawerExample3" data-toggle="drawer" href="#drawerExample3" aria-foldedopen="false" aria-controls="drawerExample3" class="btn btn-primary btn-sm">Menu</a>
        </div>
        <div class="drawer-contents">
            <div class="drawer-heading">
                <strong>inverse menu example</strong>
            </div>
            <ul class="drawer-fullnav">
                <li role="presentation" class="active"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
    <div class="panel-body">
        <p>You can inverse the drawer color (like navbar) by adding <code>.drawer-inverse</code> class.</p>
    </div>
</div>