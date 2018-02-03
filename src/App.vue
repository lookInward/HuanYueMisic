<template>
  <div id="app">
    <m-header></m-header>
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header';
import MFooter from './components/m-footer/m-footer';
import Nav from './components/nav/nav';
export default {
  name: 'App',
  components:{
    MHeader,
    MFooter,
    Nav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color:rgba(223, 219, 219,0.7);
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
</style>
