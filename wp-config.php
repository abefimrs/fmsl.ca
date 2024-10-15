<?php


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shopopxg_wp701' );

/** Database username */
define( 'DB_USER', 'shopopxg_wp701' );

/** Database password */
define( 'DB_PASSWORD', 'N9V]9(-7Sc!7fHp-' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jkd2kyr9hvxod2ffrmmfqdjeki9mgbwazah9tsw4ilqf11egxny4mfjdvraufwoj' );
define( 'SECURE_AUTH_KEY',  'o3hxk8b3zsdhyiui89gmq3p26ji6b37yqv4xyecspc6x6oiebjasxxrjm1gc5z4c' );
define( 'LOGGED_IN_KEY',    'ryqeanfervzhgwqvveymivyz7nt75mywjjmunyjfus5ndxwdwqc12fbnnwdos7rm' );
define( 'NONCE_KEY',        'jjouypqfcmquj4iuo6yyu7jee0p8uuevnspdjasmet3siuchtnkdia42vnqcuttq' );
define( 'AUTH_SALT',        'ajo167zjm2y54c9txbg6ugyp8fdh6aik9aqcii2xhlchj9esk2ewpezyicgcmlvz' );
define( 'SECURE_AUTH_SALT', 'ahyfeixi5msabvqqplpw84hxifu0ygnirlrzx9lsxhbjct1solquzxqckdkovzaj' );
define( 'LOGGED_IN_SALT',   'kf48pwyvggue2ekihfhclzuqsdjhnwqwqqbrbaghfglikiaga4bzbyiapkrpg1wk' );
define( 'NONCE_SALT',       'fotf0syyjbpwohvnsmjzvopoiyg0oopeybs5ema1knhawvr9hbyrcndyyyk0qkxn' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpxi_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
