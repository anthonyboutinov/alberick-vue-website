<?php
/**
 * Progressive VueJS (progressive-vuewp.boutinov.com) functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Progressive_VueJS_(progressive_vuewp.boutinov.com)
 */

if ( ! function_exists( 'progressive_vuewp_boutinov_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function progressive_vuewp_boutinov_setup() {

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );
	}
endif;
add_action( 'after_setup_theme', 'progressive_vuewp_boutinov_setup' );
