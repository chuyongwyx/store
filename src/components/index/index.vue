<template>
	<div class="layout">
		<Row type="flex">
			<i-col span="5" class="layout-menu-left">
				<Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']">
					<div class="layout-logo-left">
						<h1 class="logo-tit"><img src="../../assets/images/logo.png">爱视界</h1>
					</div>
					<div class="screen" @click="handelToScreen">
						<span class="iconfont icon-pingmu-"></span>
						屏幕管理
					</div>
					<Submenu key="2" name="2">
						<template slot="title">
							<span class="iconfont icon-yonghuguanli"></span>
							用户管理
						</template>
						<router-link to="/home/teacher"><Menu-item key="2-1" name="2-1">教师管理</Menu-item></router-link>
						<router-link to="/home/student"><Menu-item key="2-2" name="2-2">学生管理</Menu-item></router-link>
					</Submenu>
					<Submenu key="3" name="3">
						<template slot="title">
							<span class="iconfont icon-quanjushezhi"></span>
							全局设定
						</template>
						<router-link to="/home/manger"><Menu-item key="3-1" name="3-1">管理员管理</Menu-item></router-link>
						<router-link to="/home/manroom"><Menu-item key="3-2" name="3-2">房间管理</Menu-item></router-link>
						<router-link to="/home/mandepartment"><Menu-item key="3-3" name="3-3">部门设定</Menu-item></router-link>
						<router-link to="/home/manpage"><Menu-item key="3-4" name="3-4">界面设定</Menu-item></router-link>
					</Submenu>
					<Submenu key="4" name="4">
						<template slot="title">
								<span class="iconfont icon-fuwu"></span>
								服务状态
						</template>
					</Submenu>
				</Menu>
			</i-col>
			<i-col span="19">
				<div class="layout-header">
					<div class="layout-ceiling">
						<div class="layout-ceiling-main ">
							<a href="#"><span class="iconfont icon-yonghu1" style="font-size:20px;"></span><span>爱视界</span></a>
							<a href="#"><span class="iconfont icon-xiaoxi" style="font-size:20px;"></span></a>
							<a href="#"><span class="iconfont icon-quanjushezhi3" style="font-size:20px;"></span></a>
							<a href="#"><span class="iconfont icon-yiwen1" style="font-size:20px;"></span></a>
							<a href="#"><span class="iconfont icon-guanji" style="font-size:22px;"></span></a>

						</div>
					</div>
				</div>
				<div >
					<div class="layout-content">
					<div class="layout-content-main">
						<div class="content-top">
							<!-- <h2>学生管理</h2> -->
							<Breadcrumb>
							<BreadcrumbItem>标题1</BreadcrumbItem>
							<BreadcrumbItem>标题2</BreadcrumbItem>
                   		 </Breadcrumb>
							<div class="operate">
								<i-button type="info" class="oper-btn">新增学生</i-button>
								<i-button type="info"  class="oper-btn">批量导入</i-button>
								<i-button type="info"  class="oper-btn">批量删除</i-button>
							</div>
						 </div>
						
					</div>
				</div>
					 	
						<router-view></router-view>
				</div>
			</i-col>
		</Row>
	</div>
</template>

<script>
	import Vuex from 'vuex'

	export default {
			data(){
				return{
				}
			},
			methods:{
				...Vuex.mapActions({
						handleScreenList : 'screen/handleScreens',
						handleStudent :'student/handleStudentList',
						handleTeacher:'teacher/handleTeacherList'
				}),
				handelToScreen(){
					this.$router.push('/home/screen')
				}
			},
			created(){
					this.handleScreenList();
					this.handleStudent();
					this.handleTeacher();
					console.log(this.$router)
			},
			mounted(){

			},
	}
</script>

<style scoped>
	.layout-logo-left{
			background:#464c5b !important;
			width:100% !important;
			height: 43px !important;
	}
	.layout-logo-left img{
		height: 30px;
	}
	.logo-tit{
				color: #2d8cf0;
				text-align: center;
	}
	.screen{
		color:rgba(255,255,255,.7);
		padding: 14px 24px;
		position: relative;
		cursor: pointer;
		z-index: 1;
		transition: all .2s ease-in-out;
	}
	.screen:hover{
		color:rgba(255,255,255,1);
	}
	.layout-ceiling-main a{
		display: block;
		float: left;

	}
	.layout-ceiling-main span{
		display: block;
		float: left;
		line-height: 23px;
		margin: 0 8px;
			color: rgba(255,255,255,.7);
	}
	.layout-ceiling-main span:hover{
			color: rgba(255,255,255,1);
		}
    .iconfont{
			margin-right: 8px;
			display:inline-block ;
			width: 18px;
			height: 18px;
			line-height: 1;
	}

	.layout-ceiling{
        background: #464c5b;
		height: 100%;

    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
		margin-top: 24px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }

	.layout{
		width: 100%;
		height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }

    .layout-content{
		width: 100%;
		height: 80%;
        /* min-height: 200px; */
        margin:0 15px;
        /* overflow: hidden; */
        background: #fff;
        border-radius: 4px;
    }
    /* .layout-content-main{
    padding: 10px;
    } */

    .layout-menu-left{
        background: #464c5b;
		width: 15%;
    }

	.ivu-col-span-19 {
   		 width: 85%;
	}
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
	.ivu-row-flex{
			width:100%;
			height: 100%;
	}
	.breadcrumb{
		width: 100%;
		height: 60px;
		background:red;

	}
	.content-top {
  /* height: 50px; */
  background: #f5f7f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-top > h2 {
  font-size: 22px;
  line-height: 50px;
  margin-left:2.5%;
}
.content-top .operate {
  display: flex;
  margin-right: 100px;
}
.content-top .operate .oper-btn {
  margin: 0 10px;
}
.layout-copy {
  text-align: center;
  margin-top: 20px;
  color: #9ea7b4;
}
	.ivu-breadcrumb{
		width: 100%;
		height:60px;
		line-height: 60px;
		padding-left: 15px

	}
</style>
