<script setup>

  import { BsChevronDown } from 'react-icons/bs/index'
  import Nav from "./components/nav.vue";
  import Hero from "./components/hero.vue";
  import Courses from "./components/courses.vue";
  import Advisor from "./components/advisor.vue";
  import Onboard from "./components/onboard.vue";
  import Journey from "./components/journey.vue";
  import Foster from "./components/foster.vue";
  import Partner from "./components/partner.vue";
  import Footer from "./components/footer.vue";
  import Testi from "./components/testi.vue";


 
  

</script>

<template>
 <Nav/>
 <Hero/>
 <Courses/>
 <Advisor/>
 <Onboard/>
 <Journey/>
 <Foster/>
 <Testi/>
 <Partner/>
 <Footer/>
</template>

<style scoped>
.button1:hover {
  background-color: #202054;
  border-color: #111111;
 color: white;
}

.button2 {
  background-color: #202054;
  border-color: #202054;
}

.button1:hover  .button2 {
  background-color: yellow;
  border-color: #202054;
}

</style>
