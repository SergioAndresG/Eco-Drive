import ComponetHome from "@/components/ComponetHome.vue";
import Login from "@/components/Login.vue";
import Map from "@/components/Map.vue";
import Nosotros from "@/components/Nosotros.vue";
import Register from "@/components/Register.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", // Ruta para el home
    name: "Home",
    component: ComponetHome, // Usa el componente Home importado correctamente
  },
  {
    path: "/login", // Ruta para iniciar sesión
    name: "Login",
    component: Login, // Usa el componente Login importado correctamente
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

