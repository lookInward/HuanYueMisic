<template>
  <div>
    <!-- {{singers}} -->
        <ul>
          <p class="hot">热门歌手</p>
         <el-row :gutter="10">
         <li v-for="group in singers" >
           <ul>
            
            <li v-for="item in group.items" class="item">
              <el-col :span="4"><div class="grid-content bg-purple">
                 <div class="icon"> 
                  <img :src="item.avatar">
                  <div class="text">
                <span class="name" v-html="item.name"></span>
              </div>
             </div>
                </div>
                </el-col>          
            </li>        
            </ul>
         </li>
         </el-row>
      </ul>   
  </div>
</template>
<script>
  import {getSingerList} from '../../api/singer';
  import Singer from '../../common/js/singer';
  const ERR_OK=0;
  const HOT_NAME="热门";
  const HOT_SINGER_LEN=10;
export default {
  data(){
    return{
    singers:[]
    }
  },
  created(){
    this._getSingerList()
  },
  methods:{
    _getSingerList(){
      getSingerList().then(res=>{
        if(res.code===ERR_OK){
          this.singers=this._normalizeSinger(res.data.list);
        }
      })
    },
    _normalizeSinger(list){
      let map={
        hot:{
          title:HOT_NAME,
          items:[]
        }
      }

      list.forEach((item,index)=>{
        if(index<HOT_SINGER_LEN){
          map.hot.items.push(new Singer({
            id:item.Fsinger_mid,
            name:item.Fsinger_name
          }))
        }

        const key=item.Findex;
        if(!map[key]){
          map[key]={
            title:key,
            items:[]
          }
        }
        map[key].items.push(new Singer({
           id:item.Fsinger_mid,
            name:item.Fsinger_name
        }))
      })
      // 为了得到有序列表，需要处理map
      let hot=[];
      let ret=[];
      for(let key in map){
        let val=map[key]
        if(val.title.match(/[a-zA-Z]/)){
          ret.push(val);
        }
        else{
          hot.push(val)
        }
      }
      ret.sort((a,b)=>{
        return a.title.charCodeAt(0)-b.title.charCodeAt(0);
      })
      return hot.concat(ret);
    }
  }
}
</script>
<style scoped lang="less" rel="stylesheet/less">
p.hot{
  font-size:18px;
}
ul li{
   width:80%;
   margin:0 auto;
   list-style: none;
 }
 ul li .icon{
   width:100%;
   height: 188px;
   margin: 0 auto;
   background-color:#E8E5E5;
   img{
     width: 80%;
     margin: 10px auto;
     cursor: pointer;
     &:hover{
       border:3px solid rgb(243, 235, 235);
       box-shadow:15px 15px 15px #020a16;
     }
   } 
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
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
 </style>


