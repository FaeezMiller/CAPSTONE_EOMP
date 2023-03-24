<template>
   
    <div class="register text-white">
      <SpinnerVue v-if="showSpinner"/>
      <form class="register-form" @submit.prevent="registerUser" v-else>
       
        <h2>Register:</h2>
        <div class="mb-2">
          <input
            type="text"
            class="form-control"
            id="inputFirstName"
            placeholder="First Name"
            required
            v-model="payload.firstName"
          />
        </div>
  
        <div class="mb-2">
          <input
          type="text"
          class="form-control"
          id="inputLastName"
          placeholder="Last Name"
          required
          v-model="payload.lastName"
          />
        </div>

        <div class="mb-2">
          <select id="inputGender" required v-model="payload.gender">
            <option value="" selected disabled hidden>Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>
  
        <div class="mb-2">
          <input
            type="text"
            class="form-control"
            id="inputContactNumber"
            placeholder="Cellphone Number"
            required
            v-model="payload.cellphoneNumber"
          />
        </div>
  
        <div class="mb-2">
          <input
            type="email"
            class="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address"
            required
            v-model="payload.emailAdd"
          />
          <div id="emailsecure" class="form-tex text-white">
            Your email will be not be visible to others.
          </div>
        </div>
  
        <div class="mb-2">
          <input
            type="password"
            class="form-control"
            id="inputPassword1"
            placeholder="password"
            required
            v-model="payload.word"
          />
        </div>

        <div class="mb-2">
          <select id="inputRole" required v-model="payload.userRole">
            <option value="" selected disabled hidden>Select Role</option>
            <option value="1">Common User</option>
            <option value="2">Admin User</option>
           
          </select>
        </div>

        <div class="mb-2">
          <input
            type="text"
            class="form-control"
            id="inputProfile"
            placeholder="Profile Image"
            required
            v-model="payload.userProfile"
          />
        </div>
        <button type="submit" class="btn btn-default text-white">Submit</button>
      </form>
      <center><Spinner/></center>
    </div>
  </template>
  
  <script>
import Spinner from '../components/SpinnerLoad.vue'
export default {
  components: {
        Spinner 
    },
    data() {
      return {
        payload: {
          firstName: '',
          lastName: '',
          gender: '',
          cellphoneNumber: '',
          emailAdd: '',
          user_password: '',
          userRole: '',
          joinDate: ''
        }
      }
    },
    methods: {
      async registerUser() {
        await this.$store.commit('setSpinner', true)
        await this.$store.dispatch('register', this.payload)
        await this.$store.dispatch('fetchUsers')
        this.$router.push("/");
      },
    },
    mounted(){
      this.$store.commit('setSpinner', false)
    },
    computed: {
      showSpinner() {
        return this.$store.state.showSpinner
      }
    }
  };
  </script>