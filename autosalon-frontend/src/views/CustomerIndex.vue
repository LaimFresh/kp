<template>
    <div class="customer-index">
      <h1>Список клиентов</h1>
      <router-link to="/customers/create" class="btn btn-primary">Добавить клиента</router-link>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Аватар</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.id }}</td>
            <td>{{ customer.firstName }}</td>
            <td>{{ customer.lastName }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>
              <!-- Отображение аватара -->
              <img
                v-if="customer.avatar"
                :src="getAvatarUrl(customer.avatar)"
                :alt="`${customer.firstName} ${customer.lastName}`"
                style="width: 150px; height: auto;"
              />
              <span v-else>Нет изображения</span>
            </td>
            <td>
              <router-link :to="{ name: 'CustomerShow', params: { id: customer.id } }" class="btn btn-info">
                Просмотр
              </router-link>
              <router-link :to="{ name: 'CustomerEdit', params: { id: customer.id } }" class="btn btn-warning">
                Редактировать
              </router-link>
              <button @click="deleteCustomer(customer.id)" class="btn btn-danger">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import { customerApi } from '@/services/api'; // Импортируем customerApi

export default {
  data() {
    return {
      customers: [] // Переменная для хранения списка клиентов
    };
  },
  created() {
    this.fetchCustomers(); // Получаем список клиентов при создании компонента
  },
  methods: {
    fetchCustomers() {
      customerApi.getAllCustomers() // Используем customerApi
        .then(response => {
          this.customers = response.data;
        })
        .catch(error => {
          console.error('Ошибка при получении списка клиентов:', error);
        });
    },
    deleteCustomer(id) {
      if (!confirm('Вы уверены, что хотите удалить этого клиента?')) {
        return;
      }

      customerApi.deleteCustomer(id) // Используем customerApi
        .then(() => {
          this.customers = this.customers.filter(customer => customer.id !== id);
          alert('Клиент успешно удален!');
        })
        .catch(error => {
          console.error('Ошибка при удалении клиента:', error);
          alert('Произошла ошибка при удалении клиента.');
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
      
    }
  }
};
</script>
<style scoped>
.customer-index img {
  width: 25px;
  height: auto;
  border-radius: 50%; /* Округлые аватары */
  object-fit: cover; /* Сохранение пропорций */
}

.customer-index span {
  color: #ccc;
  font-style: italic;
}
</style>