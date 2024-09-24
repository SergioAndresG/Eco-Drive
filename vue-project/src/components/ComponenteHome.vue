<template>
  <!-- Navbar -->
  <header>
    <nav>
      <ul>
        <li><a href="#">Nosotros</a></li>
        <img src="c:\Users\Device2\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{2F9E02F2-9324-411F-BF53-3BDFA6780E11}.png" class="logo">
        <li><a href="#">LOGIN</a></li>
      </ul>
    </nav>
    <hr>
   </header>
   <div class="image-container">
    <img src="https://img.freepik.com/fotos-premium/manos-planeta-tierra-simbolo-alta-tecnologia_999671-76879.jpg?w=826" alt="Imagen del medio ambiente" class="world">
    <div class="overlay-text">BIENVENIDO A ECO-DRIVE</div>
    <div class="overlay-text2">Una plataforma de movilidad de la mano del medio ambiente</div>
</div>
<hr class="two">

<div class="button-container">
        <button class="custom-button"><span>Inicia Sesión</span></button>
        <button class="custom-button"><span>Regístrate</span></button>
</div>
<hr class="two">
<h1 class="sub-title">Sobre Nosotros</h1>

<div class="container-cards">
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
        <p>Ecodrive es una plataforma dedicada a promover la movilidad sostenible a través de soluciones innovadoras y ecológicas para los conductores.</p>
      </div>
    </div>
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <p>Comprometidos con el medio ambiente, en Ecodrive trabajamos para facilitar el acceso a tecnologías limpias y fomentar el uso responsable de los recursos energéticos en la conducción.</p>
      </div>
    </div>
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <p>Nuestra plataforma, Ecodrive, nace de la pasión por la sostenibilidad y el deseo de crear un futuro donde la tecnología y la ecología vayan de la mano.</p>
      </div>
    </div>
</div>

<hr class="three">
<h1 class="sub-tittle2">Estamos Comprometidos</h1>

<section class="container-com">
  <div>
    <p>En Ecodrive, creemos que cada pequeño cambio cuenta, por eso ofrecemos herramientas y servicios diseñados para que los conductores reduzcan su impacto ambiental de forma práctica y eficiente.</p>
  </div>
</section>

<section class="container-un">
  <div>
    <p>¡Únete al movimiento hacia una conducción más sostenible con Ecodrive! 🚗🌿 Descubre cómo puedes reducir tu impacto ambiental mientras conduces con nuestras herramientas ecológicas y prácticas soluciones. Ya sea optimizando el consumo de combustible o eligiendo rutas más verdes, en Ecodrive hacemos que cada viaje cuente para el planeta. 🌍💚 ¡Visita nuestras Redes!</p>
  </div>
</section>

<img src="https://img.freepik.com/fotos-premium/imagen-hay-huevo-azul-dibujos-animados-rodeado-vegetacion-follaje_1132399-5647.jpg?uid=R150765989&ga=GA1.1.1982243995.1726942219&semt=ais_hybrid" id="imgE">

<footer>
  <div>
    <p>&copy; 2024 Mi Sitio Web</p>
  </div>
  <div><img src="" alt=""></div>
</footer>

</template>


<style scoped>
/* Navbar */
@import url('https://fonts.googleapis.com/css2?family=Magra:wght@400;700&display=swap');

body {
    font-family: "Magra", sans-serif;
    margin: 0; /* Elimina el margen predeterminado del body */
    padding: 0; /* Elimina el padding predeterminado del body */
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
  width: 200px;
  margin-left: -40px;
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

.world {
  height: 450px;
  width: 1160px;
  border-radius: 50px;
 
}

.image-container {
    margin-left: -1180px;
    margin-top: 200px;
    background-repeat: repeat;
    background-size: cover;
}

.overlay-text {
    position: absolute;
    top: 43%; 
    left: 40%; 
    transform: translate(-50%, -50%); 
    color: white; 
    font-size: 50px; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
}

.overlay-text2 {
  text-align: center;
    position: absolute;
    top: 60%; 
    left: 40%; 
    transform: translate(-50%, -50%); 
    color: white; 
    font-size: 20px; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.two{
  margin-top: 34px;
}
.three{
  margin-top: 400px;
  margin-left: -1200px;
}
/*Text- Somos nosotros */
.sub-title{
  color: #01832D;
  margin-left: 12px;
  margin-top: 63px;
  margin-left: -683px
}
.button-container {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin-top: 70px;
    margin-left: -880px;
}

/* From Uiverse.io by Ali-Tahmazi99 */ 
button {
 display: inline-block;
 width: 150px;
 height: 50px;
 border-radius: 10px;
 border: 1px solid #03045e;
 position: relative;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
}

button::before,
button::after {
 content: '';
 position: absolute;
 top: 0;
 width: 0;
 height: 100%;
 transform: skew(15deg);
 transition: all 0.5s;
 overflow: hidden;
 z-index: -1;
}

button::before {
 left: -10px;
 background: #7ED99E;
}

button::after {
 right: -10px;
 background: #01832D;
}

button:hover::before,
button:hover::after {
 width: 58%;
}

button:hover span {
 color: #000;
 transition: 0.3s;
}

button span {
 color: #01832D;
 font-size: 18px;
 transition: all 0.3s ease-in;
}

.container-cards {
    display: flex; /* Habilita Flexbox */
    flex-wrap: nowrap; /* Asegura que los elementos no se envuelvan */
    justify-content: flex-start; /* Alinea los elementos al inicio del contenedor */
    margin-left: 204px;
}

/* From Uiverse.io by arafatrahat94 */ 
.card {
  width: 190px;
  height: 254px;
  transition: all 0.2s;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 0px #0b2447;
  margin: 43px;
}

.card p{
  margin: 12px;
  padding: 12px;
}

.card-inner {
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.card:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 1px 1px #0b2447;
  animation: move-up4 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}

.sub-tittle2{
  margin-left: 39%;
  color: #01832D;
  margin-top: 18px;
}

.container-com{
  background-color: #01832c75;
  margin-top: 100px;
  margin-left: -1200px;
  border-radius: 10px;
  text-align: center;
  height: 100px;
  color: #000;
  font-size: 19px;
}

.container-com p{
  margin-top: 23px;
}

.container-un{
  margin-top: 53px;
  width: 400px;
  margin-left: 200px;
  font-size: 20px;
}
#imgE{
  margin-left: -490px;
  width: 400px;
  height: 400px;
  margin-top: 12px
}

</style>
