# wordpress-react-plugin

A simple boilerplate template for creating a WordPress plugin using React.

This is meant to be a starter template for creating WordPress plugins using React as your plugin's frontend. It is meant to be a minial starter that you can build off of or extend to fit your needs.

This project uses webpack instead of create-react-app because I feel like webpack gives you more flexability over your project's building compared to CRA.

This project also makes use of PHP `namespaces`.

## Directory Structure

The default structure for this project is:

```
wordpress-react-plugin/
└───frontend/
    └───src/
    |   │   App.js
    |   │   index.js
    |   │   style.css
    │   package.json
└───plugin/
    └───assets/
    └───includes/
    │   |    Ajax.php
    │   |    App.php
    │   |    Registers.php
|   plugin.php
|   composer.json
README.md
```

`frontend` is where all of your React/JavaScript code will go. Consider this your "development" directory for all things react. This project is setup to use bable and webpack to build your frontend javascript and CSS assets, minify them, and place them into the `plugin/assets/` directory to be used by your plugin.

`plugin` directory is for your WordPress plugin and should consist mainly of your plugin's PHP code. `plugin/plugin.php` is your main plugin file which will `include` all of the files your plugin needs. `plugin/includes/` direcotry should contain your plugin's business logic. The `plugin/assets` directory is where your JS, CSS, and images should go. Webpack is configured to compile your `frontend` CSS and JS files into `plugin/assets`.

`App.php` is the file that will create your plugin's menu in WordPress and have your frontend JS app load when a user clicks on the menu to your plugin.

`Ajax.php` is an example of how your plugin will handle ajax requests made by your frontend. If you are unfamiliar with how to handle ajax in WordPress plugins then read [this](https://codex.wordpress.org/AJAX_in_Plugins).

`Registers.php` is a helper class so you can register activation, deactivating, and uninstalling hooks for your plugin. You can remove this if you don't need it or want to handle these hooks differently.

## Requirements

- Webpack v5
- NodeJS v15.2.1
- Composer (optional)

## Setup/Installing

`git clone https://github.com/undeprecated/wordpress-react-plugin.git`

`cd frontend && npm install`

`cd frontend && npm run setup`

`cd plugin && composer install` (optional, see Note)

*NOTE:* If you are not using composer then make sure to remove `require_once 'vendor/autoload.php';` from your plugin.php file.


#### Setup Prompts

1. Plugin Name - Name of your plugin. Used for the WordPress Plugin Name heading of your plugin.php file.
1. Plugin Author - Author of your plugin.
1. Plugin URI - URI of your plugin.
1. Plugin Description - Plugin description.
1. Plugin Slug - Plugin slug. Automatically derived from plugin name. Setting this value will move `plugin\plugin.php` to `slug\slug.php`.
1. Plugin Version - Version number. Defaults to 1.0.0.
1. Namespace - namespace to use in your PHP files. Defaults to plugin name without spaces.
1. DEFINE_BASE - Used to prefix `define()` constants in your plugin. Defaults to value of namespace uppercased.

## Usage

Replace occurrences of `plugin` (include the directory) with the name of your WordPress plugin.

### development

Run `npm run watch`.

This project does not have any hot reloading so you will need to refresh your browser on each change to the frontend.

### build

Run `npm run build`.

This will compile your code and create a bundled version inside `plugin/assets/js/app.js`.

### deploy

When your plugin is ready to ship, then you should just need to zip up your `plugin` directory.