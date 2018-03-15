<template>
<div class="bg-cover">
    <div class="bg-mask">
      <div class="area">
      <div class="singer-detail">
          <table :style="bgStyle">
              <tr class="title">
                  <th>歌曲名</th>
                  <th>歌手</th>
                  <th>播放</th>
              </tr>
              <tr v-for="(song,index) in songs" :key="song" class="active">
                  <!-- {{song}} -->
                  <td v-text="song.name"></td>
                  <td v-text="song.singer"></td>
                  <td class="bigfont" @click="selectItem(song,index)">▷</td>
              </tr>    
          </table>
      </div>
      </div></div></div>
</template>
<script>
import { getSingerDetail } from "../../api/singer";
import { ERR_OK } from "../../api/config";
import { createSong } from "../../common/js/song";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      songs: []
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      getSingerDetail(this.$route.params.id).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list);
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
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
  watch: {
    $route(to, from) {
      this.getDetail();
    }
  }
};
</script>
<style scoped lang="less" rel="stylesheet/less">
.bg-cover {
  background: url("../../common/image/bg.jpg");
  background-size: contain;
  .bg-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(226, 218, 218, 0.6);
    .area {
      margin: 0 auto;
      width: 66%;
      text-align: center;
      min-height: 500px;
      table {
        text-shadow: 0 0 5px #fff;
        color: black;
        font-size: 15px;
        tr {
          &:hover {
            background-color: rgba(90, 105, 231, 0.3);
          }
        }
      }
    }
  }
}
.singer-detail {
  width: 100%;
  padding: 0;
  margin: 0;
  margin: 0 auto;
  table {
    width: 100%;
    text-align: center;
    border: 0px;
    border-collapse: collapse;
    // background-color:#fff;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    .title {
      border-bottom: 1px solid #666;
      height: 36px;
    }
    .active {
      border-bottom: 1px solid #666;
      color: black;
      font-size: 14px;
      vertical-align: middle;
      &:hover {
        cursor: pointer;
      }
      .bigfont {
        font-size: 24px;
      }
    }
  }
}
</style>

