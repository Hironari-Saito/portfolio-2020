<template>
  <v-app>
    <app-header />
    <v-content>
      <hero href="https://source.unsplash.com/random/1200x1200" />
      <!-- navbar TODO -->
    </v-content>
    <v-content>
      <About />
    </v-content>
    <v-content>
      <Timeline />
    </v-content>
    <v-content>
      <skill />
    </v-content>
    <v-content>
      <contact-form />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/Header";
import AppFooter from "@/components/common/Footer";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Timeline from "@/components/Timeline";
import Skill from "@/components/layout/Skill";
import ContactForm from "@/components/layout/ContactForm";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    Hero,
    About,
    Timeline,
    Skill,
    ContactForm
  },
  data: () => ({
    //
  })
};
</script>
