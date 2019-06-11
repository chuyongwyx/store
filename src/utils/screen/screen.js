const Mock = require('mockjs');
const queryString  = require('querystring');
var Random = Mock.Random;
Random.extend({
    schools : function(data){
         var schools = ['北校区','东校区','南校区','西校区'];
         return this.pick(schools);
    },
    schoolName : function(data){
        var  schoolName = ['逸夫楼','实验信息中心','图书馆','电子阅览室'];
        return this.pick(schoolName);
    },
    department : function(data){
        var department = ['化学系','中文系','马克思主义文学院','数学系','美术系'];
        return this.pick(department);
    },
    screenState : function(data){
        var screenState = ['链接','投屏','鼠标'];
        return this.pick(screenState);
    },
    screenType : function(data){
        var screenType =['触摸屏','投影','其他','临时','非触摸屏'];
        return this.pick(screenType);
    },
    bangsColor: function(data){
        var bangsColor =["red","green","gray","blue","pink"];
        return this.pick(bangsColor);
    },
    screenAtrribute: function(data){
        var screenAtrribute =["可操作性屏幕","不可操作性屏幕"];
        return this.pick(screenAtrribute);
    },
    screenRotate : function(data){
        var screenRotate =["不支持物理旋转","支持物理旋转"];
        return this.pick(screenRotate);
    }

    
})
Random.schools();
Random.schoolName();
Random.department();
Random.screenState();
Random.screenType();
Random.bangsColor();
Random.screenAtrribute();
Random.screenRotate();
Mock.mock('@SCHOOLS');
Mock.mock('@SCHOOLNAME');
Mock.mock('@DEPARTMENT');
Mock.mock('@SCREENSTATE');
Mock.mock('@SCREENTYPE');
Mock.mock('@BANGSCOLOR');
Mock.mock('@SCREENATRRIBUTE');
Mock.mock('@SCREENROTATE');
let data = Mock.mock({
    "data|200":[
        {   
            "screenId|+1":0,
            "randomId":'@name',
            "schools":'@SCHOOLS',
            "schoolName":'@SCHOOLNAME',
            "roomNum|100-700":700,
            "bangsColor":"@BANGSCOLOR",
            "department":'@DEPARTMENT',
            "sId|1-10":'2',
            "time" :Random.time('mm:ss'),
            "screenIp":"@ip",
            "screenState":'@SCREENSTATE',
            "screenAtrribute":'@SCREENATRRIBUTE',
            "screenType":'@SCREENTYPE',
            "screenRotate":'@SCREENROTATE'
        
        }
    ]
})


function filterData(page,limit) { 
let arr =  data.data.filter((item,index)=>{
    return  index<=page*limit-1  &&  index>=(page-1)*limit
})

return {
    data:arr,
    count:data.data.length
}
}

function pageScreens(options){
let {page,limit} = queryString.parse(options.url.split("?")[1]);

return filterData(page,limit);
}

function modifyScreens(options){
    let {newData,oldData,page,limit} = JSON.parse(options.body);
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].screenId == oldData.screenId){
            data.data[i] = newData;
            break;
        }
    }

    return filterData(page,limit);

}



function screensDel(options){
let {screenId,page,limit} = JSON.parse(options.body);
let index;

for(var i=0;i<data.data.length;i++){
    if(data.data[i] && data.data[i].screenId == screenId){
        index = i;
        break;
    }
}

data.data.splice(index,1);
return filterData(page,limit)
}

export default{
    pageScreens,
    modifyScreens,
    screensDel
}