<template>
  <dl class="profile">
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        Name
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <span v-if="!this.$store.getters.account.login">{{ this.$store.getters.profile.me.name }}</span>
        <span v-else>
          <FormInput
            set="setProfile"
            tg="name"
            type="text"
            :value="this.$store.getters.profile.me.name"
            placeholder="姓名"
          />
        </span>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        Age
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <span v-if="!this.$store.getters.account.login">{{ this.$store.getters.profile.me.age }}</span>
        <span v-else>
          <FormInput
            set="setProfile"
            tg="age"
            type="text"
            :value="this.$store.getters.profile.me.age"
            placeholder="年齢"
          />
        </span>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        Sex
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <span v-if="!this.$store.getters.account.login">{{ this.$store.getters.profile.me.sex }}</span>
        <span v-else>
          <FormInput
            set="setProfile"
            tg="sex"
            type="text"
            :value="this.$store.getters.profile.me.sex"
            placeholder="性別"
          />
        </span>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        Live
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <span v-if="!this.$store.getters.account.login">{{ this.$store.getters.profile.me.live }}</span>
        <span v-else>
          <FormInput
            set="setProfile"
            tg="live"
            type="text"
            :value="this.$store.getters.profile.me.live"
            placeholder="住所"
          />
        </span>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        History
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <div v-if="!this.$store.getters.account.login">
          <p
            v-for="(item, index) in this.$store.getters.profile.me.history"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
        <div v-else>
          <FormInput
            set="setProfile"
            tg="history"
            type="text"
            :value="this.$store.getters.profile.me.history.join('、')"
            placeholder="経歴"
          />
          <p>※経歴は『、』でつないでください。</p>
        </div>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        Skill
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <div v-if="!this.$store.getters.account.login">
          <span
            v-for="(item, index) in this.$store.getters.profile.me.skill"
            :key="index"
            class="profile_wrap_body_split"
          >
            {{ item }}
          </span>
        </div>
        <div v-else>
          <FormInput
            set="setProfile"
            tg="skill"
            type="text"
            :value="this.$store.getters.profile.me.skill.join('、')"
            placeholder="スキル"
          />
          <p>※スキルは『、』でつないでください。</p>
        </div>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        GitHub
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <a
          v-if="!this.$store.getters.account.login"
          :href="this.$store.getters.profile.me.git"
          target="_blank"
        >
          {{ this.$store.getters.profile.me.git }}
        </a>
        <span v-else>
          <FormInput
            set="setProfile"
            tg="git"
            type="text"
            :value="this.$store.getters.profile.me.git"
            placeholder="GitHub"
          />
        </span>
      </dd>
    </div>
    <div class="profile_wrap">
      <dt class="profile_wrap_ttl">
        Qiita
      </dt>
      <dd
        :class="this.$store.getters.profile.me.name ? '' : 'is-load'"
        class="profile_wrap_body"
      >
        <a
          v-if="!this.$store.getters.account.login"
          :href="this.$store.getters.profile.me.qiita"
          target="_blank"
        >
          {{ this.$store.getters.profile.me.qiita }}
        </a>
        <span v-else>
          <FormInput
            set="setProfile"
            tg="qiita"
            type="text"
            :value="this.$store.getters.profile.me.qiita"
            placeholder="Git"
          />
        </span>
      </dd>
    </div>
  </dl>
</template>

<script>
import FormInput from '@/components/form/input.vue'

export default {
  name: 'Profile',
  components: {
    FormInput
  },
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.profile {
  border-top: 1px solid #ddd;
  &_wrap {
    display: flex;
    flex-flow: row nowrap;
    font-size: 1.4rem;
    padding: 5px 12px;
    border-bottom: 1px solid #ddd;
    &_ttl {
      flex: 0 0 80px;
      position: relative;
      padding-right: 10px;
      &::after{
        content: ':';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 5px;
        margin: auto;
      }
    }
    &_body {
      flex: 1 1 auto;
      &.is-load{
        background: linear-gradient(to right, #dfdfdf 0%, #eee 50%, #dfdfdf 100%);
        animation: txtLoad .6s linear infinite;
      }

      a{
        color: #666;
        &:hover{
          color: rgba(var(--safe),1);
        }
      }
      &_split:not(:last-of-type){
        &::after{
          content: '、';
          margin-left: -4px;
        }
      }
    }
  }
}
@keyframes txtLoad {
  0% {
    background-position: 0px center;
  }
  100% {
    background-position: 900px center;}
}
</style>
