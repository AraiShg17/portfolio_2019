<template>
  <ul class="flex">
    <li
      v-for="(item, index) in val"
      :key="index"
      class="flex_list"
      :class="col"
    >
      <slot>{{ item }}</slot>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Flex',
  components: {
  },
  props : {
    col: {type: String, Require: false, default: ''},
    val: {type: Array, Require: true, default: () => {return}}
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .flex{
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    margin: 0 -5px;

    &_list{
      flex: 1 1 100%;
      max-width: 100%;
      padding: 0 5px;

      @for $i from 1 through 10 {
        &.-col#{$i} {
          flex: 1 1 (100% / $i);
          max-width: (100% / $i);
        }
      }

      &.-nogrow{
        flex: 0 0 auto;
      }
    }
  }
</style>
