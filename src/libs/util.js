//import Cookie from 'js-cookie';
//import { config } from '../config/index';
//
//const { cookieExpires, TOKEN_KEY, DEFAULT_TITLE } = config;
//
//// 设置 token
//export const setToken = (token) => {
//Cookie.set(TOKEN_KEY, token, {expires:cookieExpires || 1})
//};
//// 获取 token
//export const getToken = () => {
//const token = Cookie.get(TOKEN_KEY);
//if(token){
//  return token;
//} else {
//  return false;
//}
//};
//// 删除token
//export const removeToken = () => {
//Cookie.remove(TOKEN_KEY)
//};
////设置 title
//export const setTitle = (title) => {
//title = title ? "ASJ-" + title : DEFAULT_TITLE;
//window.document.title = title;
//};
//// 判断类型，
//export const typeOf = (() => {
//const map = {
//  '[object Boolean]': 'boolean',
//  '[object Number]': 'number',
//  '[object String]': 'string',
//  '[object Function]': 'function',
//  '[object Array]': 'array',
//  '[object Date]': 'date',
//  '[object RegExp]': 'regExp',
//  '[object Undefined]': 'undefined',
//  '[object Null]': 'null',
//  '[object Object]': 'object'
//};
//const toString = Object.prototype.toString;
//return (obj) => {
//  return map[toString.call(obj)];
//}
//})();
