<template>
  <div class="nav">
    <a href="#">首页</a>
    <router-link tag="div" class="nav-item" to="/recommend">
      <span class="nav-link">热歌劲曲</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/singer">
      <span class="nav-link">歌手</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/rank">
      <span class="nav-link">音乐排行</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="nav-link">搜索</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="nav-link">小游戏</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="nav-link">开心一刻</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="nav-link">最近天气</span>
    </router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
.nav{
    display:flex;
    background-color:#2C323B;
    padding:0px 20%;
    height:50px;
    line-height: 50px;
    font-size:18px;
    a{
      font-size: 30px;
      color:#fff;
      padding:0 10px;
      background-color: #0C8ED9;
      cursor: pointer;
      text-decoration: none;
    }
    .nav-item{
    flex:1;
    text-align: center;
    color:rgb(214, 147, 147); 
    cursor: pointer;
    &:hover{
      background-color:rgb(65, 94, 7); 
      color:#FFF!important; 
    }
        .nav-link{
          padding-bottom:5px;   
           &:hover{
          color:#FFF; 
    }
        }
    }
}

</style>