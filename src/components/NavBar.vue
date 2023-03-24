<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

<nav class="navbar navbar-expand-lg bg-black ">
    <div class="btn-group">
          <div class="btn btn-secondary bg-black">
            <router-link to="/" class="headtext"><b><img src="https://i.postimg.cc/MTXTXcb2/icons8-home-page-30.png"/>HOME</b></router-link>
          </div>
          <div class="btn btn-secondary bg-black">
            <router-link to="./crypto" class="headtext"><b><img src="https://i.postimg.cc/bYnGnB2Z/icons8-tokens-30.png">CRYPTO</b></router-link>
          </div>
          <div class="btn btn-secondary bg-black">
            <router-link to="./stock" class="headtext"><b><img src="https://i.postimg.cc/h4wt2bTH/icons8-stock-30.png">STOCK</b></router-link>
          </div>
          <div class="btn btn-secondary bg-black">
            <router-link to="./forex" class="headtext"><b><img src="https://i.postimg.cc/t4mr2ZwT/icons8-chart-30.png">FOREX</b></router-link>
          </div>
          <div class="btn btn-secondary bg-black">
            <router-link to="./market" class="headtext"><b><img src="https://i.postimg.cc/j24FrxgW/icons8-market-30.png">CHECKOUT</b></router-link>
          </div> 
          <div class="btn btn-secondary bg-black">
            <router-link to="./login" class="headtext"><b><img src="https://i.postimg.cc/D0ccfYgM/icons8-webkey-30.png">SIGN-IN</b></router-link>
          </div>
          <div class="btn btn-secondary bg-black">
            <router-link to="./login" class="headtext"><b><img src="https://i.postimg.cc/pTsDgnXw/icons8-user-30.png">SIGN-UP</b></router-link>
          </div>
          
           
      </div>
</nav>
   
</template>
<style>

.headtext{
  color: whitesmoke;
  }
.btn{min-width:fit-content;
     min-height: 50px ;}


</style>

<script>
export default {
  name: 'NavBar',
}

</script>
