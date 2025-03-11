<template>
  <div class="car-edit">
    <!-- Индикатор загрузки -->
    <div v-if="loading">Загрузка...</div>

    <!-- Отображаем сообщение, если машина не найдена -->
    <div v-else-if="!car">Машина не найдена</div>

    <!-- Форма редактирования машины -->
    <form v-else @submit.prevent="updateCar">
      <h1>Редактирование автомобиля: {{ car.name }}</h1>

      <div class="form-group">
        <label for="name">Марка:</label>
        <input type="text" id="name" v-model="car.name" required />
      </div>

      <div class="form-group">
        <label for="price">Цена:</label>
        <input type="number" id="price" v-model="car.price" required />
      </div>

      <div class="form-group">
        <label for="description">Описание:</label>
        <textarea id="description" v-model="car.description" required></textarea>
      </div>

      <div class="form-group">
        <label for="image">Изображение:</label>
        <input type="text" id="image" v-model="car.image" required />
      </div>

      <div class="form-group">
        <label for="year">Год выпуска:</label>
        <input type="number" id="year" v-model="car.year" required />
      </div>

      <div class="form-group">
        <label for="mileage">Пробег (км):</label>
        <input type="number" id="mileage" v-model="car.mileage" required />
      </div>

      <div class="form-group">
        <label for="fuelType">Тип топлива:</label>
        <input type="text" id="fuelType" v-model="car.fuelType" required />
      </div>

      <div class="form-group">
        <label for="transmission">Коробка передач:</label>
        <input type="text" id="transmission" v-model="car.transmission" required />
      </div>

      <div class="form-group">
        <label for="color">Цвет:</label>
        <input type="text" id="color" v-model="car.color" required />
      </div>

      <div class="form-group">
        <label for="status">Статус:</label>
        <input type="text" id="status" v-model="car.status" required />
      </div>

      <button type="submit" class="btn btn-primary">Сохранить</button>
      <router-link to="/cars" class="btn btn-secondary">Отмена</router-link>
    </form>
  </div>
</template>

<script>
import { carApi } from '@/services/api'; // Импортируем carApi вместо дефолтного экспорта

export default {
  data() {
    return {
      car: null, // Переменная для хранения данных об автомобиле
      loading: true, // Состояние загрузки
    };
  },
  created() {
    const id = this.$route.params.id; // Получаем ID автомобиля из маршрута
    this.fetchCar(id); // Вызываем метод для получения данных
  },
  methods: {
    fetchCar(id) {
      this.loading = true; // Начинаем загрузку
      carApi.getCar(id) // Используем carApi.getCar вместо api.getCar
        .then(response => {
          this.car = response.data; // Сохраняем данные об автомобиле
        })
        .catch(error => {
          console.error('Ошибка при получении автомобиля:', error);
          this.car = null; // Если произошла ошибка, устанавливаем car в null
        })
        .finally(() => {
          this.loading = false; // Завершаем загрузку
        });
    },
    updateCar() {
      if (!this.car) return;

      this.loading = true; // Показываем индикатор загрузки во время обновления
      carApi.updateCar(this.car.id, this.car) // Используем carApi.updateCar вместо api.updateCar
        .then(() => {
          alert('Автомобиль успешно обновлен!');
          this.loading = false; // Скрываем индикатор загрузки после успешного обновления
        })
        .catch(error => {
          console.error('Ошибка при обновлении автомобиля:', error);
          this.loading = false; // Скрываем индикатор загрузки в случае ошибки
        });
    },
  },
};
</script>

<style scoped>
.car-edit {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn {
  padding: 10px 15px;
  margin-right: 10px;
}
</style>