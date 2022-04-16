<template>
  <div class="input">
    <input
      v-model="val"
      class="input_item"
      :type="type"
      :placeholder="placeholder"
      @keyup="sendStore"
      @change="sendStore"
      @blur="sendStore"
    >
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Input',
  components: {
  },
  props : {
    set: {type: String, Require: true, default: ''},
    type: {type: String, Require: true, default: 'text'},
    value: {type: String, Require: false, default: ''},
    placeholder: {type: String, Require: true, default: 'プレースホルダー'},
    tg: {type: String, Require: true, default: 'text'}
  },
  data () {
    return {
      val: this.value
    }
  },
  methods: {
    sendStore () {
      store.commit(this.set, {tg: this.tg, val: this.val})
    }
  }
}
</script>

<style lang="scss" scoped>
  .input{
    &_item{
      background-color: #ededed;
      width: 100%;
      padding: 5px 10px;
    }
  }
</style>
