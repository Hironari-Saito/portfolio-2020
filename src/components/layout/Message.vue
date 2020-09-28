<template>
  <v-app id="app-message">
    <section id="message" class="section-message pt-10">
      <v-container class="px-6">
        <h2 class="text-center display-3 mb-5">Message</h2>
        <v-row>
          <v-col
            sm="12"
            md="6"
            lg="6"
            class="section-message__item"
            data-delay="0.3"
          >
            <v-img
              :src="aboutme"
              width="375"
              height="400"
              class="section-message__image-me"
            ></v-img>
          </v-col>
          <v-col
            sm="12"
            md="6"
            lg="6"
            class="section-message__item"
            data-delay="1.3"
          >
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
              今は「もっとユーザーの方で寄り添った開発をしたい」
              その想いでフリーランスとして活動をしております。
            </p>
            <p>
              Webデザインからコーディング、サイトの公開まで
              ホームページを一気通貫で開発することができます。
              このサイトも１から作成しております。
            </p>
            <p>
              人生というのは出逢いの連続であります。
              「なんかいい感じのエモい一言が欲しい」
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
  methods: {
    handleScroll: function() {
      let position = window.scrollY;
      let rect = this.selector.root.getBoundingClientRect();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let documentTop = rect.top + scrollTop;
      let curPos = {
        top: this.selector.root.offsetTop + documentTop
      };
      let min = curPos.top;
      //let max = curPos.top + this.selector.root.offsetHeight;
      if (min - 200 <= position) {
        // data-delayの値を取得する。
        this.selector.items.forEach(el => {
          // 取得した値を用いて、cssのディレイに設定し、animationのタグをつける
          el.style.transition = `${el.getAttribute("data-delay")}s`;
          el.style.transitionProperty = "opacity";
          // animation用のcssをつけることで非表示とされていたコンポーネントが表示される。
          el.classList.add(this.elements.itemActive);
        });
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted: function() {
    this.selector = {
      root: document.getElementById(this.elements.root),
      items: document.querySelectorAll(`.${this.elements.items}`)
    };
  }
};
</script>

<style lang="scss" scoped>
#app-message {
  background-color: #f7f8f9;
}
.section-message {
  &__item {
    opacity: 0;
    transform: translate3d(0, 2rem, 0);
    transition-timing-function: ease-in;
  }
  &__item--active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &__image-me {
    filter: grayscale(100);
    transition: filter 0.3s;
    border-radius: 5px;
    &:hover {
      filter: grayscale(0);
    }
  }
}
</style>
