<template>
<div>
  <div class="nav" ref="nav" :class="{searchBarFixed:isOK}">
    <a href="#" class="hidden">首页</a>
    <router-link tag="div" class="nav-item" to="/recommend">
      <span class="nav-link">推荐</span>
    </router-link>
    <router-link tag="div" class="nav-item hidden" to="/singer">
      <span class="nav-link">歌手</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/rank">
      <span class="nav-link">排行榜</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="nav-link">搜索</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/favor">
      <span class="nav-link">收藏</span>
    </router-link>
    <router-link tag="div" class="nav-item hidden" to="/game">
      <span class="nav-link">小游戏</span>
    </router-link>
    <router-link tag="div" class="nav-item hidden" to="/smile">
      <span class="nav-link">笑话</span>
    </router-link>
    <router-link tag="div" class="nav-item hidden" to="/weather">
      <span class="nav-link">天气</span>
    </router-link>
  </div>
    <div class="clear"></div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        isOK:false
      }
    },
    created(){

    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll);
       
    },
    methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 60) {
               this.isOK = true;
          } else {
               this.isOK = false;
          }
      }
    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.nav{
    display:flex;
    background-color:#2C323B;
    padding:0px 20%;
    height:50px;
    line-height: 50px;
    font-size:18px;
    z-index: 99;
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
.searchBarFixed{
  position: fixed;
  top:0;
  left:0;
  right: 0;
}
.clear{
  clear:both;
}
@media screen and (max-width: 750px) {
    .hidden{
        display:none;
    }
    .nav{
    display:flex;
    background-color:#2C323B;
    padding:0px 20%;
    height:30px;
    line-height: 30px;
    font-size:12px;
     position: fixed;
  top:39px;
  left:0;
  right: 0;
  &::after{
    clear: both;
  }
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
}

</style>