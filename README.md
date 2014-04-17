# What is this?

This is a skeleton for [Brunch](http://brunch.io). It has support for:

 * AngularJS
 * AngularJS routes
 * HTML template compilation
 * Stylus

It also suggests a project structure that groups files by feature rather than type. I.e., all your scripts, templates and styles that are specific to your hypothetical chat feature go together in a folder called "chat" rather than scripts going in a global scripts folder, styles in a global styles folder, etc.

Here is the default structure:

```
assets/
    index.html
core/
    scripts/
        app.js
    styles/
        common.styl
welcome/
    scripts/
        welcome.js
    templates/
        welcome.html
```

There are two, let's use the word *groups*, "core" and "welcome". "core" contains the application configuration and common styles. You might put other things here too like user authentication, data model, etc. The "welcome" group has a template, a controller and the welcome-specific styles.

This structure uses an awful lot of directories but can be helpful for larger projects.

# What happens when I build?

Checkout `brunch-config.js` but the gist of it is that all the styles go into `css/common.css`, all the bower scripts as well as those in the `vendor` directory go into `js/vendor.js` and all the angular templates go into `js/templates.js`. Template paths start at `app` so if you have this:

```
app/
    foo/
        templates/
            thing.html
```

then you reference it in angular like this:

```js
{
    ...
    templateUrl: "app/foo/templates/thing.html"
    ...
}
```
