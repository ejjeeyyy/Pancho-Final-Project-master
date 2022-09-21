<template>
  <main>
    <v-container fluid>
      <v-card class="pa-md-4 mt-5 mx-lg-auto" color="gray" width="650px">

        <div><h1 class="text-white" align="center">STRING APP:</h1></div>
        <v-card-text>
          <v-text-field label="Enter any String:" v-model.text="vowel" @change='answer'></v-text-field>
        </v-card-text>
   
 

        <div class="text-center">
        <v-btn @click="result" tile dark class="text-light-blue mt-8" variant="outlined">
          RESULT
        </v-btn></div><br>

        
     
        <v-container fluid>
        <v-row align="center"  class="text-white">
          
            <v-col class="d-flex" cols="12" sm="6">
            <span>Vowels: {{ vow }}</span><br>
            </v-col>
          
            <v-col class="d-flex" cols="12" sm="6">
            <span>Number of Characters: {{ count }}</span><br>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
            <span>Consonants: {{ conso }}</span><br>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
            <span>Vowel to : {{ con }}</span><br>  
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
            vowel: "",
            vow: 0,
            count: 0,
            conso: 0,
            con: "",
        }
    },
    methods: {
      answer: function () {
        var vowelList = 'aeiouAEIOU';
        this.vow = 0;
        this.count = 0;
        this.conso = 0;
        this.con = "";
          for (var x = 0; x < this.vowel.length; x++) {
              if (vowelList.indexOf(this.vowel[x]) !== -1) {
              this.vow = this.vow + 1;
          }
      }
      for (var x = 0; x < this.vowel.length; x++) {
            this.count = this.count + 1;
      }
      for (var x = 0; x < this.vowel.length; x++) {
            if (vowelList.indexOf(this.vowel[x]) == -1) {
            this.conso = this.conso + 1;
        }
      }
      for (var x = 0; x < this.vowel.length; x++) {
          if (vowelList.indexOf(this.vowel[x]) !== -1) {
            this.con += "*";
          } else {
            this.con += this.vowel[x];
          }
      }
    }
  }
}
</script>