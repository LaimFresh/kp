<template>
  <div class="car-create">
    <h1>Создание нового автомобиля</h1>
    <form @submit.prevent="createCar">
      <div class="form-group">
        <label for="name">Марка:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="price">Цена:</label>
        <input type="number" id="price" v-model="price" required />
      </div>

      <div class="form-group">
        <label for="description">Описание:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>

      <div class="form-group">
        <label for="image">Изображение:</label>
        <input type="text" id="image" v-model="image" required />
      </div>

      <div class="form-group">
        <label for="year">Год выпуска:</label>
        <input type="number" id="year" v-model="year" required />
      </div>

      <div class="form-group">
        <label for="mileage">Пробег (км):</label>
        <input type="number" id="mileage" v-model="mileage" required />
      </div>

      <div class="form-group">
        <label for="fuelType">Тип топлива:</label>
        <input type="text" id="fuelType" v-model="fuelType" required />
      </div>

      <div class="form-group">
        <label for="transmission">Коробка передач:</label>
        <input type="text" id="transmission" v-model="transmission" required />
      </div>

      <div class="form-group">
        <label for="color">Цвет:</label>
        <input type="text" id="color" v-model="color" required />
      </div>

      <div class="form-group">
        <label for="status">Статус:</label>
        <input type="text" id="status" v-model="status" required />
      </div>

      <button type="submit" class="btn btn-primary">Создать</button>
      <router-link to="/cars" class="btn btn-secondary">Отмена</router-link>
    </form>
  </div>
</template>

<script>
import { carApi } from '@/services/api'; // Импортируйте carApi

export default {
  data() {
    return {
      name: '', // Марка автомобиля
      price: '', // Цена
      description: '', // Описание
      image: '', // Изображение
      year: '', // Год выпуска
      mileage: '', // Пробег
      fuelType: '', // Тип топлива
      transmission: '', // Коробка передач
      color: '', // Цвет
      status: '' // Статус
    };
  },
  methods: {
    createCar() {
      const newCar = {
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
        year: this.year,
        mileage: this.mileage,
        fuelType: this.fuelType,
        transmission: this.transmission,
        color: this.color,
        status: this.status,
      };

      // Используйте carApi.createCar вместо api.createCar
      carApi.createCar(newCar)
        .then(() => {
          alert('Автомобиль успешно создан!');
          this.$router.push({ name: 'CarIndex' }); // Переход к списку автомобилей
        })
        .catch(error => {
          console.error('Ошибка при создании автомобиля:', error);
          alert('Произошла ошибка при создании автомобиля.');
        });
    }
  }
};
</script>

<style scoped>
.car-create {
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