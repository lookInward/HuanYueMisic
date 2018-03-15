<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <span @click="clear" v-show="query" class="icon-dismiss">×</span>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data() {
      return {
        query: '青花瓷'
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      }
    },
    created() {
      this.$watch('query', (newQuery) => {
        this.$emit('query',newQuery);//派发一个query事件，把newQuery传出去
      })
    }
  }
</script>
<style  lang="less" rel="stylesheet/less" scoped>
*{
  margin: 0;
  padding: 0;
}

.icon-dismiss{
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border:2px solid #888; 
  color:#888;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  margin-bottom:3px; 
  font-size:28px;
  cursor: pointer;
  font-size:32px;
  font-weight: lighter;
  &:hover{
    color:#fff;
    border:2px solid #fff;
  }
}
.box{
  width: 30%;
  height: 28px;
  margin:5px 0;
}
@media screen and (max-width: 750px){
  input.box{
    width: 80%;
    border-radius: 30px;
    outline: none;
    border:1px solid #ccc;
    padding-left:8px;
  }
  .icon-dismiss{
    border:2px solid #2C323B; 
    color:#2C323B;
  }
  .search-box{
  background: #484e53e0;
}
}

</style>

