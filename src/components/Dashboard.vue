<template>
  <v-app id="home">
    <v-container fluid>
      <v-col cols="12" id="page">
        <div class="pre">
          <v-row>
             
            <v-col cols="12" sm="4">
                <v-card class="mx-auto">
                  <v-avatar color="#FFC20F" size="150" class="mt-6"><img src="@/assets/math.png" alt="CiandraPancho" height="80" width="80"></v-avatar>
                  <v-card-title><h2>Calculator App</h2></v-card-title>
                  <v-card-subtitle>
                    Laboratory Activity 1
                  </v-card-subtitle>
                  <v-card-text>
                    <p align="justify">
                      This activity contains two input numbers
                      that will result to addition (sum), subtraction (minus),  
                      multiplication (product), division (quotient), 
                      and average in one buttons.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card class="mx-auto">
                  <v-avatar color="#FFC20F" size="150" class="mt-6"><img src="@/assets/alphabet.png" alt="CiandraPancho" height="80" width="80"></v-avatar>
                  <v-card-title><h2>String Manipulator</h2></v-card-title>
                  <v-card-subtitle>
                    Laboratory Activity 2
                  </v-card-subtitle>
                  <v-card-text>
                    <p align="justify">
                      This activity contains a set of String Manipulator
                      will count the numbers of vowels, consonants, characters, 
                      and change the vowels into asterisk.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card class="mx-auto">
                  <v-avatar color="#FFC20F" size="150" class="mt-6"><img src="@/assets/quiz.png" alt="CiandraPancho" height="80" width="80"></v-avatar>
                  <v-card-title><h2>Quiz App</h2></v-card-title>
                  <v-card-subtitle>
                    Laboratory Activity 3
                  </v-card-subtitle>
                  <v-card-text>
                    <p align="justify">
                      The quiz is acquired by utilizing Axios.
                      The imported Axios will post the Questions 
                      and Answers from the Trivia Database. The user 
                      can view his history of takingg quiz.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card class="mx-auto">
                  <v-avatar color="#FFC20F" size="150" class="mt-6"><img src="@/assets/vuetify.png" alt="CiandraPancho" height="80" width="80"></v-avatar>
                  <v-card-title><h2>Vuetify Research</h2></v-card-title>
                  <v-card-subtitle>
                    Laboratory Activity 4
                  </v-card-subtitle>
                  <v-card-text>
                    <p align="justify">
                      Vuetify is a Vue UI Library with beautifully handcrafted Material Components. 
                      No design skills required — everything you need to create amazing applications 
                      is at your fingertips.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card class="mx-auto">
                  <v-avatar color="#FFC20F" size="150" class="mt-6"><img src="@/assets/kitsune.png" alt="CiandraPancho" height="80" width="80"></v-avatar>
                  <v-card-title><h2>Profile Integration</h2></v-card-title>
                  <v-card-subtitle>
                    Laboratory Activity 5
                  </v-card-subtitle>
                  <v-card-text>
                    <p align="justify">
                      Profile Integration contains the information about the developer
                      of the Application. In this section, the user can navigate through
                      different information about the developer.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>


              <v-col cols="12" sm="4">
                <v-card class="mx-auto">
                  <v-avatar color="#FFC20F" size="150" class="mt-6"><img src="@/assets/vuex.png" alt="CiandraPancho" height="80" width="80"></v-avatar>
                  <v-card-title><h2>About the Application</h2></v-card-title>
                  <v-card-subtitle>
                    Laboratory Activity 6
                  </v-card-subtitle>
                  <v-card-text>
                    <p align="justify">
                      This web application logo symbolizes the collaboration of 
                      Vuex, Vuetify, and Firebase Real-time Database. Login to the
                      Web Application Final Project to know more.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>


            </v-row>
          </div>
        </v-col>


        
      </v-container>
      <FooterView />
    </v-app>
</template>

<script>
  import { defineComponent } from "vue";
  import NavBar from "../components/NavBar1.vue";
  import FooterView from "../components/FooterView.vue";
  
  
  export default defineComponent({
    name: "AboutAppView",
    setup() {
      return {
        slider2: 50,
  
        items: [
          {
            img: "i3.jpg",
          },
          {
            img: "i4.jpg",
          },
          {
            img: "i5.jpg",
          },
          {
            img: "i6.jpeg",
          },
          {
            img: "i9.jpg",
          },
          {
            img: "i8.jpg",
          },
        ],
      };
    },
    components: {
      NavBar,
      FooterView
  },
  });
  </script>

  <style scoped>
  .v-container {
    padding: 16px 0 16px 0;
  }
  
 


  .first {
    width: 100%;
    height: 20px;
    text-align: center;
    padding: 2rem 2rem;
  }
  .child {
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }
  .imgHover {
    padding: 0 200px;
  }
  .pre {
    width: 100%;
    height: 900px;
    text-align: center;
    padding: 0 200px;
  }
  .hire {
    width: 100%;
    height: 200px;
    padding: 0 200px;
    margin-top: -24px;
  }

  #cardbg{
    background-color: #FFC20F;
  }
</style>
  