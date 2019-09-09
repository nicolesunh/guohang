<template>
  <div class="onlineAppNav">
    <ul class="onlineAppNav-ul">
      <li :class="{addActive:valueFromParent == 'OnlineAppHome'}">
        <router-link to="/onlineApplication/onlineAppHome" class="">首页</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li  :class="{addActive:valueFromParent == 'OnlineAppEntCation'}">
        <router-link to="/onlineApplication/onlineAppEntCation" class="">企业应用</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li  :class="{addActive:valueFromParent == 'OnlineAppInfSearch'}">
        <router-link to="/onlineApplication/onlineAppInfSearch" class="">信息查询</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li  :class="{addActive:valueFromParent == 'OnlineAppBulletin'}">
        <router-link to="/onlineApplication/onlineAppBulletin" class="">应用公告</router-link>
        <span class="dm-nav-line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "OnlineAppNav",
    data(){
      return{
        valueFromParent:'', //用来接收props
      }
    },
    props: ['parentToChild'],
    created(){
      this.valueFromParent = this.parentToChild;
    },
  }
</script>

<style lang = scss scoped>
  .onlineAppNav{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #EBEBEB;
    .onlineAppNav-ul{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 25%;
        overflow: hidden;
        text-align: center;
        a{
          padding: 5px 10px;
        }
      }
      .addActive{
        a{
          color: #4074C0;
        }
      }
    }
  }
  .dm-nav-line {
    background: url(../.././assets/img/nav-line.png) center top no-repeat;
    width: 1px;
    height: 18px;
    float: right;
    margin-top: 12px;
  }
</style>
