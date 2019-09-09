<template>
   <div class="infCenterShanghai2">
     <NewArticle></NewArticle>
     <LabelCloud></LabelCloud>
   </div>
</template>

<script>
    import NewArticle from './NewArticle'
    import LabelCloud from '../.././HomeCommon/IndexHome/LabelCloud'
    export default {
        name: "InfCenterShanghai2",
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
   .infCenterShanghai2{
     width: 25%;
     float: right;

   }
</style>
