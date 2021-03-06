const fs = require("fs");
const path = require("path");
const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const base_path = path.resolve(__dirname, "../");

const options = {
  plugin_name: "",
  plugin_author: "",
  plugin_uri: "",
  plugin_slug: "", // defaults to santized plugin_name
  description: "",
  version: "1.0.0",
  namespace: "", // your php namespace
  DEFINE_BASE: "", // used for define('PLUGIN') constants
};

rl.question("Plugin Name: ", function (value) {
  options.plugin_name = value;
  rl.question("Plugin Author: ", function (value) {
    options.plugin_author = value;
    rl.question("Plugin URI: ", function (value) {
      options.plugin_uri = value;
      rl.question("Plugin Description: ", function (value) {
        options.description = value;
        rl.question("Plugin Slug: ", function (value) {
          options.plugin_slug = value;
          rl.question("Plugin Version: ", function (value) {
            options.version = value;
            rl.question("Namespace: ", function (value) {
              options.namespace = value;
              rl.question("DEFINE_BASE: ", function (value) {
                options.DEFINE_BASE = value;
                rl.close();
              });
              rl.write(create_base_define(options.namespace));
            });
            rl.write(create_namespace(options.plugin_name));
          });
          rl.write(options.version);
        });
        rl.write(create_slug(options.plugin_name));
      });
    });
  });
});

rl.on("close", function () {
  // @TODO: validate options
  // @TODO: check for quit ctrl+c commands
  run_setup();
  process.exit(0);
});

function run_setup() {
  build_template(options);
  // @TODO: install dependencies
  // npm install
  // $options.slug/composer install
}

/**
 * Replace our template files with prompted values.
 * @param {object} options - Values from cli prompt.
 */
function build_template(options) {
  // apply options to Ajax.php, App.php
  apply_options(options, [
    "plugin/plugin.php",
    "plugin/includes/Ajax.php",
    "plugin/includes/App.php",
    "plugin/includes/Registers.php",
  ]);
  // apply plugin slug to webpack.config.js
  apply_options(options, ["frontend/webpack.config.js"]);
  // apply namespace to composer.json
  apply_options(options, ["plugin/composer.json"]);
  // rename plugin/plugin.php to plugin/slug.php
  rename(
    path.join("plugin", "plugin.php"),
    path.join("plugin", options.plugin_slug + ".php")
  );
  // rename plugin directory to plugin slug
  rename("plugin", options.plugin_slug);
}

function apply_options(options, files) {
  files.forEach((file) => {
    let file_path = path.resolve(base_path, file);
    let data = fs.readFileSync(file_path, "utf8");

    for (const [key, value] of Object.entries(options)) {
      let find = "\\$\\{" + key + "\\}";
      let re = new RegExp(find, "g");

      data = data.replace(re, value);
    }

    fs.writeFileSync(file_path, data, "utf8");
  });
}

function rename(from_path, to_path) {
  fs.rename(
    path.resolve(base_path, from_path),
    path.resolve(base_path, to_path),
    function (err) {
      if (err) console.log("ERROR: " + err);
    }
  );
}

function create_slug(str) {
  str = str.replace(/['\.]/g, "");
  return str.toLowerCase().split(" ").join("-");
}

function create_namespace(str) {
  str = str.replace(/['\.]/g, "");
  return str.replace(/\s+/g, "");
}

function create_base_define(str) {
  str = str.replace(/['\.]/g, "");
  return str.toUpperCase();
}
