<template>
  <v-app id="app-service">
    <section id="service" class="section-service pt-10">
      <v-container class="px-6 pt-0">
        <h2 class="text-center display-3">Service</h2>
        <p class="text-center mb-10">
          デザインからHTML、CSS、JavaScrpt コーディングまで。
          ウェブサイト制作全般に対応いたします。
        </p>
        <v-row class="section-service__service-list" tag="ul">
          <v-col
            class="section-service__service slideInUp"
            cols="12"
            sm="12"
            md="4"
            tag="li"
          >
            <div class="section-service__icon-bg blue lighten-4">
              <v-img
                id="service-coding-icon"
                :src="coding"
                width="100"
                height="100"
                class="section-service__icon"
              ></v-img>
            </div>
            <h3>ホームページ制作</h3>
            <p class="section-service__subtitle">ウェブ制作全般</p>
            <p class="mb-0">
              ランディングページやホームページの企画から制作、運営サポートまで、お気軽にご相談ください。
              ある特定の工程の作業をご依頼のお客様も大歓迎しております。
            </p>
          </v-col>
          <v-col
            class="section-service__service slideInUp"
            cols="12"
            sm="12"
            md="4"
            tag="li"
          >
            <div class="section-service__icon-bg blue lighten-4">
              <v-img
                id="service-wordpress-icon"
                :src="wordpress"
                width="100"
                height="100"
                class="section-service__icon"
              ></v-img>
            </div>

            <h3>WordPress</h3>
            <p class="section-service__subtitle">設計・デザイン</p>
            <p class="mb-0">
              個人ブログやニュースサイトなどの更新が発生するサイトはWordPressをお勧めしております。
              お客様のご要望に応じて柔軟に設計を提案いたします。サイト設置後はケアプランを用意しております。
            </p>
          </v-col>
          <v-col
            class="section-service__service slideInUp"
            cols="12"
            sm="12"
            md="4"
            tag="li"
          >
            <div class="section-service__icon-bg blue lighten-4">
              <v-img
                id="service-mobile-icon"
                :src="mobile"
                width="100"
                height="100"
                class="section-service__icon"
              ></v-img>
            </div>
            <h3>レスポンシブ</h3>
            <p class="section-service__subtitle">コーディング</p>
            <p class="mb-0">
              レスポンシブ対応はもちろんのこと、迅速かつ丁寧なコーディングを致します。
              連絡を密に行うことにより、修正対応を早く行うことでより高品質なコードをお届けできるように努めております。
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
  props: {
    scrollY: Number
  },
  data: () => {
    return {
      coding: require("../../assets/images/service/coding.svg"),
      mobile: require("../../assets/images/service/mobile.svg"),
      wordpress: require("../../assets/images/service/wordpress.svg"),
      selector: {
        items: "section-service__service"
      },
      isAnimated: false,
      service1_top: 10000,
      service2_top: 10000,
      service3_top: 10000
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let fadeInTarget = Array.from(
        document.querySelectorAll(".section-service__service")
      );
      fadeInTarget.forEach(element => {
        const rect = element.getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight;
        if (scroll > offset - windowHeight + 150) {
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
.section-service {
  h2 {
    margin-bottom: 20px;
  }
  &__service {
    text-align: center;
    list-style: none;
    margin-bottom: 60px;
  }
  &__service-list {
    padding-left: 0;
  }
  &__service {
    padding-top: 0;
  }
  &__icon-bg {
    margin: 0 auto 30px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    filter: grayscale(65%);
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__subtitle {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 960px) {
  .section-service {
    h2 {
      margin-bottom: 40px;
    }
    &__service-list {
      // margin-top: 20vh;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
}
.slideInUp {
  opacity: 0;
  visibility: hidden;
  // transition: 1s;
  transform: translateY(30px);

  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      transition: (0.6s + 0.4s * $i);
      transition-property: opacity, transform;
    }
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
