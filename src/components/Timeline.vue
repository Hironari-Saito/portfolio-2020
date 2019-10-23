<template>
  <div id="root">
    <h1>{{ msg }}</h1>
    <p>{{ position }}</p>
    <div class="timeline-container" id="timeline-root">
      <div class="timeline-header">
        <h2 class="timeline-header__title">My Path</h2>
        <h3 class="timeline-header__subtitle">ENGINEER LIFE</h3>
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
          href: require("../assets/kk.jpg"),
          title: "2017",
          desc: `富山大学を卒業しました。専攻は教育心理でした。実験用のプログラムを作っていた経験からシステムエンジニアとして就職しました。`
        },
        {
          id: 1,
          timeline: "As a Engineer in small Company",
          href: require("../assets/u.jpg"),
          title: "2017-2019",
          desc: `I got started in Engineer. I worked in a company.
                 I have skilled Java, HTML, JavaScript, SQLServer. and minor Framework.`
        },
        {
          id: 2,
          timeline: "Become Freelance",
          href: require("../assets/r.jpg"),
          title: "2019",
          desc: `I got started Freelance. I worked`
        },
        {
          id: 3,
          timeline: "NEW TIMELINE DESIGN",
          href: require("../assets/u.jpg"),
          title: "2019",
          desc: `I made this Web site`
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
  props: {
    msg: String
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
          // 推測として・・・・最終要素は真ん中に治らない可能性があるのでそれを考慮しているのではないか(hack的に)
          // ここの処理をうまく処理できるのであれば、どこでも使用できるコンポーネントとして再利用が可能になるのではないか

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
.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}
.timeline__content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;
  color: #fff;
}
.timeline__content-desc {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Roboto Condensed", sans-serif;
  font-weight: normal;
  line-height: 25px;
}
.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}
@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
.timeline-container {
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}
.timeline-container:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  content: "";
}
.timeline-header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.timeline-header__title {
  color: #fff;
  font-size: 58px;
  font-family: "Oswald", sans-serif;
  font-weight: normal;
  margin: 0;
}
.timeline-header__subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}
</style>
