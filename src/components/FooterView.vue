<template>
    <v-footer>
        <v-card
          elevation="0"
          rounded="0"
          width="100%"
          class="text-center"
          id="footer"
        >
    
          <v-card-text class="text-black">
            
            <strong>Final Project CIT510 - Intergrative Programming and Technologies</strong> - @{{ new Date().getFullYear() }} 
          </v-card-text>
        </v-card>
      </v-footer>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .v-footer {
    padding: 1px 0 !important;
 
  }

  #footer{
    background-color: #FFC20F;
    
  }
  </style>