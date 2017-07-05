import Vue from "vue";
import Router from 'vue-router';
import Login from '@/components/login/login.vue';
import Register from '@/components/register/register.vue'
	import Reg from '@/components/register/reg/reg.vue'
import Index from '@/components/index/index.vue'
	import Idx from '@/components/index/idx/idx.vue'
	import Mine from '@/components/index/mine/mine.vue'
	import Find from '@/components/index/find/find.vue'
	import Navigator from '@/components/index/navigator/navigator.vue'


Vue.use(Router)





export default new Router({
	routes:[
		{ //登录页面
			path:"/",
			name:'login',
			component:Login
		},{//注册页面、
			path:'/register',
			name:'register',
			component:Register,
			

		},{
			path:'/reg',
			name:"reg",
			component:Reg


		},
		{//index 页面
			path:'/index',
			name:'index',
			component:Index,
			children:[
			{
				path:'/index',
				name:'idx',
				component:Idx

			},{
				path:'/index/navigator',
				name:'navigator',
				component:Navigator
			},{
				path:'/index/find',
				name:'find',
				component:Find
			},{
				path:'/index/mine',
				name:'mine',
				component:Mine
			}
			]
		}
	]


})