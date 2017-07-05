<template>
	<div id="content">
		<header class="mine_header">
			<div class="mine_login"></div>
			<div class="mine_bottom"></div>
		</header>
		<ul class="header">
			<li>
				<img src="../../../../static/assets/images/toolbox_radius.png" ><br>
				<span>违章查询</span>
			</li>
			<li>
				<img src="../../../../static/assets/images/toolbox_collection.png" ><br>
				<span>按天小保险</span>
			</li>
			<li>
				<img src="../../../../static/assets/images/toolbox_data.png"  ><br>
				<span>救援服务</span>
			</li>
		</ul>
		<ul class="footer">
			<li v-for='(value,key) in pageData' :key='key'>
				<img :src="value['src']" class="mine_logo">
				<span>{{value.name}}</span>
				<img src="../../../../static/assets/images/carnet_enter.png" class="next">
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				pageData:[
				{name:'插件管理',src:'../../../../static/assets/images/peccancy_keyword.png'},
				{name:'清理缓存',src:'../../../../static/assets/images/peccancy_frame_number.png'},
				{name:'帮助与反馈',src:'../../../../static/assets/images/peccancy_engine_number.png'},
				{name:'关于',src:'../../../../static/assets/images/peccancy_car.png'}
				]
			}
		}
	}
</script>
<style type="text/css" scoped>
	#content{
		width: 100%;
		height: 100%;
		background:#ededed;	
		box-sizing: border-box;
		
	}
	.mine_header{
		height: 3.9rem;
		background:linear-gradient(to bottom,#ff7634 0%,#f29e39 100%);
		margin-bottom: 0.3rem;
	}
	.header{
		height: 2.4rem;
		background: #fff;
		display: flex;justify-content: space-around;
		padding-top: 0.6rem;
		font-size: 16px;
		margin-bottom: 0.3rem;
	}
	.header li{
		text-align: center;
	}
	.header li img{
		width: 0.8rem;
		margin-bottom: .2rem;
	}
	.footer{
		padding:0 0.5rem 0 0.6rem;
		background:#fff;
		font-size:15px;
	}
	.footer li{
		height: 1.2rem;
		border-bottom: 1px solid #ededed;
		line-height: 1.2rem;
	}
	.mine_logo{
		width: 0.55rem;
		margin:0.3rem 0;
		float: left;
		margin-right:0.4rem;
	}
	.next{
		float: right;
		width: 0.2rem;
		margin:0.4rem 0;
	}

</style>