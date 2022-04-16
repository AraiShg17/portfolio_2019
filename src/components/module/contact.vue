<template>
  <div class="contact">
    <dl class="contact_box">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="contact_box_wrap"
      >
        <dt class="contact_box_wrap_ttl">
          {{ item.ttl }}
        </dt>
        <dd class="contact_box_wrap_body">
          <FormInput
            set="setHoge"
            :tg="item.tg"
            :type="item.type"
            :placeholder="item.placeholder"
          />
        </dd>
      </div>

      <div class="contact_box_wrap">
        <dt class="contact_box_wrap_ttl">
          お問い合わせ内容
        </dt>
        <dd class="contact_box_wrap_body">
          <FormTextarea
            set="setHoge"
            tg="Hoge"
            placeholder=""
          />
        </dd>
      </div>
    </dl>
    <SendButton>送信</SendButton>
  </div>
</template>

<script>
import FormInput from '@/components/form/input.vue'
import FormTextarea from '@/components/form/textarea.vue'
import SendButton from '@/components/button/sendButton.vue'

export default {
  name: 'Contact',
  components: {
    FormInput,
    FormTextarea,
    SendButton
  },
  props : {
  },
  data () {
    return {
      data: [
        {ttl :'お名前', tg: 'name', type: 'text', placeholder: ''},
        {ttl :'メールアドレス', tg: 'mail', type: 'mail', placeholder: ''}
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.contact{
  &_box {
    margin-bottom: 20px;
    &_wrap {
      &:not(:last-child){
        margin-bottom: 15px;
      }
      &_ttl {
        margin-bottom: 3px;
      }
      &_body {
      }
    }
  }
}
</style>
