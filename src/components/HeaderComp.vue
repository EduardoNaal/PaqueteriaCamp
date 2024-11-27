<template>
  <header class="header">
    <div class="banner-content">
      <h1>PaqueteriaCamp</h1>
      <p>Tu solución confiable de envíos</p>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("@/assets/paquetes-home.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 20rem;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #fff;
  padding: 1rem; 
}

.banner-content h1 {
  font-size: 2.8rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.banner-content p {
  font-size: 1.3rem;
  margin-top: 0.5rem;
}

/* Media queries para hacerlo responsivo */
@media (max-width: 768px) {
  .header {
    height: 15rem; 
  }

  .banner-content h1 {
    font-size: 2.2rem; 
  }

  .banner-content p {
    font-size: 1.1rem; 
  }
}

@media (max-width: 480px) {
  .header {
    height: 12rem; 
  }

  .banner-content h1 {
    font-size: 1.8rem; 
  }

  .banner-content p {
    font-size: 1rem;
  }
}
</style>
