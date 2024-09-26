<template>
    <header>
            <nav>
              <ul>
                <img src="https://res.cloudinary.com/dqwx4l5cy/image/upload/v1727245380/Captura_de_pantalla_2024-09-25_011635_paeml8.png" class="logo">
                <li><router-link to="/">Home</router-link></li>
                <li id="eco"><a href="#">Eco-Drive</a></li>
         
                <li><router-link to="/Nosotros">Nosotros</router-link></li>
              </ul>
            </nav>
            <hr>
           </header>
           <div class="card">
        <div class="profile-section">
          <img class="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcw0dI7UAlzmvQetv6JKy-RKCWPzlsyQRY-A&s" alt="Pasajero" />
          <span class="role">CONDUCTOR</span>
        </div>
        
        <div class="info-section">
          <div class="info-item">
            <span>Nombre:</span>
            <span class="line"></span>
          </div>
          <div class="info-item">
            <span>Apellido:</span>
            <span class="line"></span>
          </div>
          <div class="info-item">
            <span>Número:</span>
            <span class="line"></span>
          </div>
    
          <div class="rating-section">
            <span>Calificación Viajera:</span>
            <div class="stars">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
            <span class="rating">5.0</span>
          </div>
        </div>
    
      </div>
      <div class="message-card">
        <p>
          Cada viaje cuenta, así que sigue prefiriéndonos, ayudas al medio ambiente y a los conductores que te ayudan
        </p>
        <router-link to="/Login" class="register-btn">¿Cambiar de rol?</router-link>

      </div>
    
      
    </template>
    
    <style scoped>
    .register-btn {
      background-color: #b2f2bb;
      border: none;
      border-radius: 20px;
      padding: 5px 15px;
      font-size: 16px;
      cursor: pointer;
      margin-right: 1px;
      margin-top: 53px;
    }
    
    .register-btn:hover {
      background-color: #a3e6a9;
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
        .card {
      display: flex;
      flex-direction: row;
      padding: 20px;
      width: 800px;
      height: 500px;
      margin-top: 200px;
      margin-left: -930px;
      background-image: url('https://img.freepik.com/vector-gratis/ilustracion-sequia-diseno-plano_23-2151330592.jpg?uid=R150765989&ga=GA1.1.1982243995.1726942219&semt=ais_hybrid');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 33px;
      top: 2%;
      opacity: 0.6;
      z-index: -1;
    }
    
    .profile-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 120px;
      margin-right: 20px;
    }
    
    .avatar {
      width: 180px;
      height: 180px;
      margin-top: 80px;
      margin-left: 363px;
      border-radius: 103px;
    }
    
    .role {
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
      margin-left: 363px;
    }
    
    .info-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      margin-top: 323px;
    }
    
    .info-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    
    .line {
      border-bottom: 1px solid green;
      width: 250px;
      margin-right: 280px;
    }
    
    .rating-section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    
    .stars {
      margin-left: 10px;
      display: flex;
    }
    
    .star {
      font-size: 20px;
      color: gold;
    }
    
    .rating {
      margin-left: 5px;
      font-size: 18px;
      font-weight: bold;
    }
    
    .message-card {
      width: 500px;
      padding: 20px;
      border: 2px solid black;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      text-align: center;
      font-size: 16px;
      font-style: italic;
      color: black;
      margin-left: 355px;
      margin-top: 23px;
    }
    
    </style>