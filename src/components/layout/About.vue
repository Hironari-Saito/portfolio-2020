<template>
  <div id="about" data-background="grey">
    <v-app>
      <v-container>
        <h2 class="text-center display-3 mb-5">About Me</h2>
        <v-row>
          <v-col sm="12" md="6" lg="4" class="author__item" data-delay="1">
            <div class="author__img">
              <img src="https://source.unsplash.com/random/500x400" />
            </div>
          </v-col>
          <v-col sm="12" md="6" lg="4" class="author__item" data-delay="2">
            <h3>My Work</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              id voluptates tempore voluptatem, possimus, ab cupiditate
              perferendis suscipit fugiat harum ipsa nam beatae modi recusandae
              maxime a culpa hic iste. Quasi, atque magni aspernatur, eaque
              dolorum fugiat molestias repellendus aliquid aperiam laudantium
              sapiente veniam omnis culpa cumque saepe. Rem ipsa pariatur autem
              dignissimos totam? Et sunt cupiditate accusamus exercitationem
              eaque. Eum, est facilis id ducimus deleniti consequuntur saepe
              dolores corrupti ipsam perferendis quam. Sit quia, itaque
              accusamus in sunt magni, accusantium placeat praesentium inventore
              optio aliquam. Perferendis tempora repellendus velit?
            </p>
          </v-col>
          <v-col sm="12" md="6" lg="4" class="author__item" data-delay="3">
            <h3>My Hobby</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolorum, vitae cumque commodi perferendis porro ipsum at
              blanditiis exercitationem ipsam reprehenderit saepe quia dolores
              quasi nihil rem, quo aliquid suscipit.Numquam distinctio ad vitae
              neque minima soluta corporis quo perferendis, esse repellat
              voluptates veritatis modi porro asperiores hic sint placeat
              facilis eum molestias quos consectetur! Aperiam vero sit ipsum
              distinctio.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => {
    return {
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
          el.style.transition = el.getAttribute("data-delay") + "s";
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
  transition-delay: attr(data-delay);
  .author__img {
    img {
      width: 100%;
      height: 100%;
    }
  }

  &.author__item--active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
