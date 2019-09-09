<template>
    <div class="Zjpf">
        <div class="Zjpf-l" :class="{addClass1:isCollapse == true}" id="Zjpf-l-id">
            <NavLeft></NavLeft>
        </div>
        <div class="Zjpf-r"  :class="{addClass2:isCollapse == true}">
            <HeaderTop></HeaderTop>
            <div class="Zjpf-bd">
                <CommonTop  :parentToChild="showTitle"></CommonTop>
                <div class="Zjpf-bd-nav">
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
                <div class="Zjpf-bd-table">
                    <div class="Zjpf-bd-table-A">
                        <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="ID"
                                    label="ID"
                                    align="center"
                                   >
                            </el-table-column>
                            <el-table-column
                                    prop="zjxm"
                                    label="专家姓名"
                                    align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="cz"
                                    align="center"
                                    label="操作"
                                  >
                            </el-table-column>

                        </el-table>
                    </div>
                </div>
                <!--分页-->
                <div class="Zjpf_page">
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
        name: "Zjpf",
        data(){
            return{
                isCollapse:false,
                showTitle:"Zjpf",
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
                         ID: '',
                         zjxm: '',
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
    .Zjpf{
        overflow: hidden;
        background-color: #ecf0f5;
        z-index: 800;
        min-height: 100vh;
        .Zjpf-l{
            float: left;
            width: 12%;
        }
        .addClass1{
            width: 7%;
        }
        .Zjpf-r{
            float: left;
            width: 88%;
            .Zjpf-bd{
                padding: 0 10px;
                .Zjpf-bd-nav{
                    .search{
                        margin-right: 10px;
                    }
                }
                .Zjpf-bd-table{
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
                .Zjpf_page{
                    margin-top: 30px;
                }
            }
        }
        .addClass2{
            width: 93%;
        }
    }

</style>