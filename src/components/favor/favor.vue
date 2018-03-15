<template>
  <div class="bg-cover" id="bg-cover">
    <div class="bg-mask">
      <div class="area">
      <div class="container padding">
<table class="tableData" id="tableData"> 
              <tr class="title">
                  <td class="songname">歌曲名</td>
                  <td>歌手</td>
                  <td class="hidden">专辑</td>
                  <td class="optionTitle">播放</td>
                  <td class="defavor">取消</td>
              </tr>
              <tr v-for="item in favoriteList" class="iconfont contain list">
                  <td class="songname">{{item.name}}</td>
                  <td>{{item.singer}}</td>
                  <td class="hidden">{{item.album}}</td>
                  <td><span class="bofang" @click="selectSong(item)">▷</span></td>
                  <td><span class="icon-xiai defavor" @click.stop="toggleFavorite(item)"></span></td>
              </tr>  
          </table>
          <table class="tableOption">    
          </table> 
          </div>
          <div class="mention" v-show="mention">
          <mention></mention>
          </div>
          </div>
    </div>  
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Song from "../../common/js/song";
import Mention from "../../base/mention";
import { playerMixin } from "../../common/js/mixin";
export default {
  mixins: [playerMixin],
  data() {
    return {
      currentIndex: 0,
      song: {}
    };
  },
  created() {
    // renderAll()
  },
  computed: {
    mention() {
      return !this.favoriteList.length;
    },
    ...mapGetters(["favoriteList"])
  },
  methods: {
    selectSong(song) {
      this.insertSong(new Song(song));
    },
    ...mapActions(["insertSong"])
  },
  components: {
    Mention
  }
};
</script>
<style scoped lang="less" rel="stylesheet/less">
.bg-cover {
  background: url("../../common/image/bg.jpg") no-repeat;
  background-size: cover;
  .bg-mask {
    width: 100%;
    height: 100%;
    // opacity: 0.2;
    background-color: rgba(226, 218, 218, 0.6);
    .area {
      margin: 0 auto;
      width: 66%;
      text-align: center;
      min-height: 620px;
      .tableData {
        width: 100%;
        color:#555;
        border-collapse: collapse;
        text-shadow: 0 0 5px #fff;
        tr {
          border-bottom: 1px solid #666;
          cursor: pointer;
          &:hover {
            background-color: rgba(90, 105, 231, 0.3);
          }
          .icon-xiai {
            color: red;
          }
        }
      }
    }
    .mention {
      margin: 0 auto;
      font-size: 28px;
    }
  }
}
@media screen and (max-width: 750px) {
  @import '../../common/less/padding.less';
  .mention {
    margin: 0 auto;
    font-size: 14px;
  }
  #bg-cover .bg-mask .area {
    width: 100%;
    background: #4a5054;
    .container {
      width: 100%;

      table#tableData {
        text-shadow: none;
        font-size: 15px;
        color: rgb(214, 147, 147);
        .title{
          .defavor{
            padding-right: 5px;
          }
          .songname{
            padding-left: 5px;
          }
        }
        .list {
          width: 100%;
          font-size: 14px;
          text-shadow: none;
          padding:0 10px;
          .defavor{
            padding-right: 5px;
          }
          .songname{
            padding-left: 5px;
          }
          td {
            overflow: hidden;
            word-break: keep-all;
          }
        }
      }
    }
  }
  .hidden {
    display: none;
  }
}
</style>

