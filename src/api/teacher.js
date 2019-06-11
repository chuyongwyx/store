import  http from '../libs/axios';
export  const teacherInfo =  (page=1) =>http('get','/teacher?page='+page+'&limit=9')