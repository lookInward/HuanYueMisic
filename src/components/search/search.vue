<template>
<div class="bg-cover"><div class="bg-mask"><div class="area">
  <div class="search padding">
      <div class="search-box-wrapper">
          <search-box @query="onQueryChange"></search-box>
      </div>
      <div>
          <prompt :query="query"></prompt>
      </div>
      </div>
      </div></div>
  </div>
</template>
<script>
import SearchBox from '../../base/search-box';
import Prompt from './prompt';
export default {
  data(){
      return {
          query:'青花瓷'
      }
  },
  methods:{
      onQueryChange(query){
          this.query=query
      }
  },
  components:{
      SearchBox,
      Prompt
  }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
@media screen and (min-width: 750px){
.bg-cover{
    background:url('../../common/image/bg.jpg') no-repeat;
    background-size:cover;
    .bg-mask{
      width: 100%;
      height: 100%;
      background-color:rgba(226, 218, 218, 0.6);   
      .area{
          margin: 0 auto;
          width: 66%;
          text-align: center;
          min-height: 500px;
      }}}}
@media screen and (max-width:750px){
    @import '../../common/less/padding.less';
}
</style>


