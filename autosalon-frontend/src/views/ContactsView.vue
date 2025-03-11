<template>
  <div class="contacts">
    <!-- Шапка -->
    <header class="bg-success text-white text-center py-5">
      <h1>Контакты</h1>
      <p class="lead">Свяжитесь с нами для получения дополнительной информации.</p>
    </header>

    <!-- Секция с контактами сотрудников -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Наша команда</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(contact, index) in shuffledContacts" :key="index">
          <img :src="getContactImagePath(index + 1)" alt="Contact Photo" class="img-fluid rounded mb-2">
          <h4 class="mb-2">{{ contact.name }}</h4>
          <p><strong>Должность:</strong> {{ contact.position }}</p>
          <p><strong>Email:</strong> {{ contact.email }}</p>
          <p><strong>Телефон:</strong> {{ contact.phone }}</p>
        </div>
      </div>
    </section>

    <!-- Секция общих контактов -->
    <section class="container my-5 text-content">
      <h2 class="text-center mb-4">Наши контакты</h2>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <p>Мы всегда рады видеть вас в нашем автосалоне. Если у вас есть вопросы, свяжитесь с нами по телефону или через форму обратной связи.</p>
          <p><strong>Адрес:</strong> г. Москва, ул. Автомобильная, д. 123</p>
          <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
          <p><strong>Email:</strong> info@autosalon.ru</p>
          <p><strong>Часы работы:</strong> Пн-Пт: 9:00 - 18:00</p>
          <p><strong>Социальные сети:</strong> @autosalon</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
  data() {
    return {
      // Массив с данными для контактов
      contacts: [
        {
          name: 'Иванов Иван Иванович',
          position: 'Менеджер по продажам',
          email: 'ivanov@autosalon.ru',
          phone: '+7 (999) 111-22-33',
        },
        {
          name: 'Петров Петр Петрович',
          position: 'Старший менеджер',
          email: 'petrov@autosalon.ru',
          phone: '+7 (999) 222-33-44',
        },
        {
          name: 'Сидоров Антон Владимирович',
          position: 'Администратор',
          email: 'sidorov@autosalon.ru',
          phone: '+7 (999) 333-44-55',
        },
        {
          name: 'Кузнецов Дмитрий Сергеевич',
          position: 'Технический специалист',
          email: 'kuznetsov@autosalon.ru',
          phone: '+7 (999) 444-55-66',
        },
        {
          name: 'Смирнов Олег Александрович',
          position: 'Финансовый консультант',
          email: 'smirnov@autosalon.ru',
          phone: '+7 (999) 555-66-77',
        },
        {
          name: 'Васильев Алексей Николаевич',
          position: 'Директор',
          email: 'vasiliev@autosalon.ru',
          phone: '+7 (999) 666-77-88',
        },
      ],
    };
  },
  computed: {
    // Перемешанный массив контактов
    shuffledContacts() {
      return this.shuffleArray([...this.contacts]);
    },
  },
  methods: {
    // Метод для перемешивания массива
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    // Метод для получения пути к изображению контакта
    getContactImagePath(index) {
      try {
        return require(`@/assets/contact${index}.jpg`);
      } catch (error) {
        try {
          return require(`@/assets/contact${index}.jpeg`);
        } catch (error) {
          return '/path/to/default-image.jpg'; // Заглушка, если изображение отсутствует
        }
      }
    },
  },
};
</script>

<style scoped>
.contacts {
  font-family: Arial, sans-serif;
}

/* Шапка */
header {
  background: linear-gradient(to right, #333, #555);
  padding: 2rem 0;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

header p.lead {
  font-size: 1.25rem;
}

/* Изображения */
.row img {
  transition: transform 0.3s ease;
  border: 2px solid #ddd;
}

.row img:hover {
  transform: scale(1.05);
  border-color: #555;
}

/* Текстовая секция */
.text-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.text-content p {
  margin-bottom: 1rem;
}
</style>