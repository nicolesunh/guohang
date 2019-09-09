<template>
  <div>
    <LogRegNav></LogRegNav>
    <LogRegBac :parentToChild="value3"></LogRegBac>
    <LogRegBottom></LogRegBottom>
  </div>
</template>


<script>
  import LogRegNav from ".././components/LogRgister/LogRegNav"
  import LogRegBac from ".././components/LogRgister/LogRegBac"
  import LogRegBottom from ".././components/LogRgister/LogRegBottom"
  export default {
    name: "ForgetPwd",
    data(){
      return{
        value3:3
      }
    },
    components: {
      LogRegNav:LogRegNav,
      LogRegBac:LogRegBac,
      LogRegBottom:LogRegBottom
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>

</style>
