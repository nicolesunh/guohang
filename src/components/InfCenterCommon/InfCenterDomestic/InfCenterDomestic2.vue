<template>
   <div class="infCenterDomestic2">
       <NewArticle></NewArticle>
       <LabelCloud></LabelCloud>
   </div>
</template>

<script>
    import NewArticle from '.././InfCenterShanghai/NewArticle'
    import LabelCloud from '../.././HomeCommon/IndexHome/LabelCloud'
    export default {
        name: "InfCenterDomestic2",
        data(){
          return{

          }
        },
        components: {
          LabelCloud:LabelCloud,
          NewArticle:NewArticle

        },
    }
</script>

<style lang = scss scoped>
   .infCenterDomestic2{
     width: 25%;
     float: right;

   }
</style>
