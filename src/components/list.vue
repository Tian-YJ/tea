<template>
	
	<div class="bookList">
		<h1>搜索:{{id}}</h1>
		<!-- {{info}}	 -->	    			    
      	<ul>
      		<li v-for="i in info.books">
      			<a  v-on:click="tiao(i.id)"><img :src="i.image"></a>
      			<p>书名:<span>{{i.title}}</span></p>
			    <p>作者:<span>{{i.author}}</span></p>
			    <p>出版社：<span>{{i.publisher}}</span></p>
		        <p>出版年：<span>{{i.pubdate}}</span></p>
		        <p>页数：<span>{{i.pages}}</span></p>
      		</li>       			   
      	</ul>
	</div>

</template>
<script type="text/javascript">
	export default{
		name:'bookList',
		data(){
			return{
				info:'',
				id:''
			}
		},
		methods:{
	      	tiao:function(bookid){
	        	this.$router.push({path:'/bookInfo/' + bookid});
	      	}
    	},
		created(){
			let _this = this;
			setInterval(function(){
				_this.id = _this.$route.params.id
			},20);
		},
		watch:{
			id(){
				var _this = this;
				let id = this.$route.params.id
				this.$jsonp('https://api.douban.com/v2/book/search?q='+id)
				.then(info => 
        			_this.info = info
				).catch(err=>{console.log(err)})
			}
		},
}
</script>
<style type="text/css">
	ul li{
		list-style: none;
	}
	a{
		cursor: pointer;
	}
</style>