<template>
  <v-app>
    <app-header />
    <v-main>
      <hero :href="heroImg" />
      <!-- navbar TODO -->
      <About />
      <Timeline />
      <skills />
      <contact-form />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/Header";
import AppFooter from "@/components/common/Footer";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/layout/Skills";
import ContactForm from "@/components/layout/ContactForm";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    Hero,
    About,
    Timeline,
    Skills,
    ContactForm
  },
  data: () => {
    return {
      heroImg: require("../assets/hero.jpg")
    };
  }
};
</script>
