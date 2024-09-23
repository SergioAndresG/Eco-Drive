<template>
  <!-- Navbar -->
  <header>
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <img src="c:\Users\Device2\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{2F9E02F2-9324-411F-BF53-3BDFA6780E11}.png" class="logo">
        <li><a href="#">LOGIN</a></li>
      </ul>
    </nav>
    <hr>
  </header>
  <div class="container">
  <div class="slice"></div>
  <div class="slice"></div>
  <div class="slice"></div>
  <div class="slice"></div>
  <div class="slice"></div>
  <div class="slice"></div>
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
  <h1 id="sobre">Sobre Nosotros</h1>
  <div class="card-container">
    <!-- From Uiverse.io by dylanharriscameron -->
    <div class="card">
  <div class="bg"></div>
  <div class="blob"></div>
  <div class="content">
    <p>
      Ecodrive es una plataforma dedicada a promover la movilidad sostenible a través de soluciones innovadoras y ecológicas para los conductores.
    </p>
  </div>
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
  
  <section id="text1">
    <h2 id="Estamos">Estamos Comprometidos</h2>
    <hr id="li2">
    <div id="en">
      <p>En Ecodrive, creemos que cada pequeño cambio cuenta, por eso ofrecemos herramientas y servicios diseñados para que los conductores reduzcan su impacto ambiental de forma práctica y eficiente.</p>
    </div>
  </section>

  <section id="text3">
    <p id="t">¡Únete al movimiento hacia una conducción más sostenible con Ecodrive! 🚗🌿 Descubre cómo puedes reducir tu impacto ambiental mientras conduces con nuestras herramientas ecológicas y prácticas soluciones. Ya sea optimizando el consumo de combustible o eligiendo rutas más verdes, en Ecodrive hacemos que cada viaje cuente para el planeta. 🌍💚 ¡Visita nuestras Redes!</p>
  </section>

  <div class="imgF"><img src="https://img.freepik.com/vector-premium/ilustracion-circular-crecimiento-verde-iconos-empresariales-ambientales_657438-37631.jpg?uid=R150765989&ga=GA1.1.1982243995.1726942219&semt=ais_hybrid" alt="Imagen" id="imgf"></div>
</template>


<style scoped>
/* Navbar */
header {
  text-align: center;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: -1px;
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

.carousel {
  width: 700px;
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin: 50px auto; /* Centramos el carrusel */
}

.slides {
  width: 400%;
  height: 100%;
  display: flex;
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

#img-1:checked ~ .navigation-auto .auto-btn1,
#img-2:checked ~ .navigation-auto .auto-btn2,
#img-3:checked ~ .navigation-auto .auto-btn3,
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

/* Sección "Sobre Nosotros" */
#sobre {
  color: #01832D;
  text-align: center;
  font-size: 23px;
  margin-top: 600px;
  margin-left: -1220px;
}

/* Cartas */
.card-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

/* Estilos de la segunda sección */
#Estamos {
  color: #01832D;
  text-align: center;
  margin-top: 100px;
  font-size: 22px;
}

#li2 {
  margin: 30px 0;
}

#text1 {
  text-align: center;
  margin-top: 200px;
  margin-left: -1215px;
}

#text1 p {
  font-size: 18px;
  color: #666;
}

#en {
  background-color: #01832c57;
  border-radius: 15px;
  margin-top: 12px;
  padding: 12px;
  color: #000000;
}

/*text3 */

#text3{
  margin-top: 100px;
  width: 500px;
  margin-left: 124px;
}

#imgf{
  margin-left: -520px;
  width: 400px;
  height: 400px;
  margin-top: 23px;
}

/* From Uiverse.io by dylanharriscameron */ 
.card {
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 14px;
  z-index: -1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe;
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 190px;
  height: 240px;
  z-index: 2; /* Coloca el fondo detrás del contenido */
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1; /* Asegúrate de que esté debajo del contenido */
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #01832c95;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

.blob p {
  position: relative;
  z-index: 5; /* Asegura que el texto esté sobre todo */
  color: black;
  font-size: 14px;
  text-align: center;
  margin: 0;
  padding: 10px;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}


</style>
