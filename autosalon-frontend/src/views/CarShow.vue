<template>
  <div class="car-show">
    <h1>Информация об автомобиле</h1>
    <div v-if="car">
      <p><strong>Марка:</strong> {{ car.name }}</p>
      <p><strong>Цена:</strong> {{ car.price }} $</p>
      <p><strong>Описание:</strong> {{ car.description }}</p>
      <p><strong>Год выпуска:</strong> {{ car.year }}</p>
      <p><strong>Пробег:</strong> {{ car.mileage }} км</p>
      <p><strong>Тип топлива:</strong> {{ car.fuelType }}</p>
      <p><strong>Коробка передач:</strong> {{ car.transmission }}</p>
      <p><strong>Цвет:</strong> {{ car.color }}</p>
      <p><strong>Статус:</strong> {{ car.status }}</p>
      <img
    v-if="car.image"
    :src="getAssetImage(car.image)"
    :alt="car.name"
    style="width: 300px; height: auto;"
  />
  <span v-else>Нет изображения</span>
      <router-link to="/cars" class="btn btn-secondary">Назад к списку</router-link>
    </div>
    <div v-else>
      Автомобиль не найден.
    </div>
  </div>
</template>

<script>
import { carApi } from '@/services/api'; // Импортируем carApi вместо дефолтного экспорта

export default {
  data() {
    return {
      car: null // Переменная для хранения данных об автомобиле
    };
  },
  created() {
    const id = this.$route.params.id; // Получаем ID автомобиля из маршрута
    this.fetchCar(id); // Вызываем метод для получения данных
  },
  methods: {
    fetchCar(id) {
      carApi.getCar(id) // Используем carApi.getCar вместо api.getCar
        .then(response => {
          this.car = response.data; // Сохраняем данные об автомобиле
        })
        .catch(error => {
          console.error('Ошибка при получении автомобиля:', error);
        });
    },
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
/* Добавьте стили по необходимости */
.car-show img {
  max-width: 300px;
  margin-top: 20px;
}
</style>