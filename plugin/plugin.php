<?php
/**
 * Plugin Name: ${plugin_name}
 * Plugin URI: ${plugin_uri}
 * Description: ${description}
 * Version: ${version}
 */

defined( 'ABSPATH' ) or die( 'Direct script access diallowed.' );

/**
 * Delete this if you are NOT using Composer, but be sure to require files in include directory.
 */
require_once 'vendor/autoload.php';

/**
 * Use files from ./includes directory.
 */
${namespace}\App::init(__FILE__);
${namespace}\Ajax::init();
${namespace}\Registers::init(__FILE_);
