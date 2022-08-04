<template>
  <div
    class="max-w-xl mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300"
  >
    <div class="mb-8 text-center">
      <h1 class="my-3 text-4xl font-bold">Sign up</h1>
      <p class="text-sm dark:text-gray-400">Sign up to access your account</p>
    </div>

    <form @submit="userRegister">
      <div class="flex flex-col space-y-7">
        <label for="name">
          <p class="block text-sm font-medium text-gray-700">Name</p>
          <input
            type="text"
            id="name"
            name="name"
            v-model="form.name"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </label>
        <label for="email">
          <p class="block text-sm font-medium text-gray-700">Email address</p>
          <input
            id="email"
            name="email"
            type="email"
            v-model="form.email"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter email address"
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
        <label for="age">
          <p class="block text-sm font-medium text-gray-700">Age</p>
          <input
            id="age"
            name="age"
            type="number"
            v-model="form.age"
            placeholder="Enter your age"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </label>
        <label for="sex">
          <p class="block text-sm font-medium text-gray-700">Sex</p>
          <select
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            id="sex"
            name="sex"
            v-model="form.sex"
          >
            <option>M</option>
            <option>F</option>
          </select>
        </label>
        <label for="birthday">
          <p class="block text-sm font-medium text-gray-700">Birthday</p>
          <input
            type="date"
            id="birthday"
            name="birthday"
            v-model="form.birthday"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </label>
        <label for="phone">
          <p class="block text-sm font-medium text-gray-700">Phone Number</p>
          <input
            type="tel"
            id="phone"
            name="phone"
            v-model="form.phone_number"
            placeholder="010-0000-0000"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            class="mt-1 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { register } from "../api/users";
import { useRouter } from "vue-router";

export default {
  name: "Register",
  components: {},
  setup() {
    const router = useRouter();

    const form = reactive({
      name: "",
      email: "",
      password: "",
      age: 0,
      sex: "",
      birthday: "",
      phone_number: "",
    });

    const userRegister = async (e) => {
      e.preventDefault();
      // console.log(form);
      try {
        await register(form);
        console.log("성공");
        router.push("/login");
      } catch (error) {
        console.log("실패");
        console.log(error);
        console.log(error.message);
        console.log(error.response);
      }
    };

    return {
      form,
      userRegister,
    };
  },
};
</script>
