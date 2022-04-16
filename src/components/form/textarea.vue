<template>
  <div class="textarea">
    <textarea
      v-model="val"
      class="textarea_item"
      :placeholder="placeholder"
      @keyup="sendStore"
      @change="sendStore"
      @blur="sendStore"
    />
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Textarea',
  components: {
  },
  props : {
    set: {type: String, Require: true, default: ''},
    placeholder: {type: String, Require: true, default: 'プレースホルダー'},
    tg: {type: String, Require: true, default: 'text'}
  },
  data () {
    return {
      val: ''
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
  .textarea{
    &_item{
      background-color: #ededed;
      width: 100%;
      padding: 5px 10px;
    }
  }
</style>
