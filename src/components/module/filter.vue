<template>
  <transition-group
    tag="ul"
    name="fade"
    class="filter"
  >
    <li
      v-if="this.$store.getters.filter"
      key="all"
      class="filter_list"
    >
      <button
        class="filter_list_btn -reset"
        @click="filterAllRemove"
      >
        ☓ AllReset
      </button>
    </li>
    <li
      v-for="item in this.$store.getters.filter"
      :key="item"
      class="filter_list"
    >
      <button
        class="filter_list_btn"
        @click="filterRemove(item)"
      >
        ☓ {{ item }}
      </button>
    </li>
  </transition-group>
</template>

<script>
import store from '@/store'

export default {
  name: 'Filt',
  components: {
  },
  props : {
  },
  methods: {
    filterRemove (val) {
      store.commit('removeFilter', val)
    },
    filterAllRemove () {
      store.commit('removeAllFilter')
    }
  }
}
</script>

<style lang="scss" scoped>
.filter{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 -5px -10px;
  &_list{
    margin: 0 5px 10px;

    &_btn{
      display: block;
      background: rgba(var(--safe),1);
      border-radius: 50px;
      padding: 5px 10px;
      color: #fff;
      &.-reset{
        background: rgba(var(--att),1);
      }
    }
  }
}
</style>
