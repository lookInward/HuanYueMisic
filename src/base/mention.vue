<template>
  <div class="no-wrapper">
      <div class="no-bg">
          对不起，没有更多内容为您展示！
      </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.no-wrapper{
    // position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100px;
    text-align: center;
    top:30%;
}
@media screen and (max-width: 750px) {
    .no-wrapper{
        font-size: 16px;
        color:#aaa;
    }
}

</style>

