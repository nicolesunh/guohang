/**
 * Created by wangjianwen on 2017/10/16.
 */
import * as func from '../function';
export  default{
    setOnlineAppHome(states, onlineAppHomeList){
        states.onlineAppHomeList = onlineAppHomeList;
        // func.func.set('onlineAppHomeList',onlineAppHomeList);
    },
    setOnlineDetailId(states, yyDetailId){
        states.yyDetailId = yyDetailId;
        func.func.set('yyDetailId',yyDetailId);
    },
}