# wordpress-react-plugin

A simple boilerplate template for creating a WordPress plugin using React.

## About

This meant to be starter template for creating WordPress plugins using React as your plugins frontend. It is meant to be a minial starter that you can build off of or extend to fit your needs.

This project uses webpack instead of create-react-app because I feel like webpack gives you more flexability over your project's building compared to CRA.

This project also makes use of PHP `namespaces`.

### Requirements

- Composer
- Webpack v5
- NodeJS v15.2.1

### Usage

Replace occurrences of `plugin` (include the directory) with the name of your WordPress plugin. You will also want to update the PHP

#### development

Run `composer install`.

Run `npm run watch`.

#### build

Run `npmm run build`.
