<template>
  <div class="car-index">
    <h1>Список автомобилей</h1>
    <router-link to="/cars/create" class="btn btn-primary">Добавить автомобиль</router-link>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Марка</th>
          <th>Цена</th>
          <th>Год выпуска</th>
          <th>Пробег</th>
          <th>Изображение</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.name }}</td>
          <td>{{ car.price }} $</td>
          <td>{{ car.year }}</td>
          <td>{{ car.mileage }} км</td>
          <td>
  <img
    v-if="car.image"
    :src="getAssetImage(car.image)"
    :alt="car.name"
    style="width: 100px; height: auto;"
  />
  <span v-else>Нет изображения</span>
</td>
          <td>
            <router-link :to="{ name: 'CarShow', params: { id: car.id } }" class="btn btn-info">
              Просмотр
            </router-link>
            <router-link :to="{ name: 'CarEdit', params: { id: car.id } }" class="btn btn-warning">
              Редактировать
            </router-link>
            <button @click="deleteCar(car.id)" class="btn btn-danger">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { carApi } from '@/services/api'; // Импортируем carApi вместо дефолтного экспорта

export default {
  data() {
    return {
      cars: [] // Переменная для хранения списка автомобилей
    };
  },
  created() {
    this.fetchCars(); // Получаем список автомобилей при создании компонента
  },
  methods: {
    fetchCars() {
      carApi.getCars() // Используем carApi.getCars вместо api.getCars
        .then(response => {
          this.cars = response.data;
        })
        .catch(error => {
          console.error('Ошибка при получении списка автомобилей:', error);
        });
    },
    deleteCar(id) {
      if (!confirm('Вы уверены, что хотите удалить этот автомобиль?')) {
        return;
      }

      carApi.deleteCar(id) // Используем carApi.deleteCar вместо api.deleteCar
        .then(() => {
          this.cars = this.cars.filter(car => car.id !== id);
          alert('Автомобиль успешно удален!');
        })
        .catch(error => {
          console.error('Ошибка при удалении автомобиля:', error);
          alert(`Произошла ошибка при удалении автомобиля: ${error.message}`);
        });
    },
    // Метод для получения пути к изображению из assets
    getAssetImage(imageName) {
      try {
        // Используем require для динамического импорта изображения
        return require(`@/assets/${imageName}`);
      } catch (error) {
        // Если изображение не найдено, возвращаем пустую строку или заглушку
        console.warn(`Изображение не найдено: ${imageName}`);
        return '/path/to/default-image.jpg'; // Можно заменить на URL заглушки
      }
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}
.table img {
  width: 50px;
  height: auto;
}
.btn {
  margin-right: 5px;
}
</style>