<template>
        <div>
			<div class="layout-content">
					<div class="layout-content-main">
						<div class="content-top">
							<h2>屏幕管理-编辑屏幕信息</h2>
							<div class="operate">
								<i-button type="info" class="oper-btn" @click="handleGoback">返回</i-button>
							</div>

						 </div>
					
					</div>
					<div class="modify-from">
						<div class="from-info">
						<i-form :model="fromInfo"  label-position="right" :label-width="90">
							<Form-item label="屏幕固定ID">
								<i-input :value.sync=" fromInfo.screenId" disabled></i-input>
							</Form-item>
							<Form-item label="屏幕随机ID">
								<i-input :value.sync="fromInfo.randomId" @on-blur="handleRandomId" type="text"></i-input>
							</Form-item>
							<Form-item label="校区">
								<i-input :value.sync="fromInfo.schools" @on-blur="handleSchools" type="text"></i-input>
							</Form-item>
							<Form-item label="教学楼">
								<i-input :value.sync="fromInfo.schoolName" @on-blur="handleSchoolName" type="text"></i-input>
							</Form-item>
							<Form-item label="房间">
								<i-input :value.sync="fromInfo.roomNum" @on-blur="handleRoomNum" type="text"></i-input>
							</Form-item>
							<Form-item label="刘海颜色">
								<i-input :value.sync="fromInfo.bangsColor" @on-blur="handleBangsColor" type="text"></i-input>
							</Form-item>
							<Form-item label="部门">
								<i-input :value.sync="fromInfo.department" @on-blur="handleDepartment" type="text"></i-input>
							</Form-item>
							<Form-item label="SID">
								<i-input :value.sync="fromInfo.sId" @on-blur="handleSId"></i-input>
							</Form-item>
							<div class="screen">
								 <span>屏幕属性</span>
								  <i-select  v-model="fromInfo.screenAtrribute" style="width:300px" :label-in-value="true"  @on-change="handleScreenAtrribute">
      							  <i-option v-for="(item,index) in screenAtrribute" :value="item.value" :key="index">{{ item.label}}</i-option>
  								  </i-select>
							</div>
							<div class="screen">
								 <span>屏幕类型</span>
								  <i-select  v-model="fromInfo.screenType" style="width:300px" :label-in-value="true"  @on-change="handleScreenType">
      							  <i-option v-for="(item,index) in screenType" :value="item.value" :key="index">{{ item.label}}</i-option>
  								  </i-select>
							</div>
							<div class="screen">
								 <span>屏幕旋转</span>
								  <i-select v-model="fromInfo.screenRotate" style="width:300px" :label-in-value="true"  @on-change="handleScreenRotate">
      							  <i-option v-for="(item,index) in screenRotate" :value="item.value" :key="index">{{ item.label}}</i-option>
  								  </i-select> 
							</div>
							<div class="btn-sub">
								<i-button type="info" @click="handleModifyScreen">保存</i-button>
								<i-button type="info" @click ='handleUnModifyScreen'>取消</i-button>
							</div>
						</i-form>
						</div>
					</div>
			</div>
		
		</div>

