<template>
  <div class="home">
    <!-- Шапка -->
    <header class="bg-dark text-white text-center py-5">
      <h1>Добро пожаловать в наш автосалон!</h1>
      <p class="lead">Мы предлагаем лучшие автомобили по доступным ценам.</p>
    </header>

    <!-- Секция с изображениями -->
    <section class="container my-5">
      <h2 class="text-center mb-4">Наши автомобили</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <img src="@/assets/cars1.jpg" alt="Car 1" class="img-fluid rounded">
          <p class="text-center mt-2">Лучшие автомобили по доступным ценам. Мы предлагаем широкий выбор новых и подержанных авто.</p>
        </div>
        <div class="col-md-4 mb-4">
          <img src="@/assets/cars2.jpg" alt="Car 2" class="img-fluid rounded">
          <p class="text-center mt-2">Профессиональное обслуживание и гарантия. Наш автосалон — это надёжность и качество.</p>
        </div>
        <div class="col-md-4 mb-4">
          <img src="@/assets/cars3.jpg" alt="Car 3" class="img-fluid rounded">
          <p class="text-center mt-2">У нас вы найдёте автомобили на любой вкус и бюджет. Доверьтесь профессионалам!</p>
        </div>
      </div>
    </section>

    <!-- Секция описания автосалона -->
    <section class="container my-5 text-content">
      <h2 class="text-center mb-4">О нашем автосалоне</h2>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <p>
            Наш автосалон предлагает лучшие условия для покупки автомобилей. Мы работаем с ведущими производителями и предоставляем гарантию на все автомобили.
            Наши клиенты всегда остаются довольны, потому что мы заботимся о каждом.
          </p>
          <p>
            Мы предлагаем широкий выбор автомобилей: от бюджетных до премиальных. Наши специалисты помогут вам выбрать автомобиль,
            который идеально подходит для ваших нужд.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

/* Шапка */





/* Изображения */
.row img {
  transition: transform 0.3s ease;
  border: 2px solid #ddd;
}

.row img:hover {
  transform: scale(1.05);
  border-color: #555;
}

.row p {
  font-size: 1rem;
  color: #555;
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