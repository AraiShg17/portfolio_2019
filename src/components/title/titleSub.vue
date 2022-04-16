<template>
  <h3 class="titleSub">
    <slot>サブタイトル</slot>
  </h3>
</template>

<script>
export default {
  name: 'TitleSub',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .titleSub {
    color: #000;
    font-size: 2rem;
    margin-bottom: 30px;
    letter-spacing: .2em;
  }
</style>
