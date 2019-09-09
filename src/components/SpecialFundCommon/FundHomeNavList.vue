<template>
    <div class="FundHomeNavList">
        <ul v-if="status == 'admin'">
          <li @click="toPush4()" :class="{addActive:valueFromParent == 'AllApplications'}">
            所有申请
          </li>
          <li  @click="toPush5()" :class="{addActive:valueFromParent == 'UserListAll'}">
            用户中心
          </li>
        </ul>

        <ul v-else>
          <li @click="toPush1()" :class="{addActive:valueFromParent == 'ApplyAlready'}">
            已有申请
          </li>
          <li  @click="toPush2()" :class="{addActive:valueFromParent == 'NewApplication'}">
            新建申请
          </li>
          <li  @click="toPush3()" :class="{addActive:valueFromParent == 'MyMessage'}">
            我的信息
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FundHomeNavList",
        data(){
            return{
              valueFromParent:'', //用来接收props
              status:null
            }
        },
        props: ['parentToChild'],
        created(){
          this.valueFromParent = this.parentToChild;
          this.status = this.$store.state.common.status
        },
        methods: {
          toPush1:function () {
            this.$router.push({
              name: 'ApplyAlready',
              path:"/p/fund/public/user"
            })
          },
          toPush2:function () {
            this.$router.push({
              name: 'NewApplication',
              path:"/p/fund/public/add"
            })
          },
          toPush3:function () {
            this.$router.push({
              name: 'MyMessage',
              path:"/p/fund/public/register/n"
            })
          },
          toPush4:function () {
            this.$router.push({
              name: 'AllApplications',
              path:"/p/fund/public/admin"
            })
          },
          toPush5:function () {
            this.$router.push({
              name: 'UserListAll',
              path:"/p/fund/public/userlist"
            })
          },
        }
    }
</script>

<style lang = scss scoped>
  .FundHomeNavList{
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
