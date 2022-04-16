<template>
  <div class="canvas">
    <canvas
      id="canvasM"
      class="canvas_mouse"
    />
    <canvas
      id="canvasR"
      class="canvas_row"
    />
  </div>
</template>

<script>
import canvasR from '@/assets/js/canvasRow.js'
import canvasM from '@/assets/js/canvasMouse.js'

export default {
  name: 'Canvas',
  components: {
  },
  props : {
  },
  mounted: () => {
    canvasR()
    canvasM()
  }
}
</script>

<style lang="scss" scoped>
.canvas{
  position: relative;
  &_mouse{
    position: absolute;
    left: 0;
    top: 0;
    mix-blend-mode: hard-light;
  }
  &_row{
    position: absolute;
    left: 0;
    top: 0;
    mix-blend-mode: hard-light;
  }
}
</style>
