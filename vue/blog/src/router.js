import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';


const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
        {
            path: "author",
            component: Author
        }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 