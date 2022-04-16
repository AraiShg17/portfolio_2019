<template>
  <Main class="about">
    <Title>ABOUT</Title>
    <div class="about_wrap">
      <section class="about_wrap_sect -six">
        <SubTitle>PROFILE</SubTitle>
        <Profile />
        <transition name="fade">
          <div
            v-if="this.$store.getters.account.login"
            class="about_btn"
            @click="newProf"
          >
            <SendButton>
              <span v-if="this.$store.getters.profile.message === 'loading'"><IconLoading /></span>
              <span v-else-if="this.$store.getters.profile.message">{{ this.$store.getters.profile.message }}</span>
              <span v-else>更新</span>
            </SendButton>
          </div>
        </transition>
      </section>

      <section
        v-if="false"
        class="about_wrap_sect -three"
      >
        <SubTitle>CONTACT</SubTitle>
        <Contact />
      </section>
    </div>
  </Main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import store from '@/store'
import Main from '@/components/layout/main.vue'
import Title from '@/components/title/titleMain.vue'
import SubTitle from '@/components/title/titleSub.vue'
import Profile from '@/components/module/profile.vue'
import Contact from '@/components/module/contact.vue'
import IconLoading from '@/components/icon/loading.vue'
import SendButton from '@/components/button/sendButton.vue'

export default {
  name: 'About',
  components: {
    Main,
    Title,
    SubTitle,
    Profile,
    Contact,
    IconLoading,
    SendButton
  },
  created: () => {

    firebase.database().ref('profile').once('value')
      .then((snapshot => {
        store.commit('setProfile', snapshot.val())
      }))
  },
  methods: {
    /* ステートの書き換え方1 */
    newProf () {
      this.$store.state.profile.message = 'loading'

      /* データベースに登録情報を送信 */
      firebase.database().ref('profile').update(
        this.$store.getters.profile.me
      )
        .then((/* data */) => {
          this.$store.state.profile.message = '登録が成功しました。'
        })
        .catch((/* error */) => {
          this.$store.state.profile.message = '登録に失敗しました。'
        })
        .then(() => {
          setTimeout(() => {
            this.$store.state.profile.message = ''
            firebase.database().ref('profile').once('value')
              .then((snapshot => {
                store.commit('setProfile', snapshot.val())
              }))
          }, 600)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  &_wrap{
    display: flex;
    flex-flow: row nowrap;
    margin: 0 -25px;

    &_sect{
      flex: 1 1 50%;
      padding: 0 25px;

      &.-one{flex-basis: 10%;}
      &.-two{flex-basis: 20%;}
      &.-three{flex-basis: 30%;}
      &.-four{flex-basis: 40%;}
      &.-five{flex-basis: 50%;}
      &.-six{flex-basis: 60%;}
      &.-seven{flex-basis: 70%;}
      &.-eight{flex-basis: 80%;}
      &.-nine{flex-basis: 90%;}
    }
  }
  &_btn{
    width: 100%;
    max-width: 360px;
    margin: 30px auto 0;
  }
}
</style>
