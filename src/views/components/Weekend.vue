<template>
    <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img  class="item-img" :src="item.imgUrl">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '美丽普陀山',
        desc: '人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_600x330_f8f2f38a.jpg',
        title: '千岛湖',
        desc: '世界上岛屿最多的湖'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/201405/29/0290f90b03596cdef35d73e753e635ee.jpg_600x330_36f804a2.jpg',
        title: '京杭大运河',
        desc: '里程最长的古运河'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import  '~@/assets/styles/mixins.styl'
    .title
      margin-top : .2rem
      line-height: .8rem
      background: #eee
      text-indent: .2rem
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom:33.9%
      .item-img
        width:100%
    .item-info
      padding: .1rem
      .item-title
        ellipsis()
        line-height: .54rem
        font-size: .32rem
      .item-desc
        ellipsis()
        line-height: .4rem
        color: #616161
</style>
