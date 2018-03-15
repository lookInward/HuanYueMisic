<template>
  <div class="m-header">
    <div class="fixed">
    <div class="list"><span @click="showFlag=!showFlag" class="iconfont icon-liebiao"></span></div>
    <div class="center">
    <div class="icon"></div>
    <div class="text">酷猫音乐</div>
    </div>
    <div class="mine">
      <span class="register" ref="log" @click="login">登录</span>
    </div>
    <transition name="user">
      <user ref="user" v-if="showFlag" @ievent="parentListen" :showFlag="showFlag"></user>
    </transition> 
  </div>
  </div>
</template>

<script>
import User from "../user/user";
export default {
  data() {
    return {
      showFlag: false,
      evtValue:''
    };
  },
  components: {
    User
  },
  methods: {
    login() {
      this.showFlag=!this.showFlag;
    },
    parentListen(evtValue){
      this.evtValue=evtValue;
      this.$refs.log.innerText=this.evtValue;
    }
  }
};
</script>

<style scoped lang="less" rel="stylesheet/less">
* {
  padding: 0px;
  margin: 0px;
}

.mine {
  position: absolute;
  display: inline-block;
  width: 20%;
  line-height: 44px;
  font-size: 11px;
  padding-top:8px;
  vertical-align: bottom;
  span {
    color: #fff;
  }
  span,
  i {
    float: right;
    margin: 2px;
  }
  span {
    cursor: pointer;
  }
}
.m-header {
  height: 44px;
  text-align: center;
  padding: 10px 10px;
  font-size: 0px;
  background: rgb(73, 71, 71);
  .list {
    display: none;
    float: left;
    width: 20%;
    vertical-align: middle;
    position: absolute;
    color: #fff;
    left: 2%;
    a {
      color: #fff;
      text-decoration: none;
      &:active {
        color: #fff;
      }
    }
    .iconfont {
      font-size: 25px;
    }
  }
  .center {
    display: inline-block;
    width: 35%;
    .icon {
      display: inline-block;
      width: 44px;
      height: 44px;
      margin-right: 9px;
      background: url(./header-icon.png) no-repeat;
      background-size: contain;
      text-align: center;
    }
    .text {
      display: inline-block;
      line-height: 44px;
      font-size: 35px;
      color: rgb(250, 248, 245);

      font-family: cursive;
      vertical-align: top;
    }
  }
}

@media screen and (max-width: 750px) {
  .m-header {
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
    height: 20px;
    text-align: center;
    padding: 10px 10px;
    font-size: 0px;
    background: rgb(73, 71, 71);
    &::after{
      clear: both;
    }
    .list {
      display: inline-block;
    }
    .center {
      width: 80%;
      .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
      }
      .text {
        font-size: 20px;
        margin-top: -10px;
      }
    }

    .mine {
      display: none;
    }
  }
  .user-enter-active,
  .user-leave-active {
    transition: all 0.3s linear;
  }
  .user-enter,
  .user-leave-active {
    transform: translateX(-38%);
  }
}
</style>