<template>
  <article
    class="card"
    @mousemove="modalSet(item)"
  >
    <header class="card_head">
      <div class="card_head_img">
        <img
          :src="item.thumb.src"
          :alt="item.thumb.alt"
        >
      </div>
      <div class="card_head_modal">
        <div class="card_head_modal_head">
          <p class="card_head_modal_head_day">
            {{ item.day }}
          </p>
          <p class="card_head_modal_head_ttl">
            <a
              :href="item.href"
              target="_blank"
            >
              {{ item.title }}
            </a>
          </p>
        </div>
        <div class="card_head_modal_foot">
          <p class="card_head_modal_foot_ttl">
            Category
          </p>
          <button
            v-for="(category, index) in item.category"
            :key="index"
            class="card_head_modal_foot_body"
            @click="filterSet(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </header>
    <aside class="card_foot">
      <button
        type="button"
        class="card_foot_icon -zoom"
        @click="modalOpne(item)"
      >
        <IconZoom />
      </button>
      <a
        :href="item.href"
        target="_blank"
        class="card_foot_icon -link"
      >
        <IconLink />
      </a>
      <button
        v-if="this.$store.getters.account.login"
        type="button"
        class="card_foot_icon -delete"
      >
        <IconDelete />
      </button>
    </aside>
  </article>
</template>

<script>
import store from '@/store'
import IconZoom from '@/components/icon/zoom.vue'
import IconLink from '@/components/icon/link.vue'
import IconDelete from '@/components/icon/delete.vue'

export default {
  name: 'Card',
  components: {
    IconZoom,
    IconLink,
    IconDelete
  },
  props : {
    item: {type: Object, Require: true, default: () => {return}}
  },
  methods: {
    modalSet (item) {
      store.commit('setWork', {tg: 'modal', val: item})
    },
    modalOpne (item) {
      store.commit('setWork', {tg: 'modal', val: item})
      store.commit('setWork', {tg: 'position', val: this.$store.getters.scroll})
      store.commit('setModal', true)
    },
    filterSet (val) {
      store.commit('setFilter', val)
    },
    filterRemove (val) {
      store.commit('removeFilter', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  border: 1px solid #ededed;
  background-color: #fff;

  &_head{
    position: relative;

    &_img{
      background: linear-gradient(to right, #eee 0%, #e9e9e9 50%, #eee 100%);
      animation: imgLoad .4s linear infinite;
      height: 200px;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &_modal{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: rgba(#666, .8);
      opacity: 0;
      padding: 10px;
      color: #fff;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      transform: scale(1);
      transform-origin: center;
      transition: all var(--cubic);

      &:hover{
        transform: scale(.95);
        opacity: 1;
      }

      &_head{
        flex: 0 0 auto;
        &_day{
          font-size: 1.1rem;
          color: #cdcdcd;
        }
        &_ttl{
          font-size: 1.4rem;
        }
      }
      &_foot{
        flex: 0 0 auto;
        display: flex;
        flex-flow: row wrap;
        &_ttl{
          flex: 0 0 100%;
          margin-bottom: 4px;
          color: #cdcdcd;
        }
        &_body{
          flex: 0 0 auto;
          margin-right: 10px;
        }

      }
    }
  }
  &_foot{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    &_icon{
      flex: 1 1 50%;
      max-width: 50%;
      text-align: center;
      cursor: pointer;
      padding: 6px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:not(:last-child){
        border-right: 1px solid #eee;
      }
      svg{
        fill: #333;
        transition: fill var(--cubic-btn)
      }

      &:hover{
        background-color: rgba(var(--safe),1);
        svg{
          fill: #fff;
        }
      }

      &.-zoom{
        svg{
        }
      }
      &.-link{
        svg{
        }
      }
      &.-delete{
        background-color: rgba(var(--error),.5);
        svg{
          fill: #fff;
        }

        &:hover{
          background-color: rgba(var(--error),1);
        }
      }

    }
  }
}
@keyframes imgLoad {
  0% {
    background-position: 0px center;
  }
  100% {
    background-position: 300px center;}
}


@media (max-width: 768px) {
  .card{
    &_head{
      &_modal{
        position: static;
        opacity: 1;
        &:hover{
          transform: scale(1);
        }
        &_head{
          &_day{
            font-size: 1rem;
          }
          &_ttl{
            font-size: 1.1rem;
          }
        }
        &_foot{
          &_ttl{
            margin-bottom: 2px;
            font-size: 1.1rem;
          }
          &_body{
            margin-right: 10px;
            font-size: 1.2rem;
          }

        }
      }
    }
  }
}
</style>
