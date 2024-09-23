<template>
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

  
  <section id="text1">
    <h2 id="Estamos">Estamos Comprometidos</h2>
    <hr id="li2">
    <div>
      <p>En Ecodrive, creemos que cada pequeño cambio cuenta, por eso ofrecemos herramientas y servicios diseñados para que los conductores reduzcan su impacto ambiental de forma práctica y eficiente.</p>
    </div>
  </section>
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

.card {
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 10px;
  width: 30%;
  height: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card p {
  font-size: 16px;
  text-align: center;
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

</style>
