<template>
    <div class="loginForm">
		<transition name="login">
		<div class="login" v-if="flag">
							<h1>登录</h1>
							<div class="login-form clear-box">
								<div class="user"><input type="text" placeholder="请输入账号"></div>
								<!-- <div><Icon type=" alert-circled"></Icon>账号或密码有误</div> -->
								<div class="psw"><input type="password" placeholder="请输入密码"></div>
								<!-- <div><span class=""></span>账号或密码有误</div> -->
								<div class="reb-psw" @click="handleRemPsw"><span  class="iconfont" :class=" { 'icon-xuankuang': noselect,'icon-xuankuang2':selected}" id="rem-psw"></span><span>记住密码</span></div>
							</div>
							<button class="btn" @click="handleLogin">登录</button>
		</div>
		</transition>
    </div>
</template>
<script>
    export default {
			data(){
				return{
					flag: false,
					noselect:true,
					selected:false,
				}
			},
			methods:{
				//使用字体图标模拟选框功能
				handleRemPsw(){
					if(this.noselect == true){
						this.noselect = false;
						this.selected = true;
					}else{
						this.noselect= true;
						this.selected= false;
					}
				},
				handleLogin(){
						this.$router.push('/home')
				}


			},
			created(){

			},
			mounted(){
					this.flag= true;
			}
	}
</script>
<style scoped>
		.clear-box:after{
				content:".";
				display:block;
				clear:both;
				height:0;
				overflow:hidden;
				visibility:hidden;
				position: relative;
		}
		.loginForm{
			width: 100%;
            height: 100%;
            background-image: url('../../assets/images/login.png');
            background-size: cover;
            /* position: relative; */
		}
		.login{
					width:600px;
					margin:0 auto;
					margin-top: 100px;
					opacity: 1;
					position: absolute;
                    right: 140px;
                    top: 30%;
		}
		.login-enter,.login-leave-to{
					opacity: 0;
		}

		.login-enter-active,.login-leave-active{
			transition: all 0.7s linear;
		}

		.login  h1{
					color: #5987ff;
					font-size: 30px;
					font-weight: bold;
					text-align: center;
					padding:30px;
		}

		.login .login-form {
					width:300px;
					margin: 0 auto;
		}
		.login .login-form .user {
					width: 100%;
					height:40px ;
					border: 1px solid #ccc;
					margin-bottom: 20px;
		}
		.login .login-form .psw{
			 		width: 100%;
					height:40px ;
					border: 1px solid #ccc;
		}
		.login .login-form .user>input  {
					width:100%;
					border: 0;
					height: 100%;
					text-indent: 1em;
					font-size: 14px;
					outline: none;
		}
		.login .login-form .psw>input{
					width:100%;
					border: 0;
					height: 100%;
					text-indent: 1em;
					font-size: 14px;
					outline: none;
		}
		.login .reb-psw{
					float: left;
					margin: 10px 0;
		}
		.login .reb-psw :hover{
					cursor: pointer;
		}
		.login .reb-psw span{
					display: block;
					float: left;
					color:rgb(148, 142, 142);
		}
		#rem-psw{
					margin-right:5px;
		}
		.login .btn{
					display: block;
					width:300px;
					height: 40px;
					margin: 0 auto;
					border: 0;
					background:#649aff;
					color: #fff;
					font-size:20px;
		}
</style>
