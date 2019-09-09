<template>
    <div class="headNav">
      <ul class="headNav-ul">
        <li :class="{addActive:valueFromParent=='IndexHome'}">
          <router-link to="/" class="">首页</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li>
          <router-link to="/infCenter" class="">资讯中心</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li>
          <router-link to="/shipMarket" class="">航运市场</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li>
          <router-link to="/policyMnt" class="">政策公告</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li>
          <router-link to="/onlineApplication" class="">在线应用</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li>
          <router-link to="/shippingDevelopment" class="">航运发展</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li :class="{addActive:valueFromParent=='HandlingGuide'}">
          <router-link to="/handlingGuide" class="">办事指南</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li :class="{addActive:valueFromParent=='SpecialFund'}">
          <router-link to="/specialFund" class="">专项资金</router-link>
          <span class="dm-nav-line"></span>
        </li>
        <li>
          <router-link to="" class="">洋山频道</router-link>
          <span class="dm-nav-line"></span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HeadNav",
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
  .headNav{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #EBEBEB;
    .headNav-ul{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 11.11%;
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
