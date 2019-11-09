<template>
  <div class="timeline-item" v-bind:data-text="tlText">
    <div class="timeline__content">
      <img class="timeline__img" v-bind:src="href" />
      <h2 class="timeline__content-title">{{ title }}</h2>
      <p class="timeline__content-desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    tlText: String,
    href: String,
    title: String,
    desc: String
  }
};
</script>

<style scoped lang="scss">
img {
  background-color: white;
}
.timeline__content-title {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.3);
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 4rem;
  transition: 0.4s;
  padding: 0 1rem;
}
.timeline__content-desc {
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: normal;
  line-height: 1.5rem;
  margin: 0;
}
.timeline-item {
  padding: 3rem 0;
  opacity: 0.3;
  filter: blur(0.3rem);
  transition: 0.4s;
  box-sizing: border-box;
  width: calc(50% - 3rem);
  display: flex;
  position: relative;
  transform: translateY(-4rem);
}
.timeline-item:before {
  content: attr(data-text);
  letter-spacing: 0.2rem;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-family: "Pathway Gothic One", sans-serif;
  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -1rem;
  padding-left: 1rem;
  opacity: 0;
  right: calc(-100% - 3.5rem);
}
.timeline-item:nth-child(even) {
  align-self: flex-end;
}
.timeline-item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 3.5rem);
  padding-left: 0;
  border-left: none;
  border-right: 0.2rem solid rgba(255, 255, 255, 0.5);
  padding-right: 1rem;
}
.timeline-item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0rem);
}
.timeline-item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}
.timeline-item--active .timeline__content-title {
  margin: -3rem 0 1rem 0;
}
@media only screen and (max-width: 767px) {
  .timeline-item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 2rem 10rem 5rem;
  }
  .timeline-item:before {
    left: 1rem !important;
    padding: 0 !important;
    top: 3rem;
    text-align: center !important;
    width: 5rem;
    border: none !important;
  }
  .timeline-item:last-child {
    padding-bottom: 2.5rem;
  }
}
.timeline__img {
  max-width: 100%;
  box-shadow: 0 0.7rem 1rem rgba(0, 0, 0, 0.2);
}
</style>
