import  Mock from "mockjs";
import student from "../../utils/userinfo/student";

Mock.mock(/\/student/,"get",student.pageUsers);