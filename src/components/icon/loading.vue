<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 21 21"
  >
    <path d="M10.5,21a10.5,10.5,0,0,1,0-21,1.5,1.5,0,0,1,0,3A7.5,7.5,0,1,0,18,10.5a1.5,1.5,0,0,1,3,0A10.51,10.51,0,0,1,10.5,21Z" />
  </svg>
</template>

<script>
export default {
  name: 'Loading',
  components: {
  },
  props : {
  }
}
</script>

<style lang="scss" scoped>
svg{
  opacity: .6;
  animation: load .5s linear infinite;
  fill: #fff;
  &.-gray{
    fill: #666;
  }
}
@keyframes load {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>
