//import Axios from 'axios';
//import { LOGIN_PATH_NAME, AUTH_TOKEN, TOKEN_KEY } from '../config/index';
//import { getToken, removeToken } from './util';
//
//export const httpRequire = (() => {
//const config = {
//  baseURL:"",
//  withCredentials:true,
//  headers:{
//    "Content-Type":"application/json; charset=utf-8"
//  }
//};
//const instance = Axios.create(config);
//// 添加请求拦截、
//instance.interceptors.request.use(config => {
//  if(!config.url.includes(LOGIN_PATH_NAME) && !config.noToken){
//    const TOKEN = getToken();
//    if(!TOKEN){
//      window.location.href = LOGIN_PATH_NAME;
//      return Promise.reject("请重新登录");
//    }
//    config.headers[AUTH_TOKEN] = TOKEN;
//  }
//},error => {
//  return Promise.reject(error);
//});
//// 添加响应拦截
//instance.interceptors.response.use(({data, status}) => {
//  if(status !== 200 ){
//    return Promise.reject();
//  } else {
//    if(code === 401){
//      removeToken(TOKEN_KEY)
//    }
//  }
//})
//
//return (options) => {
//  return instance(options).catch((err)=>{
//    if(err){
//
//    }
//  })
//}
//})();
//
//export default httpRequire;


//anxio中设置token可以留在后面写先开始不要写会出问题,等后端接口确定商量好后在决定token
import  axios from 'axios';

const http = axios.create({
		timeout:5000
})


//请求拦截
http.interceptors.request.use((config)=>{
	
		return  config;
},(err)=>{
		return Promise.reject(err);
})


//响应拦截
http.interceptors.response.use((res)=>{
		return res.data;
},(err)=>{
		return Promise.reject(err)
})


export default (method,url,data=null)=>{
	if(method =="post"){
		return http.get(url,data) 
	}else if(method =="get"){
		return http.get(url,{params:data});
	}else{
		return;
	}
}

