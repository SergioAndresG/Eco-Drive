<template>
    <body>

<!-- Navbar -->
<header>
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li class="logo">Eco-Drive</li>
        <li><a href="#">LOGIN</a></li>
      </ul>
    </nav>
    <hr>
</header>

<div class="animated-loader">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>

<div class="carousel">
    <div class="slides">
      <input type="radio" name="radio-btn" id="img-1" checked>
      <input type="radio" name="radio-btn" id="img-2">
      <input type="radio" name="radio-btn" id="img-3">
      <input type="radio" name="radio-btn" id="img-4">

      <div class="slide first">
        <img src="https://img.freepik.com/vector-gratis/diferentes-conceptos-ecologicos-alrededor-bombilla_23-2148204969.jpg?t=st=1726976717~exp=1726980317~hmac=a6a2bf40ceff90819f37fdeb566aa6e15bf2ca757ae487f267bc6d3753279082&w=740" alt="Imagen 1">
      </div>
      <div class="slide">
        <img src="https://img.freepik.com/vector-gratis/concepto-ecologia-dibujado-mano-elementos-naturales_23-2148218012.jpg?t=st=1726977958~exp=1726981558~hmac=4fac46d4edb05eab0be7a34d8bb05daa4f47f7bf90a5646905dec92cda94e5a4&w=740" alt="Imagen 2">
      </div>
      <div class="slide">
        <img src="https://img.freepik.com/vector-gratis/concepto-ecologia-papel_23-2148475265.jpg?uid=R150765989&ga=GA1.1.1982243995.1726942219&semt=ais_hybrid" alt="Imagen 3">
      </div>
      <div class="slide">
        <img src="https://img.freepik.com/vector-premium/tierra-verde-iconos-energia-renovable_657438-41594.jpg?uid=R150765989&ga=GA1.1.1982243995.1726942219&semt=ais_hybrid" alt="Imagen 4">
      </div>

      <!-- Navegación automática -->
      <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
      </div>
    </div>

    <!-- Controles manuales -->
    <div class="navigation-manual">
      <label for="img-1" class="manual-btn"></label>
      <label for="img-2" class="manual-btn"></label>
      <label for="img-3" class="manual-btn"></label>
      <label for="img-4" class="manual-btn"></label>
    </div>
  </div>

  
<div class="animated-loader2">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>
 
  <h1 id="sobre">Sobre Nosotros</h1>
  <div class="card-container">
        <div class="card">
            <p>
                Ecodrive es una plataforma dedicada a promover la movilidad sostenible a través de soluciones innovadoras y ecológicas para los conductores.
            </p>
        </div>
        <div class="card">
            <p>
                Comprometidos con el medio ambiente, en Ecodrive trabajamos para facilitar el acceso a tecnologías limpias y fomentar el uso responsable de los recursos energéticos en la conducción.
            </p>
        </div>
        <div class="card">
            <p>
                Nuestra plataforma, Ecodrive, nace de la pasión por la sostenibilidad y el deseo de crear un futuro donde la tecnología y la ecología vayan de la mano.
            </p>
        </div>
    </div>


    <h2 id="Estamos">Estamos Comprometidos</h2>
    <hr id="li2">
    <section>
        <div>
            <p>En Ecodrive, creemos que cada pequeño cambio cuenta, por eso ofrecemos herramientas y servicios diseñados para que los conductores reduzcan su impacto ambiental de forma práctica y eficiente.</p>
        </div>
    </section>
</body>
</template>

<style scoped>
body{
    margin-top: -420px;
}

/* Navbar */
header {
  text-align: center;
  padding: 10px 0;
  margin-top: -529px;
  margin-left: 63px;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0;
}

nav ul li {
  display: inline;
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

hr {
  border: none;
  height: 1px;
  width: 1100px;
  background-color: #000;
  margin-top: 10px;
}

.carousel {
  width: 700px;
  height: 530px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin-left: -890px;
  margin-top: 129px;
}

.slides {
  width: 400%;
  height: 100%;
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 100%;
  transition: 0.6s;
}

.slide img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* Estilos para la navegación automática */
.navigation-auto {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.navigation-auto div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  margin: 0 5px;
  transition: background 0.4s;
}

#img-1:checked ~ .slides .slide {
  margin-left: 0;
}

