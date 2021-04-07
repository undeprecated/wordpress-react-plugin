<?php
/**
 * Plugin Name: Wordpress Plugin Using React
 * Plugin URI: https://www.undeprecated.com
 * Description: A WordPress pluging starter for using React JS development.
 * Version: 1.0.0
 */

defined( 'ABSPATH' ) or die( 'Direct script access diallowed.' );

/**
 * Set your plugin globals here:
 */
define('PLUGIN_VERSION', '1.0.0');
define('PLUGIN_BASE_FILE', plugin_basename(__FILE__));
define('PLUGIN_PLUGIN_URL', plugin_dir_url(__FILE__));

require_once 'vendor/autoload.php';

/**
 * Use files from ./includes directory.
 */
Plugin\App::init();

