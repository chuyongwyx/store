import http from '../libs/axios';
export const screensList = (page=1)=>{
   return  http("get","/screens?page="+page+"&limit=9"); 
}

// export const modifyScreeninfo = (params)=>{ 
//      return  http("post","/modifyScreensinfo",params);
// }

// export const delScreeninfo = (params) => http("post","/delScreensinfo",params);