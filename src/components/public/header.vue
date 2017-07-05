<template>
	<header class="header">
		<header class="index-header">
			<span class="goBack">{{pageData.goback}}</span>
			<span>{{title}}</span>
		</header>
	</header>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				title:'首页',
				pageData:{
					
					goBack:'<'
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
	.header{
		width: 7.5rem;
		height: 1rem;
		background: #e6e6e6;
		position: absolute;top: 0;left: 0;
		z-index: 99;
		line-height: 1rem;
		text-align: center;
		padding: 0 0.1rem;
	}
</style>