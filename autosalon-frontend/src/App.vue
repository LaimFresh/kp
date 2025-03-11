<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">Автосалон</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">О нас</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contacts" class="nav-link">Контакты</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cars" class="nav-link">Машины</router-link>
            </li>
            <li class="nav-item">
  <router-link to="/customers" class="nav-link">Клиенты</router-link>
</li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
.navbar {
  margin-bottom: 20px;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-link {
  font-size: 1.1rem;
  margin-left: 15px;
}
.nav-link:hover {
  color: #fff !important;
  text-decoration: underline;
}
</style>