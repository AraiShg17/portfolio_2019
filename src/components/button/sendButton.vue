<template>
  <button
    class="sendButton"
  >
    <slot>button</slot>
  </button>
</template>

<script>

export default {
  name: 'SendButton',
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
  .sendButton {
    background-color: rgba(var(--safe),1);
    color: #fff;
    display: block;
    padding: 5px;
    width: 100%;
    transition: all var(--cubic-btn);

    &:hover{
    }
  }
</style>
