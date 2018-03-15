<template>
  <div class="padding"> 
    <ul id="ul" class="ul">
      <p>排行榜</p>
 <el-row :gutter="5" class="el-row">
            <li v-for="item in topList" class="item" id="item" :key="item" @click="setTopList(item)">
              <router-link :to="{ name: 'RankDesc', params: { id: item.id}}">
              <el-col class="el-col" :xs="8" :sm="4" :md="4" :lg="4" :xl="4" ><div class="grid-content bg-purple">
                  <img v-lazy="item.picUrl" alt="">
            <ul class="detailNum">
                  <div class="title">{{item.topTitle}}</div>
              <li class="detailNumItem" v-for="(detailNum,index) in item.songList" :key="index">
                <div class="detail">{{index+1}}.{{detailNum.singername}}——{{detailNum.songname}}</div>
              </li>
            </ul>
                </div>
                </el-col>    
                </router-link>      
            </li>
            </el-row>
            </ul>
  </div>
</template>
<script>
 import{mapMutations} from 'vuex';
 import {ERR_OK,commonParams,options} from '../../api/config.js';
 import {url,data} from '../../api/rank.js';
 
export default {
    data(){
    return{
    topList:[]
    }
  },
  created(){
     this.$axios.get(url,{params:data})
    .then(res=>{
      if (res.data.code === ERR_OK) {
        console.log(res);
           this.topList=res.data.data.topList;
      }
    })
  },
  methods:{
    setTopList(item){
      this.setTopList(item);
    },
 ...mapMutations({
   setTopList:'SET_TOP_LIST'
 })
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.ul{
  min-height: 500px;
}
*{
  color:#6185b6;
  margin: 0;
  padding: 0;
  list-style: none;
}
p{
  text-align: center;
  font-size: 18px;
  color:black;
}
ul{
  margin: 0 auto;
  width: 66%;
  font-size: 10px;
  .el-row{
    width: 100%;
  }
  .el-col{
    width: 50%;
    // border:5px solid black;
    background:#fff;
    vertical-align: middle;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 10px;
  }

   img{
     width: 40%;
     cursor: pointer;
     margin-left:-44px;
     display: inline-block;
     border-radius: 10px;
   } 
   .detailNum{
     width: 50%;
     display:inline-block;
     vertical-align: top;
     text-align: left;
     margin-top:18px; 
     div.detail{
      //  width: 20%;
       display:inline;
       text-align: left;
     }
   }
}

.title{
  text-align: center;
}

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #e8e5e5;
  }
   @media screen and (max-width: 880px){
     @import '../../common/less/padding.less';
    #ul{
      margin: 0 auto;
      width: 100%;
      background: #484e53e0;
      
      p{
        display: none;
      }
      .el-row{
        padding-top:5px; 
        padding-left:30px;
        background: #484e53e0;
        .item{ 
        .el-col{ 
        width: 90%;
        background: #111111;
        color:rgb(250, 242, 242);
        div.title{
          color:rgb(214, 147, 147); 
        }
        div{
          color:rgb(214, 147, 147); 
        }
      }
      img{
        margin-left: -10%;
      }
        }
      }
    }
  }
</style>


