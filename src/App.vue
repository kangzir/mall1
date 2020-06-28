<template>
  <div id="app">
    <mianteb></mianteb>
    <router-view></router-view>
  </div>
</template>

<script>

import Mianteb from './components/content/mianTabbar/MianTab'

export default {
  name: 'App',
  components: {
    Mianteb,
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
