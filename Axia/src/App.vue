<script setup>

  import { BsChevronDown } from 'react-icons/bs/index'
  import Nav from "./components/nav.vue";
  import Hero from "./components/hero.vue";
  import Courses from "./components/courses.vue";
  import Advisor from "./components/advisor.vue";
  import Onboard from "./components/onboard.vue";
  

</script>

<template>
 <Nav/>
 <Hero/>
 <Courses/>
 <Advisor/>
 <Onboard/>
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
