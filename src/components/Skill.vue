<template>
  <v-card max-width="187">
    <v-img height="116" :src="img" contain></v-img>
    <v-card-title>{{ language }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="star"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ml-4">{{ star }}</div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Skill",
  props: {
    language: String,
    star: Number,
    img: String
  }
};
</script>

<style scoped lang="scss"></style>
