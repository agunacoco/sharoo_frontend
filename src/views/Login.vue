<template>
  <div
    class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300"
  >
    <div class="mb-8 text-center">
      <h1 class="my-3 text-4xl font-bold">Sign in</h1>
      <p class="text-sm dark:text-gray-400">Sign in to access your account</p>
    </div>

    <form @submit="login" class="my-10">
      <div class="flex flex-col space-y-5">
        <label for="email">
          <p class="block text-sm font-medium text-gray-700">Email address</p>
          <input
            id="email"
            name="email"
            type="email"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter email address"
            v-model="form.email"
          />
        </label>
        <label for="password">
          <p class="block text-sm font-medium text-gray-700">Password</p>
          <input
            id="password"
            name="password"
            type="password"
            v-model="form.password"
            placeholder="Enter your password"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </label>
        <div class="flex flex-row justify-between">
          <label for="remember" class="">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 border-slate-200 focus:bg-indigo-600"
            />
            Remember me
          </label>
          <a href="#" class="font-medium text-indigo-600">Forgot Password?</a>
        </div>
        <button
          type="submit"
          class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          Login
        </button>
        <p class="text-center">
          Not registered yet?
          <router-link
            to="/register"
            class="text-indigo-600 font-medium inline-flex space-x-1 items-center"
            ><span>Register now </span
            ><span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                /></svg></span
          ></router-link>
        </p>
      </div>
    </form>

    <div class="my-5">
      <button
        class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          class="w-6 h-6"
          alt=""
        />
        <span>Login with Google</span>
      </button>
    </div>
    <button @click="onClickButton">미들웨어 api 호출</button>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { getUser } from "../api/users";

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
        const { data } = await getUser();
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
