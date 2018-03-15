<template>
    <div>
        <div class="bg-cover">
    <div class="bg-mask">
      <div class="area">
        <h3>当前所在城市：{{curCity}}</h3>
        <div> 
            <input type="text" @focus="upInput" placeholder="查询其他城市">
            <input type="button" value="查询" @click="getInfo">
           <input type="button" class="clear" value="清空查询历史" @click="clearInfo">
        </div>
        <div class="weather" id="weather">
            </div>
        </div>
        </div></div></div>
</template>

<script>
let currentCity = remote_ip_info["city"];
export default {
  data() {
    return {
      curCity: "",
      queryCity: ""
    };
  },
  created() {
    this.curCity = currentCity;
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.queryCity = document.querySelector("input[type=text]").value;
      let city = this.queryCity ? this.queryCity : this.curCity;
      let xhr = new XMLHttpRequest();
      xhr.open("get", "http://wthrcdn.etouch.cn/WeatherApi?city=" + city);
      (xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let cityOnce = xhr.responseXML.querySelectorAll("city")[0].innerHTML;
          var weathers = xhr.responseXML.querySelectorAll("weather");

          var ulDom = document.createElement("ul");
          var h4Dom = document.createElement("h4");
          h4Dom.style = "display:block;width:100%;margin-top:20px";
          h4Dom.innerHTML = `${cityOnce}`;
          ulDom.setAttribute("class", "ulclass");
          ulDom.style =
            "display:flex;width:100%;list-style:none;margin:0 auto;text-align:center";
          var divDom = document.querySelector(".weather");
          divDom.appendChild(h4Dom);
          divDom.appendChild(ulDom);
          for (let i = 0; i < weathers.length; i++) {
            let curWea = weathers[i];
            let temp = {};
            temp.date = curWea.querySelector("date").innerHTML;
            temp.high = curWea.querySelector("high").innerHTML;
            temp.low = curWea.querySelector("low").innerHTML;
            temp.type = curWea.querySelector("day type").innerHTML;
            var liDom = document.createElement("li");
            liDom.style = "margin:0 auto;list-style:none";
            liDom.innerHTML = `<span>${temp.date}</span><br>
                                <span>${temp.high}</span><br>
                                <span>${temp.low}</span><br>
                                <span>${temp.type}</span><br>`;
            ulDom.appendChild(liDom);
          }
        }
      }),
        xhr.send(null);
    },
    upInput() {
      let inputDom = (document.querySelector("input[type=text]").value = "");
    },
    clearInfo() {
      var list = document.getElementById("weather");
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
    }
  }
};
</script>
<style scoped lang="less" rel="stylesheet/less">
* {
  list-style: none;
}
.bg-cover {
  background: url("../../common/image/bg.jpg") no-repeat;
  margin-top: -15px;
  background-size: cover;
  .bg-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(226, 218, 218, 0.4);
    .area {
      margin: 0 auto;
      width: 66%;
      text-align: center;
      min-height: 500px;
    }
  }
}
h3 {
  margin: 15px;
  height: 50px;
  line-height: 50px;
}
input[type="text"] {
  height: 30px;
}
input[type="button"] {
  height: 28px;
  width: 40px;
}
.weather {
  width: 78%;
  margin: 0 auto;
  margin-top: 6px;
  min-height: 500px;
  text-shadow: 0 0 5px #fff;
}
input[type="button"].clear {
  height: 28px;
  width: 90px;
  background: red;
}
</style>

