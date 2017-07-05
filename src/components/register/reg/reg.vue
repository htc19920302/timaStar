<template>

	<div id="reg">
		<div class="header">
			 <span class="left "><img src="../../../../static/assets/images/back.png"  class=" back"></span>注册
			
		</div>
		<form class="reg_form">
			<div class="username">
				<span class="user_img">
					<img src="../../../../static/assets/images/login_keyword.png">
				</span>
				<input type="password" name="" placeholder="设置登录密码">
			</div>
			<div class="username">
				<span class="user_img">
					<img src="../../../../static/assets/images/login_key.png">
				</span>
				<input type="password" name="" placeholder="再次确认密码">
			</div>
			<div class="text">密码由6-16位字母、数字组成，区分大小写。</div>
			<div class="reg_btn">
				<button class="btn">完成</button>
			</div>
		</form>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css" scoped>
		#reg{
		width: 7.5rem;
		box-sizing: border-box;
	}
	.reg_form{
		width: 7.5rem;
		padding:0 0.4rem;
		
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
		margin-bottom: 0.3rem;
		
	}
	.username,.test{
		border-bottom: 1px solid #afafaf;
		overflow: hidden;
		margin-top: 0.4rem;
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
	.username input,.password input,.phone input,.test input{
		height: 0.8rem;
		width: 4rem;
		font-size: 16px;
		border:none;
		outline: none;
		line-height: 0.8rem;
		float: left;
		placeholder-color:#ccc;
		padding-left:0.2rem;
	}
	.text{
		height: 1rem;
		line-height: 1rem;
		font-size: 12px;
		color: #747474;
		text-indent: 12px;
	}
	.reg_btn{
		margin-top: 0.2rem;
		width: 100%;
	}
	.btn{
		height: 0.9rem;
		line-height: 0.9rem;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		background: #f08300;
		border:none;
		outline: none;
		width: 100%;
	}
</style>