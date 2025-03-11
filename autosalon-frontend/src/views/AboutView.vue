<template>
  <div class="about">
    <!-- Шапка -->
    <header class="bg-primary text-white text-center py-5">
      <h1>О нас</h1>
      <p class="lead">Узнайте больше о нашем автосалоне.</p>
    </header>

    <!-- Секция с изображениями -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Наша история</h2>
      <div class="row">
        <!-- Первый ряд изображений -->
        <div class="col-md-4 mb-4" v-for="i in [1, 2, 3]" :key="`img-${i}`">
          <img :src="getImagePath(i)" alt="About Photo" class="img-fluid rounded">
        </div>
      </div>

      <div class="row">
        <!-- Второй ряд изображений -->
        <div class="col-md-6 mb-4" v-for="i in [4, 5]" :key="`img-${i}`">
          <img :src="getImagePath(i)" alt="About Photo" class="img-fluid rounded">
        </div>
      </div>
    </section>

    <!-- Секция текстового содержимого -->
    <section class="container my-5 text-content">
      <h2 class="text-center mb-4">Наша история</h2>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <p>
            Мы начали свою деятельность в 2005 году с небольшого автосалона. Сегодня мы — один из крупнейших дилеров в регионе.
            Наша миссия — предоставлять клиентам лучшие автомобили по доступным ценам.
          </p>
          <p>
            Мы гордимся тем, что наши клиенты рекомендуют нас своим друзьям и знакомым. Это лучшее доказательство нашего профессионализма и качества обслуживания.
          </p>
        </div>
      </div>

      <h2 class="text-center mb-4 mt-5">Наши ценности</h2>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <p>
            Мы ценим каждого клиента и стремимся сделать процесс покупки автомобиля максимально комфортным.
            Наша команда всегда готова помочь вам с выбором и ответить на все вопросы.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    // Метод для получения пути к изображению
    getImagePath(index) {
      try {
        return require(`@/assets/about${index}.jpg`);
      } catch (error) {
        try {
          return require(`@/assets/about${index}.jpeg`);
        } catch (error) {
          return '/path/to/default-image.jpg'; // Заглушка, если изображение отсутствует
        }
      }
    },
  },
};
</script>

<style scoped>
.about {
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