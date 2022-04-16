<template>
  <svg
    class="icon_key"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="27.86"
    viewBox="0 0 14 27.86"
  >
    <path d="M12,15.91A7,7,0,0,0,8.5,14V.5A.5.5,0,0,0,8,0H6a.5.5,0,0,0-.5.5V2H4a.51.51,0,0,0-.5.5v3A.51.51,0,0,0,4,6H5.5V7H4a.5.5,0,0,0-.5.5v2A.5.5,0,0,0,4,10H5.5v4A7,7,0,1,0,12,15.91ZM7,25a4,4,0,1,1,4-4A4,4,0,0,1,7,25Z" />
  </svg>
</template>

<script>
export default {
  name: 'Key',
  components: {
  },
  props : {
  }
}
</script>

<style lang="scss" scoped>
svg{
  transform-origin: center;
  transform: rotate(225deg);
}
</style>
