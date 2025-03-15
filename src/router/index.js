/**
 * Vue Router Configuration
 * 
 * This file defines the application's routing configuration, mapping URL paths
 * to Vue components. It handles both static and lazy-loaded routes.
 * 
 * @link https://router.vuejs.org/guide/
 * @file router/index.js
 */

// Import Vue Router core
import { createRouter, createWebHistory } from 'vue-router'

// Import eagerly-loaded view components
import HomeView from '../views/HomeView.vue'

/**
 * Router instance configuration
 * 
 * Creates a router with HTML5 history mode and defines all application routes.
 * The BASE_URL environment variable is used as the base for all routes.
 */
const router = createRouter({
  // Use HTML5 history mode for clean URLs without hash fragments
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // Define all application routes
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // Eagerly loaded component
    },
    {
      path: '/about',
      name: 'about',
      // Route level code-splitting:
      // This generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded only when the route is visited.
      // This improves initial load performance by reducing bundle size.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

/**
 * Export the router instance for use in main.js
 */
export default router