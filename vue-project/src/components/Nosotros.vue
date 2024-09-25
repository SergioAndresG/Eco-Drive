<template>
    <header>
    <nav>
      <ul>
        <img src="https://res.cloudinary.com/dqwx4l5cy/image/upload/v1727245380/Captura_de_pantalla_2024-09-25_011635_paeml8.png" class="logo">
        <li><router-link to="/">Home</router-link></li>
        <li id="eco"><a href="#">Eco-Drive</a></li>
        <li><router-link to="/Login">Registrate</router-link></li>
        <li><a href="#">Nosotros</a></li>
      </ul>
    </nav>
    <hr>
   </header>
</template>

<style>
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