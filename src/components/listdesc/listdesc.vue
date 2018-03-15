<template>
  <div class="padding">
    <div class="container" id="container">
      <div class="upselect">
        <div class="picture">
          <img :src="logo" alt="">
        </div>
        <div class="info">
          <span class="dissName">{{dissName}}</span>
          <span class="detail" v-html="detail"></span>
        </div>
      </div>
      <div class="downselect">
    <div class="songlist">
          <table>
              <tr class="title">
                  <th>歌曲名</th>
                  <th>歌手</th>
                  <th id="option">播放</th>
              </tr>
              <tr v-for="(song,index) in songs" :key="song" id="active" class="active">
                  <td v-text="song.name" class="songname"></td>
                  <td v-text="song.singer"></td>
                  <td class="bigfont" @click="selectItem(song,index)">▷</td>
              </tr>    
          </table>
      </div>
      </div>
    </div>
  </div>
</template>
 <script>
 import {mapGetters,mapActions} from 'vuex';
 import {getDescList} from '../../api/recommend';
 import {ERR_OK} from '../../api/config';
 import {createSong} from '../../common/js/song';
 export default {
   data(){
     return {
       dissName:'',
       detail:'',
       logo:'',
       songs:[]
     }
   },
   created(){
     this.currentId=this.$route.params.id;
     this._getDescList();
   },
   methods:{
     _getDescList(){
       getDescList(this.$route.params.id).then(res=>{
         if(res.code===ERR_OK){
           this.detail=res.cdlist[0].desc;
           this.dissName=res.cdlist[0].dissname;
           this.logo=res.cdlist[0].logo;
           this.songs=this._normalizeSong(res.cdlist[0].songlist);
         }         
       })
     },
     _normalizeSong(list){
       let ret=[];
       list.forEach((musicData)=>{
         if(musicData.songid&&musicData.albumid){
           ret.push(createSong(musicData));
         }
       })
       return ret;
     },
      selectItem(item,index){
         this.selectPlay({
             list:this.songs,
             index
         })
     },
     ...mapActions([
         'selectPlay'
     ])
   },
   computed:{
     ...mapGetters([
       'desc'
     ])
   },
   watch:{
     '$route'(to, from) {
     this._getDescList();
    }
   }
 }
 </script>
 <style scoped lang="less" rel="stylesheet/less">
 .container{
   width: 70%;
   min-height: 500px;
  background-color:rgba(255,255,200,.5);
  margin: 10px auto;
   .upselect{
     height: 200px;
     margin: 0 auto;
     width: 100%;
     color:#888;
     border:22px solid rgba(255,255,200,0);
     .picture{
       float: left;
       width: 27%;
       img{
         width: 100%;
       }
     }
     .info{
       float: right;
       width: 55%;
       padding:15px 70px 30px 10px;
       span{
         display: block;
         margin-bottom: 10px;
       }
       .dissName{
         width: 100%;
        text-align: center;
         font-size:26px;
       }
       .detail{
         width: 100%;
         font-size:18px;
         max-height: 200px;
         overflow-y: scroll;
       }
     }
     &::after{
       clear: both;
     }
   }
   .downselect{
     width: 100%;
     text-align: center;
     .songlist{
       table{
       font-size:16px;
       width: 100%;
       border-collapse: collapse;
       color:#336;
       text-shadow:0 0 10px #fff;
       tr{
         border-bottom:1px solid rgba(255,255,255,1);
         padding:10px;
         text-shadow:0 0 10px #fff;
         &:hover{
           background-color:rgba(255,255,255,0.8);
         }
         .bigfont{
           cursor: pointer;
           width: 10%;
           text-align: center;
         }
       }

     }
     }
    
   }
 }
 @media screen and (max-width: 750px) {
  @import '../../common/less/padding.less';
  #container{
    padding: 0;
    margin: 0;
    width:100%;
    min-height: 300px;
    height: 100%;
    background:#484e53e0;
    .upselect{
     height: 47px;
     margin: 0 auto;
     width: 100%;
     color:#888;
     border:0;
     .picture{
       float: left;
       width: 26%;
       padding: 0;
       margin: 0;
       img{
         vertical-align: middle;
         width: 100%;
       }
     }
     .info{
       float: left;
       width: 60%;
       padding:5px 5px 0px 20px;
       span{
         display: block;
         margin-bottom: 5px;
       }
       .dissName{
         width: 100%;
        text-align: center;
         font-size:13px;
       }
       .detail{
         width: 100%;
         font-size:12px;
         max-height: 55px;
         overflow-y: scroll;
         margin: 0;
       }
     }
     &::after{
       clear: both;
     }
   }
   .downselect{
     width: 100%;
     text-align: center;
     padding:0;
     .songlist{
       table {
      color: rgb(214, 147, 147);
      background-color: rgba(54, 56, 59, 0.5);
      text-shadow: none;
      width: 99%;
      border-collapse: collapse;
    }
    .title {
      font-size: 13px;
      font-weight: normal;
      height: 15px;
      margin: 0;
      text-shadow: none;
      border-bottom: 1px solid #666;
      #option{
        padding-right:10px;
        text-align: left;
      }
      td {
        margin: 0;
      }
    }
    #active {
      height: 20px;
      margin: 0;
      color: rgb(214, 147, 147);
      line-height: 20px;
      text-shadow: none;
      font-size: 15px;
      overflow: hidden;
      border-bottom: 1px solid #666;
      &:hover{
        background-color: rgba(54, 56, 59, 0.5);
      }
      td {
        max-width: 76px;
        max-height: 12px;
        font-size: 12px;
        margin: 0;
        overflow: hidden;
        text-shadow: none;
        word-break: keep-all;
      }
      .songname {
        padding-left: 6px;
        text-shadow: none;
        overflow: hidden;
        margin: 0;
      }
      .bigfont {
        padding-right: 18px;
        font-size: 15px;
        // margin-right: 8px;
        text-shadow: none;
      }
    }
  }
     }
    
   }
  
 }
 </style>
 
 
