import { createStore } from 'vuex'
import axios from 'axios';
const aStoreURL = "https://cseomp-api.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, showSpinner) {
      state.showSpinner = showSpinner
    },
    setMessage(state, message) {
      state.message = message
    },
    setToken(state, data) {
      state.token = data
    },
    setVerified(state, data) {
      state.isVerified = data
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${aStoreURL}/login`, payload);
      const {result,jwToken, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
        context.commit('setToken', jwToken);
        context.commit('setSpinner', false);
      }else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${aStoreURL}users`, payload)
      let { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err)
      }
    },
    async fetchUsers(context) {
      let res = await axios.get(`${aStoreURL}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsersById(context, id) {
      let res = await axios.get(`${aStoreURL}users/${id}`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }else {
        context.commit('setMessage', err);
      }
    },
    async updateUser(context, payload) {
      let res = await axios.put(`${aStoreURL}users/${payload.id}`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id) {
      console.log(`Delete: ${id}`);
      let res = await axios.delete(`${aStoreURL}user/${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
      }else {
        context.commit('setMessage', err);
      }
    },
    async addProduct(context, payload) {
      let res = await axios.post(`${aStoreURL}product`, payload);
      let {msg, err}  = await res.data;
      if(msg) {
        context.commit('setMessage', msg)
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${aStoreURL}products`);
      const data = await res.data;
      if (data !== undefined) {
        context.commit("setProducts", data.results);
      } else context.commit("setSpinner", true);
    },
    async fetchProduct(context, id) {
      const res = 
      await axios.get(`${aStoreURL}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProduct', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }    
    },
    async updateProduct(context, payload) {
      const res = 
      await axios.put(`${aStoreURL}product/${payload.id}`, payload);
      const {msg, err} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', msg || err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${aStoreURL}product/${id}`);
      const {err, msg} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})

