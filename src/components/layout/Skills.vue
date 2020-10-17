<template>
  <v-app class="grey lighten-4">
    <section id="skill" class="pt-10">
      <v-container class="px-6">
        <h2 class="text-center display-3 mb-5">MY SKILL</h2>
        <p class="mb-10 text-center">
          フロントエンドからバックエンド、インフラまで幅広い知識を有しております。
          ITを俯瞰的な視野で概観できると共に、その詳細・実装までしっかりとサポート致します。
          今後は、さらにそれぞれの専門性を高めると共に、近年さらに重要度を増しているセキュリティへの知見を深めていきたいと考えております。
          最近、デジタルハリウッド大学のWebデザイナー専攻コースに入学し、デザイナーとエンジニアの垣根を取り払う努力をしております。
        </p>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="12"
            md="6"
            lg="4"
            class="section-message__item"
            data-delay="0.3"
          >
            <chart
              :chartdata="frontend.chartdata"
              :options="frontend.options"
            ></chart>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="6"
            lg="4"
            class="section-message__item"
            data-delay="0.3"
          >
            <chart
              :chartdata="backend.chartdata"
              :options="backend.options"
            ></chart>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="6"
            lg="4"
            class="section-message__item"
            data-delay="0.3"
          >
            <chart
              :chartdata="infra.chartdata"
              :options="infra.options"
            ></chart>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="certificated" class="pt-10 pb-8">
      <v-container class="px-6">
        <h2 class="text-center display-3 mb-5">Certificated</h2>
        <p class="mb-10 text-center">
          私が保持している資格を記載しております。
          幅広く、かつ専門性を高く保つために日々研鑚しております。
        </p>
        <v-list class="pl-0" tag="ol" two-line>
          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-title wrap
                >Linux Professional Institute Certification level
                2</v-list-item-title
              >
              <v-list-item-subtitle>2020/8</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-title wrap
                >HTML5 Professional Certification Level 2</v-list-item-title
              >
              <v-list-item-subtitle>2020/2</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-title wrap
                >Cisco Certified Network Professional Routing &amp;
                Switchings</v-list-item-title
              >
              <v-list-item-subtitle>2018/12</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-title wrap
                >Java SE 8 Programmer Gold</v-list-item-title
              >
              <v-list-item-subtitle>2017/8</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-title wrap>応用情報技術者試験</v-list-item-title>
              <v-list-item-subtitle>2014/11</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </section>
  </v-app>
</template>

<script>
import Chart from "../Chart.js";

export default {
  components: {
    Chart
  },
  data() {
    return {
      datacollection: null,
      frontend: {
        chartdata: {
          labels: [
            "HTML/CSS",
            "JavaScript",
            "WordPress",
            "AI/Ps",
            "SCSS",
            "Vue"
          ],
          datasets: [
            {
              label: "front-end",
              data: [4.5, 4, 4, 3, 3.5, 4],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 99, 132, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              suggestedMax: 5,
              suggestedMin: 0,
              stepSize: 1
            }
          }
        }
      },
      backend: {
        chartdata: {
          labels: ["Java", "PHP", "Nuxt", "Python", "Django", "Sring"],
          datasets: [
            {
              label: "back-end",
              data: [4.5, 4, 4, 3, 3, 3.5],
              backgroundColor: [
                "rgba(99, 255, 132, 0.2)",
                "rgba(99, 255, 132, 0.2)",
                "rgba(99, 255, 132, 0.2)",
                "rgba(99, 255, 132, 0.2)",
                "rgba(99, 255, 132, 0.2)",
                "rgba(99, 255, 132, 0.2)"
              ],
              borderColor: [
                "rgba(99, 255, 132, 1)",
                "rgba(99, 255, 132, 1)",
                "rgba(99, 255, 132, 1)",
                "rgba(99, 255, 132, 1)",
                "rgba(99, 255, 132, 1)",
                "rgba(99, 255, 132, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              suggestedMax: 5,
              suggestedMin: 0,
              stepSize: 1
            }
          }
        }
      },
      infra: {
        chartdata: {
          labels: [
            "AWS",
            "CircleCI",
            "Git/GitHub",
            "Netlify",
            "Linux",
            "Network"
          ],
          datasets: [
            {
              label: "Infra",
              data: [3.5, 3, 4, 3, 3.5, 3],
              backgroundColor: [
                "rgba(132, 99, 255, 0.2)",
                "rgba(132, 99, 255, 0.2)",
                "rgba(132, 99, 255, 0.2)",
                "rgba(132, 99, 255, 0.2)",
                "rgba(132, 99, 255, 0.2)",
                "rgba(132, 99, 255, 0.2)"
              ],
              borderColor: [
                "rgba(132, 99, 255, 1)",
                "rgba(132, 99, 255, 1)",
                "rgba(132, 99, 255, 1)",
                "rgba(132, 99, 255, 1)",
                "rgba(132, 99, 255, 1)",
                "rgba(132, 99, 255, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              suggestedMax: 5,
              suggestedMin: 0,
              stepSize: 1
            }
          }
        }
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
