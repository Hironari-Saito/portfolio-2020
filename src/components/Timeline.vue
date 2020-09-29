<template>
  <section id="root">
    <div id="timeline-root" class="section-timeline__container">
      <div class="section-timeline__image-filter">
        <div class="section-timeline__header">
          <h2 class="section-timeline__title">MY PATH</h2>
          <h3 class="section-timeline__subtitle">ENGINEER LIFE</h3>
        </div>
        <div class="timeline">
          <event
            v-for="e in events"
            :key="e.id"
            :tlText="e.timeline"
            :href="e.href"
            :title="e.title"
            :desc="e.desc"
          ></event>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Event from "./Event.vue";
export default {
  name: "Timeline",
  components: {
    Event
  },
  data: function() {
    return {
      events: [
        {
          id: 1,
          timeline: "Graduation",
          href: require("../assets/images/timeline/graduation.jpg"),
          title: "2017",
          desc: `I graduated from Toyama university and my major was educational psychology. I became an engineer from the experience of creating an experimental program when writing my graduation thesis.`
        },
        {
          id: 2,
          timeline: "As an engineer in small Company",
          href: require("../assets/images/timeline/engineer.jpg"),
          title: "2017-2019",
          desc: `I got started in System Engineer. I worked in a  small company in which I was engaged in the development of a travel company's core system. I have skilled Java, HTML, JavaScript, SQLServer. and minor Framework.`
        },
        {
          id: 3,
          timeline: "Become Freelance",
          href: require("../assets/images/timeline/freelance.jpg"),
          title: "2019 Oct",
          desc: `I got started Freelance. I worked in the development of clinical laboratory systems.`
        },
        {
          id: 4,
          timeline: "Make Portfolio",
          href: require("../assets/images/timeline/my-portfolio-2019.jpg"),
          title: "2019 Nov",
          desc: `I made this Web site which was created with Vue and Vuetify. `
        }
      ],
      elements: {
        rootId: "timeline-root",
        itemClass: "timeline-item",
        activeClass: "timeline-item--active",
        imgClass: "timeline__img"
      },
      selector: {}
    };
  },
  methods: {
    changeBackgroundImg: function(index) {
      // タイムラインのindex番号を引数にとり、背景画像をindex番号のイメージに変更する
      this.selector.root.style.backgroundImage =
        "url(" +
        this.selector.items[index]
          .querySelector(`.${this.elements.imgClass}`)
          .getAttribute("src");
    },
    addActiveClass: function(index) {
      // タイムラインのindex番号を引数にとり、activeクラスを加える。
      this.selector.items[index].classList.add(this.elements.activeClass);
    },
    removeActiveClass: function() {
      // タイムラインのactiveクラスをすべて削除する。
      this.selector.items.forEach(el =>
        el.classList.remove(this.elements.activeClass)
      );
    },
    handleScroll: function() {
      // scroll spyの実行
      let position = window.scrollY;
      // タイムラインの要素数を取得する
      let timelineElements = this.selector.items.length;

      // コンポーネントの上の位置を取得する
      // このコンポーネントのトップをゼロとする
      let rect = this.selector.root.getBoundingClientRect();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let documentTop = rect.top + scrollTop;

      // コンポーネントの左の位置を取得する
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      let documentLeft = rect.left + scrollLeft;

      // ウィンドウのスクロールによってイベントを発火させる
      this.selector.items.forEach((el, index) => {
        let curPos = {
          top: el.offsetTop + documentTop,
          left: el.offsetLeft + documentLeft
        };
        let min = curPos.top;
        let max = curPos.top + el.offsetHeight;

        // スクロールの位置が取得したタイムラインの要素の所定の位置に移動した時にactiveを切り替える
        if (
          index === timelineElements - 2 &&
          position > min + el.offsetHeight / 2
        ) {
          // 最後から２番目の要素に対しての処理
          // 最終要素は真ん中に治らない可能性があるのでそれを考慮している(hack的に)

          // 最後から２番目の要素のactiveClassを除去
          el.classList.remove(this.elements.activeClass);

          // 背景を最後の要素の画像に変更する
          this.changeBackgroundImg(timelineElements - 1);

          // 最後の要素にactiveClassを追加
          this.addActiveClass(timelineElements - 1);
        } else if (min <= position && position <= max - 40) {
          // 上記の特殊なケースに当てはまらない場合のスクロールの処理
          this.changeBackgroundImg(index);
          this.removeActiveClass();
          this.addActiveClass(index);
        }
      });
    }
  },
  computed: {
    position: () => {
      return window.scrollTop;
    }
  },
  created: function() {
    // Vue instanceを作成時に実行する。
    // まだマウントしていないのでここでDOMの操作などは行わないこと
    // ListenerやAPIなど表示に必要なものをここで定義する
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted: function() {
    // Vue instanceのマウント時に実行する
    // ここでdomへのアクセスが可能になるのでここで色々初期化すること
    // ex) dataへのdomの格納や変数の初期化もしくはajaxでの値を取得する

    // タイムラインのDOMを変数に格納
    let root = document.getElementById(this.elements.rootId);
    let items = document
      .getElementById(this.elements.rootId)
      .querySelectorAll(`.${this.elements.itemClass}`);

    this.selector = {
      root: root,
      items: items
    };

    // タイムラインにある要素の一番目をあらかじめactiveとする
    this.addActiveClass(0);

    // 背景をタイムラインにある要素の一番目をあらかじめbackgroundに設定する
    this.changeBackgroundImg(0);
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.section-timeline {
  &__container {
    font-size: 15px;
    font-weight: normal;
    transition: 0.3s ease 0s;
    padding: 40px 0 80px;
    background: rgba(0, 0, 0, 0.4);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;

    // 背景をぼかす
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0px;
      background: inherit;
      filter: blur(5px);
    }
  }

  &__header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
  }

  &__title {
    color: #fff;
    font-size: 58px;
    font-weight: normal;
    margin: 0;
  }

  &__subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
  }
}
/** timelineのおおまかなレイアウトはここで行う */
.timeline {
  display: flex;
  margin: 0 auto 0px auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
  z-index: 100;
  /** timelineの中央線をここで指定しています */
  &::before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, 0.07);
  }
}

@media only screen and (max-width: 767px) {
  .timeline {
    &::before {
      left: 40px;
    }
  }
}
</style>
