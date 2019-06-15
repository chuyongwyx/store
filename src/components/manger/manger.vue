<template>
    <div>
        <!-- 一级管理员  -->
        <div class="first_admin">
            <div class="admin_user">
                <div></div>
            </div>
            <div></div>
        </div>
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
.first_admin{
    width: 100%;
    height: 60px;
    background: red;
}
.admin_user{
    width: 100%;
    height: 40px;
    background: blue;
}
</style>
