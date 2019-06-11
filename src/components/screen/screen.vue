<template>
		<div>
			<div class="layout-content">
					<div class="layout-content-main">
						<div class="content-top">
							<h2>屏幕管理</h2>
							<div class="operate">
								<i-button type="info" class="oper-btn">新增屏幕</i-button>
								<i-button type="info"  class="oper-btn">批量导入</i-button>
								<i-button type="info"  class="oper-btn">批量导出</i-button>
								<i-button type="info"  class="oper-btn">批量删除</i-button>
							</div>
						</div>
						<div class="screen-info">
									<i-table border  :columns="columns7" :data="data6"></i-table>
						</div>
					</div>
			</div>
			<div class="layout-copy">
					<Page :total="count" :page-size="9" @on-change="handleToPage" :current="page"></Page>
			</div>
		</div>
</template>

<script>
	import  Vuex  from 'vuex';
	export default{
		data(){
				return   {
					page:1,
					columns7: [
						{
							type: 'selection',
							width: 60,
							align: 'center'
						},
						{
							title: '屏幕ID',
							key: 'screenId',
							align: 'center'
						},
						{
							title: '校区',
							key: 'schools',
							align: 'center'
						},
						{
							title: '教学楼',
							key: 'schoolName',
							align: 'center'
						},
						{
							title:'房间',
							key:'roomNum',
							align: 'center'
						},
						{
							title:'部门',
							key:'department',
							align: 'center'
						},
						{
							title:'使用时长',
							key:'time',
							align: 'center'
						},
						{
							title:'屏幕IP',
							key:'screenIp',
							align: 'center'
						},
						{
							title:'屏幕状态',
							key:'screenState',
							align: 'center'
						},
						{
							title:'屏幕类型',
							key:'screenType',
							align: 'center'
						},
						{
							title: '操作',
							key: 'action',
							width: 150,
							align: 'center',
							render: (h ,params)=>{
									return h('div',[
										h('span',{
											class:'iconfont icon-shiliangzhinengduixiang',
											props:{
											},
											style:{
													display:'inline-block',
													fontSize:'16px',
													width:'16px',
													height:'16px',
													marginRight:'10px'
											},
											on:{
												click:()=>{
														var index = params.index

														this.handleModify(index)
												},
												mouseover:(evt)=>{
													evt.target.style.cursor = 'pointer';
													evt.target.style.color ='blue';
												},
												mouseout:(evt)=>{
													evt.target.style.color='';
												}
											}

										}),
										h('span',{
											class:'iconfont  icon-shanchu',
											props:{

											},
											style: {
													display:'inline-block',
													fontSize:'16px',
													width:'16px',
													height:'16px',
													marginRight:'10px'

											},
											on:{
												click:()=>{
													var index = params.index;
													this.handelDelete(index);
												},
												mouseover:(evt)=>{
													evt.target.style.cursor = 'pointer';
													evt.target.style.color ='red';
												},
												mouseout:(evt)=>{
													evt.target.style.color='';
												}
											}
										}),
										h('span',{
											class:'iconfont icon-zhuanyi',
											props:{

											},
											style:{
													display:'inline-block',
													fontSize:'12px',
													width:'16px',
													height:'16px',
													marginRight:'5px'

											}
										})

									])
							}
						}
					]
   	 }


		},
		methods:{
			...Vuex.mapActions({
					handleScreenList : 'screen/handleScreens',
					handleDelScreen :'screen/handleDelScreensinfo'
			}),
			handleToPage(page){
					this.page = page;
					this.handleScreenList(page);
			},
			handleModify(index){
					sessionStorage.setItem("modifyScreenInfo",JSON.stringify(this.data6[index]));
					sessionStorage.setItem("modifyScreenInfoPage",JSON.stringify(this.page));
				    this.$router.push({name:'screeninfo',params:{screenId:index}})
			},
			handelDelete(index){
				if(confirm('是否删除屏幕ID  '+this.data6[index].screenId+'  用户')){
						this.handleDelScreen(JSON.stringify({
							screenId :this.data6[index].screenId,
							page:this.page,
							limit:9
						}))
				}else{

				}

			}

		},
		computed:{
			...Vuex.mapState({
					data6: state => state.screen.data.data,
					count : state =>state.screen.data.count,
			}),



		},
		beforCreate(){

		},
		created(){

			// console.log(this.$route.params.page)
			if(this.$route.params.page == undefined){

			}else{
					this.page = this.$route.params.page
			}

		},
		beforeMounted(){

		},
		mounted(){

		},
		beforeUpdate(){

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
</style>