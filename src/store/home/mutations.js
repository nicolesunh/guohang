/**
 * Created by wangjianwen on 2017/10/16.
 */
import * as func from '../function';
export  default{
    setHomeList(states, home){
        states.home = home;
        // func.func.set('home',home);
    },
    setSearchtext(states, searchtext){
        states.searchtext = searchtext;
        func.func.set('searchtext',searchtext);
    },
    setSearchclass(states, searchclass){
        states.searchclass = searchclass;
         func.func.set('searchclass',searchclass);
    },}