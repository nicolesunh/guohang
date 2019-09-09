<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <PolicyMntNav :parentToChild="addClass"></PolicyMntNav>
    <div class="policyMntAnnouncement">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="policyMntAnnouncement-bd">
        <div class="policyMntAnnouncement-bd-l">
          <PolicyMntNavList></PolicyMntNavList>
        </div>
        <div class="policyMntAnnouncement-bd-r">
          <PolicyMntAnnouncementList></PolicyMntAnnouncementList>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import PolicyMntNav from "../.././components/PolicyMntCommon/PolicyMntNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import Breadcrumb from "../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import PolicyMntNavList from "../.././components/PolicyMntCommon/PolicyMntNavList"
  import PolicyMntAnnouncementList from "../.././components/PolicyMntCommon/PolicyMntAnnouncement/PolicyMntAnnouncementList"
  export default {
    name: "PolicyMntAnnouncement",
    data(){
      return{
        showImg:'PolicyMntAnnouncement',
        addClass:"PolicyMntAnnouncement",
        breadcrumb:"PolicyMntAnnouncement",
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      PolicyMntNav:PolicyMntNav,
      HeadFooter:HeadFooter,
      Breadcrumb:Breadcrumb,
      PolicyMntNavList:PolicyMntNavList,
      PolicyMntAnnouncementList:PolicyMntAnnouncementList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .policyMntAnnouncement{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .policyMntAnnouncement-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .policyMntAnnouncement-bd-l{
        width: 25%;
        float: left;
      }
      .policyMntAnnouncement-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
