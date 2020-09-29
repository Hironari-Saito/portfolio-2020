<template>
  <v-footer>
    <p class="footer">&copy; {{ new Date().getFullYear() }} Hironari Saito</p>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped lang="scss">
.footer {
  margin: 0 auto;
}
</style>
