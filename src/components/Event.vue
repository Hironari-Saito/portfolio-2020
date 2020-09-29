<template>
  <div class="timeline-item" v-bind:data-text="tlText">
    <div class="timeline__content">
      <img class="timeline__img" v-bind:src="href" />
      <h4 class="timeline__content-title">{{ title }}</h4>
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
.timeline {
  &__content-title {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-size: 64px;
    transition: 0.4s;
    padding: 0 16px;
  }

  &__content-desc {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
  }
}
.timeline-item {
  padding: 48px 0;
  opacity: 0.3;
  filter: blur(5);
  transition: 0.4s;
  box-sizing: border-box;
  width: calc(50% - 48px);
  display: flex;
  position: relative;
  transform: translateY(-64px);

  &::before {
    content: attr(data-text);
    letter-spacing: 3.2px;
    width: 100%;
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    font-family: "Pathway Gothic One", sans-serif;
    border-left: 3.2px solid rgba(255, 255, 255, 0.5);
    top: 70%;
    margin-top: -16px;
    padding-left: 16px;
    opacity: 0;
    right: calc(-100% - 56px);
  }

  &:nth-child(even) {
    align-self: flex-end;
  }

  &:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 3.2px solid rgba(255, 255, 255, 0.5);
    padding-right: 16px;
  }
  &--active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
  &--active:before {
    top: 50%;
    transition: 0.3s all 0.2s;
    opacity: 1;
  }
  &--active &__content-title {
    margin: -48px 0 16px 0;
  }
}

@media only screen and (max-width: 767px) {
  .timeline-item {
    align-self: baseline;
    width: 100%;
    padding: 0 16px 200px 80px;
  }
  .timeline-item:before {
    left: 16px;
    padding: 0;
    top: 48px;
    text-align: center;
    width: 80px;
    border: none;
  }
  .timeline-item:last-child {
    padding-bottom: 64px;
  }
}
.timeline__img {
  max-width: 100%;
  box-shadow: 0 11px 16px rgba(0, 0, 0, 0.2);
}
</style>
