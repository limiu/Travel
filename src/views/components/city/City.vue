<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
  <city-alphabet></city-alphabet>
</div>
</template>
<script>
import CityHeader from './compontents/Header'
import CitySearch from './compontents/Search'
import CityList from './compontents/List'
import CityAlphabet from './compontents/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>
<style lang="stylus" scoped>
</style>
