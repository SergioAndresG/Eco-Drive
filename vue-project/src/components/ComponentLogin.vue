<template>
  <header>
    <nav>
      <ul>
        <img src="https://res.cloudinary.com/dqwx4l5cy/image/upload/v1727245380/Captura_de_pantalla_2024-09-25_011635_paeml8.png" class="logo">
        <li><a href="#">Home</a></li>
        <li id="eco"><a href="#">Eco-Drive</a></li>
        <li><router-link to="/Login">Registrate</router-link></li>
        <li><a href="#">Nosotros</a></li>
      </ul>
    </nav>
    <hr>
   </header>

   <h1 class="title">LOGIN</h1>

   <div class="form-container">
    <div class="header">
      <p>¿Es tu primera vez?</p>
      <button class="register-btn">Regístrate</button>
    </div>
    <form class="register-form">
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" class="form-input" />
      </div>
      <div class="form-group">
        <label for="role">Rol:</label>
        <input type="text" id="role" class="form-input" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" class="form-input" />
      </div>
    </form>
  </div>

  <div class="imgL-container">
    <img src="https://img.freepik.com/premium-vector/hand-drawn-endless-scrolling-illustration_23-2150740574.jpg?w=740" class="imgL">
  </div>


  <h1 class="conect">Conectate con:</h1>

  <section class="red-container">
    <div><img src="https://i.pinimg.com/474x/7c/a7/72/7ca772233860a0a8de25b2c3b784f7fc.jpg" class="logF"></div>
    <div><img src="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png" class="logG"></div>
  </section>

  <div class="conatiner-imgE">
    <img src="https://img.freepik.com/premium-vector/colorful-doodle-illustration-earth-surrounded-by-nature-elements_1294240-28259.jpg?w=740" class="earth">
  </div>

</template>

<style scoped>
body {
    font-family: "Magra", sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    height: 100vh; /* Asegura que el div ocupe toda la altura de la ventana */
}

#eco{
    font-size: 44px;
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
.title{
    margin-top: 200px;
    margin-left: -950px;
    color: #7ED99E;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 88px;
}

.header p {
  margin: 0;
  font-size: 18px;
  margin-left: 28px;
}

.register-btn {
  background-color: #b2f2bb;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 850px;
}

.register-btn:hover {
  background-color: #a3e6a9;
}

.register-form {
  width: 50%;
  margin-top: 34px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #78c79e;
  color: white;
  font-size: 14px;
}

.form-input::placeholder {
  color: white;
}

.form-group label {
  font-size: 19px;
  margin-bottom: 5px;
  display: block;
  margin-left: 45%;
}

.imgL{
    margin-left: -400px;
    width: 350px;
    height: 350px;
}

.imgL-container{
    margin-right: 200px;
}

.red-container{
    margin-top: 69px;
    width: 200px;
    height: 70px;
    display: flex;
    margin-left: -1000px;
}

.logG{
    width: 50px;
    height: 50px;
    margin-left: 80px;
    margin-top: 12px;
}

.logF{
    width: 50px;
    height: 50px;
    margin-top: 12px
}

.conect{
    margin-left: 205px;
    margin-top: 23px;
    color: #7ED99E;
}

.earth{
    width: 140px;
    height: 140px;
    margin-left: 700px;
    margin-top: -310px


}

.container-imgE{
    margin-top: -300px
}
</style>