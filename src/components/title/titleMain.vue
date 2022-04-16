<template>
  <h2 class="titleMain">
    <slot>タイトル</slot>
  </h2>
</template>

<script>
export default {
  name: 'TitleMain',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .titleMain {
    color: #000;
    font-size: 3rem;
    letter-spacing: .3em;
    text-align: center;
    margin-bottom: 50px;
  }
</style>
