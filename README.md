# wordpress-react-plugin

A simple boilerplate template for creating a WordPress plugin using React.

This meant to be starter template for creating WordPress plugins using React as your plugins frontend. It is meant to be a minial starter that you can build off of or extend to fit your needs.

This project uses webpack instead of create-react-app because I feel like webpack gives you more flexability over your project's building compared to CRA.

This project also makes use of PHP `namespaces`.

## Requirements

- Composer
- Webpack v5
- NodeJS v15.2.1

## Setup/Installing

`npm run setup`

`npm install`

`composer install`

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

Replace occurrences of `plugin` (include the directory) with the name of your WordPress plugin. You will also want to update the PHP

### development

Run `npm run watch`.

### build

Run `npmm run build`.
