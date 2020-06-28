<template>
  <div class="teb-bar-item" @click="tabClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
  name:'',
  props:{
    path:String
  },
  data(){
    return{
      // isActive:false
    }
  },
  methods: {
    tabClick(){
        this.$router.replace(this.path)
        console.log(this.path)
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
        console.log(this.path);
    }
  },
  }
</script>

<style scoped>
.teb-bar-item{
  flex-grow: 3;
  text-align: center;
  margin-top: 2px;
  font-size: 15px;
  /* flex: 1; */
}
.teb-bar-item img{
  width: 24px;
  vertical-align: bottom;
}
.active{
  color: rgb(255, 0, 76);
}
</style>