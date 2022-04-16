<template>
  <main
    class="main"
    :style="'min-height:' + this.$store.getters.height + 'px'"
  >
    <section class="main_sect">
      <slot>コンテンツエリア</slot>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from '@/components/layout/footer.vue'

export default {
  name: 'Main',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 80px;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    &_sect{
      padding: 30px 50px 80px;
      max-width: 1360px;
      width: 100%;
      margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    .main {
      &_sect{
        padding: 15px 25px 40px;
      }
    }
  }
</style>
