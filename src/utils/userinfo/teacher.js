const Mock = require("mockjs")
const queryString = require("querystring");
const Random = Mock.Random;
Random.extend({
     cpe: function(data){
             var cpe = ['微软','安卓','苹果'];
             return  this.pick(cpe)
     },
     department : function(data){
        var department = ['化学系','中文系','马克思主义文学院','数学系','美术系'];
        return this.pick(department);
    },
     job : function(data){
            var job = ['授课老师','主任','化学老师','数学老师','语文老师','音乐老师'];
            return  this.pick(job)
     },
     remarks: function(data){
            var remarks =['无','你是一个好学生','美丽','善良','温柔','阳光'];
            return  this.pick(remarks)
     }
})
Random.cpe();
Random.department();
Random.remarks();
Random.job();
Mock.mock('@CPE');
Mock.mock('@DEPARTMENT')
Mock.mock('@REMARKS');
Mock.mock('@JOB');

 let data = Mock.mock({
 	   "data|300":[
 	   		{
 	   			"username":"@name",
 	   			"reallyname":"@cname",
                "department":"@DEPARTMENT",
                "job":'@JOB',    
                "tel":/1(3|5|7|8)[0-9]{9}/,
 	   			"time":Random.time('mm:ss'),
 	   			"cpe":"@CPE",
 	   			"remarks":"@REMARKS",
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

function pageUsers(options){
  

    let {page,limit} = queryString.parse(options.url.split("?")[1]);

    return filterData(page,limit);
}






function modifyUsers(options){
    let {newData,oldData,page,limit} = JSON.parse(options.body);
        
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].id == oldData.id){
            data.data[i] = newData;
            break;
        }
    }

   return filterData(page,limit);

}


function userDel(options){
   
    let {id,page,limit} = JSON.parse(options.body);
    console.log({id,page,limit})
    let index;

    for(var i=0;i<data.data.length;i++){
        if(data.data[i] && data.data[i].id == id){
            index = i;
            break;
        }
    }

    data.data.splice(index,1);
    return filterData(page,limit)
}

export default{
    pageUsers,
    modifyUsers,
    userDel

}