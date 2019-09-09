<template>
   <div class="infCenterLook2">
       <NewArticle></NewArticle>
       <LabelCloud></LabelCloud>
   </div>
</template>

<script>
    import NewArticle from '.././InfCenterShanghai/NewArticle'
    import LabelCloud from '../.././HomeCommon/IndexHome/LabelCloud'
    export default {
        name: "InfCenterLook2",
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
   .infCenterLook2{
     width: 25%;
     float: right;
     ul{
       h3{
         text-align: left;
         font-size: 18px;
         color: #2258c2;
         border-bottom: 1px solid #e8e8e8;
         cursor: pointer;
         margin-bottom: 20px;
         padding-bottom: 5px;
       }
       li{
         margin-bottom: 15px;
         list-style-type: disc;
         color: #2258c2;
         margin-left: 15px;
       }
     }
   }
</style>
