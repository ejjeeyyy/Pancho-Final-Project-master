import { createRouter, createWebHistory } from 'vue-router';
import BasicMathView from '../views/BasicMathView.vue';
import StringAppView from '../views/StringAppView.vue';
import HomeView from '../views/DashboardView.vue';
import AxiosQuizView from '../views/AxiosQuiz.vue';
import VuetifyView from '../views/VuetifyView.vue';
import AboutAppView from '../views/AboutAppView.vue';
import AboutMeView from '../views/AboutMeView.vue';
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import QuizHistoryView from "../views/AxiosQuizHistory.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView,
    },
    {
      path: '/basicMath',
      name: 'basicMath',
      component: BasicMathView,
    },
    {
      path: '/axiosQuiz',
      name: 'axiosQuiz',
      component: AxiosQuizView,
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: VuetifyView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: AboutMeView,
    },
    {
      path: '/aboutapp',
      name: 'aboutapp',
      component: AboutAppView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: "/quizHistory",
      name: "Quiz History",
      component: QuizHistoryView,
    },
  ]
})

export default router;
