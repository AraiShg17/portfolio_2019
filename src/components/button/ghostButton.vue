<template>
  <router-link
    :tag="tag"
    :to="to"
    class="ghostButton"
  >
    <slot>button</slot>
  </router-link>
</template>

<script>

export default {
  name: 'GhostButton',
  components: {
  },
  props: {
    to: {type: String, required: false, default: ''},
    tag: {type: String, required: false, default: ''}
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
  .ghostButton {
    color: rgba(#fff, .7);
    cursor: pointer;
    transition: all var(--cubic-btn);

    &:hover{
      color: rgba(#fff, 1);
    }
  }
</style>
