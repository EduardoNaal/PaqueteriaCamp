import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/DetailsView.vue'
import Address from '../views/AddressView.vue'
import Service from '../views/ServiceView.vue'
import Confirm from '../views/ConfirmView.vue'
import Shipment from '@/views/shipmentView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/AddressView.vue'),
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmView.vue'),
    },
    {
      path: '/shipment',
      name: 'shipment',
      component: () => import('@/views/shipmentView.vue'),
    },
  ],
})

export default router
