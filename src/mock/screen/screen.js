import  Mock  from 'mockjs';
import database from "../../utils/screen/screen";


Mock.mock(/\/screens/,"get",database.pageScreens);
Mock.mock(/\/modifyScreensinfo/,"post",database.modifyScreens);
Mock.mock(/\/delScreensinfo/,"post",database.screensDel);



