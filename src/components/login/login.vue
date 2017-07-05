<template>
	<div id="login">
		<div class="header">
			 <span class="left "><img src="../../../static/assets/images/back.png"  class=" back"></span>登录
			
		</div>
		<div class="logo">
			<img src="../../../static/assets/images/login_logo.png" >
		</div>
		<form class="login_form">
			<div class="username">
				<span class="user_img"><img src="../../../static/assets/images/login_phone_number.png" ></span>
				<input type="text" name="" placeholder="手机号码">
			</div>
			<div class="password">
				<span class="pass_img"><img src="../../../static/assets/images/login_keyword.png" height="50" width="50"></span>
				<input type="password" name="" placeholder="密码">
			</div>
			<div class="forget">忘记密码？</div>
			<button class="btn">登录</button>
			
		</form>
		<div class="footer">
			<button class="r_btn">立即注册</button>
		</div>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css" scoped>
	#login{
		width: 7.5rem;
		box-sizing: border-box;
	}

	.left{
		float: left;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 1rem;
	}
	.back{
		height: 0.6rem;
		width: 0.6rem;

	}
	.header{
		height: 1rem;
		width: 7.5rem;
		background: #e6e6e6;
		font-size: 18px;
		text-align: center;
		line-height: 1rem;
		padding: 0 0.4rem;
		
	}
	.logo{
		width: 100%;
		height: 2.06rem;
		text-align: center;
		margin-top: 1rem;
	}
	.logo img{
		width: 1.88rem;
		height: 1.06rem;

	}
	.login_form{
		width: 7.5rem;
		padding:0 0.4rem;
		
	}
	.username{
		border-bottom: 1px solid #afafaf;
		overflow: hidden;
	}
	.user_img,.pass_img{
		width: 0.9rem;
		height: 0.8rem;
		padding: 0.15rem 0;
		
		line-height: 0.8rem;
		text-align: center;
		float: left;


	}
	.user_img img,.pass_img img{
		width: 0.5rem;
		height: 0.5rem;

		
	}
	.username input,.password input{
		height: 0.8rem;
		width: 4rem;
		font-size: 16px;
		border:none;
		outline: none;
		line-height: 0.8rem;
		float: left;
		placeholder-color:#ccc;
	}
	.password{
		height: 0.8rem;
		margin-top: 0.4rem;
		border-bottom: 1px solid #afafaf;
		overflow: hidden;

	}
	.forget{
		height: 0.9rem;
		text-align: right;
		color:#f08300;
		line-height: 0.9rem;
		margin-bottom: 0.5rem;
	}
	.btn{
		width: 100%;
		height: 0.9rem;
		background: #f08300;
		color: #fff;
		border:none;
		outline: none;
		font-size: 18px;

	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 1rem;
		text-align: center;
		width: 100%;
	}
	.r_btn{
		width: 1.6rem;
		height: .5rem;

		border:1px solid #f08300;
		color: #f08300;
		border-radius: 5px;
		background: #fff;
		outline: none;
	}
</style>