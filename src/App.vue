<template>
  <div class="min-h-full">
    <Navbar />
    <div class="justify-center flex items-center h-screen">
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
