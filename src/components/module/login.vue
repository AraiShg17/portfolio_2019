<template>
  <div class="login">
    <button
      v-if="!this.$store.getters.account.login"
      class="login_icon -key"
      @click="sendStore(!$store.state.common.login)"
    >
      <IconKey />
    </button>
    <button
      v-else
      class="login_icon -lock"
      @click="sendLogout"
    >
      <IconLock />
    </button>
    <transition name="fade">
      <div
        v-if="this.$store.getters.login"
        class="login_modal"
      >
        <p class="login_modal_ttl">
          管理者用ログイン
        </p>
        <div class="login_modal_body">
          <FormInput
            set="setAccount"
            tg="id"
            type="text"
            placeholder="メールアドレス"
          />
        </div>
        <div class="login_modal_body">
          <FormInput
            set="setAccount"
            tg="password"
            type="password"
            placeholder="パスワード"
          />
        </div>
        <div
          class="login_modal_btn"
          :class="(!this.$store.getters.account.id) || (!this.$store.getters.account.password) ? 'is-disabled' : ''"
          @click="sendLogin"
        >
          <SendButton>
            <span v-if="this.$store.getters.account.loading"><IconLoading /></span>
            <span v-else-if="this.$store.getters.account.message">{{ this.$store.getters.account.message }}</span>
            <span v-else>ログイン</span>
          </SendButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import store from '@/store'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import IconKey from '@/components/icon/key.vue'
import IconLock from '@/components/icon/lock.vue'
import IconLoading from '@/components/icon/loading.vue'
import FormInput from '@/components/form/input.vue'
import SendButton from '@/components/button/sendButton.vue'

export default {
  name: 'Login',
  components: {
    IconKey,
    IconLock,
    IconLoading,
    FormInput,
    SendButton
  },
  props : {
    item: {type: Object, Require: true, default: () => {return}}
  },
  methods: {
    sendStore (flag) {
      store.commit('setLogin', flag)
    },
    sendLogin() {
      store.commit('setAccount', {tg: 'loading', val: true})

      /* 新規アカウント作成用
      firebase.auth().createUserWithEmailAndPassword(
        this.$store.getters.account.id, this.$store.getters.account.password
      )
        .then((data) => {
          firebase.auth().currentUser
            .sendEmailVerification()
            .then(() => {
              // Email sent.
            })
            .catch((error) => {
              console.log(error)
              // An error happened.
            })
        })
        .catch((error) => {
          console.log('ログインが失敗しました。',error)
        }) */

      firebase.auth().signInWithEmailAndPassword(
        this.$store.getters.account.id, this.$store.getters.account.password
      )
        .then((/*data*/) => {
          store.commit('setAccount', {tg: 'loading', val: false})
          if (!firebase.auth().currentUser.emailVerified) {
            firebase.auth().signOut().then(() => {
              /* console.log(data) */
              store.commit('setAccount', {tg: 'message', val: 'メールアドレスが未承認です'})
              store.commit('setAccount', {tg: 'login', val: false})
            })
          } else if (firebase.auth().currentUser !== null) {
            firebase.auth().currentUser.providerData.forEach((/*data*/) => {
              /* console.log(data) */
              store.commit('setAccount', {tg: 'message', val: 'ログインが成功しました'})
              store.commit('setAccount', {tg: 'login', val: true})
            })
          }
        })
        .catch((/*error*/) => {
          /* console.log(error) */
          store.commit('setAccount', {tg: 'message', val: 'ログインが失敗しました'})
          store.commit('setAccount', {tg: 'login', val: false})
        })
        .then(() => {
          setTimeout(() => {
            store.commit('setAccount', {tg: 'message', val: ''})
            store.commit('setLogin', false)
          }, 600)
        })
    },
    sendLogout() {
      firebase.auth().signOut()
        .then(() => {
          store.commit('setAccount', {tg: 'message', val: 'ログアウトしました'})
          store.commit('setAccount', {tg: 'login', val: false})
        })
        .then(() => {
          setTimeout(() => {
            store.commit('setAccount', {tg: 'message', val: ''})
            store.commit('setLogin', false)
          }, 0)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 10001;
  &_icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(#fff, .6);
    cursor: pointer;
    transition: all var(--cubic);
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      height: auto;
      fill: #fff;
      transition: all var(--cubic-btn);
    }
    &.-key{
      svg{
        width: 15px;
      }
    }
    &.-lock{
      padding-left: 2px;
      svg{
        width: 25px;
      }
    }

    &:hover{
      border-color: rgba(#fff, 1);
      background-color: rgba(#fff, 1);

      svg{
        fill: #000;
      }
    }
  }

  &_modal{
    position: absolute;
    right: 0px;
    top: 55px;
    width: 240px;
    border-color: rgba(#fff, 1);
    background-color: rgba(#fff, 1);
    border-radius: 5px;
    box-shadow: var(--shadow);
    padding: 20px;
    &::after{
      content: '';
      border-width: 10px 8px;
      border-style: solid;
      border-color: rgba(#fff, 0) rgba(#fff, 0) rgba(#fff, 1);
      position: absolute;
      right: 12px;
      top: -20px;
    }
    &_ttl{
      font-size: 1.4rem;
      margin-bottom: 15px;
    }
    &_body:not(:last-of-type){
      margin-bottom: 12px;
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
}
</style>
