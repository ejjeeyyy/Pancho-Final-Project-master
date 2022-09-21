<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Ciandra Pancho</h1>
              <span class="text-grey">Data Analyst & Full-Stack Developer</span><br />

              <v-btn href="https://www.linkedin.com/in/ciandra-pancho-57bb13236/" target="a_blank" tile dark class="text-light-blue mt-8" variant="outlined">
                Linked In Profile
              </v-btn>
              <v-divider></v-divider>

              <v-btn href="https://www.fiverr.com/ciandrapancho?public_mode=true" target="a_blank" tile dark class="text-light-green mt-8" variant="outlined">
                Fiverr Profile
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
              class="mt-16"
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9999" class="mt-16">
              <!-- <v-img src="i1.png" contain max-height="300"></v-img> -->
              <v-avatar
              color="#BDD9FF"
              size="350"
             class="mt-10"
            >
            <img
              src="@/assets/3.png"
              alt="CiandraPancho"
              height="390"
              width="290"
              >
            </v-avatar>      
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
                <v-avatar
              color="orange"
              size="280"
             class="mt-10"
            >
            <img
              src="@/assets/5.png"
              alt="CiandraPancho"
              height="300"
              width="300"
              >
            </v-avatar>          
       
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">ABOUT ME</h5>
              <div style="width: 120px">
                <v-slider
                  v-model="slider2"
                  color="yellow"
                  label="track-color"
                ></v-slider>
              </div>
              <h4 class="mt-n4">I am a Data Analyst </h4>
              <h4 class="">and Full-Stack Developer</h4>
              <p class="text-grey">
                <br>
                I am a student of Information Technology. 
                I am an expert in creating an application with a winning award in Hackaton (HooHacks). 
                I can create applications with java, kotlin, dart, flutter, and more. 
              </p>
              <br />
              <p class="text-grey">
                Also, I am an expert in graphic designing, video editing, and content creation. 
                I have acquired a certificate with Power BI and I want to work as freelancer in my free time.
              </p>
              <!-- <v-btn href="file:///D:/Downloads/resume.pdf" tile dark color="#F4C311" class="mt-4">
                Download Resume
              </v-btn>  -->
              <p></p>
              <br>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-4">
        <h2>MY SKILLS</h2>
        <div style="width: 120px; margin: 0 auto">
          <v-slider
            v-model="slider2"
            color="yellow"
            label="track-color"
          ></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn
                  icon="fas fa-laptop"
                  color="#FBDF7E"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Microsoft Power BI</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  I have acquired certification <br />in Microsoft with
                  <br />dA-100T00-AC: Analyzing Data with Power BI
                </p>
              </div>
              <div class="child">
                <v-btn
                  icon="fas fa-mobile-alt"
                  color="#FBDF7E"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Application Developer</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  I am currently a Developer <br />in SignTech: Sign Language
                  <br />Translator Mobile Application
                </p>
              </div>
              <div class="child">
                <v-btn
                  icon="fas fa-camera"
                  color="#FBDF7E"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Graphic Designer</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  I am managing our small <br />printing business as 
                  <br />a graphic designer
                </p>
              </div>
            </v-col>

            
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
     

      <v-col cols="12" class="mt-16" id="program">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
                <v-avatar
              color="#BDD9FF"
              size="480"
              
            
            >
            <img
              src="@/assets/signtech.jpg"
              alt="CiandraPancho"
              height="300"
              width="400"
              >
            </v-avatar>          
       
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 class="mt-16">MY PROGRAM</h2>
              <br>
              <div style="width: 120px">
             
              </div>
              <h4 class="mt-n4">Technological Institute of the Philippines</h4>
              <h4 class="">Manila</h4>
              <p class="text-grey">
                <br>
                The Technological Institute of the Philippines (T.I.P.) is one of the country’s premier technological, engineering, and computing higher educational institutions.  It is a private non-sectarian stock school founded on February 8, 1962 by a group of educators headed by Engineer Demetrio A. Quirino, Jr. and Dr. Teresita U. Quirino. Using an outcomes-based educational model with its locally and globally accredited programs, T.I.P. allows students to acquire industry-desired qualities and essential experiences that better equip them to be effective as soon as they enter the workforce or set up their own business.
              </p>
              <br />
              <p class="text-grey">
                T.I.P. laid down its objective based on its founders’ vision: 1) to maintain high standards of instruction; 2) to bring within the reach of the masses the blessings of higher education; and 3) to cooperate with the government in the implementation of its economic and social amelioration programs.
              </p>
              <v-btn href="https://www.tip.edu.ph/what-we-offer/graduate-programs/tip-manila/doctorate-degrees/doctor-in-information-technology/" target="a_blank" tile dark color="#F4C311" class="mt-4">
                BS INFORMATION TECHNOLOGY
              </v-btn> 
              <p></p>
              <br>
            </v-col>
          </v-row>
        </div>
      </v-col>


      <v-divider></v-divider>



      <v-col cols="12" class="mt-16" id="services">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <!-- <v-img src="@/assets/2.png" max-height="300" class=""></v-img> -->
                <v-avatar
              color="#BDD9FF"
              size="280"
              class="mt-2"
            
            >
            <img
              src="@/assets/tip.jpg"
              alt="CiandraPancho"
              height="150"
              width="400"
              >
            </v-avatar>          
       
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h2 class="mt-16">MY SCHOOL</h2>
              <br>
              <div style="width: 120px">
             
              </div>
              <h4 class="mt-n4">Technological Institute of the Philippines</h4>
              <h4 class="">Manila</h4>
              <p class="text-grey">
                <br>
                The Technological Institute of the Philippines (T.I.P.) is one of the country’s premier technological, engineering, and computing higher educational institutions.  It is a private non-sectarian stock school founded on February 8, 1962 by a group of educators headed by Engineer Demetrio A. Quirino, Jr. and Dr. Teresita U. Quirino. Using an outcomes-based educational model with its locally and globally accredited programs, T.I.P. allows students to acquire industry-desired qualities and essential experiences that better equip them to be effective as soon as they enter the workforce or set up their own business.
              </p>
              <br />
              <p class="text-grey">
                T.I.P. laid down its objective based on its founders’ vision: 1) to maintain high standards of instruction; 2) to bring within the reach of the masses the blessings of higher education; and 3) to cooperate with the government in the implementation of its economic and social amelioration programs.
              </p>
              <v-btn href="https://www.tip.edu.ph/" target="a_blank" tile dark color="#F4C311" class="mt-4">
                TIP WEBSITE
              </v-btn> 
              <p></p>
              <br>
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
  name: "HomeView",
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

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #F4C311;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.first {
  width: 100%;
  height: 280px;
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
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}

</style>
