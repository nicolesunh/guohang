<template>
    <div class="bac">
      <div class="bacBd">
        <!--登录-->
          <div v-if="valueFromParent == 1">
            <LoginModal></LoginModal>
          </div>
        <!--注册-->
          <div  v-if="valueFromParent == 2">
            <RegModal v-bind:message="parentMsg" v-on:listenToChildEvent ="showMsgFromChild"></RegModal>
          </div>
          <!--协议-->
          <div v-if="xyViewShow == 'isShow'">
            <Agreement  v-bind:message="parentMsg2" v-on:listenToChildEvent2 ="showMsgFromChild2"></Agreement>
          </div>
         <!--忘记密码-->
          <div v-if="valueFromParent == 3">
            <ForgetModal></ForgetModal>
          </div>
      </div>
    </div>
</template>

<script>
   import LoginModal from "./LoginModal"
   import RegModal from "./RegModal"
   import Agreement from "./Agreement"
   import ForgetModal from "./ForgetModal"

    export default {
        name: "LogRegBac",
        data(){
          return{
            valueFromParent:'', //用来接收props
            xyViewShow:"",
            parentMsg:"hello,child",
            parentMsg2:"hello,child"
          }
        },
        props: ['parentToChild'],
        components:{
          LoginModal:LoginModal,
          RegModal:RegModal,
          Agreement:Agreement,
          ForgetModal:ForgetModal
        },
        created(){
          this.valueFromParent = this.parentToChild;
        },
        methods: {
          showMsgFromChild:function (data) {
            this.xyViewShow = data;
            if(data == "isShow"){
              this.valueFromParent = ""
            }
          },
          showMsgFromChild2:function (data) {
            if(data == "isShow2"){
              this.valueFromParent = 2;
              this.xyViewShow = "";
            }
          }
        }
    }
</script>

<style lang = scss scoped>
   .bac{
     position: relative;
     margin: 0 auto;
     padding: 0;
     min-width: 970px;
     overflow: hidden;
     width: 100%;
     height: 510px;
     background: url("../.././assets/img/loginbg.png");
     background-position: 50% 100px;
   }
   .bacBd{
     width: 970px;
     margin: 0 auto;
     position: relative;
   }
</style>
