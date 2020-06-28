<template>
  <teb-bar>
    <teb-bar-item path="/hoem">
      <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </teb-bar-item>
    <teb-bar-item path="/category">
      <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </teb-bar-item>
    <teb-bar-item path="/shopcart">
      <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </teb-bar-item>
    <teb-bar-item path="/profile">
      <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </teb-bar-item>
  </teb-bar>
</template>


<script>
import TebBar from '../../common/tebbar/Tebbar'
import TebBarItem from '../../common/tebbar/TebBarItem'
  export default {
  name:'',
  methods: {
   
  },
  components:{
    TebBar,
    TebBarItem
  }
  }
</script>


<style scoped>

</style>