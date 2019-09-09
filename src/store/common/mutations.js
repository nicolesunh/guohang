/**
 * Created by Administrator on 2019/10/1.
 */
import * as func from '../function';
export  default{
    setManageToken(states, manageToken){
        states.manageToken = manageToken;
        func.func.set('manageToken',manageToken);
    },
    setStatus(states, status){
      states.status = status;
      func.func.set('status',status);
    },
    setUserName(states,userName){
      states.userName = userName;
      func.func.set('userName',userName);
    },
    //清除用户名
    removeUserName(states){
      states.userName = null;
      func.func.clear('userName');
    },
    //清除token
    removeManageToken(states){
      states.manageToken = null;
      func.func.clear('manageToken');
    },
    setCollapse(states,collapse){
        states.collapse = collapse;
        func.func.set('collapse',collapse);
    },

   /* removeManageUser(states){
        states.manageUser = null;
        states.manageToken = null;
        func.func.clear('manageUser');
        func.func.clear('manageToken');
    },*/


}
