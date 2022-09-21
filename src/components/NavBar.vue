<template>
  <v-toolbar app>
      <v-toolbar-title v-if="user.loggedIn"><h6 class="font-weight-light">CIT 510-IT41S2 - Integrative Programming and Technologies 2</h6></v-toolbar-title>
      <v-toolbar-title v-else><h6 class="font-weight-light">You are not Logged in!</h6></v-toolbar-title>
  
      <div v-if="user.loggedIn">
        <v-btn class="text-white font-weight-light" @click.prevent="signOut" href="/">
        </v-btn>

      </div>
      <div v-else>
        <v-btn color="white" class="font-weight-light" router :to="loginUrl" prepend-icon="mdi-login-variant">
          Login
        </v-btn>
        <v-btn color="white" class="font-weight-light" router :to="registerUrl" prepend-icon="mdi-account-plus-outline">
          Register
        </v-btn>
      </div>
    </v-toolbar>
    <!-- <v-divider></v-divider> -->
    <div v-if="user.loggedIn">
      <v-navigation-drawer style="color:white" expand-on-hover rail="true">
          <v-list>
        
            <v-list-item
              prepend-avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              :title="user.data.displayName" :subtitle="user.data.email"></v-list-item>
           
           
          </v-list>
          <v-divider></v-divider>
  
    


          <v-list density="compact" app>
            <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon" class="text-white">
              <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
  
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" app>
            <v-list-item v-for="item in activities"  :key="item.title" router :to="item.path" :prepend-icon="item.icon" class="text-white">
              <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
  
            </v-list-item>
          </v-list>


          <v-divider></v-divider>
          <v-list-item class="text-white" prepend-icon="mdi-logout-variant" subtitle="Logout" @click.prevent="signOut" href="/"></v-list-item>
        
      </v-navigation-drawer>
      
    </div>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import { computed } from "vue";
  import { auth } from '../firebase'
  
  export default {
    data() {
      return {
        drawer: false,
        loginUrl: '/login',
        registerUrl: '/register',
        activities: [
          { title: 'Math', icon: 'mdi-calculator-variant', path: '/basicMath', color: "warning" },
          { title: 'String App', icon: 'mdi-message-processing', path: '/stringApp', color: "warning" },
          { title: 'Quiz', icon: 'mdi-book-open', path: '/axiosQuiz', color: 'warning' },
        ],

        items: [

          { title: 'Profile Integration', icon: 'mdi-account-multiple', path: '/profile', color: 'warning' },
          { title: 'About Application', icon: 'mdi-home-account', path: '/', color: "warning" },
          { title: 'Vuetify', icon: 'mdi-vuetify', path: '/vuetify', color: 'warning' }, 
          { title: 'Quiz History', icon: 'mdi-web', path: '/quizHistory', color: 'warning' },  
        ],
        rail: false,
      }
    },
    setup() {
  
      const store = useStore()
      const router = useRouter()
  
      auth.onAuthStateChanged(user => {
        store.dispatch("fetchUser", user);
      });
      const user = computed(() => {
        return store.getters.user;
      });
      const signOut = async () => {
        await store.dispatch('logOut')
        router.push('/login')
      }
      return { user, signOut }
    }
  };
  </script>

<style>
  .title{
    color: white;
  }
</style>