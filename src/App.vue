<template>
  <div id="app">
    <m-header></m-header>
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header';
import MFooter from './components/m-footer/m-footer';
import Nav from './components/nav/nav';
import Player from './components/player/player';

export default {
  name: 'App',
  components:{
    MHeader,
    MFooter,
    Nav,
    Player
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color:rgba(223, 219, 219,0.7);
  margin: 0;
  padding:0;
}
*{
  padding:0px;
  margin:0px;
}
button.el-carousel__button {
    display: block;
    width: 20px;
    height: 20px;
    background-color: rgb(250, 250, 250);
    border-radius: 50%;
    border: none;
    padding: 0;
    margin: 10px 5px 15px 5px;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
}
@media screen and (max-width: 750px){
  #app{
    background-color:#484e53e0;
    width: 100%;
  }
}

</style>
