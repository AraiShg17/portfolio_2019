<template>
  <div
    class="modal"
    @click.self="modalCloase"
  >
    <div
      class="modal_inner"
      :style="'top: ' + (this.$store.getters.work.position - this.$store.getters.scroll) + 'px'"
    >
      <div class="modal_inner_item">
        <slot>モーダル</slot>
      </div>
      <div class="modal_inner_icon">
        <IconLoading class="-gray" />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import IconLoading from '@/components/icon/loading.vue'

export default {
  name: 'Modal',
  components: {
    IconLoading
  },
  props : {
  },
  updated () {
    // todo ちょっと作り方が上手くないので修正必須
    store.commit('setHeight', (this.$store.getters.work.position + 240 + document.querySelector('.modal_inner').clientHeight))
  },
  methods: {
    modalCloase () {
      setTimeout(() => {
        store.commit('setWork', {tg: 'modal', val: {image: {src: null,alt: null}}})
      },600)
      store.commit('setModal', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 120px 15px 15px;
  min-height: 160vh;
  background-color: rgba(#fff, .8);
  z-index: 10;

  &_inner{
    max-width: 1000px;
    width: 100%;
    margin: auto;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: var(--shadow);
    position: relative;

    &_item{
      position: relative;
      z-index: 1;
      text-align: center;
    }
    &_icon{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
