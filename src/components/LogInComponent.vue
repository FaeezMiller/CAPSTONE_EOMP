<template lang="">
    <form class="form-horizontal">
  <div class="form-group">
    <label class="control-label col-sm-2" for="email"><h2>Email:</h2></label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" v-model="packet.emailAdd"  placeholder="Enter email">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="pwd"><h2>Password:</h2></label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="pwd" v-model="packet.user_password" placeholder="Enter password">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10 ">
      <button type="submit" class="btn btn-default text-white " v-on:click.prevent="login(packet)">Submit</button>
    </div>
  </div>
</form>


      


<center><Spinner/></center>

</template>
<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import Spinner from '../components/SpinnerLoad.vue'
export default {

  components: {
    Spinner
  },
  setup() {
    let store = useStore();
    let spinner = ref(false);
    let router = useRouter();
    const packet = {
      emailAdd: "",
      user_password: ""
    };
    async function login(packet) {
      spinner.value = !spinner.value;
      let payload = {
        emailAdd: packet.emailAdd,
        user_password: packet.user_password,
      };
      await store.dispatch('login', payload);
      localStorage.setItem('user', JSON.stringify(await store.state.user));
      console.log(store.state.user);
      spinner.value = !spinner.value;
      router.push({
        name: 'crypto',
        path: '/'
      })
        .then(() => location.reload())
    }
    return {
      login,
      packet,
      spinner
    }

  }
}
</script>
<style ></style>