<template>
    <div class="HangList">
        <div class="HangList-l" :class="{addClass1:isCollapse == true}" id="HangList-l-id">
            <NavLeft></NavLeft>
        </div>
        <div class="HangList-r"  :class="{addClass2:isCollapse == true}">
            <HeaderTop></HeaderTop>
            <div class="HangList-bd">
                <CommonTop  :parentToChild="showTitle"></CommonTop>
                <div class="HangList-bd-nav">
                    <span class="search">年份搜索</span>
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
                <div class="HangList-bd-table">
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
                                    prop="phone"
                                    label="联系电话"
                                    align="center"
                                    width="180"
                                   >
                            </el-table-column>
                            <el-table-column
                                    prop="time"
                                    label="申请时间"
                                    align="center"
                                   >
                            </el-table-column>
                            <el-table-column
                                    prop="zt"
                                    align="center"
                                    label="状态"
                                    width="80"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="gk"
                                    align="center"
                                    label="项目概况"
                                    width="160">
                                    <template slot-scope="scope">
                                        <el-button type="primary" size="small">上传项目概况</el-button>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    prop="fj"
                                    align="center"
                                    label="附件"
                                    width="160">
                                    <template slot-scope="scope">
                                        <el-dropdown split-button type="primary" @click="handleClick" size="small">
                                            附件下载
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                                <el-dropdown-item>狮子头</el-dropdown-item>

                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    prop="cz"
                                    align="center"
                                    label="操作"
                                    width="160">
                                    <template slot-scope="scope">
                                        <el-dropdown split-button type="primary" @click="handleClick" size="small">
                                            操作
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                                <el-dropdown-item>狮子头</el-dropdown-item>

                                            </el-dropdown-menu>
                                        </el-dropdown>

                                    </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <!--分页-->
                <div class="HangList_page">
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
        name: "HangList",
        data(){
            return{
                isCollapse:false,
                showTitle:"HangList",
                screenWidth: document.body.clientWidth,
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    }
                ],
                value: '全部',
                tableData: [
                    {
                        ID: '151',
                        name: '国内领先的航运船舶智能管理云平台',
                        dw: '上海互海信息科技有限公司',
                        phone: '13472846656',
                        time: '2019-07-30 10:38:05',
                        zt: '已提交',
                        gk: '',
                        fj: '',
                        cz: '',
                    },
                    {
                        ID: '152',
                        name: '国内领先的航运船舶智能管理云平台',
                        dw: '上海互海信息科技有限公司',
                        phone: '13472846656',
                        time: '2019-07-30 10:38:05',
                        zt: '已提交',
                        gk: '',
                        fj: '',
                        cz: '',
                    },
                    {
                        ID: '153',
                        name: '国内领先的航运船舶智能管理云平台',
                        dw: '上海互海信息科技有限公司',
                        phone: '13472846656',
                        time: '2019-07-30 10:38:05',
                        zt: '已提交',
                        gk: '',
                        fj: '',
                        cz: '',
                    },
                    {
                        ID: '154',
                        name: '国内领先的航运船舶智能管理云平台',
                        dw: '上海互海信息科技有限公司',
                        phone: '13472846656',
                        time: '2019-07-30 10:38:05',
                        zt: '已提交',
                        gk: '',
                        fj: '',
                        cz: '',
                    },
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
    .HangList{
        overflow: hidden;
        background-color: #ecf0f5;
        z-index: 800;
        min-height: 100vh;

        .HangList-l{
            float: left;
            width: 12%;
        }
        .addClass1{
            width: 7%;
        }
        .HangList-r{
            float: left;
            width: 88%;
            .HangList-bd{
                padding: 0 10px;
                .HangList-bd-nav{
                    .search{
                        margin-right: 10px;
                    }
                }
                .HangList-bd-table{
                    margin-top: 15px;
                    min-height: 300px;
                    border-radius: 3px;
                    background: #ffffff;
                    border-top: 3px solid #d2d6de;
                    margin-bottom: 20px;
                    width: 100%;
                    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                    .HangList-bd-table-A{
                        padding: 10px;
                    }

                }
                .HangList_page{
                    margin-top: 30px;
                }
            }
        }
        .addClass2{
            width: 93%;
        }
    }

</style>