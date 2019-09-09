<template>
    <div class="CommonTop">
        <div v-if="valueFromParent == 'HangList'">
            <span class="title1">海运服务</span>
            <span class="title2">申请列表</span>
            <div class="CommonTop-breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>海运服务</el-breadcrumb-item>
                    <el-breadcrumb-item>列表</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </div>
        <div v-if="valueFromParent == 'ExpertList'">
            <span class="title1">服务创新</span>
            <span class="title2">专家初审列表</span>
            <div class="CommonTop-breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>服务创新</el-breadcrumb-item>
                    <el-breadcrumb-item>专家初审列表</el-breadcrumb-item>

                </el-breadcrumb>
            </div>
        </div>
        <div v-if="valueFromParent == 'ExpertSum'">
            <span class="title1">海运服务</span>
            <span class="title2">专家签名汇总</span>
            <div class="CommonTop-breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>海运服务</el-breadcrumb-item>
                    <el-breadcrumb-item>列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div v-if="valueFromParent == 'Zjpf'">
            <span class="title1">服务创新</span>
            <span class="title2">专家评分签名汇总</span>
            <div class="CommonTop-breadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>服务创新</el-breadcrumb-item>
                    <el-breadcrumb-item>列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonTop",
        props:["parentToChild"],
        data(){
            return{
                valueFromParent:'', //用来接收props
            }

        },
        created:function () {
            this.valueFromParent = this.parentToChild
        }

    }
</script>

<style  lang = scss scoped>
    .CommonTop{
        overflow: hidden;
        height: 50px;
        line-height: 50px;
        span{
            float: left;
        }
        .title1{
            font-size: 20px;
            font-weight: lighter;
        }
        .title2{
            font-size: 14px;
            padding-left: 4px;
            font-weight: 300;
            color: #777777;
            margin-left: 15px;
            padding-top: 2px;
        }
        .CommonTop-breadcrumb{
            float: right;
            .el-breadcrumb{
                padding: 0;
                height: min-content;
                padding-top: 21px;
                padding-right: 50px;
            }
        }
    }
</style>