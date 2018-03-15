<template>
      <div class="singer-detail">
        <img :src="desc.imgurl" alt="">
          <table :style="bgStyle">
              <tr class="title">
                  <th>歌曲名</th>
                  <th>歌手</th>
                  <th>操作</th>
              </tr>
              <tr v-for="(song,index) in songs" class="active">
                  <td v-text="song.name"></td>
                  <td v-text="song.singer"></td>
                  <td class="bigfont" @click="selectItem(song,index)">▷</td>
              </tr>    
          </table>
      </div>
</template>
<script>
import {getSongList} from '../../api/recommend';
import {ERR_OK} from '../../api/config';
import {mapGetters} from 'vuex';
export default {
  data(){
      return {
        songs:[]
      }
  },
  computed:{
    title(){
      return this.desc.dissname;
    },
    bgImage(){
      return this.desc.imgurl;
    },
     ...mapGetters([
    'desc'
  ])
  },
  created(){
    this._getSongList()
  },
  methods:{
    _getSongList(){
      getSongList(this.desc.dissid).then((res)=>{
        if(res.code===ERR_OK){
          console.log(res.cdlist[0].songlist);
        }
      })
    }
    
  }
 
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.singer-detail{
    width:60%;
    padding: 0;
    margin: 0;
    margin:0 auto; 
    table{
        width: 100%;
        text-align: center;
        border:0px;
        border-collapse: collapse;
        background-color:#fff; 
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    .title{
            border-bottom:1px solid #ccc;
            height: 36px;
        }
    .active{
        border-bottom:1px solid #ccc;
        color:#566;
        font-size: 15px;
        vertical-align: middle;
        &:hover{
            background: #eee;
            cursor: pointer;
        }
        .bigfont{
            font-size:30px;
        }
    }   
    }
}
</style>



