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

<style scoped lang="scss">
.v-parallax::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
