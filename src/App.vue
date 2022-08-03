<template>
  <div class="min-h-full">
    <Navbar />
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "Main",
  components: { Navbar },
};
</script>
