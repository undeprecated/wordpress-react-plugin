<?php
/**
 * Plugin Name: ${plugin_name}
 * Plugin URI: ${plugin_uri}
 * Description: ${description}
 * Version: ${plugin_version}
 */

defined( 'ABSPATH' ) or die( 'Direct script access diallowed.' );

/**
 * Set your plugin globals here:
 */
define('${DEFINE_BASE}_VERSION', '${version');
define('${DEFINE_BASE}_BASE_FILE', plugin_basename(__FILE__));
define('${DEFINE_BASE}_PLUGIN_URL', plugin_dir_url(__FILE__));

require_once 'vendor/autoload.php';

/**
 * Use files from ./includes directory.
 */
${namespace}\App::init();
