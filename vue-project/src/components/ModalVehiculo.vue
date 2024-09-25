<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <div class="car-form">
        <h2>Registro de Vehículo</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="plate">Placa del Auto:</label>
            <input type="text" id="plate" v-model="formData.plate" required />
          </div>

          <div class="form-group">
            <label for="color">Color del Auto:</label>
            <input type="text" id="color" v-model="formData.color" required />
          </div>

          <div class="form-group">
            <label for="passengerCapacity">Capacidad de Pasajeros:</label>
            <input type="number" id="passengerCapacity" v-model.number="formData.passengerCapacity" required />
          </div>

          <div class="form-group">
            <label for="modelYear">Año del Modelo:</label>
            <input type="number" id="modelYear" v-model.number="formData.modelYear" required />
          </div>

          <div class="form-group">
            <label for="insurance">Seguro:</label>
            <input type="text" id="insurance" v-model="formData.insurance" required />
          </div>

          <div class="form-group">
            <label for="licenseNumber">Número de Licencia:</label>
            <input type="text" id="licenseNumber" v-model="formData.licenseNumber" required />
          </div>

          <div class="form-group">
            <label for="registration">Registro del Auto:</label>
            <input type="text" id="registration" v-model="formData.registration" required />
          </div>

          <div class="form-group">
            <label for="brand">Marca del Vehículo:</label>
            <input type="text" id="brand" v-model="formData.brand" required />
          </div>

          <button type="submit" id="botton">Registrar Vehículo</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        plate: '',
        color: '',
        passengerCapacity: null,
        modelYear: null,
        insurance: '',
        licenseNumber: '',
        registration: '',
        brand: ''
      }
    };
  },
  methods: {
    submitForm() {

      // const response = await api.post('/vehiculos', this.formData)
      // Aquí puedes manejar la lógica para enviar los datos
      console.log('Datos del vehículo:', this.formData);
      
      // Reiniciar el formulario después de enviar
      this.resetForm();
      
      // Emitir un evento para cerrar el modal (opcional)
      this.$emit('close');
    },
    resetForm() {
      this.formData = {
        plate: '',
        color: '',
        passengerCapacity: null,
        modelYear: null,
        insurance: '',
        licenseNumber: '',
        registration: '',
        brand: ''
      };
    }
  }
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 25px;
  margin-top: 83px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.form-group{
  margin: 12px;
  padding: 4px
}
input{
  margin-left: 12px;
  border-radius: 5px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#botton{
  background-color: #39E272;
  height: 40px;
  width: 153px;
  border-radius: 12px;
  color: #fefefe;
  transition: background-color 0.3s
}
#botton:hover{
  background-color: #01832D;
  color: black;
}
</style>
  