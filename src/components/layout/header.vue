<template>
  <header
    class="header"
    :class="$route.path === '/' ? '' : '-low'"
  >
    <div class="header_bg">
      <Canvas />
    </div>
    <div class="header_wrap">
      <router-link
        tag="h1"
        to="/"
        class="header_logo"
      >
        Portfolio
      </router-link>
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from '@/components/layout/nav.vue'
import Canvas from '@/components/module/canvas.vue'

export default {
  name: 'Header',
  components: {
    Nav,
    Canvas
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background:
      linear-gradient(45deg, rgba(255,255,255,.2) 0%, rgba(255,255,255,0) 20%, rgba(2550,255,255,.2) 86%,rgba(255,255,255,.2) 100%),
      linear-gradient(125deg, rgba(#0cff95,1) 0%, #730cff 100%);
    width: 100vw;
    height: 100vh;
    color: #fff;
    position: fixed;
    z-index: 10000;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 150px;
    transition: height var(--cubic-late);

    &_bg{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      overflow: hidden;
      display: flex;
      flex-flow: row nowrap;
    }
    &_wrap{
      flex: 0 0 auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    &_logo{
      font-size: 4rem;
      margin-bottom: 40px;
      transition: font-size var(--cubic-late), margin-bottom var(--cubic-late);
      letter-spacing: .3em;
    }

    &.-low{
      height: 80px;
      padding-bottom: 10px;

      .header{
        &_wrap{
        }
        &_logo{
          margin-bottom: 10px;
          font-size: 2rem;
        }
      }
    }
  }
</style>
