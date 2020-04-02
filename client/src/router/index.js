import Vue from 'vue';
import VueRouter from 'vue-router';
import Ping from '../components/Ping.vue';
import Books from '../components/Books.vue';
import Text from '../components/Text.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/text',
    name: 'Text',
    component: Text,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
