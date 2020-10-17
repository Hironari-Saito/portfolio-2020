<template>
  <v-app id="app-message">
    <section id="message" class="section-message pt-10">
      <v-container class="px-6 pt-0">
        <h2 class="text-center display-3">Message</h2>
        <p class="text-center mb-10">
          サイトをご覧いただきありがとうございます。
        </p>
        <v-row class="section-message__container" justify="center">
          <v-col class="slideInUp" cols="12" md="6">
            <v-img class="section-message__image-me" :src="aboutme"></v-img>
          </v-col>
          <v-col cols="12" md="6" class="slideInUp section-message__body">
            <p>
              はじめまして、斉藤博成と申します。
            </p>
            <p>
              東京を中心にWeb系フリーランスとして活動をしています。
            </p>
            <p>
              システムエンジニアとして、Javaを用いたWebアプリケーション開発もしております。
              その中で培った「報告・連絡・相談」といったコミュニケーションを用いてプロジェクトの一員としてきめ細やかな対応が可能です。
            </p>
            <p>
              今は「もっとユーザーに寄り添った開発をしたい」
              その想いでフリーランスとして活動をしております。
            </p>
            <p>
              Webデザインからコーディング、サイトの公開まで
              ホームページを一気通貫で開発することができます。
              このサイトも１から作成しております。
            </p>
            <p>
              人生というのは出逢いの連続です。
            </p>
            <p>
              一つ一つの出逢いを大切にするという信念で、
              末長くお付き合いができれば幸いです。
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {
  name: "Message",
  data: () => {
    return {
      aboutme: require("../../assets/images/about/aboutme.jpg"),
      elements: {
        root: "message",
        items: "section-message__item",
        itemActive: "section-message__item--active"
      },
      selector: {}
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let fadeInTarget = Array.from(document.querySelectorAll(".slideInUp"));
      fadeInTarget.forEach(element => {
        const rect = element.getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;
        if (scroll > offset - windowHeight + 550) {
          element.classList.add("active");
        }
      });
    },
    removeHandler() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },

  destroyed: function() {
    this.removeHandler();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
#app-message {
  background-color: #f7f8f9;
}
.section-message {
  h2 {
    margin-bottom: 20px;
  }
  &__container {
    max-width: 1040px;
    margin: 0 auto;
  }
  &__body {
    font-family: $noto-serif-font;
    font-size: 20px;
  }
  &__image-me {
    filter: grayscale(100);
    border-radius: 5px;
    max-width: 400px;
    &:hover {
      filter: grayscale(0);
    }
  }
}

.slideInUp {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);

  @for $i from 1 through 2 {
    &:nth-child(#{$i}) {
      transition: (0.6s + 0.4s * $i);
      transition-property: transform, opacity;
    }
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@media only screen and (min-width: 767px) {
  .section-message {
    h2 {
      margin-bottom: 40px;
    }
  }
}
@media only screen and (min-width: 960px) {
  .section-message {
    &__body {
      font-size: 18px;
    }
  }
}
</style>
