<template>
    <div class="admin_content">
        <!-- 一级管理员  -->
        <Alert type="warning"   closable class="remove_admin" >
                <div class="remove_content">
                    <Icon type="ios-warning-outline icon_style"  slot="icon" ></Icon>
                    <span class="remove_text">删除一级管理员</span>
                </div>
                <span slot="close"><Icon type="md-close" size="24" /></span>
                <div class="remove_reminder">请先清空xxx管理员及其下属操作管理员下所有部署过的屏幕,才可以进行删除。</div>
      </Alert>
       <Alert type="warning"   closable class="license" >
                <div class="license_content">
                    <span class="license_text ">屏幕license分配</span>
                </div>
                <span slot="close"><Icon type="md-close" size="24" /></span>
                <div class="remove_reminder">内容区</div>
      </Alert>
        <Card style="width:320px">
        <div style="text-align:center">
            <h3>管理员设定</h3>
        </div>
        </Card>
    </div>
    
</template>
<script>
    export default {
        admin:[
            {admin:"王阔",job:"总管理员"},
        ]
    }
</script>

<style>
/* 全局 */
.admin_content{
    width: 100%;
    height: 100%;
    background: red;
    padding: 20px
}
/* license屏幕分配 */
.license{
    background: #FFFFFF;
border: 1px solid #DCDEE3;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
border-radius: 6px;
width: 460px;
height: 220px;
}
/* 删除管理员 */
.remove_admin{
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
    border-radius: 3px;
    width: 459px;
    height: 150px;
}
/* remove_content */
.remove_content,.license_content{
    width: 100%;
    height: 24px;
    line-height: 24px;
}
/* icon样式 */
.icon_style{
    width: 15.1px;
    height: 24px;
    font-size: 18px;
    color: orange;
}
/* 删除一级管理员 */
.remove_text,.license_text{
    text-align: left;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    text-align: left;
    width: 318px;
    height: 24px;
    

}
/* 提示信息 */
.remove_reminder{
text-align: left;
font-family: Helvetica;
font-size: 12px;
color: #666666;
text-align: left;
width: 413.1px;
height: 110px;
display: flex;
align-items: center;
} 
    
</style>
