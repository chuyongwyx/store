import {screensList,modifyScreeninfo,delScreeninfo} from '../../api/screen'
//这里axios突然出问题了我就封了个ajax  post方法你到时候自己换成axios
function ajax(options){
    var xhr = null;
    //创建对象
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 连接
   if(options.type == "POST"){
        xhr.open(options.type,options.url,options.async);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send( options.data);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
          return  options.success(xhr.responseText);
        }
    } 
}

export default {
        async  handleScreens({commit,state},param){
            
            let data = await screensList(param);
            commit("handleScreensChange",data);
        },

        async  handleModifyScreensinfo({commit,state},param){
            
            // let data = await modifyScreeninfo(param);
            // console.log(data);
            // commit("handleModifyedScreensinfo",data);
            await ajax({
               url:'/modifyScreensinfo',
               type:'POST',
               async:true,
               data:param,
               success: function(databaseinfo){
                   if(databaseinfo){
                       alert('修改成功');
                   }
                   state.data =JSON.parse(databaseinfo)
               }
           })        
        },

        async handleDelScreensinfo({commit,state},param){
            // let data = await delScreeninfo(param);
            // commit("handleDelScreeninfo",data);
            console.log(param);
            await ajax({
                url:'/delScreensinfo',
                type:'POST',
                async:true,
                data:param,
                success: function(databaseinfo){
                    state.data =JSON.parse(databaseinfo)
                }
            })        
        }

}


