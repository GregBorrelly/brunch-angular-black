# What is this?

This is a skeleton for [Brunch](http://brunch.io). It has support for:

 * AngularJS
 * AngularJS routes
 * HTML template compilation
 * Karma with Jasmine
 * Stylus

It also suggests a project structure that groups files by feature rather than type. I.e., all your scripts, templates and styles that are specific to your hypothetical chat feature go together in a folder called "chat" rather than scripts going in a global scripts folder, styles in a global styles folder, etc.

Here is the default structure:

```
app/
    assets/
        index.html
    welcome/
        welcome.js
        welcome.html
        welcome.spec.js
    app.js
    common.styl
```

`app.js` an `common.styl` contain the application configuration and global styles. You might put other things here too like user authentication, data model, etc. or maybe you put those in separate modules. The "welcome" group has a template, a controller and the welcome-specific styles as well as tests.

# What happens when I build?

Checkout `brunch-config.js` but the gist of it is that all the styles go into `css/common.css`, all the bower scripts as well as those in the `vendor` directory go into `js/vendor.js` and all the angular templates go into `js/templates.js`. Template paths start at `app` so if you have this:

```
app/
    foo/
        thing.html
```

then you reference it in angular like this:

```js
{
    ...
    templateUrl: "app/foo/thing.html"
    ...
}
```

# Gotchas

 * For some reason, angular goes into an infinite loop if you have an incorrect template URL in a route. A simple "template not found" error would be nice, but what do I know?
 * In order for karma to be able to run the unit tests, all the app's dependencies must be loaded. If you add stuff in `vendor/` or add bower components, make sure the correct files get added to `karma.config.js`.
 * On that note, also keep in mind that `templates.js` is an auto-generated file. If you are changing templates and running karma, make sure brunch is running too otherwise your tests will be using a stale templates module.
 