import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactsView from '../views/ContactsView.vue';
import CarIndex from '../views/CarIndex.vue'; // Список автомобилей
import CarShow from '../views/CarShow.vue'; // Детали автомобиля
import CarCreate from '../views/CarCreate.vue'; // Создание автомобиля
import CarEdit from '../views/CarEdit.vue'; // Редактирование автомобиля
import CustomerIndex from '../views/CustomerIndex.vue'; // Список клиентов
import CustomerShow from '../views/CustomerShow.vue'; // Детали клиента
import CustomerCreate from '../views/CustomerCreate.vue'; // Создание клиента
import CustomerEdit from '../views/CustomerEdit.vue'; // Редактирование клиента

const routes = [
  { path: '/', component: HomeView }, // Главная страница
  { path: '/about', component: AboutView }, // О нас
  { path: '/contacts', component: ContactsView }, // Контакты
  { path: '/cars', name: 'CarIndex', component: CarIndex }, // Список автомобилей
  { path: '/cars/:id', name: 'CarShow', component: CarShow }, // Детали автомобиля
  { path: '/cars/create', name: 'CarCreate', component: CarCreate }, // Создание автомобиля
  { path: '/cars/:id/edit', name: 'CarEdit', component: CarEdit }, // Редактирование автомобиля
  { path: '/customers', name: 'CustomerIndex', component: CustomerIndex }, // Список клиентов
  { path: '/customers/:id', name: 'CustomerShow', component: CustomerShow }, // Детали клиента
  { path: '/customers/create', name: 'CustomerCreate', component: CustomerCreate }, // Создание клиента
  { path: '/customers/:id/edit', name: 'CustomerEdit', component: CustomerEdit } // Редактирование клиента
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;