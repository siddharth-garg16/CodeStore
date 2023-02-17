import LoggedHome from "../components/LoggedHome.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/LogIn.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "LoggedHome",
    component: LoggedHome,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: Login,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
