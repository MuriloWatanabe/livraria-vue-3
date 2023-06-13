import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import CategoriaView from '../views/CategoriaView.vue';
import EditoraView from '../views/EditoraView.vue';
import AutoresView from '../views/Autores.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriaView,
    },
    {
      path: '/editoras',
      name: 'editoras',
      component: EditoraView,
    },
    {
      path: '/autores',
      name: 'autores',
      component: AutoresView,
    }
  ],
});

export default router;
