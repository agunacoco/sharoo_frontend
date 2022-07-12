<template>
  <div>
    <form @submit="login">
      <div>
        <label for="email">email</label>
        <input id="email" type="text" v-model="form.email" />
      </div>
      <div>
        <label for="password">password</label>
        <input id="password" type="password" v-model="form.password" />
      </div>
      <div>
        <button type="submit">login</button>
      </div>
    </form>
    <button @click="onClickButton">미들웨어 api 호출</button>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { getHouses } from "../api/houses";

export default {
  name: "Login",
  components: {},
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
        await store.dispatch("user/login", form);
        console.log("성공");
      } catch (error) {
        console.log("실패");
        console.log(error);
        console.log(error.message);
        console.log(error.response);
      }
    };

    const onClickButton = async () => {
      try {
        const { data } = await getHouses();
        console.log("성공");
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
