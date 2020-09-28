<template>
  <v-app>
    <!-- <app-header /> -->
    <v-main>
      <hero :logo="heroImg" />
      <Message />
      <Timeline />
      <skills />
      <contact-form />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
// import AppHeader from "@/components/common/Header";
import AppFooter from "@/components/common/Footer";
import Hero from "@/components/layout/Hero";
import Message from "@/components/layout/Message";
import Timeline from "@/components/Timeline";
import Skills from "@/components/layout/Skills";
import ContactForm from "@/components/layout/ContactForm";

export default {
  name: "App",
  components: {
    // AppHeader,
    AppFooter,
    Hero,
    Message,
    Timeline,
    Skills,
    ContactForm
  },
  data: () => {
    return {
      heroImg: require("../assets/images/hero/logo.png")
    };
  }
};
</script>
<style scoped lang="scss"></style>
