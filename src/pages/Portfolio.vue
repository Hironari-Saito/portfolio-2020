<template>
  <v-app>
    <!-- <app-header /> -->
    <v-main>
      <hero :logo="heroImg" />
      <Message />
      <Service :scrollY="scrollY" />
      <Timeline />
      <skills />
      <contact-form />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from "@/components/common/Footer";
import Hero from "@/components/layout/Hero";
import Message from "@/components/layout/Message";
import Service from "@/components/layout/Service";
import Timeline from "@/components/layout/Timeline";
import Skills from "@/components/layout/Skills";
import ContactForm from "@/components/layout/ContactForm";

export default {
  name: "App",
  components: {
    AppFooter,
    Hero,
    Message,
    Service,
    Timeline,
    Skills,
    ContactForm
  },
  data: () => {
    return {
      heroImg: require("../assets/images/hero/logo.png"),
      scrollY: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped lang="scss"></style>
