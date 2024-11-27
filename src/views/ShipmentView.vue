<template>
  <div class="container">
    <h1>Información del destinatario</h1>
    <p>Por favor, complete los detalles del destinatario del paquete.</p>

    <!-- Formulario de información del destinatario -->
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="input-group">
          <label for="senderName">Nombre del remitente</label>
          <input type="text" id="senderName" v-model="senderName" placeholder="Nombre del remitente" required />
        </div>

        <div class="input-group">
          <label for="recipientName">Nombre del destinatario</label>
          <input type="text" id="recipientName" v-model="recipientName" placeholder="Nombre del destinatario" required />
        </div>
      </div>

      <div class="form-row">
        <div class="input-group">
          <label for="address">Dirección</label>
          <input type="text" id="address" v-model="address" placeholder="Dirección completa" required />
        </div>

        <div class="input-group">
          <label for="phone">Teléfono</label>
          <input type="tel" id="phone" v-model="phone" placeholder="Teléfono" required />
        </div>
      </div>

      <div class="form-row">
        <div class="input-group">
          <label for="contactName">Nombre del contacto adicional</label>
          <input type="text" id="contactName" v-model="contactName" placeholder="Nombre del contacto adicional" />
        </div>

        <div class="input-group">
          <label for="contactPhone">Teléfono del contacto</label>
          <input type="tel" id="contactPhone" v-model="contactPhone" placeholder="Teléfono del contacto adicional" />
        </div>
      </div>

      <!-- Botones de navegación -->
      <div class="button-container">
        <RouterLink to="/service" class="button">Regresar</RouterLink>
        <RouterLink :to="{ path: '/confirm' }" class="button" :class="{ disabled: isSubmitDisabled }" :aria-disabled="isSubmitDisabled.toString()">
          Confirmar
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Definición de los datos del formulario
const senderName = ref('');
const recipientName = ref('');
const address = ref('');
const phone = ref('');
const contactName = ref('');
const contactPhone = ref('');

// Función para enviar el formulario (solo para ilustrar)
const submitForm = () => {
  alert('Formulario enviado');
};

// Deshabilitar el botón de Confirmar si los campos requeridos no están completos
const isSubmitDisabled = computed(() => {
  return !senderName.value || !recipientName.value || !address.value || !phone.value;
});
</script>

<style scoped>
/* Contenedor general */
.container {
  margin: 2rem auto;
  max-width: 900px;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

/* Encabezados */
h1 {
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

p {
  text-align: center;
  font-size: 1rem;
  color: #777;
  margin-bottom: 1.5rem;
}

/* Estilos de filas y grupos */
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.input-group {
  flex: 1 1 calc(50% - 1rem); /* Toma el 50% menos el gap */
}

.input-group label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #444;
  font-weight: 500;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

/* Estilo de los botones */
.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #ff6600;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  flex: 1 1 calc(50% - 1rem);
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #e65500;
  transform: translateY(-2px);
}

.button:active {
  background-color: #b84d00;
}

.button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .input-group {
    flex: 1 1 100%;
  }

  .button {
    flex: 1 1 100%;
  }
}
</style>
