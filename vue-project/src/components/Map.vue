<template>
    <header>
    <nav>
      <ul>
        <img src="https://res.cloudinary.com/dqwx4l5cy/image/upload/v1727245380/Captura_de_pantalla_2024-09-25_011635_paeml8.png" class="logo">
        <li><router-link to="/">Home</router-link></li>
        <li id="eco"><a href="#">Eco-Drive</a></li>
        <li><router-link to="/Register">Registrate</router-link></li>
        <li><a href="#">Nosotros</a></li>
      </ul>
    </nav>
    <hr>
   </header>
   <div id="contend">
    <h2>Buscar Ubicación</h2>
    <input v-model="address" placeholder="Introduce una dirección" />
    <button @click="searchLocation">Buscar</button>

    <div v-if="location">
      <h3>Resultados:</h3>
      <p>Latitud: {{ location.lat }}</p>
      <p>Longitud: {{ location.lon }}</p>
      <p>Dirección: {{ location.display_name }}</p>
    </div>
  </div>
</template>

<script>
import { getGeocode } from '../api'; // Asegúrate de que la ruta sea correcta

export default {
  data() {
    return {
      address: '',
      location: null,
    };
  },
  methods: {
    async searchLocation() {
      try {
        const response = await getGeocode(this.address);
        if (response.data.length > 0) {
          this.location = response.data[0]; // Obtiene el primer resultado
        } else {
          alert('No se encontraron resultados.');
        }
      } catch (error) {
        console.error('Error al buscar ubicación:', error);
      }
    },
  },
};
</script>

<style>
#contend{
    margin-top: 200px;
    margin-left: -800px
}

header {
  text-align: center;
  margin-left: -1px;
  height: 180px;
}
nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;

}

nav ul li a {
  text-decoration: none;
  color: #01832D;
  font-weight: bold;
}

nav ul li.logo {
  font-size: 1.5rem;
  color: #01832D;
}

.logo{
  width: 140px;
  height: 130px;
  margin-left: -90px;
  padding: 12px;
}

hr {
  border: none;
  height: 1px;
  background-color: #000;
  margin-top: 10px;
  width: 1200px;
  margin-left: 35px;
  margin: 1px;
}

</style>