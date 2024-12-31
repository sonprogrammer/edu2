import { createWebHistory, createRouter } from "vue-router";
import Problem from './components/Problem';

const routes = [
  {
    path: "/problem/:id",
    component: Problem,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 