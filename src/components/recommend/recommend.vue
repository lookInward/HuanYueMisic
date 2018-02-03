<template>
  <div>
      <div class="recommend" ref="recommend">
        <!-- 轮播图 -->
        <div class="slider">
           <el-carousel :interval="3000" arrow="always">
            <el-carousel-item v-for="item in recommends" :key="item">
        <a :href="item.linkUrl">
      <img class="needsclick"  :src="item.picUrl">
        </a>
    </el-carousel-item>
  </el-carousel>
        </div>
        <!-- 推荐歌单 -->
        <div class="recommend-list">
          <p class="list-title">推荐歌曲</p>
          <ul>
            <el-row :gutter="10">
            <li @click="selectItem(item)" v-for="item in recommendList" class="item">
              <el-col  :xs="8" :sm="4" :md="4" :lg="4" :xl="4" ><div class="grid-content bg-purple">
                 <div class="icon"> 
                  <img :src="item.imgurl">
                  <div class="text">
                <span class="name" v-html="item.creator.name"></span>
                <p class="desc" v-html="item.dissname"></p>
              </div>
             </div>
                </div>
                </el-col>          
            </li>
            </el-row>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
 import jsonp from "../../common/js/jsonp";
 import{mapMutations} from 'vuex';
 import {ERR_OK,commonParams,url,data,options,commonParamsList,urlList} from '../../api/config.js';
export default {
  data(){
    return {
      recommends:[],
      recommendList:[]
    }
  },
  created(){
    jsonp(url, data, options).then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider;
          }
        });
    this.$axios.get(urlList,{params:commonParamsList})
    .then(res=>{
      if (res.data.code === ERR_OK) {
           this.recommendList=res.data.data.list;
      }
    })
  },
  methods:{
    selectItem(item){
      this.$router.push({
        path:`/recommend/${item.dissid}`
      })
      this.setDisc(item);
    },
    ...mapMutations({
      setDisc:'SET_DISC'
    })
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>

*{
  padding:0px;
  margin:0px;
  list-style: none;
}
button.el-carousel__button{
  height: 30px;
}
 
recommend{
  width:100%; 
  min-width:768px; 
}
.slider{
  margin:0 auto;
  max-width: 720px;
  max-height: 285px;
}
.recommend-list{
  margin:0 auto;
}
 .el-carousel__item{ 
   max-height: 280px;
    img {
    color: #96a7be;
    font-size: 18px;
    opacity: 0.7;
    line-height: 300px;
    margin: 0;
  }
 }
 recommend-list{
   margin: 0 auto;
 }
 recommend{
   margin: 0 auto;
 }
 ul{
   width:80%;
   margin:0 auto;
 }

 ul li .icon{
   height: 200px;
   margin: 0 auto;
   img{
     width: 80%;
     border-radius: 50%;
     cursor: pointer;
     &:hover{
      animation:rot 8s linear infinite;
   }
   } 
 }

span.name{
     color:#6185b6;
     font-family: 'Courier New', Courier, monospace;
     font-size: 15px;
   }
  p.desc{
     color:#778eaf;
     font-family: 'Courier New', Courier, monospace;
     font-size: 8px;
   }
   p.list-title{
     padding:0;
     height:30px;
     font-size: 18px;
   }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
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
  .bg-purple-dark {
    background: #E8E5E5;
  }
  .bg-purple {
    background: #E8E5E5;
  }
  .bg-purple-light {
    background: #E8E5E5;
  }
  .grid-content {
    border-radius: 4px;
    width:100%;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  @keyframes rot {
            0%{

            }
            100%{
                transform:rotateZ(360deg);
            }
        }
</style>