</template>
<script>
import Vuex from 'vuex';
export  default{
                data(){
					return{
							index :'',
							page:'',
							data:'',
							fromInfo: {
								screenId: '',
								randomId: '',
								schools: '',
								schoolName:'',
								roomNum:'',
								bangsColor:'',
								department:'',
								sId:'',
								screenAtrribute:'',
								screenType:'',
								screenRotate:''
							},
							screenAtrribute:[
								{
									value:'可操作性屏幕',
									label:'可操作性屏幕'
								},
								{
									value:'不可操作性屏幕',
									label:'不可操作性屏幕'
								}
							],
							screenType:[
								{
									value:'触摸屏',
									label:'触摸屏'
								},
								{
									value:'非触摸屏',
									label:'非触摸屏'
								},
								{
									value:'其他',
									label:'其他'
								},
								{
									value:'投影',
									label:'投影'
								},
								{
									value:'临时',
									label:'临时'
								}
							],
							screenRotate:[
									{
										value:'支持物理旋转',
										label:'支持物理旋转'
									},
									{
										value:'不支持物理旋转',
										label:'不支持物理旋转'
									}

							],
						

					
					}
				},
				methods:{
				     handleGoback(){
						 this.$router.push({name:'screen',params:{page:this.page}});
					
					 },
					 handleRandomId(value){
						
						  this.fromInfo.randomId=value.target.value;
					 },
					 handleSchools(value){
						   this.fromInfo.schools=value.target.value;
					 },
					 handleSchoolName(value){
						 	this.fromInfo.schoolName =value.target.value;
					 },
					 handleRoomNum(value){
						 	this.fromInfo.roomNum = value.target.value;
					 },
					 handleBangsColor(value){
						 	this.fromInfo.bangsColor =value.target.value;
					 },
					 handleDepartment(value){
						 	this.fromInfo.department = value.target.value;
					 },
					 handleSId(value){
						 	this.fromInfo.sId = value.target.value;
					 },
					 handleScreenAtrribute(value){
						//   console.log(value);
						this.fromInfo.screenAtrribute=value.value;
					 },
					 handleScreenType(value){
						
						this.fromInfo.screenType=value.value;
					 },
					 handleScreenRotate(value){
						
						this.fromInfo.screenRotate=value.value;
					 },
					 ...Vuex.mapActions({
						 	handleModifyScreensinfo : 'screen/handleModifyScreensinfo'
					 }),
					  handleModifyScreen(){
						  	// console.log(this.fromInfo,this.data,this.page);
						 	this.handleModifyScreensinfo(JSON.stringify({
								newData:this.fromInfo,
								oldData:this.data,
								limit:9,
								page:this.page
							}));
					 },
					 handleUnModifyScreen(){
						 		this.fromInfo.screenId =this.data.screenId;
								this.fromInfo.randomId=this.data.randomId;
								this.fromInfo.schools=this.data.schools;
								this.fromInfo.schoolName=this.data.schoolName;
								this.fromInfo.roomNum=this.data.roomNum;
								this.fromInfo.bangsColor=this.data.bangsColor;
								this.fromInfo.department=this.data.department;
								this.fromInfo.sId=this.data.sId;
								this.fromInfo.screenAtrribute = this.data.screenAtrribute;
								this.fromInfo.screenType = this.data.screenType;
								this.fromInfo.screenRotate = this.data.screenRotate;
					 }

				},
				computed:{
					
				},
				created(){
								this.data=  JSON.parse(sessionStorage.getItem("modifyScreenInfo"));
								this.fromInfo.screenId =this.data.screenId;
								this.fromInfo.randomId=this.data.randomId;
								this.fromInfo.schools=this.data.schools;
								this.fromInfo.schoolName=this.data.schoolName;
								this.fromInfo.roomNum=this.data.roomNum;
								this.fromInfo.bangsColor=this.data.bangsColor;
								this.fromInfo.department=this.data.department;
								this.fromInfo.sId=this.data.sId;
								this.fromInfo.screenAtrribute = this.data.screenAtrribute;
								this.fromInfo.screenType = this.data.screenType;
								this.fromInfo.screenRotate = this.data.screenRotate;
								this.fromInfo.time = this.data.time;
								this.fromInfo.screenIp = this.data.screenIp;
								this.fromInfo.screenState = this.data.screenState;
								this.page = JSON.parse(sessionStorage.getItem("modifyScreenInfoPage"));
							
				
				},
				mounted(){
						
				},
				updated(){
						
				}
			    
        }
</script>
<style scoped>
	.content-top{
						height: 50px;
						background:#F5F7F9 ;
						display: flex;
						justify-content: space-between;
						align-items: center;
						overflow: hidden;
		}
		.content-top>h2{
						
						 font-size:22px;
						 line-height: 50px;
						margin-left:2.5%;
		}
		.content-top .operate{
						display: flex;
						margin-right: 100px;
		}
		.content-top .operate .oper-btn{
						margin:0 10px;
		}
	.layout-copy{
        text-align: center;
		margin-top:20px ;
        color: #9ea7b4;
    }
	.modify-from{
				width: 95%;
				height:400px;
				margin:0 auto;
				/* overflow: hidden; */
				background:#fff;
	}
   .modify-from .from-info{
	   			width:40%;
				overflow: hidden;
				margin: 0 auto;
				 padding-top: 10px; 
   }
   .ivu-form-item{
	   			margin-bottom:10px;
   }
   .screen{
	   			padding-left:30px;
				box-sizing: border-box;
				margin-bottom: 10px;
   }
   .screen>span{
	   			text-align: right;
				vertical-align: middle;
				float: left;
				font-size: 12px;
				color: #515a6e;
				line-height: 1;
				padding: 10px 12px 10px 0;
				box-sizing: border-box;
   }
   .btn-sub{
	   			text-align: center;
   }
</style>