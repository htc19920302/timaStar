<template>
	<div id="index"> 
		
		<router-view></router-view>
		<ul class="index-footer">
			<router-link 
				v-for="(value,key) in pageData['routerLink']" 
				:key="key" 
				:class="[pageData['activeCode'] == key ? 'active' : '','foot-img']"
				@click.native="pageData['activeCode'] = key"
				tag="li" 
				:to="value.path"
			>
			</router-link>
			
		</ul>
	</div>
</template>

<script>
	import Data from './indexData.js';
	export default {
		data(){
			return{
				pageData:{ //页面数据
					title:"首页",
					goback:'<',
					routerLink:[
						{path:"/index"},
						{path:"/index/navigator"},
						{path:"/index/find"},
						{path:"/index/mine"}
					],
					activeCode:0

				}
				

			}
		},
		mounted (){
			var pageData = this.pageData;
			var curr = window.location.href.split('/');
			console.log(curr[5]);
			switch(curr[5]){
				case 'index' : pageData['activeCode'] = 0;
					break;
				case 'navigator' : pageData['activeCode'] = 1;
					break;
				case 'find' : pageData['activeCode'] = 2;
					break;
				case 'mine' : pageData['activeCode'] = 3;
					break;
				default : pageData['activeCode'] = 4;
			};
			this.init()
		},
		methods : {
			init() {
				console.log(Data.name)
			}
		}
	}
</script>

<style scoped>
	#index{
		height: 100%;
		width: 100%;
		padding-bottom: 1rem ;
	}
	.index-header{
		width: 7.5rem;
		height: 1rem;
		background: #e6e6e6;
		position: absolute;top: 0;left: 0;
		z-index: 99;
		line-height: 1rem;
		text-align: center;
		padding: 0 0.1rem;


	}
	.goBack{
		float: left;
		font-size: 16px;
	}
	.index-footer{
		width: 7.5rem;
		height: 1rem;
		position: absolute;bottom: 0;left: 0;
		z-index: 99;
		display: flex;
		display: -webkit-flex;
		display: flex-box;
		display: -webkit-flex-box;
		background:#fcfcfc;
		line-height: 1rem;
		text-align: center;
		border-top: 1px solid #d4d4d4;
		box-sizing: border-box;
		
	}
	.index-footer li{
		flex:1;
		-webkit-flex:1;
		flex-box:1;
		-webkit-flex-box:1;
	}
	.foot-img{
		width: 0.9rem;

	}
	.foot-img:nth-child(1){
		background:url(../../../static/assets/images/hp_extension.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img:nth-child(2){
		background:url(../../../static/assets/images/hp_navigation.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img:nth-child(3){
		background:url(../../../static/assets/images/hp_found.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img:nth-child(4){
		background:url(../../../static/assets/images/hp_me.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img.active:nth-child(1){
		background:url(../../../static/assets/images/hp_extension_click.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img.active:nth-child(2){
		background:url(../../../static/assets/images/hp_navigation_clcik.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img.active:nth-child(3){
		background:url(../../../static/assets/images/hp_found_click.png) no-repeat center;
		background-size:0.9rem;
	}
	.foot-img.active:nth-child(4){
		background:url(../../../static/assets/images/hp_me_click.png) no-repeat center;
		background-size:0.9rem;
	}
</style>