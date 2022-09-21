<template>

    <div class="text-center mt-14 ">
    <h1 class="font-weight-light">Quiz Record</h1>
    <v-divider class="mx-2 mt-5"></v-divider>
    <br>
    
    </div>
    
        <v-layout class="mt-5" row>
            <v-card class="mx-auto w-25" elevation="1">
                <v-card-title class="font-weight-light mt-3 text-center">Quiz History</v-card-title>
                <v-divider class="mx-2 my-5"></v-divider>
                <div class="text-center text-subtitle-2">
                <v-list :class="{ active: index == currentIndex }" v-for="(history, index) in List" :key="index">
                    <v-list-item @click="setActiveHistory(history, index)">{{ index + " : " +history.timeTaken
                    }}
                    </v-list-item>
                </v-list>
                </div>
    
            </v-card>
            <v-card class="mx-auto w-50" elevation="1">
            <v-card-title class="font-weight-light text-center mt-3">Quiz Details</v-card-title>
                <div v-if="currentHistory">
                    <QuizDetails :history="currentHistory" @refreshList="refreshList" />
                </div>
            </v-card>
        </v-layout>
    </template>
      
    <script>
    
    import DataService from "../services/DataService";
    import QuizDetails from "./QuizDetails.vue";
    import { database } from "../firebase";
    
    export default {
        components: { QuizDetails: QuizDetails },
        data() {
            return {
                admin: false,
                List: [],
                currentHistory: null,
                currentIndex: -1,
                historyClicked: false,
            };
        },
        methods: {
            onDataChange(items) {
                let _history = [];
    
                if (this.admin) {
                    items.forEach((item) => {
                        let userID = item.key;
                        const dbRef = database.ref("Users/" + userID + "/History");
                        dbRef.on('value', (snapshot) => {
                            snapshot.forEach((list) => {
                                let key = list.key
                                let data = list.val()
                                _history.push({
                                    userID: userID,
                                    key: key,
                                    averageScore: data.averageScore,
                                    timeTaken: data.timeTaken,
                                    timeFinished: data.timeFinished,
                                });
                            })
                        })
                    });
                    this.List = _history;
                } else {
    
                    items.forEach((item) => {
                        let key = item.key;
                        let data = item.val();
                        _history.push({
                            userID: "0",
                            key: key,
                            averageScore: data.averageScore,
                            timeTaken: data.timeTaken,
                            timeFinished: data.timeFinished,
                        });
                    });
                    this.List = _history;
                }
            },
            refreshList() {
                this.currentHistory = null;
                this.currentIndex = -1;
                this.historyClicked = false;
            },
            setActiveHistory(history, index) {
                this.currentHistory = history;
                this.currentIndex = index;
            },
        },
        mounted() {
            this.admin = DataService.isAdmin();
            DataService.getAll().on("value", this.onDataChange);
        },
        beforeUnmount() {
            DataService.getAll().off("value", this.onDataChange);
        }
    };
    </script>
      
    <style>
    .list {
        text-align: left;
        max-width: 750px;
        margin: auto;
    }
    </style>