<template>
  <v-app>
    <div id="about" data-background="grey">
      <v-container>
        <h2 class="text-center display-3 mb-5">About Me</h2>
        <v-row>
          <v-col sm="12" md="6" lg="4" class="author__item" data-delay="1">
            <v-img
              :src="aboutme"
              width="300"
              height="400"
              class="author__img"
            ></v-img>
          </v-col>
          <v-col sm="12" md="6" lg="4" class="author__item" data-delay="1.3">
            <h3>It's Me</h3>

            <p>
              I like programming. My career as a system engineer has been two
              and a half years, mainly engaged in back-end design and
              development. Recently I am interested in front-end development. I
              feel the necessity of UI and UX to create a better website through
              this site, and study design and XD. I also feel the necessity of
              infrastructure technology. In 2018, I acquired CCNP qualification
              and recently acquired LPIC level1.
              <br />
              <br />In the future, I aim to be a full-stack engineer who can
              work across borders.
            </p>
          </v-col>
          <v-col sm="12" md="6" lg="4" class="author__item" data-delay="1.6">
            <h3>My Hobby</h3>
            <p>
              I love Japanese animation.
              <br />I like to play games. <br />I like watching live games.
              <br />I like traveling. <br />I like museums.
              <br />
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "About",
  data: () => {
    return {
      aboutme: require("../../assets/about/aboutme.png"),
      elements: {
        root: "about",
        items: "author__item",
        itemActive: "author__item--active"
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
.author__item {
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
  transition-timing-function: ease-in;
  .author__img {
    filter: grayscale(100);
    &:hover {
      filter: grayscale(0);
      transition: filter 0.3s;
    }
  }
  &.author__item--active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
