<template>
  <div class="policyMntNav">
    <ul class="policyMntNav-ul">
      <li :class="{addActive:valueFromParent == 'PolicyMntPolicy'}">
        <router-link to="/policyMnt/policyMntPolicy" class="">政策</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'PolicyMntUnscramble'}">
        <router-link to="/policyMnt/policyMntUnscramble" class="">政策解读</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'PolicyMntNotice'}">
        <router-link to="/policyMnt/policyMntNotice" class="">通知</router-link>
        <span class="dm-nav-line"></span>
      </li>
      <li :class="{addActive:valueFromParent == 'PolicyMntAnnouncement'}">
        <router-link to="/policyMnt/policyMntAnnouncement" class="">公告</router-link>
        <span class="dm-nav-line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PolicyMntNav",
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
  .policyMntNav{
    width: 1060px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #EBEBEB;
    .policyMntNav-ul{
      width: 100%;
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 25%;
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
