<template>
  <div class="padding">
    <div class="container" id="container">
      <div class="upselect">
        <div class="picture">
          <img :src="songs[3].image" alt="">
        </div>
        <div class="info">
          <span class="dissName">我体内的魔鬼没有死去</span>
          <span class="detail" >我体内的魔鬼没有死去，
他活着，活得很好。
在肉体中仿佛在监禁中，
在自我中好似身处单人牢房，
世界不过是在高墙之内。
出口由刀斧组成。
("整个世界就是个舞台，"
演员夸夸其谈。)
那个蹒跚的小丑
不是个爱开玩笑的人：
在肉体中仿佛享有荣耀，
在肉体中好似身穿官制袍服。
愿你活到永恒！
珍惜你的寿命。
唯独骨子里的人，
如同生活在谎言中。
我们配得上更好的事物。
我们枯萎在温情中。
</span>
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
              <tr v-for="(song,index) in songs" class="active" id="active" :key="index">
                  <td class="songname">{{song.name}}</td>
                  <td >{{song.singer}}</td>
                  <td class="bigfont" @click="selectItem(song,index)">▷</td>
              </tr>    
          </table>
      </div>
      </div>
    </div>
  </div>
</template>
 <script>
import { mapGetters, mapActions } from "vuex";
import { ERR_OK } from "../../api/config";
import { createSong } from "../../common/js/song";
import { getRankList } from "../../api/rank";

export default {
  data() {
    return {
      songs: [],
      so: []
    };
  },
  created() {
    this._getRankList();
  },
  methods: {
    _getRankList() {
      getRankList(this.topList.id).then(res => {
        this.so = res;
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.songlist);
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        const musicData = item.data;
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    },
     selectItem(item, index) {
      this.selectPlay({
        list: this.songs,
        index
      });
    },
    ...mapActions(["selectPlay"])
  },
  computed: {
    ...mapGetters(["topList"])
  },
  watch:{
      '$route'(to,from){
          this._getRankList();
      }
  }
};
</script>
 <style scoped lang="less" rel="stylesheet/less">
.container {
  width: 70%;
  min-height: 500px;
  background-color: rgba(255, 255, 200, 0.5);
  margin: 10px auto;
  .upselect {
    height: 200px;
    margin: 0 auto;
    width: 100%;
    color: #888;
    border: 22px solid rgba(255, 255, 200, 0);
    .picture {
      float: left;
      width: 27%;
      img {
        width: 100%;
      }
    }
    .info {
      float: right;
      width: 55%;
      padding: 15px 70px 30px 10px;
      span {
        display: block;
        margin-bottom: 10px;
      }
      .dissName {
        width: 100%;
        text-align: center;
        font-size: 26px;
      }
      .detail {
        width: 100%;
        font-size: 18px;
        max-height: 200px;
        overflow-y: scroll;
      }
    }
    &::after {
      clear: both;
    }
  }
  .downselect {
    width: 100%;
    text-align: center;
    .songlist {
      table {
        font-size: 16px;
        width: 100%;
        border-collapse: collapse;
        color: #336;
        text-shadow: 0 0 10px #fff;
        tr {
          border-bottom: 1px solid rgba(255, 255, 255, 1);
          padding: 10px;
          text-shadow: 0 0 10px #fff;
          &:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }
          .bigfont {
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
    min-height: 300px;
    width:100%;
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
 
 
