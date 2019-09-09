/**
 * Created by wangjianwen on 2017/10/16.
 */
export default {
    setInfCenterHome : ({commit}, param) => commit('setInfCenterHome',{infCenterHomeList: param}),
    setNewArticle : ({commit}, param) => commit('setNewArticle',{newArticle: param}),
    setDetailId : ({commit}, param) => commit('setDetailId',{detailId: param}),
    setSimilar: ({commit}, param) => commit('setSimilar',{similarList: param}),
    setImgData: ({commit}, param) => commit('setImgData',{imgDataList: param}),
}