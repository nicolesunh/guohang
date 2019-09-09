<template>
  <div class="shippingDevNav">
    <ul class="shippingDevNav-ul">
      <li :class="{addActive:valueFromParent == 'ShippingDevHome'}">
        <router-link to="/shippingDevelopment/shippingDevHome" class="">首页</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShippingDevDynamics'}">
        <router-link to="/shippingDevelopment/shippingDevDynamics" class="">建设动态</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShippingDevProcess'}">
        <router-link to="/shippingDevelopment/shippingDevProcess" class="">建设历程</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'ShippingDevSupport'}">
        <router-link to="/shippingDevelopment/shippingDevSupport" class="">政策支持</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li>
        <router-link to="/aboutUs" class="">关于我们</router-link>
        <span class="dm-nav-line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ShippingDevNav",
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
  .shippingDevNav{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #EBEBEB;
    .shippingDevNav-ul{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 20%;
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
