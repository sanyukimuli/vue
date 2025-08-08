<script setup> //script setup means you dont have to register components
  // import HelloWorld from './components/HelloWorld.vue'
  // import HomePage from './views/HomePage.vue'
  import { RouterView, RouterLink } from 'vue-router'
  import HeaderSection from './components/HeaderSection.vue'
  import BodySection from './components/BodySection.vue'
  import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app">
    <HeaderSection/>
    <BodySection/>
    <FooterSection/>
   </div>
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  <!--<HelloWorld msg="Vite + Vue" /> XML syntax (custom tags)-->
</template>

<style scoped>
 
</style>