#img-2:checked ~ .slides .slide {
  margin-left: -100%;
}

#img-3:checked ~ .slides .slide {
  margin-left: -200%;
}

#img-4:checked ~ .slides .slide {
  margin-left: -300%;
}

#img-1:checked ~ .navigation-auto .auto-btn1 {
  background: #4E8DA6;
}

#img-2:checked ~ .navigation-auto .auto-btn2 {
  background: #4E8DA6;
}

#img-3:checked ~ .navigation-auto .auto-btn3 {
  background: #4E8DA6;
}

#img-4:checked ~ .navigation-auto .auto-btn4 {
  background: #4E8DA6;
}

/* Controles manuales */
.navigation-manual {
  position: absolute;
  width: 100%;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  border: 2px solid #4E8DA6;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.manual-btn:not(:last-child) {
  margin-right: 20px;
}

.manual-btn:hover {
  background: #4E8DA6;
}

/* Animación automática del carrusel */
@keyframes slide {
  0% {
    margin-left: 0;
  }
  25% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  100% {
    margin-left: 0;
  }
}
.slides {
  animation: slide 16s infinite;
}

/*Mensaje h1 */
#sobre{
    color: #01832D;
    margin-top: 754px;
    margin-left: -420px;
    font-size: 23px;
    white-space: nowrap;
}

/*Catas */
.card-container {
    display: flex;
    gap: 20px;
    margin-top: 1100px;
    margin-left: -400px;
}

.card {
    background-color: #01832c93;
    padding: 20px;
    border-radius: 10px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card p {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
}

.card:hover {
    transform: scale(1.05);
}
/* From Uiverse.io by Cksunandh */ 
.animated-loader {
  position: absolute;

  width: 230px; /* Increased width to account for the gaps */
  height: 100px;

  margin-top: 50px;
  margin-left: 20px; /* Adjusted for the new loader width */

  perspective: 1000px;
  transform-style: preserve-3d;
}
.animated-loader2 {
  position: absolute;

  width: 230px; /* Increased width to account for the gaps */
  height: 100px;

  margin-top: 50px;
  margin-left: 1020px; /* Adjusted for the new loader width */

  perspective: 1000px;
  transform-style: preserve-3d;
}
/* The line */
.line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 100px;

  background-color: #39E272; /* White bars */
  box-shadow: 0 4px 15px rgba(38, 38, 38, 0.6); /* White glow shadow */

  transform: scaleY(0);
  transform-style: preserve-3d;

  animation: animate-line 5s cubic-bezier(0.81, 0.04, 0.4, 0.7) infinite;
}
/* Positioning the bars with 5px gaps */
.line:nth-child(2) {
  left: 25px; /* Adding 5px gap */
  animation-delay: 50ms;
}
.line:nth-child(3) {
  left: 50px; /* Adding 5px gap */
  animation-delay: 100ms;
}
.line:nth-child(4) {
  left: 75px; /* Adding 5px gap */
  animation-delay: 150ms;
}
.line:nth-child(5) {
  left: 100px; /* Adding 5px gap */
  animation-delay: 200ms;
}
.line:nth-child(6) {
  left: 125px; /* Adding 5px gap */
  animation-delay: 250ms;
}
.line:nth-child(7) {
  left: 150px; /* Adding 5px gap */
  animation-delay: 300ms;
}
.line:nth-child(8) {
  left: 175px; /* Adding 5px gap */
  animation-delay: 350ms;
}
@keyframes animate-line {
  0% {
    transform: rotateZ(-180deg) rotateX(-360deg);
  }
  75%,
  100% {
    transform: rotateZ(0) rotateX(0);
  }
}

/*Mensaje h2 */
#Estamos{
    color: #01832D;
    margin-top: 1500px;
    margin-left: -442px;
    white-space: nowrap;
}

/*Linea 2 */
#li2{
    margin-top: 1550px;
    margin-left: -700px;
}
</style>