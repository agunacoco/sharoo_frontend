<template>
  <div
    class="max-w-xl mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300"
  >
    <div class="mb-8 text-center">
      <h1 class="my-3 text-4xl font-bold">Sign up</h1>
      <p class="text-sm dark:text-gray-400">Sign up to access your account</p>
    </div>

    <form @submit="register" method="post" enctype="multipart/form-data">
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
        <label for="image">
          <p class="block text-sm font-medium text-gray-700">Profile Image</p>
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <label
                for="image"
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  id="image"
                  name="image"
                  type="file"
                  ref="image"
                  @change="uploadImg"
                  accept="image/*"
                  class="sr-only"
                />
              </label>
              <p class="pl-1 text-sm text-indigo-600">
                Upload a file or drag and drop
              </p>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
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
// import { useStore } from "vuex";
import { getHouses } from "../api/houses";

export default {
  name: "Register",
  components: {},
  setup() {
    // const store = useStore();

    const form = reactive({
      name: "",
      email: "",
      password: "",
      image: "",
    });

    const uploadImg = (e) => {
      console.log(e.target.files[0]);
      form.image = e.target.files;
    };

    const register = async (e) => {
      e.preventDefault();
      console.log(form);
      // try {
      //   await store.dispatch("user/login", form);
      //   console.log("성공");
      // } catch (error) {
      //   console.log("실패");
      //   console.log(error);
      //   console.log(error.message);
      //   console.log(error.response);
      // }
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
      register,
      onClickButton,
      uploadImg,
    };
  },
};
</script>
