<template>
    <div class="ExpertList">
        <div class="ExpertList-l" :class="{addClass1:isCollapse == true}" id="ExpertList-l-id">
            <NavLeft></NavLeft>
        </div>
        <div class="ExpertList-r"  :class="{addClass2:isCollapse == true}">
            <HeaderTop></HeaderTop>
            <div class="ExpertList-bd">
                <CommonTop  :parentToChild="showTitle"></CommonTop>
                <div class="ExpertList-bd-nav">
                    <span class="search">年份选择</span>
                    <el-select v-model="value" size="small" placeholder="请选择" style="width: 100px">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button size="small">提交</el-button>
                </div>
                <!--表格-->
                <div class="ExpertList-bd-table">
                    <div class="HangList-bd-table-A">
                        <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="ID"
                                    label="ID"
                                    align="center"
                                    width="80">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="项目名称"
                                    align="center"
                                    width="200"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="dw"
                                    label="申请单位"
                                    align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="fh"
                                    label="符合(/人数)"
                                    align="center"
                                    width="180"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="bfh"
                                    label="不符合(/人数)"
                                    align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="bqd"
                                    align="center"
                                    label="不确定(/人数)"
                                    width="80"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="zh"
                                    align="center"
                                    label="综合评选"
                                    width="160">

                            </el-table-column>
                            <el-table-column
                                    prop="cp"
                                    align="center"
                                    label="参评人数"
                                    width="160">

                            </el-table-column>
                            <el-table-column
                                    prop="cs"
                                    align="center"
                                    label="初审结果"
                                    width="160">
                            </el-table-column>
                            <el-table-column
                                    prop="cz"
                                    align="center"
                                    label="操作"
                                    width="160">
                            </el-table-column>

                        </el-table>
                    </div>
                </div>
                <!--分页-->
                <div class="ExpertList_page">
                    <div class="block">
                        <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[10, 20, 30, 40]"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="totalCount">
                        </el-pagination>

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop"
    import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft"
    import CommonTop from "../../../components/SpecialFundCommon/HyService/CommonTop"

    export default {
        name: "ExpertList",
        data(){
            return{
                isCollapse:false,
                showTitle:"ExpertList",
                screenWidth: document.body.clientWidth,
                options: [
                    {
                        value: '2019',
                        label: '2019'
                    },
                    {
                        value: '2018',
                        label: '2018'
                    }
                ],
                value: '2019',
                tableData: [
                   /* {
                        ID: '151',
                        name: '国内领先的航运船舶智能管理云平台',
                        dw: '上海互海信息科技有限公司',
                        fh: '13472846656',
                        bfh: '2019-07-30 10:38:05',
                        bqd: '已提交',
                        zh: '',
                        cp: '',
                        cs: '',
                        cz:""
                    },*/

                ],
                currentPage:1,
                pageSize:null,
                totalCount:100
            }
        },
        components:{
            HeaderTop:HeaderTop,
            NavLeft:NavLeft,
            CommonTop:CommonTop
        },
        created:function(){

        },

        computed: {
            getSearchKey(){
                return this.$store.state.common.collapse
            }
        },
        methods:{
            handleClick() {
                alert('button click');
            },
            //获取数据
            getDate:function () {
                this.$http.post(serviceUrl + '', {
                    page_index:this.currentPage,
                    page_size: this.pageSize
                }).then((data)=> {
                    if (data.body.code == resultCode.Success) {


                    } else{

                    }
                });
            },
            handleSizeChange(size) {
                console.log(size);
                this.pageSize = size;
            },
            handleCurrentChange(val) {
                this.currentPage  = val;
                //this.getDate();
            },
        },
        watch: {
            getSearchKey: {
                handler(newValue){  //当词条改变时执行事件
                    this.isCollapse = newValue
                }
            },

        },
    }
</script>

<style  lang = scss scoped>
    .ExpertList{
        overflow: hidden;
        background-color: #ecf0f5;
        z-index: 800;
        min-height: 100vh;
        .ExpertList-l{
            float: left;
            width: 12%;
        }
        .addClass1{
            width: 7%;
        }
        .ExpertList-r{
            float: left;
            width: 88%;
            .ExpertList-bd{
                padding: 0 10px;
                .ExpertList-bd-nav{
                    .search{
                        margin-right: 10px;
                    }
                }
                .ExpertList-bd-table{
                    margin-top: 15px;
                    min-height: 300px;
                    border-radius: 3px;
                    background: #ffffff;
                    border-top: 3px solid #d2d6de;
                    margin-bottom: 20px;
                    width: 100%;
                    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                    .ExpertList-bd-table-A{
                        padding: 10px;
                    }

                }
                .ExpertList_page{
                    margin-top: 30px;
                }
            }
        }
        .addClass2{
            width: 93%;
        }
    }

</style>