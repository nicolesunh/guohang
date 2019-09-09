/**
 * Created by wangjianwen on 2017/10/16.
 */
export default {
    setHomeList : ({commit}, param) => commit('setHomeList',{home: param}),
    setSearchtext: ({commit}, param) => commit('setSearchtext',{searchtext: param}),
    setSearchclass: ({commit}, param) => commit('setSearchclass',{searchclass: param}),
}