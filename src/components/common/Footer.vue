<template>
  <v-footer>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
