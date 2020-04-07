<template>
<div class="list" ref="wrapper">
  <div>
  <div class="area">
    <div class="title" border-topbottom>当前城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">{{this.currentCity}}</div>
        </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
        <div class="button">{{item.name}}</div>
      </div>
    </div>
  </div>
  <div
  class="area"
  v-for="(item, key) of cities"
  :key="key"
  :ref="key"
  >
    <div class="title zone-title" >{{key}}</div>
    <div class="item-list">
      <div
        class="item border-bottom"
        v-for="innerItem of item"
        :key ="innerItem.id"
        @click="handleCityClick(innerItem.name)"
        >
        {{innerItem.name}}
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.ChangeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['ChangeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import  '~@/assets/styles/varibles.styl'
  .border-bottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .list
    overflow hidden
    position absolute
    bottom 0
    top 1.9rem
    left 0
    right 0
    .title
      line-height .54rem
      font-size .25rem
      font-weight 700
      margin-left .08rem
    .zone-title
      background #eee
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          text-align center
          border .02rem solid #ccc
          padding .1rem 0
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .5rem
</style>
