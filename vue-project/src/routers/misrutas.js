import ComponenteHome from "@/components/ComponenteHome.vue";
import ComponentLogin from "@/components/ComponentLogin.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ComponenteHome, // Se corrige "commponet" a "component"
  },
  {
    path: "/login", // Cambiado "/Login" a "/login" para ser consistente con convención de rutas
    name: "Login",
    component: ComponentLogin, // Se corrige "commponet" a "component"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
