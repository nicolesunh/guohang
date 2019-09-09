<template>
  <div class="ServiceHomeNavList">
    <ul>
      <li @click="toPush1()" :class="{addActive:valueFromParent == 'NewHyUser'}">
         新建申请
      </li>
      <li  @click="toPush2()" :class="{addActive:valueFromParent == 'ExistApply'}">
         已有申请
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "ServiceHomeNavList",
    data(){
      return{
        valueFromParent:'', //用来接收props
      }
    },
    props: ['parentToChild'],
    created(){
      this.valueFromParent = this.parentToChild;
    },
    methods: {
      toPush1:function () {
        this.$router.push({
          name: 'NewHyUser',
          path:"/p/fund/public/hyuser"
        })
      },
      toPush2:function () {
        this.$router.push({
          name: 'ExistApply',
          path:"/p/fund/public/existapply"
        })
      },
    }
  }
</script>

<style lang = scss scoped>
  .ServiceHomeNavList{
    ul{
      width: 75%;
      margin: 0 auto;
      height: 50vh;
      box-shadow: 2px 0 7px 0 rgba(0,0,0,.2);
      border: 1px solid #2258C2;
      li{
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        color: #2258c2;
      }
      .addActive{
        color: #ffffff;
        background: #2258c2;
        border:none;
      }
    }
  }
</style>
