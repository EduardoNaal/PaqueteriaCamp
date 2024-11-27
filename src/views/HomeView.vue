<template>
  <div>
    <!-- Mostrar todas las compañías de paquetería -->
    <div class="contenido">
      <h2>Compañías de Paquetería que manejamos</h2>
      <div class="paqueteria-list">
        <div
          v-for="(company, index) in paqueteriaCompanies"
          :key="index"
          class="paqueteria-item"
        >
          <img :src="company.logo" :alt="company.name" class="paqueteria-logo" />
        </div>
      </div>
    </div>

    <!-- Sección de cotización -->
    <section id="cotizacion" class="cotizacion-section">
      <router-link to="/details" class="cotizar-link">Obtén tu Cotización</router-link>
      <p>Llena el siguiente formulario para obtener una cotización rápida y personalizada.</p>
    </section>
  </div>
</template>

<script setup>
const paqueteriaCompanies = [
  { name: "DHL", logo: new URL("@/assets/dhl.png", import.meta.url).href },
  { name: "FedEx", logo: new URL("@/assets/fedex.jpg", import.meta.url).href },
  { name: "UPS", logo: new URL("@/assets/ups.png", import.meta.url).href },
  { name: "Estafeta", logo: new URL("@/assets/estafeta.svg", import.meta.url).href },
  { name: "Paquetexpress", logo: new URL("@/assets/paquetexpress.png", import.meta.url).href },
];
</script>

<style scoped>
/* General */
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  background-color: #f4f4f9;
  color: #333;
  scroll-behavior: smooth;
}

/* Estilo del enlace de cotización */
.cotizar-link {
  font-size: 2rem;
  color: #ff6600;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.cotizar-link:hover {
  color: #e65500;
  transform: scale(1.05); /* Efecto de zoom para el hover */
}

/* Contenido principal */
.contenido {
  padding: 3rem 2rem;
  background-color: #fff;
}

.contenido h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}

/* Sección de cotización */
.cotizacion-section {
  background-color: #f9f9f9;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
}

.cotizacion-section p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

/* Estilo de la lista */
.paqueteria-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  justify-content: center;
  align-items: center;
}

.paqueteria-item {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.paqueteria-logo {
  width: 250px;
  height: 250px;
  object-fit: contain;
}

.paqueteria-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Media queries para pantallas pequeñas */
@media (max-width: 480px) {
  .cotizar-link {
    font-size: 1.5rem;
  }

  .contenido h2 {
    font-size: 1.6rem;
  }

  .paqueteria-list {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contenido {
    padding: 2rem 1rem;
  }

  .paqueteria-item {
    padding: 1rem;
  }

  .paqueteria-logo {
    width: 200px;
    height: 200px;
  }
}
</style>
