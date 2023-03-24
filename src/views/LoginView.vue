<template>
  <div class="split left text-white">
    <Login />
    <userCRUD/>
  </div>
  <div class="split right">
    <SignIn />
  </div>
</template>

<style>
/* Split the screen in half */
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-color: black;
}

/* Control the right side */
.right {
  min-width: 50%;
  margin-left: 50%;
  background-color: black;
}
</style>

<script>
import Login from '../components/LogInComponent.vue'
import SignIn from '../components/RegisterComponent.vue'
import userCRUD from '../components/UsersComponent.vue'
export default {
  components: {
    Login,
    SignIn,
    userCRUD
  }
}
</script>