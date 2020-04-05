<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
</div>
</template>
<script>
import CityHeader from './compontents/Header'
import CitySearch from './compontents/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped>
</style>
