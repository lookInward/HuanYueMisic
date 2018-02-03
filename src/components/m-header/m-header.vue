<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="text">欢乐网</div>
    <from>  
    <input type="text" name="search" class="search" placeholder="请输入歌名曲或者歌手名">
    <input type="submit" value="搜索" class="submit">
    </from>
    <router-link tag="div" class="mine">
      <div class="icon-mine"></div>
    </router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
*{
  padding: 0px;
  margin: 0px;
}
input::-webkit-input-placeholder{
  font-size:8px;
  color:rgb(204, 201, 201);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.m-header{
    height:44px;
    text-align: center;
    padding: 10px 10px;
    font-size:0px;
    background: rgb(73, 71, 71);
    .search{
      width: 150px;
      height: 30px;
      vertical-align: top;
      border-radius: 20px;
      margin:5px 1px 0px 35px;
      border:1px solid rgb(73, 71, 71);
      padding-left:8px;
      outline:none;
    }
    .submit{
      height: 30px;
      width: 60px;
      color:#fff;
      font-size:18px;
      background-color:rgb(182, 20, 20);
      vertical-align: top;
      border-radius: 20px;
      border:0px;
      font-family: cursive;
      font-weight: bold;
      margin:7px 20px;
      outline:none;
      cursor: pointer;
    }
.icon{
    display:inline-block;
    
    width: 44px;
    height: 44px;
    margin-right: 9px;
    background: url(./header-icon.png) no-repeat;
    background-size: contain;
    text-align: center;
}
.text{
  display:inline-block;
  line-height: 44px;
  font-size:35px;
  color:rgb(250, 248, 245);
  font-family: cursive;
  vertical-align: top;
}
}
</style>