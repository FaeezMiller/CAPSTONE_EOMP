<template >
  <NavBar />
  <div class="bg">
    <div class="container">
      <div class="card" v-for="product in products" :key="product.productID">
        <img :src="product.imgURL" class="card-img-top" :alt="product.NAME">
        <div class="card-body">
          <center>
            <h5 class="card-title">{{ product.NAME }}</h5>
            <p class="card-text">Price: R{{ product.PRICE }}</p>
            <router-link to="./market"><img src="https://i.postimg.cc/ZK4wYgWx/icons8-add-basket-30.png">BUY</router-link>
          </center>
        </div>
      </div>
    </div>

    <br>

    <div class="table  bg-black text-light text-center">
      <table>
        <tr>
          <th width="160px">ID</th>
          <th width="190px">IMG</th>
          <th width="190px">NAME</th>
          <th width="190px">MARKETCAP</th>
          <th width="190px">PRICE</th>
          <th width="190px">AVAILCOINS</th>
          <th width="190px">TOTALCOINS</th>
          <th width="190px">TRADEDVOL</th>
          <th width="190px">CHG</th>
        </tr>
        <tr v-for="product in products" :key="product.productID">
          <td>{{ product.productID }}</td>
          <td><img :src="product.imgURL" class="coin"></td>
          <td>{{ product.NAME }}</td>
          <td>{{ product.MARKETCAP }}</td>
          <td>{{ product.PRICE }}</td>
          <td>{{ product.AVAILCOINS }}</td>
          <td>{{ product.TOTALCOINS }}</td>
          <td>{{ product.TRADEDVOL }}</td>
          <td>{{ product.CHG }}</td>
        </tr>
      </table>
    </div>
  
  </div>
</template>

<script>

export default {
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },

}

</script>
  
<style>
.bg {
  background-color: black;
}

.table {
  width: 200%;
  margin-left: 0%;
}

.coin {
  width: 40px;
  height: 40px
}

.card-img-top {
  width: 60px;
  height: 100px;
}


.container {
  margin-left: 0%;
  margin-right: 0%;
  height: 300px;
  width: auto;
  display: flex;
}



.card {
  display: flex;
  height: 280px;
  width: 200px;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
  margin-left: -50px;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover~.card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

.title {
  color: black;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
}
</style>
