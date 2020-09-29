import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    chartdata: Object,
    options: Object
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
