<template>
  <div class="container">
    <div class="header">
      <h1>Servicio de Envíos</h1>
      <p>Selecciona la paquetería de tu preferencia:</p>
    </div>

    <!-- Lista de paqueterías -->
    <div class="paqueteria-list">
      <div
        v-for="(company, index) in paqueteriaCompanies"
        :key="index"
        class="paqueteria-item"
        :class="{ selected: selectedCompany === index }"
        @click="selectCompany(index)"
      >
        <img :src="company.logo" :alt="company.name" class="paqueteria-logo" />
        <div class="price-container">
          <div class="price">Precio: ${{ company.price }} MXN</div>
        </div>
      </div>
    </div>

    <!-- Botones -->
    <div class="buttons">
      <router-link to="/address" class="regresar">Regresar</router-link>
      <router-link 
        to="/shipment" 
        class="Confirmar" 
        :class="{ disabled: selectedCompany === null }"
        :aria-disabled="selectedCompany === null ? 'true' : 'false'">
        Siguiente
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const paqueteriaCompanies = [
  { name: "DHL", logo: new URL("@/assets/dhl.png", import.meta.url).href, price: 250 },
  { name: "FedEx", logo: new URL("@/assets/fedex.jpg", import.meta.url).href, price: 350 },
  { name: "UPS", logo: new URL("@/assets/ups.png", import.meta.url).href, price: 450 },
  { name: "Estafeta", logo: new URL("@/assets/estafeta.svg", import.meta.url).href, price: 120 },
  { name: "Paquetexpress", logo: new URL("@/assets/paquetexpress.png", import.meta.url).href, price: 115 },
];

const selectedCompany = ref(null);
const selectCompany = (index) => {
  selectedCompany.value = selectedCompany.value === index ? null : index;
};
</script>

<style scoped>
/* Contenedor principal */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: #f7f7f7;
  min-height: 100vh;
}

/* Encabezado */
.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.header h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1rem;
  color: #666;
}

/* Lista */
.paqueteria-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
}

/* Elementos */
.paqueteria-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
  cursor: pointer;
}

.paqueteria-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.paqueteria-item.selected {
  border: 2px solid #4caf50;
}

/* Logo */
.paqueteria-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
}

/* Precio */
.price-container {
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color: #eaf1e4;
  border-radius: 6px;
  border: 1px solid #4caf50;
}

.price {
  font-size: 1.2rem;
  color: #4caf50;
  font-weight: bold;
}

/* Botones */
.buttons {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
}

.Confirmar {
  padding: 0.6rem 1.2rem;
  background-color: #ff6600;
  color: white;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.Confirmar.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.Confirmar:hover:not(.disabled) {
  background-color: #e65500;
}

.regresar {
  padding: 0.6rem 1.2rem;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 4px;
  font-weight: bold;
}

.regresar:hover {
  background-color: #e2e2e2;
}
</style>
