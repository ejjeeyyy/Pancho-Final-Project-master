<template>
    <v-app-bar app color="black" dark flat class="px-12" >
      <v-btn >
        <v-icon color="#FFC20F" left class="mr-2">fas fa-signature</v-icon> 
      </v-btn>
      
  
      <v-spacer></v-spacer>
      <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
      <v-btn text @click="scroll('about')"  >About</v-btn>
      <v-btn text @click="scroll('portfolio')"  >Skills</v-btn>
      <v-btn text @click="scroll('program')"  >Program</v-btn>
      <v-btn text @click="scroll('services')" > School</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth" });
      },
    },
  };
  </script>
  
  <style>
  </style>