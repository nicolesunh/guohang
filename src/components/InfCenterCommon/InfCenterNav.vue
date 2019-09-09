<template>
  <div class="infCenterNav">
    <ul class="infCenterNav-ul">
      <li :class="{addActive:valueFromParent == 'InfCenterHome'}">
        <router-link to="/infCenter/infCenterHome" class="">首页</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterShanghai'}">
        <router-link to="/infCenter/infCenterShanghai" class="">上海</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterDomestic'}">
        <router-link to="/infCenter/infCenterDomestic" class="">国内</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterInternational'}">
        <router-link to="/infCenter/infCenterInternational" class="">国际</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterShipping'}">
        <router-link to="/infCenter/infCenterShipping" class="">航运</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterTrade'}">
        <router-link to="/infCenter/infCenterTrade" class="">经贸</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterPort'}">
        <router-link to="/infCenter/infCenterPort" class="">口岸</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterTechnology'}">
        <router-link to="/infCenter/infCenterTechnology" class="">科技</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterService'}">
        <router-link to="/infCenter/infCenterService" class="">服务</router-link>
        <span class="dm-nav-line"></span>
      </li >
      <li>
        <router-link to="/policyMnt/policyMntPolicy" class="">政策</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterLook'}">
        <router-link to="/infCenter/infCenterLook" class="">观察</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'InfCenterEncy'}">
        <router-link to="/infCenter/infCenterEncy" class="">百科</router-link>
        <span class="dm-nav-line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "InfCenterNav",
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
  .infCenterNav{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #EBEBEB;
    .infCenterNav-ul{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 8.3%;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
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
