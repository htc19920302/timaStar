<template>
<div>
	<top />
	<ul id="find">
		<li v-for='(value,key) in pageTea' key="value.key">
			<img :src="value.logo" class="find-logo">
			<span class="text">{{value.name}}</span>
			<img :src="value.src" class="next-img">
		</li>
	</ul>
</div>
</template>
<script type="text/javascript">
import top from '../../public/header.vue'
	export default {
		data(){
			return{
				
				pageTea:[
					{
						name:'豆瓣音乐',logo:'../../../../static/assets/images/found_db.png',src:'../../../../static/assets/images/carnet_enter.png'
					},{
						name:'凤凰资讯',logo:'../../../../static/assets/images/found_fh.png',src:'../../../../static/assets/images/carnet_enter.png'
					},{name:'违章查询',logo:'../../../../static/assets/images/found_peccancy.png',src:'../../../../static/assets/images/carnet_enter.png'},{
						name:'翼卡在线',logo:'../../../../static/assets/images/found_eka.png',src:'../../../../static/assets/images/carnet_enter.png'
					}
				]

			}
		},
		components:{
			top,
		}
	}
</script>
<style type="text/css" scoped>
	#find{
		width: 100%;
		height: 100%;
		background: #ededed;
		padding-top: 1rem;
	}
	#find li{
		height:1.2rem;
		border-top:1px solid #d4d4d4;
		border-bottom:1px solid #d4d4d4;
		background: #fff;
		padding: 0 0.5rem;
		line-height: 1.2rem;
		
		margin-bottom: 0.2rem;

	}
	.text{
		font-size: 16px;

	}

	.find-logo{
		width: 0.8rem;
		margin:0.2rem 0;
		float: left;
		margin-right: 0.2rem;
	}
	.next-img{
		width: .2rem;
		float: right;
		margin:0.4rem 0;
	}
</style>