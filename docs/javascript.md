## Component jQuery API

Bootstrap drawer comes with `drawer.js` to be added to the `bootstrap.js` component suite.  If you're including separate components, `drawer.js` depends on `transition.js` plugin.

`drawer.js` is built similarly to `collapse.js`.

----------

### Example

<div class="panel panel-default has-inner-drawer example-container-right">
    <div id="drawerExample2" class="drawer drawer-inside dw-xs-5 fold" aria-labelledby="drawerExample2">
        <div class="drawer-contents">
            <div class="drawer-heading">
                <strong>Button/Link Toggle Example</strong>
            </div>
            <ul class="drawer-nav">
                <li role="presentation" class="active"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
                <li role="presentation"><a href="#">Link</a></li>
            </ul>
        </div>
    </div>
    <div class="panel-body">
        <div class="row">
            <div class="col-xs-6">
                Try the buttons over there to toggle the menu that pops out on the left!
            </div>
            <div class="col-xs-6">
                <p>
                    <a href="#drawerExample2" data-toggle="drawer" aria-expanded="false" aria-controls="drawerExample2" class="btn btn-primary">Link with href</a>
                </p>
                <p>
                    <button class="btn btn-info" type="button" data-toggle="drawer" data-target="#drawerExample2" aria-expanded="false" aria-controls="drawerExample2">
                        Button with data-target
                    </button>
                </p>
            </div>
        </div>
    </div>
</div>


### Usage

The drawer plugin utilizes a few classes to do all the work:

* `.fold` hides content
* `.fold.open` shows content.
* `.folding` is applied during transitions, and removed when it finishes.

These classes can be found in `less/mixins/drawer-framework.less`.  They are built in loops with the `.dw-SIZE-#` classes because they utilize margins based on the column width.

#### Via data attributes

Just add `data-toggle="drawer"` and a data-target to the element to automatically assign control of drawer element. The data-target attribute accepts a CSS selector to apply the folding animation to. Be sure to add the class `.fold` to the collapsible element. If you'd like it to default open, add the additional class `.open`.

#### Via JavaScript

Enable manually with:

```js
$('.drawer').drawer();
```

#### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-parent=""`.

<table class="table table-bordered">
    <tr class="active">
        <th width="15%">Name</th>
        <th width="15%">selector</th>
        <th width="15%">default</th>
        <th width="45%">description</th>
    </tr>
    <tr>
        <td>parent</td>
        <td>selector</td>
        <td>false</td>
        <td>If a selector is provided, then all collapsible elements under the specified parent will be closed when this drawer is open.</td>
    </tr>
    <tr>
        <td>toggle</td>
        <td>boolean</td>
        <td>true</td>
        <td>Toggle the drawer element on invocation.</td>
    </tr>
</table>

#### Methods

##### .drawer(options)

Activates your content as a drawer element.  Accepts an optional options `object`.

```js
$('#myDrawer').drawer({
    toggle: false
});
```

##### .drawer('toggle')

Toggles a drawer element as folded or open.

##### .drawer('show')

Shows drawer element as opened.

##### .drawer('hide')

Hide a drawer element.

#### Events

drawer-bootstrap drawer class exposes drawer events (very similarly to how Bootstrap collapse) for hooking
into the drawer functionality.

<table class="table table-bordered">
    <tr class="active">
        <th width="25%">Event Type</th>
        <th width="75%">Description</th>
    </tr>
    <tr>
        <td>show.bs.drawer</td>
        <td>This event fires immediately when the `show` instance method is called.</td>
    </tr>
    <tr>
        <td>shown.bs.drawer</td>
        <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
        <td>hide.bs.drawer</td>
        <td>This event is fired immediately when the `hide` method has been called.</td>
    </tr>
    <tr>
        <td>hidden.bs.drawer</td>
        <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
</table>

```js
$('#myDrawer').on('hidden.bs.drawer', function() {
    // do something here...
});
```