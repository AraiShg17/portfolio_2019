<template>
  <div class="regist">
    <p class="regist_ttl">
      新規登録
    </p>
    <dl class="regist_body">
      <dt class="regist_body_ttl">
        公開日を登録してください
      </dt>
      <dd class="regist_body_unit">
        <FormInput
          set="setRegist"
          tg="day"
          type="text"
          placeholder="YY/MM/DDDD"
        />
      </dd>
    </dl>
    <dl class="regist_body">
      <dt class="regist_body_ttl">
        案件名を登録してください
      </dt>
      <dd class="regist_body_unit">
        <FormInput
          set="setRegist"
          tg="title"
          type="text"
          placeholder="○○ リニューアル"
        />
      </dd>
    </dl>
    <dl class="regist_body">
      <dt class="regist_body_ttl">
        案件の画像・サムネイル画像・代替文を登録してください
      </dt>
      <dd class="regist_body_unit">
        <label style="display:block;text-align:left;">
          詳細画像：
          <input
            type="file"
            style="display:inline-block;"
          >
        </label>
      </dd>
      <dd class="regist_body_unit">
        <label style="display:block;text-align:left;">
          サムネイル画像：
          <input
            type="file"
            style="display:inline-block;"
          >
        </label>
      </dd>
      <dd class="regist_body_unit">
        <FormInput
          set="setRegist"
          tg="alt"
          type="text"
          placeholder="代替文"
        />
      </dd>
    </dl>
    <dl class="regist_body">
      <dt class="regist_body_ttl">
        リンク先を登録してください
      </dt>
      <dd class="regist_body_unit">
        <FormInput
          set="setRegist"
          tg="href"
          type="text"
          placeholder="https://～～.html"
        />
      </dd>
    </dl>
    <dl class="regist_body">
      <dt class="regist_body_ttl">
        一般公開するかどうかを設定してください
      </dt>
      <dd class="regist_body_unit">
        <label>
          <input
            type="radio"
            name="security"
            value="false"
          >
          公開
        </label>
        <label>
          <input
            type="radio"
            name="security"
            value="true"
          >
          非公開
        </label>
      </dd>
    </dl>
    <dl class="regist_body">
      <dt class="regist_body_ttl">
        何番目に表示するかを設定してください
      </dt>
      <dd class="regist_body_unit">
        <FormInput
          set="setRegist"
          tg="sort"
          type="number"
          placeholder="0"
        />
      </dd>
    </dl>
    <div
      class="regist_btn"
      @click="sendRegist"
    >
      <!-- :class="1 === 1 ? 'is-disabled' : ''" -->
      <SendButton>
        <span v-if="this.$store.getters.regist.loading === 'loading'"><IconLoading /></span>
        <span v-else-if="this.$store.getters.regist.loading">{{ this.$store.getters.regist.loading }}</span>
        <span v-else>登録</span>
      </SendButton>
    </div>
    {{ this.$store.getters.regist }}
  </div>
</template>

<script>
import store from '@/store'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import IconLoading from '@/components/icon/loading.vue'
import FormInput from '@/components/form/input.vue'
import SendButton from '@/components/button/sendButton.vue'

export default {
  name: 'Regist',
  components: {
    IconLoading,
    FormInput,
    SendButton
  },
  methods: {
    sendRegist() {
      this.$store.state.regist.loading = 'loading'

      /* データベースに登録情報を送信 */
      firebase.database().ref('works').push(
        this.$store.getters.regist.work
      )
        .then((/* data */) => {
          this.$store.state.regist.loading = '登録が成功しました。'
        })
        .catch((/* error */) => {
          this.$store.state.regist.loading = '登録に失敗しました。'
        })
        .then(() => {
          setTimeout(() => {
            this.$store.state.regist.loading = ''
            firebase.database().ref('works').once('value')
              .then((snapshot => {
                store.commit('setWork', {tg: 'data', val: snapshot.val()})
              }))
          }, 600)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.regist{
  background-color: #fff;
  &_ttl{
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
  &_body{
    margin-bottom: 12px;
    &_ttl{
      text-align: left;
      margin-bottom: 5px;
    }
    &_unit{

    }
  }
  &_btn{
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
    &.is-disabled{
      pointer-events: none;
    }
  }

}
</style>
