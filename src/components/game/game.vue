<template>
  <div class="container">
    <div class="info" v-show="info">
     <div class="font">{{info}}</div> 
    </div>
    <button @click="beginGame">开始</button>
   <canvas id="gobang" @click="play" ref="gobang" width="800px" height="800px"></canvas>
  </div>
</template>
<script>
import { count, allwins, robotAI } from "../../common/js/robot";
let draw;
class Draw {
  constructor(el) {
    this.el = el;
    this.canvas = document.querySelector(this.el);
    this.context = this.canvas.getContext("2d");
    this.chessBoard = [];
    this.me = true;
    this.meWin = [];
    this.robotWin = [];
    this.coord = {};
    this.over = false;
    this.result = "";
  }
  init() {
    this.context.strokeStyle = "black";
    for (let i = 0; i < 20; i++) {
      this.context.moveTo(20, 20 + i * 40);
      this.context.lineTo(780, 20 + i * 40);
      this.context.stroke();
      this.context.moveTo(20 + i * 40, 20);
      this.context.lineTo(20 + i * 40, 780);
      this.context.stroke();
    }
    for (let i = 0; i < 20; i++) {
      this.chessBoard[i] = [];
      for (var j = 0; j < 20; j++) {
        this.chessBoard[i][j] = 0;
      }
    }
    for (let i = 0; i < count; i++) {
      this.meWin[i] = 0;
      this.robotWin[i] = 0;
    }
    this.over = false;
    this.me = true;
    this.result = "";
  }

  again() {
    this.context.beginPath();
    this.context.fillStyle = "yellowgreen";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.init();
  }

  oneStep(i, j, me) {
    this.context.beginPath();
    this.context.arc(20 + i * 40, 20 + j * 40, 15, 0, 2 * Math.PI);
    if (me) {
      this.context.fillStyle = "white";
    } else {
      this.context.fillStyle = "black";
    }
    this.context.fill();
  }

  play(e) {
    if (this.over) {
      return;
    }
    this.mePlay(e);
  }
  robotPlay() {
    this.coord = robotAI(
      20,
      20,
      this.over,
      count,
      allwins,
      this.meWin,
      this.robotWin,
      this.chessBoard
    );
    this.oneStep(this.coord.x, this.coord.y, false);
    this.chessBoard[this.coord.x][this.coord.y] = 2;
    console.log(this.coord);
    for (let k = 0; k < count; k++) {
      if (allwins[this.coord.x][this.coord.y][k]) {
        this.robotWin[k]++;
        this.meWin[k] = 6;
        if (this.robotWin[k] == 5) {
          this.result = "黑色方已取得胜利！";
          this.over = true;
        }
      }
    }
    if (!this.over) {
      this.me = !this.me;
    }
  }

  mePlay(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let i = Math.floor(x / 40);
    let j = Math.floor(y / 40);
    if (this.chessBoard[i][j] == 0) {
      this.oneStep(i, j, this.me);
      this.chessBoard[i][j] = 1;
      for (let k = 0; k < count; k++) {
        if (allwins[i][j][k]) {
          this.meWin[k]++;
          this.robotWin[k] = 6;
          if (this.meWin[k] == 5) {
            this.result = "白色方已取得胜利！";
            this.over = true;
          }
        }
      }
      if (!this.over) {
        this.me = !this.me;
        this.robotPlay();
      }
    }
  }
}
export default {
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    draw = new Draw("#gobang");
  },
  methods: {
    play(e) {
      draw.play(e);
      if (draw.result) {
        this.info = draw.result;
      }
    },
    beginGame() {
      draw.again();
      this.info = "";
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
canvas {
  display: block;
  margin: 0 auto;
  background: yellowgreen;
}
button {
  width: 68px;
  height: 40px;
  margin: 5px;
  background: yellowgreen;
  font-size: 25px;
  line-height: 40px;
  border: 1px solid yellowgreen;
  cursor: pointer;
}
.info {
  position: fixed;
  top: 250px;
  left: 0;
  right: 0;
  .font {
    display: inline-block;
    background: rgba(253, 253, 253, 0.8);
    font-weight: bolder;
    color: black;
    font-size: 49px;
  }
}
</style>


