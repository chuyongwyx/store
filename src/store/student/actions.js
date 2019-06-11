import  {studentInfo} from '../../api/student';
export default {
     async handleStudentList({commit,state},param){
         const data = await studentInfo(param);
         commit('handleStudentList',data);
     }
}