import  {teacherInfo} from '../../api/teacher';
export default {
     async handleTeacherList({commit,state},param){
         const data = await teacherInfo(param);
         commit('handleTeacherList',data);
     }
}