<template>
  <div class="cotizacion-envio">
    <h1>Detalles de Envío</h1>
    <p>Por favor, complete los detalles del origen y destino del paquete.</p>

    <!-- Campo de origen -->
    <div class="form-group">
      <label for="origen">Origen:</label>
      <input
        type="text"
        id="origen"
        v-model="origen"
        placeholder="Ingrese el origen"
        :class="{'input-error': !origen && formSubmitted}"
        aria-describedby="origen-help"
        required
      />
      <small id="origen-help" v-if="!origen && formSubmitted" class="error-message">Este campo es obligatorio.</small>
    </div>

    <!-- Campo de destino -->
    <div class="form-group">
      <label for="destino">Destino:</label>
      <input
        type="text"
        id="destino"
        v-model="destino"
        placeholder="Ingrese el destino"
        :class="{'input-error': !destino && formSubmitted}"
        aria-describedby="destino-help"
        required
      />
      <small id="destino-help" v-if="!destino && formSubmitted" class="error-message">Este campo es obligatorio.</small>
    </div>

    <!-- Botones -->
    <div class="buttons">
      <router-link to="/details" class="btn-secondary">
        Regresar
      </router-link>
      <button 
        class="btn-primary" 
        :class="{'btn-disabled': !origen || !destino}" 
        :disabled="!origen || !destino" 
        @click="validateAndProceed"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Variables reactivas
const origen = ref('');
const destino = ref('');
const formSubmitted = ref(false);

// Instancia del router
const router = useRouter();

// Método para validar y proceder
const validateAndProceed = () => {
  formSubmitted.value = true;

  // Validar campos antes de continuar
  if (origen.value && destino.value) {
    router.push('/service'); // Navega a la ruta deseada si todo está bien
  }
};
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

.cotizacion-envio {
  font-family: "Arial", sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

p {
  color: #777;
  font-size: 1.1rem;
  margin-bottom: 25px;
  text-align: center;
}

/* Formulario */
.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 5px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #ff6600; /* Color similar al enlace */
}

input.input-error {
  border-color: #ff0000;
}

.error-message {
  color: #ff0000;
  font-size: 0.875rem;
  margin-top: 5px;
}

/* Botones */
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.router-link-active, .btn-secondary, .btn-primary {
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 48%;
  text-align: center;
}

.router-link-active {
  text-decoration: none;
}

.btn-primary {
  background-color: #ff6600; /* Color principal */
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: #e65500; /* Color en hover */
  transform: scale(1.05); /* Efecto de zoom */
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
}

.btn-secondary:hover {
  background-color: #e2e2e2;
}

.btn-primary.btn-disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Media Queries */
@media (max-width: 768px) {
  .cotizacion-envio {
    padding: 20px;
    max-width: 100%;
  }

  h1 {
    font-size: 1.6rem;
  }

  .router-link-active, .btn-secondary, .btn-primary {
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.4rem;
  }

  input {
    padding: 10px;
    font-size: 0.9rem;
  }

  .router-link-active, .btn-secondary, .btn-primary {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
}
</style>
