<template>
    <div class="container">
      <!-- Mensaje de éxito -->
      <h1>¡Envío creado con éxito!</h1>
      <p>El paquete ha sido enviado con éxito. <br>El número de rastreo es: <strong>{{ trackingNumber }}</strong></p>
      <RouterLink to="/" class="button">Volver al inicio</RouterLink>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Crear un número de rastreo simulado para la demostración
  const trackingNumber = ref('ABC123456789');
  </script>
  
  <style scoped>
  /* Estilo general para el contenedor */
  .container {
    margin: 3rem auto;
    max-width: 900px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    text-align: center;
  }
  
  h1 {
    font-size: 2rem;
    color: #4CAF50;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
  }
  
  .button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #ff6600;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: auto;
    text-transform: uppercase;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .button:hover {
    background-color: #e65500;
    transform: translateY(-2px);
  }
  
  .button:active {
    background-color: #b84d00;
    transform: translateY(0);
  }
  </style>
  