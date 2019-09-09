<template>
    <div>
        <!--创建应用弹框-->
        <el-dialog
                :visible.sync="myDialogStatus"
                width="62%"
                height="850"
                :modal='modal'
                :closeOnClickModal='modal'
                class="createApp">
            <div>
                <div ref="ueditorAll" style="min-height: 450px;margin-top: 15px" >
                    <Tiny id="tinymce" ></Tiny>
                </div>
            </div>

        </el-dialog>
    </div>
</template>

<script>
    import Tiny from '../../Tiny'
    export default {
        name:"AddModal",
        props: {
            dialogStatus: {
                default: false
            },
        },
        data(){
            return{
                myDialogStatus: this.dialogStatus,
                modal:true,
                msgFormSon: ""

            }
        },
        components:{
            Tiny:Tiny
        },
        created:function(){

        },
        methods:{


        },
        watch: {
            dialogStatus(val) {
                this.myDialogStatus = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myDialogStatus中
            },
            myDialogStatus(val) {
                this.$emit("on-result-change", val)
            }

        }
    }
</script>

<style  lang = scss scoped>
    /*创建应用的弹框*/
    .createApp{
        /deep/
        .el-dialog__wrapper{
            top: -100;
        }
        /deep/
        .el-dialog{
            border: 1px solid rebeccapurple;
            margin-top: 10vh !important;
        }
        /deep/
        .el-dialog__header{
            text-align: center;
        }
        /deep/
        .el-dialog__body{
            height: 680px;
        }
    }
</style>
