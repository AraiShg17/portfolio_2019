<template>
  <Main class="work">
    <Title>WORK</Title>

    <div
      v-if="this.$store.getters.loading.nowload"
      class="work_load"
    >
      <IconLoading class="-gray" />
    </div>
    <div class="work_flex">
      <transition-group
        tag="ul"
        name="fade"
        class="work_flex_unit"
      >
        <li
          v-if="this.$store.getters.account.login"
          key="addwork"
          class="work_flex_unit_list -add"
          @click="modalRegist"
        >
          <Add />
        </li>
        <li
          v-for="item in sort"
          v-show="filting.indexOf(item.id) >= 0"
          :key="item.id"
          class="work_flex_unit_list"
        >
          <Card :item="item" />
        </li>
      </transition-group>
    </div>

    <transition name="popup">
      <div
        v-if="this.$store.getters.filter.length > 0"
        class="work_item"
      >
        <Filt />
      </div>
    </transition>

    <transition name="popup">
      <Modal
        v-show="this.$store.getters.modal"
      >
        <img
          v-if="this.$store.getters.work.modal.image.src"
          :src="this.$store.getters.work.modal.image.src"
          :alt="this.$store.getters.work.modal.image.alt"
          @click="modalCloase"
        >
        <Regist v-else />
      </Modal>
    </transition>
  </Main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import store from '@/store'
import Main from '@/components/layout/main.vue'
import Title from '@/components/title/titleMain.vue'
import Card from '@/components/module/card.vue'
import Modal from '@/components/module/modal.vue'
import Filt from '@/components/module/filter.vue'
import IconLoading from '@/components/icon/loading.vue'
import Add from '@/components/icon/add.vue'
import Regist from '@/components/module/regist.vue'

export default {
  name: 'Work',
  components: {
    Main,
    Title,
    Card,
    Modal,
    Filt,
    IconLoading,
    Add,
    Regist
  },
  computed: {
    filting: function () {
      let flag = []
      let arr = []
      for ( const key in this.$store.getters.work.data ) {
        flag.push(key)

        //カテゴリーを配列に変換
        arr = []
        for ( let i=0; i < this.$store.getters.work.data[key].category.length; i++ ) {
          arr.push(this.$store.getters.work.data[key].category[i])
        }

        //配列にしたカテゴリーとフィルタリング要素がすべて一致するか判別
        for ( let i=0; i < this.$store.getters.filter.length; i++ ) {
          //すでに非表示になっている場合はブレイク
          if (flag.indexOf(this.$store.getters.work.data[key].id) < 0) { break }
          //フィルタ要素にマッチするか判別
          if (arr.indexOf(this.$store.getters.filter[i]) < 0) {
            flag.splice(flag.indexOf(key), 1)
          }
        }
      }
      return flag
    },
    sort: function () {
      let arr = []

      //データを配列に変換
      for (const item in this.$store.getters.work.data ) {
        //一般公開用データに編集処理
        if (!this.$store.getters.security) {
          if (this.$store.getters.work.data[item].security) { continue }
        }
        arr.push(this.$store.getters.work.data[item])
      }

      //逆順に変更
      arr.sort((a, b) => {
        if(a.sort > b.sort) { return 1 }
        if(a.sort === b.sort) { return 0 }
        if(a.sort < b.sort) { return -1 }
      })

      return arr
    }
  },
  created: () => {
    store.commit('setLoading', true)
    firebase.database().ref('works').once('value')
      .then((snapshot => {
        store.commit('setLoading', false)
        store.commit('setWork', {tg: 'data', val: snapshot.val()})
      }))
  },
  mounted () {
    //スクロール取得
    let onScroll = () => {
      store.commit('setScroll', window.pageYOffset)
    }
    document.addEventListener('scroll', onScroll)
  },
  methods: {
    modalCloase () {
      store.commit('setModal', false)
      setTimeout(() => {
        store.commit('setWork', {tg: 'modal', val: {image: {src: null,alt: null}}})
      },600)
    },
    modalRegist () {
      store.commit('setWork', {tg: 'modal', val: {image: {src: null,alt: null}}})
      store.commit('setModal', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.work{
  &_load{
    text-align: center;
  }
  &_item{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    box-shadow: var(--shadow);
  }
  &_flex{
    &_unit {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      row-gap: 10px;
      column-gap: 10px;

      &_list {

        &.-add{
          background-color: #efefef;
          cursor: pointer;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          transition: box-shadow var(--cubic);
          svg{
            fill: rgba(205,205,205,1);
            transform-origin: center;
            transform: scale(2.4);
            transition: all var(--cubic);
          }
          &:hover{
            svg {
              fill: rgba(var(--safe),1);
              transform: scale(2);
            }
          }

        }
      }
    }
  }
}
</style>
