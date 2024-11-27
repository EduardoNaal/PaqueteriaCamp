<template>
    <div class="cotizacion-paquete">
      <h1>Detalles del Paquete</h1>
      <p>Complete el formulario con los detalles del paquete para calcular el costo con las distintas paqueterías.</p>
  
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            placeholder="Ingrese el peso del paquete"
            v-model="peso"
            :class="{'is-invalid': pesoTouched && !pesoValid}"
            required
            min="0.1"
            step="0.1"
          />
        </div>
  
        <div class="form-group">
          <label for="largo">Largo (cm):</label>
          <input
            type="number"
            id="largo"
            placeholder="Ingrese el largo del paquete"
            v-model="largo"
            :class="{'is-invalid': largoTouched && !largoValid}"
            required
            min="1"
          />
        </div>
  
        <div class="form-group">
          <label for="ancho">Ancho (cm):</label>
          <input
            type="number"
            id="ancho"
            placeholder="Ingrese el ancho del paquete"
            v-model="ancho"
            :class="{'is-invalid': anchoTouched && !anchoValid}"
            required
            min="1"
          />
        </div>
  
        <div class="form-group">
          <label for="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            placeholder="Ingrese la altura del paquete"
            v-model="altura"
            :class="{'is-invalid': alturaTouched && !alturaValid}"
            required
            min="1"
          />
        </div>
  
        <div class="buttons">
          <router-link to="/" class="btn-secondary">Regresar</router-link>
          <router-link
            to="/address"
            class="btn-primary"
            :class="{'disabled': !formIsValid}"
            :disabled="!formIsValid"
          >
            Siguiente
          </router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CotizacionPaquete',
    data() {
      return {
        peso: '',
        largo: '',
        ancho: '',
        altura: '',
        pesoTouched: false,
        largoTouched: false,
        anchoTouched: false,
        alturaTouched: false
      };
    },
    computed: {
      pesoValid() {
        return this.peso >= 0.1;
      },
      largoValid() {
        return this.largo >= 1;
      },
      anchoValid() {
        return this.ancho >= 1;
      },
      alturaValid() {
        return this.altura >= 1;
      },
      formIsValid() {
        return this.pesoValid && this.largoValid && this.anchoValid && this.alturaValid;
      }
    },
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
  
  /* Estilo del formulario */
  .cotizacion-paquete {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  }
  
  p {
    color: #777;
    font-size: 1.1rem;
    margin-bottom: 25px;
    text-align: center;
  }
  
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
    border-color: #007bff;
  }
  
  input.is-invalid {
    border-color: #ff0000;
  }
  
  /* Estilo de los botones */
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
    background-color: #ff6600;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #e65500;
  }
  
  .btn-secondary {
    background-color: #f5f5f5;
    color: #333;
  }
  
  .btn-secondary:hover {
    background-color: #e2e2e2;
  }
  
  .btn-primary.disabled,
  .btn-primary:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  /* Media queries */
  @media (max-width: 768px) {
    .cotizacion-paquete {
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
  