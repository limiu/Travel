<template>
    <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img  class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/0db7e616-7a0a-4ef6-9e62-7b269c4cd6a1.jpg_r_480x320x95_54053dea.jpg',
        title: '上饶-庐山 3天跟团游',
        desc: '醉美乡村世遗游+高档酒店+自由活动一天！'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/0db7e616-7a0a-4ef6-9e62-7b269c4cd6a1.jpg_r_480x320x95_54053dea.jpg',
        title: '上饶-庐山 3天跟团游',
        desc: '醉美乡村世遗游+高档酒店+自由活动一天！'
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/0db7e616-7a0a-4ef6-9e62-7b269c4cd6a1.jpg_r_480x320x95_54053dea.jpg',
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
    .item
      display:flex
      height: 1.9rem
      overflow: hidden
      .item-img
        width:1.7rem
        height:1.7rem
        padding: .1rem
      .item-info
        min-width:0
        flex:1
        padding: .1rem
        .item-title
          ellipsis()
          line-height: .54rem
          font-size: .32rem
        .item-desc
          ellipsis()
          line-height: .4rem
          color: #ccc
        .item-button
          line-height: .44rem
          margin-top: .16rem
          margin-left: 3.6rem
          background #00bcd4
          padding:0 .2rem
          border-radius: .06rem
          color:white
</style>
