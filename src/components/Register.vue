<template>
        <v-card class="mx-auto my-12 pa-3" max-width="40%" elevation="2" prepend-icon="mdi-account-plus" shaped>

            <template v-slot:title>
                Create Account
            </template>

            <v-divider class="mx-4"></v-divider>
            <div class="d-flex justify-center mt-6">


                <v-sheet class="w-100">
                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                    <form action="#" @submit.prevent="Register">

                        <v-text-field label="Name" id="name" :rules="usernameRules" type="text" name="name" required
                            v-model="name" class="mt-3"></v-text-field>

                        <v-divider class="mx-4"></v-divider>

                        <v-text-field label="Email" id="email" :rules="emailRules" type="email" name="email" required
                            v-model="email" class="mt-3"></v-text-field>

                        <v-divider class="mx-4"></v-divider>

                        <v-text-field prepend-icon="" :rules="passwordRules" label="Password" id="password"
                            type="password" name="password" required v-model="password" class="mt-3"></v-text-field>

                        <v-divider class="mx-4"></v-divider>

                        <v-text-field prepend-icon="" :rules="confirmPassRules" label="Confirm Password"
                            id="confirmPass" type="password" name="confirmPass" required v-model="confirmPass"
                            class="mt-3"></v-text-field>

                        <v-divider class="mx-4"></v-divider>
                        <div class="d-flex justify-left w-100" >
                            <v-btn type="submit" color="#FFC20F" class="text-black font-weight-light">Register</v-btn>
                        </div>

                    </form>
                </v-sheet>

            </div>

        </v-card>
</template>
  
  
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ImageSrc from '../assets/images/quiz.jpg'

export default {
    data: () => ({
        emailRules: [
            value => !!value || 'Required.',
            value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
        usernameRules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 8 || 'Max 8 characters',
        ],
        passwordRules: [
            value => !!value || 'Required.',
            value => (value || '').length >= 6 || 'Min 6 characters',
        ],
        confirmPassRules: [
            (value) => !!value || 'type confirm password',
            (value) =>
                value === password.value || 'The password confirmation does not match.',
        ],
    }),
    name: "RegisterComponent",
    setup() {
        const Image = ImageSrc;

        const name = ref('')
        const email = ref('')
        const password = ref('')
        const confirmPass = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const Register = async () => {
            try {
                if (password.value == confirmPass.value) {
                    await store.dispatch('register', {
                        email: email.value,
                        password: password.value,
                        name: name.value
                    })
                    router.push('/')
                } else {
                    error.value = "Your password does not match"
                }
            }
            catch (err) {
                error.value = "The email is already taken"
            }
        }

        return { Image, Register, name, email, password, confirmPass, error }
    }
};
</script>

<style>
    .mdi-account-plus{
        color: #FFC20F;
    }
</style>