<?php
/**
 * Plugin Name: ${plugin_name}
 * Plugin URI: ${plugin_uri}
 * Description: ${description}
 * Version: ${version}
 */

defined( 'ABSPATH' ) or die( 'Direct script access diallowed.' );

/**
 * Set your plugin globals here:
 */
define('${DEFINE_BASE}_VERSION', '${version}');
define('${DEFINE_BASE}_BASE_FILE', plugin_basename(__FILE__));
define('${DEFINE_BASE}_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Delete this if you are NOT using Composer, but be sure to require files in include directory.
 */
require_once 'vendor/autoload.php';

/**
 * Use files from ./includes directory.
 */
${namespace}\App::init();
${namespace}\Ajax::init();
${namespace}\Registers::init();
