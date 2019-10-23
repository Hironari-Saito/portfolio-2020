<template>
  <v-app id="hero">
    <v-parallax dark v-bind:src="href">
      <v-row align="center" justify="center">
        <h1 class="display-4">Hironari Saito</h1>
      </v-row>
      <v-row align="center" justify="center">
        <h4 class="subheading">welcome to my portfolio site!</h4>
      </v-row>
    </v-parallax>
  </v-app>
</template>

<script>
export default {
  name: "Hero",
  props: {
    href: String
  }
};
</script>

<style scoped lang="scss"></style>
