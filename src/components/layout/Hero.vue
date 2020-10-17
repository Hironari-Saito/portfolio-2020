<template>
  <v-app id="hero">
    <section class="section-top">
      <div class="section-top__carousel">
        <div class="section-top__image-container">
          <div
            class="section-top__image"
            v-for="(image, index) in images"
            :key="index"
            :style="{ 'background-image': 'url(' + image + ')' }"
          ></div>
        </div>
        <div class="section-top__message">
          <img class="section-top__logo" :src="logo" alt="logo" />
          <h1>HIRONARI SAITO</h1>
          <h2>一つ一つの出逢いを大切に</h2>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
export default {
  name: "Hero",
  props: {
    logo: String
  },
  data: () => {
    return {
      images: [
        require("../../assets/images/hero/main-1.jpg"),
        require("../../assets/images/hero/main-2.jpg"),
        require("../../assets/images/hero/main-3.jpg")
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.section-top {
  &__carousel {
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  &__image-container {
    opacity: 0.75;
    width: 100%;
    height: 100%;
    filter: grayscale(65%);
  }

  // イメージ画像の数をここで定義している
  $image-sheets: 6;
  &__image {
    opacity: 0;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    animation: top-section__animation #{$image-sheets * 6}s 0s infinite;
  }

  // nth-of-type(1)に対しては指定しない
  // nth-of-type(2)に対しては 1 * 6sのディレイを持たせる。
  // nth-of-type(3)に対しては 2 * 6sのディレイを持たせる。
  @for $i from 1 through $image-sheets {
    &__image:nth-of-type(#{$i + 1}) {
      animation-delay: #{$i * 6}s;
    }
  }

  &__message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    text-align: center;
    width: 100%;
  }

  &__logo {
    height: auto;
    max-width: 100px;
    width: 20vw;
  }

  $shadow: 0.5px 0.5px 1px rgba(255, 255, 255, 0.3);
  h1 {
    color: $accent-color;
    font-size: 36px;
    margin-bottom: 100px;
    text-shadow: $shadow;
  }

  h2 {
    text-shadow: $shadow;
    font-family: $noto-sans-font;
  }
}

@media only screen and (min-width: 767px) {
  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
  }
}

@keyframes top-section__animation {
  0% {
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  17% {
    opacity: 1;
  }
  25% {
    opacity: 0;
    transition-timing-function: ease-in-out;
    transform: scale(1.2) rotate(0.1deg);
    z-index: 9;
  }
  100% {
    opacity: 0;
  }
}
</style>

<style scoped lang="scss">
// .v-parallax::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 1;
// }
//
</style>
