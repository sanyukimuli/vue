//src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import about from '../components/about.vue'
import products from '../components/products.vue'
import services from '../components/services.vue'

const routes = [
    {path: '/', name: 'HomePage', component: HomePage},
    {path: '/about', name: 'about', component: about},
    {path: '/products', name: 'products', component: products},
    {path: '/services', name: 'services', component: services}
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router