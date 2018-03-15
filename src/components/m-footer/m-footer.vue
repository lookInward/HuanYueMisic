<template>
  <div>
      <div class="footer" id="footer">
          <div class="list">
              <a>关于欢乐网</a>
              <span>|</span>
              <a>免责声明</a>
              <span>|</span>
              <a>服务中心</a>
              <span>|</span>
              <a>本站作者</a>
          </div>
          <div class="line"></div>
          <div class="note">
              <p>特别鸣谢：QQ音乐</p>
          <p>本站仅用于学习，如有侵权，请联系1521274537@qq.com</p>
          <p>Created By Liuhongrui on 2018/2/3</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.footer{
    width: 100%;
    height: 188px;
    padding-top:10px;
    background-color:#2c323b;
    color:rgb(214, 147, 147);
    font-size: 12px;
  .list {
      
      a{
          cursor: pointer;
          margin:10px 5px 10px 5px;
      }}
      .line{
          width: 100%;
          height: 0px;
          margin-top:10px; 
          border-bottom:1px solid rgb(97, 66, 66);     
    }
    .note{
        margin-top:49px;
        p{
            margin: 5px;
        }
    }
}

@media screen and (max-width: 725px){
 #footer{
    display: block;
    width: 100%;
    height: 62px;
    padding-top:0px;
    background-color:#2c323b;
    color:rgb(214, 147, 147);
    font-size: 12px;
  .list {
      
      a{
          cursor: pointer;
          margin:2px 2px 2px 2px;
      }}
      .line{
          width: 100%;
          height: 0px;
          margin-top:2px; 
          border-bottom:1px solid rgb(97, 66, 66);     
    }
    .note{
        display: none;
        margin-top:49px;
        p{
            margin: 5px;
        }
    }
}
}
</style>



