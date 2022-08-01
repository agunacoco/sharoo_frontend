<template>
<<<<<<< HEAD
  <div
    class="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="mb-8 text-center">
      <h1 class="my-3 text-4xl font-bold">Sign in</h1>
      <p class="text-sm dark:text-gray-400">Sign in to access your account</p>
    </div>

    <form @submit="login" class="space-y-12 ng-untouched ng-pristine ng-valid">
      <div class="space-y-4">
        <div>
          <label for="email" class="block mb-2 text-sm">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="leroy@jenkins.com"
            v-model="form.email"
            class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <div class="flex justify-between mb-2">
            <label for="password" class="text-sm">Password</label>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs hover:underline dark:text-gray-400"
              >Forgot password?</a
            >
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            v-model="form.password"
            class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <button
            type="submit"
            class="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </div>
        <p class="px-6 text-sm text-center dark:text-gray-400">
          Don't have an account yet?
          <router-link
            to="/register"
            class="hover:underline dark:text-violet-400"
          >
            Sign up
          </router-link>
        </p>
=======
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
>>>>>>> 34e62088e5e6cd9d4e5d48a88cb340d10ea2ca35
      </div>
    </form>
    <button @click="onClickButton">미들웨어 api 호출</button>
  </div>
</template>
<<<<<<< HEAD
=======

>>>>>>> 34e62088e5e6cd9d4e5d48a88cb340d10ea2ca35
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
