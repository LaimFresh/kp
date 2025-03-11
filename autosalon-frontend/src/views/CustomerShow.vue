<template>
    <div class="customer-show">
      <h1>Информация о клиенте</h1>
      <div v-if="customer">
        <p><strong>Имя:</strong> {{ customer.firstName }}</p>
        <p><strong>Фамилия:</strong> {{ customer.lastName }}</p>
        <p><strong>Email:</strong> {{ customer.email }}</p>
        <p><strong>Телефон:</strong> {{ customer.phone }}</p>
        <p><strong>Адрес:</strong> {{ customer.address }}</p>
        <p><strong>Город:</strong> {{ customer.city }}</p>
        <p><strong>Регион:</strong> {{ customer.state }}</p>
        <p><strong>Индекс:</strong> {{ customer.zipCode }}</p>
        <p><strong>Страна:</strong> {{ customer.country }}</p>
        <p><strong>Аватар:</strong></p>
        <!-- Отображение аватара -->
        <img
          v-if="customer.avatar"
          :src="getAvatarUrl(customer.avatar)"
          :alt="`${customer.firstName} ${customer.lastName}`"
          style="width: 300px; height: auto; border-radius: 5px; object-fit: cover;"
        />
        <span v-else>Нет изображения</span>
        <router-link to="/customers" class="btn btn-secondary">Назад к списку</router-link>
      </div>
      <div v-else>
        Клиент не найден.
      </div>
    </div>
  </template>
  
  <script>
  import { customerApi } from '@/services/api'; // Импортируем customerApi
  
  export default {
    data() {
      return {
        customer: null, // Переменная для хранения данных о клиенте
      };
    },
    created() {
      const id = this.$route.params.id; // Получаем ID клиента из маршрута
      this.fetchCustomer(id); // Вызываем метод для получения данных
    },
    methods: {
      fetchCustomer(id) {
        customerApi.getCustomerById(id) // Используем customerApi.getCustomerById
          .then(response => {
            this.customer = response.data; // Сохраняем данные о клиенте
          })
          .catch(error => {
            console.error('Ошибка при получении клиента:', error);
          });
      },
      // Метод для получения пути к аватару
      getAvatarUrl(avatarName) {
        if (!avatarName) return '/path/to/default-avatar.jpg'; // Заглушка, если аватара нет
  
               try {
          return require(`@/assets/${avatarName}`);
        } catch (error) {
          console.warn(`Изображение не найдено: ${avatarName}`);
          return '/path/to/default-avatar.jpg'; // Заглушка, если изображение отсутствует
        }
    
      },
    },
  };
  </script>