import ComponenteHome from "@/components/ComponenteHome.vue";
import ComponentLogin from "@/components/ComponentLogin.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        commponet: ComponenteHome
    },
    {
        path: "/Login",
        name: "Login",
        commponet: ComponentLogin
    }
]