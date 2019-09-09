<template>
    <div>
      <i v-if="btnFlag"  class="el-icon-caret-top" style="font-size: 12px;font-weight: bold" @click="backTop">回到顶部</i>
    </div>
</template>


<script>
    export default {
        name: "ScrollToTop",
        data(){
           return{
             btnFlag:true,
             scrollTop:null
           }
        },
        mounted () {
          window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
          window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
          backTop:function () {
            let that = this
            let timer = setInterval(() => {
              let ispeed = Math.floor(-that.scrollTop / 5)
              document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
              if (that.scrollTop === 0) {
                clearInterval(timer)
              }
            }, 16)
          },
          // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
          scrollToTop () {
            let that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
           /* if (that.scrollTop > 60) {
              that.btnFlag = true
            } else {
              that.btnFlag = false
            }*/
          }
        }

    }
</script>

<style scoped lang="scss">

</style>

