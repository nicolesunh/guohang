<template>
   <div class="infCenterInternational2">
       <NewArticle></NewArticle>
       <LabelCloud></LabelCloud>
   </div>
</template>

<script>
    import NewArticle from '.././InfCenterShanghai/NewArticle'
    import LabelCloud from '../.././HomeCommon/IndexHome/LabelCloud'
    export default {
        name: "InfCenterInternational2",
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
   .infCenterInternational2{
     width: 25%;
     float: right;
   }
</style>
