<template>
    <div class="customer-create">
      <h1>Создание нового клиента</h1>
      <form @submit.prevent="createCustomer">
        <div class="form-group">
          <label for="firstName">Имя:</label>
          <input type="text" id="firstName" v-model="firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Фамилия:</label>
          <input type="text" id="lastName" v-model="lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="phone">Телефон:</label>
          <input type="text" id="phone" v-model="phone" required />
        </div>
        <div class="form-group">
          <label for="address">Адрес:</label>
          <input type="text" id="address" v-model="address" required />
        </div>
        <div class="form-group">
          <label for="city">Город:</label>
          <input type="text" id="city" v-model="city" required />
        </div>
        <div class="form-group">
          <label for="state">Регион:</label>
          <input type="text" id="state" v-model="state" required />
        </div>
        <div class="form-group">
          <label for="zipCode">Индекс:</label>
          <input type="text" id="zipCode" v-model="zipCode" required />
        </div>
        <div class="form-group">
          <label for="country">Страна:</label>
          <input type="text" id="country" v-model="country" required />
        </div>
        <div class="form-group">
          <label for="avatar">Аватар:</label>
          <input type="text" id="avatar" v-model="avatar" required />
        </div>
        <button type="submit" class="btn btn-primary">Создать</button>
        <router-link to="/customers" class="btn btn-secondary">Отмена</router-link>
      </form>
    </div>
  </template>
  
  <script>
  // Импортируйте customerApi вместо api
  import { customerApi } from '@/services/api';
  
  export default {
    data() {
      return {
        firstName: '', // Имя
        lastName: '', // Фамилия
        email: '', // Email
        phone: '', // Телефон
        address: '', // Адрес
        city: '', // Город
        state: '', // Регион
        zipCode: '', // Индекс
        country: '', // Страна
        avatar: '' // Аватар
      };
    },
    methods: {
      createCustomer() {
        const newCustomer = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          country: this.country,
          avatar: this.avatar
        };
  
        // Используйте customerApi.createCustomer вместо api.post
        customerApi.createCustomer(newCustomer)
          .then(() => {
            alert('Клиент успешно создан!');
            this.$router.push({ name: 'CustomerIndex' }); // Переход к списку клиентов
          })
          .catch(error => {
            console.error('Ошибка при создании клиента:', error);
            alert('Произошла ошибка при создании клиента.');
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .customer-create {
    font-family: Arial, sans-serif;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .btn {
    padding: 10px 15px;
    margin-right: 10px;
  }
  </style>