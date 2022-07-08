<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <form @submit="login">
    <div>
      <label for="email">email</label>
      <input id="email" type="text" v-model="form.email">
    </div>
    <div>
      <label for="password">password</label>
      <input id="password" type="password" v-model="form.password">
    </div>
    <div>
      <button type="submit">login</button>
    </div>
  </form>
  <button @click="onClickButton">미들웨어 api 호출</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { getHouses } from '../src/api/houses';

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    const store = useStore();

    const form = reactive({
      email: "",
      password: "",
    });

    const login = async (e) => {
      e.preventDefault();
      console.log(form);
      try {
        await store.dispatch('user/login', form);
        console.log('성공');
      } catch (error) {
        console.log('실패');
        console.log(error);
        console.log(error.message);
        console.log(error.response);
      }
    };

    const onClickButton = async () => {
      try {
        const { data } =  await getHouses();
        console.log('성공')
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };

    return { 
      form,
      login,
      onClickButton,
      };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
