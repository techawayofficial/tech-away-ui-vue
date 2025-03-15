/**
 * Main Entry Point for Vue Application
 * 
 * This file bootstraps the Vue application by creating the root instance
 * and mounting it to the DOM. It serves as the application's entry point
 * and connects all core modules together.
 * 
 * @link https://v3.vuejs.org/guide/installation.html#with-a-bundler
 * @file main.js
 */

// Import Vue core
import { createApp } from 'vue'

// Import the root component
import App from './App.vue'

// Import router configuration
import router from './router'

// Import global styles
import './assets/main.css'

/**
 * Create the Vue application instance
 * 
 * The createApp function accepts the root component as its first argument
 * and returns an application instance.
 */
const app = createApp(App)

/**
 * Register plugins and global components
 * 
 * The app.use() method installs plugins into the Vue application.
 * Router provides application-wide navigation capabilities.
 */
app.use(router)

/**
 * Mount the application to the DOM
 * 
 * This connects the Vue application to the HTML element with id="app",
 * allowing Vue to take control of that part of the page.
 */
app.mount('#app')