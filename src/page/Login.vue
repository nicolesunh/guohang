<template>
    <div>
      <LogRegNav :parentToChild="addClass"></LogRegNav>
      <LogRegBac :parentToChild="value1"></LogRegBac>
      <LogRegBottom></LogRegBottom>
    </div>
</template>


<script>
    import LogRegNav from ".././components/LogRgister/LogRegNav"
    import LogRegBac from ".././components/LogRgister/LogRegBac"
    import LogRegBottom from ".././components/LogRgister/LogRegBottom"
    export default {
        name: "Login",
        data(){
          return{
            value1:1,
            addClass:"Login"

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
