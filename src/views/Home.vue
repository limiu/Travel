<template>
  <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Heade'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
</style>
