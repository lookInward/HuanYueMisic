<template>
  <div class="slider">
    <div class="slider-group">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <!-- <span class="dot"  v-for="(item, index) in dots"></span> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'slider',
    props:{

    },
    data(){
      return {
        dots:[],
        currentPageIndex:0
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  
</style>