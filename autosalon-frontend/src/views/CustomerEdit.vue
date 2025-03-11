<template>
    <div class="customer-edit">
      <h1 v-if="customer">Редактирование клиента: {{ customer.firstName }} {{ customer.lastName }}</h1>
      <p v-else>Загрузка...</p>
  
      <form v-if="customer" @submit.prevent="updateCustomer">
        <div class="form-group">
          <label for="firstName">Имя:</label>
          <input type="text" id="firstName" v-model="customer.firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Фамилия:</label>
          <input type="text" id="lastName" v-model="customer.lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="customer.email" required />
        </div>
        <div class="form-group">
          <label for="phone">Телефон:</label>
          <input type="text" id="phone" v-model="customer.phone" required />
        </div>
        <div class="form-group">
          <label for="address">Адрес:</label>
          <input type="text" id="address" v-model="customer.address" required />
        </div>
        <div class="form-group">
          <label for="city">Город:</label>
          <input type="text" id="city" v-model="customer.city" required />
        </div>
        <div class="form-group">
          <label for="state">Регион:</label>
          <input type="text" id="state" v-model="customer.state" required />
        </div>
        <div class="form-group">
          <label for="zipCode">Индекс:</label>
          <input type="text" id="zipCode" v-model="customer.zipCode" required />
        </div>
        <div class="form-group">
          <label for="country">Страна:</label>
          <input type="text" id="country" v-model="customer.country" required />
        </div>
        <div class="form-group">
          <label for="avatar">Аватар:</label>
          <input type="text" id="avatar" v-model="customer.avatar" required />
        </div>
        <button type="submit" class="btn btn-primary">Сохранить</button>
        <router-link to="/customers" class="btn btn-secondary">Отмена</router-link>
      </form>
      <p v-else>Клиент не найден или загружается...</p>
    </div>
  </template>
  
  <script>
  import { customerApi } from '@/services/api'; // Импортируем customerApi
  
  export default {
    data() {
      return {
        customer: null, // Переменная для хранения данных о клиенте
        loading: true, // Флаг загрузки
      };
    },
    created() {
      const id = this.$route.params.id; // Получаем ID клиента из маршрута
      this.fetchCustomer(id); // Вызываем метод для получения данных
    },
    methods: {
      fetchCustomer(id) {
        this.loading = true; // Начинаем загрузку
        customerApi.getCustomerById(id) // Используем customerApi.getCustomerById
          .then(response => {
            this.customer = response.data; // Сохраняем данные о клиенте
          })
          .catch(error => {
            console.error('Ошибка при получении клиента:', error);
            this.customer = null; // Устанавливаем null в случае ошибки
          })
          .finally(() => {
            this.loading = false; // Завершаем загрузку
          });
      },
      updateCustomer() {
        if (!this.customer) return;
  
        this.loading = true; // Показываем индикатор загрузки во время обновления
        customerApi.updateCustomer(this.customer.id, this.customer) // Обновляем данные клиента
          .then(() => {
            alert('Клиент успешно обновлен!');
            this.$router.push({ name: 'CustomerIndex' }); // Переход к списку клиентов
          })
          .catch(error => {
            console.error('Ошибка при обновлении клиента:', error);
            alert('Произошла ошибка при обновлении клиента.');
          })
          .finally(() => {
            this.loading = false; // Скрываем индикатор загрузки
          });
      },
    },
  };
  </script>