<template>
  <nav class="nav">
    <ul class="nav_unit">
      <li
        v-for="(item, index) in nav"
        :key="index"
        class="nav_list"
      >
        <GhostButton
          tag="button"
          :to="item[0]"
        >
          {{ item[1] }}
        </GhostButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import GhostButton from '@/components/button/ghostButton.vue'

export default {
  name: 'Nav',
  components: {
    GhostButton
  },
  data () {
    return {
      nav: {
        work: ['/work', 'WORK'],
        profile: ['/about', 'ABOUT']
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .nav {
    &_unit{
      display: flex;
      flex-flow: row nowrap;
    }
    &_list{
      margin: 0 10px;
    }
  }
</style>
