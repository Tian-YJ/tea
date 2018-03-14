<template>
    <div class="teaList">
       <ul class="img">
        <li>
          <img id="teaPic" v-bind:src="tea.image">
        </li>
      </ul>
      <ul class="teaInfo">
        <li>标题：<span>{{tea.title}}</span></li>
        <li>价格：<span>{{tea.price}}</span></li>
      </ul>
      <div class="intro">
        <p>{{tea.intro}}</p>
      </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    import VueJsonp from 'Vue-jsonp'
    Vue.use(VueJsonp)
    export default{
      name:'HelloWorld',
      data(){
        return{
          img:"",
          teaInfo:{},
          intro:""
        }
      },
      created:function(){
      var _this = this;
     
      let id = _this.$route.params.id;
      console.log(id);
      Vue.jsonp(''+id)
      .then(res => {
        _this.tea = res;
        console.log(res)})
      .catch(err => {console.log(err);})
    },
    methods:{
      produce(par){
      this.$router.push({path:'/produce/'+par});
    }
  },
}


</script>
<style type="text/css">
.teaList{
  margin:0 auto;
}
  ul li{
   list-style: none;
  }
  a :hover{
     text-decoration: none;
  }
  .img{
    float:left;
    margin-left: 100px;
  }
  .teaInfo{
    float:right;
    margin-right: 200px;
  }
  .intro{
    margin-bottom:200px;
  }
</style>
