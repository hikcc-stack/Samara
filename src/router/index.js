import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutCompany from "@/views/AboutCompany.vue";
import Delivery from "@/views/Delivery.vue";
import Reviews from "@/views/Reviews.vue";
import HowOrder from "@/views/HowOrder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about_company',
      name: 'aboutCompany',
      component: AboutCompany,
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews,
    },
    {
      path: '/how_order',
      name: 'howOrder',
      component: HowOrder,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
