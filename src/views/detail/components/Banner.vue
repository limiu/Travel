<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1501/87/9dcb13572c70d3a2aae83b44121db72b.water.jpg_600x330_bcc57356.jpg">
    <div class="banner-info">
      <div class="banner-title">庐山风景名胜区(AAAAA景区)</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe63d;</span>33</div>
    </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGalleryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1509/50/3c542893c71f6715dde1ecccc4a67486.water.jpg_r_800x800_bd853e8a.jpg', 'http://img1.qunarzz.com/sight/p0/1501/66/b022755b6d3283fb1215306628edb00c.water.jpg_r_800x800_d31f7029.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGalleryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom : 55%
    .banner-img
      width : 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      color #fff
      line-height  .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size: .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding: 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgba(0,0,0,0.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
