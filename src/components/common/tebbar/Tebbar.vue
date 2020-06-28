<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>


<script>
  export default {
  name:''
  }
</script>


<style scoped>
#tab-bar{
  background-color: #f6f6f6;
  height: 49px;
  display: flex;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>