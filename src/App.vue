<template>
  <div class="wrapper">
    <Header />
    <transition name="fade">
      <Login v-show="$route.path !== '/'" />
    </transition>
    <transition
      name="load"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import store from '@/store'
import Header from '@/components/layout/header.vue'
import Login from '@/components/module/login.vue'

export default {
  components: {
    Header,
    Login
  },
  watch: {
    '$route' (to) {
      this.createPageTitle(to)
    }
  },
  mounted () {
    var to = this.$route
    this.createPageTitle(to)
  },
  beforeCreate () {

    let arr = []
    let pass = ''
    arr = location.search.replace('?','').split('&')
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=')
      if( arr[i][0] === 'pass' ) {
        pass = arr[i][1]
      }
    }
    store.commit('setSecurity', pass)
  },
  methods: {
    createPageTitle: (to) => {
      // タイトルを設定
      if (to.meta.title) {
        document.title = to.meta.title
      } else {
        document.title = 'タイトル未設定'
      }
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/style.scss"></style>

<style lang="scss" scoped>
  .wrapper{
    background-color: #fafafa;
    position: relative;
  }
</style>
