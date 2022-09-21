<template>
   <main>
    <v-container fluid>
    <v-card
    class="pa-md-4 mt-5 mx-lg-auto"
    color="gray"
    width="650px"
  >
  <div><h1 class="text-white" align="center">CALCULATOR APP:</h1></div>
    <v-card-text>
   
      <v-text-field label="First Input" v-model.number="f_number"></v-text-field>
      <v-text-field label="Second Input" v-model.number="s_number"></v-text-field>
    </v-card-text>

    <div class="text-center">
        <v-btn @click="result" tile dark class="text-light-green mt-8" variant="outlined">
          RESULT
        </v-btn></div><br>
  <p></p>

  <v-container fluid>
    <br>
    <v-row align="center" class="text-white">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
  <p>Sum: {{ sum }}</p><br/>
        
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <p>Difference: {{ difference }}</p><br/>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <p>Product: {{ product }}</p><br/>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      
  <p>Quotient: {{ quotient }}</p><br/>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
 
      <p>Average: {{ average }}</p><br/>
      </v-col>
    </v-row>
  </v-container>


  </v-card>

  </v-container>
   
  </main>
   </template>

<script>

  export default {
      el: '#app',
      data() {
          return {
              f_number: 0,
                s_number: 0,
                sum: 0,
              difference: 0,
              product: 0,
              quotient: 0,
              average: 0,
          }
      },
      methods: {
          result: function () {
              this.sum = this.f_number + this.s_number;
              this.difference = this.f_number - this.s_number;
              this.product = this.f_number * this.s_number;
              this.quotient = this.f_number / this.s_number;
              this.average = (this.f_number + this.s_number) / 2;
          }
      }
  }
  
  </script>
    
<style scoped>
  .bg-vue-dark {
    background: #31475e;
  }
  .hover-class:hover {
    cursor: pointer;
    background: #3D5875;
  }
  .bg-vue-green {
    background: #3fb984;
  }

  
</style>