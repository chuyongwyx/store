import http  from "../libs/axios.js";

export const studentInfo = (page=1)=>http("get","/student?page="+page+"&limit=9")
