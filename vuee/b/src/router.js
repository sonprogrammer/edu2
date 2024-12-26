import { createWebHistory, createRouter } from "vue-router";
import ListPage from './components/ListPage'
import Main from './components/Main'
import Detail from './components/Detail'
import NotFound from './components/NotFound'
import Author from './components/Author'
import Comment from './components/Comment'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: "/list",
    component: {
        List,
        Comment,
        Author
    },
  },
  {
    path: '/detail/:id',
    component: Detail,
    children: [
    {
        path: 'author',
        component: Author
    },
    {
        path: 'comment',
        component: Comment 
    }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 