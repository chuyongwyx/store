<template>
    <div>
			<div class="layout-content">
					<div class="layout-content-main">
						<div class="content-top">
							<!-- <h2>教师管理</h2> -->
							<!-- <div class="operate">
								<i-button type="info" class="oper-btn">新增教师</i-button>
								<i-button type="info"  class="oper-btn">批量导入</i-button>
								<i-button type="info"  class="oper-btn">批量删除</i-button>
							</div> -->

						 </div>
						<div class="student-info">
									<i-table border  :columns="columns7" :data="teacherdata"></i-table>
						</div>
					</div>
			</div>
			<div class="layout-copy">
					 <Page :total="count" :page-size="9" @on-change="handleToPage" :current="page"></Page>
			</div>
		</div>
</template>
<script>
import teacherTable from "./staticdata";
import Vuex from "vuex";
export default {
  data() {
    return teacherTable;
  },
  methods: {
    ...Vuex.mapActions({
      handleTeacher: "teacher/handleTeacherList"
    }),
    handleToPage(page) {
      this.page = page;
      this. handleTeacher(page);
    }
  },
  computed: {
    ...Vuex.mapState({
      teacherdata: state => state.teacher.data.data,
      count: state => state.teacher.data.count
    })
  },
  created() {},
  mounted() {}
};
</script>


<style scoped>
.content-top {
  height: 50px;
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
</style>