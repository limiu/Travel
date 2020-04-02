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
        title: '上饶-庐山 3天跟团游',
        desc: '醉美乡村世遗游+高档酒店+自由活动一天！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '上饶-庐山 3天跟团游',
        desc: '醉美乡村世遗游+高档酒店+自由活动一天！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '上饶-庐山 3天跟团游',
        desc: '醉美乡村世遗游+高档酒店+自由活动一天！'
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
        color: #ccc
</style>
