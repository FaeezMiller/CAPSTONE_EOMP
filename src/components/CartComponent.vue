<!-- eslint-disable vue/no-deprecated-filter -->
<template>
   
  <div class="split left">
    
        
        <div class="grid">
            <div class="col-sx">
                <div class="products text-light">
                    <h4>PRODUCTS</h4>

                </div>
            </div>
            <div class="bg">
                <div class="container">
                    <div class="card" v-for="(prod, ind) in products" :key="'ind-' + ind">

                        <div class="product">
                            <div class="box">
                                
                                <h3 class="title">{{ prod.title }}</h3>
                                <p class="investment">{{ prod.investment }}</p>
                                <p class="text">{{ prod.text }}</p>
                                <p class="price">{{ prod.price | currency }}</p>
                                <button class="btn btn-dark" @click="addItem(prod)"><b>Add to cart</b><br><img src="https://i.postimg.cc/4dz16R2d/icons8-full-shopping-basket-30.png"></button>
                            </div>
                        </div>


                    </div>
                </div>
            <h4>CONTACT US</h4>
            </div>
        </div>
    </div>
    <div class="split right">
                <div class="cart text-light">
                    <h4>CART</h4>
                    <div class="table  bg-black text-light text-center w-100">
                    <table  class="cart-list" v-if="cart.length"   >
                        <thead>
                            <tr>
                                <th class="head-title">Product</th>
                                <th class="head-investment">Investment</th>
                                <th class="head-text">Indicator</th>
                                <th class="head-price">Price</th> 
                                <th class="head-quantity">Quantity</th>
                                <th class="head-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="cart-item" v-for="(item, id) in cart" :key="'id-' + id">
                                <td>
                                    <h5 class="title">{{ item.title }}</h5>
                                </td>
                                <td>
                                    <div class="investment">{{ item.investment }}</div>
                                </td>
                                <td>
                                    <div class="text">{{ item.text}}</div>
                                </td>
                                <td>
                                    <div class="price">{{ item.price | currency }}</div>
                                </td>
                                <td>
                                    <span @click="add(item)">+</span><span @click="sub(item)">-</span>
                                    <div class="quantity"> {{ item.quantity }}<span class="qty-handler">
                                        </span></div>
                                </td>
                                <td>
                                    <div class="total">{{ item.price * item.quantity | currency }}</div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="5">
                                    <h4 class="total-title">Total</h4>
                                </th>
                                <th>R {{ total | currency }}</th>
                            </tr>
                        </tfoot>
                    </table>
                
                    <div class="empty-contents" v-else>

                        <h4 class="no-items-text">Your cart is actually empty<img src="https://i.postimg.cc/GhK0hzfD/icons8-empty-box-30.png"></h4>
                    </div>
                  </div>
                </div>
            </div>
</template>

<style>
.card{
    min-width:150px
}
.table{
    width: 200%;
    margin-left: 0%;
}
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

.head-quantity{width:200px}



.title{text-align: center;
       font-size:large;}
.investment{text-align: center;}
.text{
    text-align: center;
}
.price{text-align: center;}
.btn{  background-color: #000;
       width: 100%;
       max-height: 90px ;}
.container {
    margin-left: 50%;
    margin-right: 0%;
    height: 300px;
    width: auto;
    display: flex;
}

.card {
    /* display: flex; */
    height: 400px;
    min-width: 200px;
    border-radius: 10px;
    
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
</style>

<script>
export default {
    name: 'CartComponent',
    data() {
        return {
            
            products: [
                
                { id: 1, title: 'BitCoin',investment:'Crypto', text:'Today:+4 454,6 (0.09%)',price: 457745.48  },
                { id: 2, title: 'Ethereum',investment:'Crypto',text:'Today:+143,27 (0.38%)', price: 31844.97 },
                { id: 3, title: 'Tether',investment:'Crypto',text:'Today:−0,066 (0.12%)', price: 18.19 },
                { id: 4, title: 'Hex',investment:'Crypto',text:'Today:-0,0351 (3.51%)', price: 2.16 },
                
                { id: 5, title: 'Apple',investment:'Stock',text:'Today:−1,450 (0.91%)', price: 1593 },  
                { id: 6, title: 'Google',investment:'Stock',text:'Today:-1,550 (1.40%)', price: 1056 },
                { id: 7, title: 'Tesla', investment:'Stock',text:'Today:+1,070 (0.56%)', price: 1922},
                { id: 8, title: 'Netflix',investment:'Stock',text:'Today:+26,47 (9.01%)',price: 3203},
                
                { id: 9, title: 'EUR/ZAR',investment:'Forex',text:'Today:-0,021 (0.08%)',price: 19.6147},
                { id: 10,title: 'USD/ZAR',investment:'Forex',text:'Today:+0,031 (0.017%)',price: 18.1215},
                { id: 11,title: 'JPY/ZAR',investment:'Forex',text:'Today:+0,003 (0.138%)',price: 1.1390},
                { id: 12,title: 'NZD/ZAR',investment:'Forex',text:'Today:-0,012 (0.11%)',price: 11.3142}
            ],
            cart: [],
            total: 0
        }
    },

    methods: {
        addItem(prod) {
            // Increment total price
            this.total += prod.price;

            let inCart = false;
            // Update quantity if the item is already in the cart
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === prod.id) {
                    inCart = true;
                    this.cart[i].quantity++;
                    break;
                }
            }
            // Add item if not already in the cart
            if (!inCart) {
                this.cart.push({
                    id: prod.id,
                    title: prod.title,
                    investment: prod.investment,
                    text: prod.text,
                    price: prod.price,
                    quantity: 1
                });
            }
        },
        add(item) {
            this.total += item.price;
            item.quantity++;
        },
        sub(item) {
            this.total -= item.price;
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }
            }
        }
    },
    filters: {
        currency(price) {
            return 'R' + price.toFixed(2);
        }
    }
};

</script>