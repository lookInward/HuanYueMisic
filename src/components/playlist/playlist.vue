<template>
  <div>
      <div class="list" id="list" v-show="showFlag">
          <div class="topLine">
              <span class="close" @click="close">关闭</span>
          </div>
          <div class="listContent">
              <table>
                  <tr class="item iconfont" v-for="(item,index) in sequenceList" :key="item" @click="selectItem(item,index)">
                      <td class="name"><span>{{item.name}}</span></td>
                      <!-- <td><span v-show="playState" :class="getCurrent(item)" class="state">正在播放...</span></td> -->
                      <td class="singer"><span>{{item.singer}}</span></td>
                      <!-- <td class="like"><span @click.stop="toggleFavorite(item)" class="pointer fav" :class="getFavoriteIcon(currentSong)"></span></td> -->
                      <td class="delete"><span @click.stop="deleteOne(item)" class="pointer icon-lajitong"></span></td>
                  </tr>
              </table>
          </div>
          
      </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { playMode } from "../../common/js/config";
import { playerMixin } from "../../common/js/mixin";
export default {
  mixins: [playerMixin],
  data() {
    return {
      showFlag: false,
      playState: false
    };
  },
  computed: {
    ...mapGetters(["sequenceList", "currentSong", "playlist"])
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    },
    getCurrent(item) {
      if (this.currentSong.id === item.id) {
        this.playState = true;
      } else {
        this.playState = false;
      }
    },
    selectItem(item, index) {
      if (this.mode === playMode.random) {
        index = this.playlist.findIndex(song => {
          return song.id === item.id;
        });
      }
      this.setCurrentIndex(index);
      this.setPlayingState(true);
    },
    deleteOne(item) {
      if (this.playlist.length > 1) {
        this.deleteSong(item);
      } else {
        this.hide();
      }
    },
    close() {
      this.hide();
    },
    ...mapMutations({
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayingState: "SET_PLAYING_STATE"
    }),
    ...mapActions(["deleteSong"])
  }
};
</script>
<style scoped lang="less" rel="stylesheet/less">
.list {
  overflow-y: scroll;
  position: fixed;
  bottom: 13%;
  right: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(61, 72, 87, 0.8);
  color: #ddd;
  .topLine {
    position: absolute;
    top: 0;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid #bbb;
    text-align: center;
    margin-bottom: 15px;
    .close {
      cursor: pointer;
      display: inline-block;
      padding: 3px;
    }
  }
  .listContent {
    margin-top: 28px;
    table {
      position: relative;
      width: 100%;
      border: none;
      border-collapse: collapse;
      tr {
        &:hover {
          background-color: rgba(53, 10, 51, 0.25);
          border: none;
        }
      }
    }
  }
  .delete,
  .like,
  .play {
    width: 8%;
  }
  .delete {
    font-size: 20px;
  }
  .pointer {
    cursor: pointer;
  }
  .fav {
    font-size: 16px;
    color: red;
  }
}
@media screen and (max-width: 750px) {
  #list {
    bottom: 9%;
    font-size: 12px;
    .listContent {
      table {
        .item {
          font-size: 12px;
          .pointer {
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>

