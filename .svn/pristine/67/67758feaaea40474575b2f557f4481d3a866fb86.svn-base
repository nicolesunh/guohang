<template>
    <div class="HeaderTop"  >
        <span v-model="isCollapse" @click = "aaa()" >
            <i class="el-icon-share"></i>
        </span>
        <div class="userIcon">
            <span class="userIcon-Dropdown" v-if="viewShows">
                <el-dropdown trigger="click">
                      <span class="el-dropdown-link" style="font-size: 12px">
                             <img src="../../../assets/img/user2.jpg" alt="" class="userIconImg">
                             {{userName}}
                          <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item  @click.native="logOut()">退出</el-dropdown-item>
                      </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HeaderTop",
        data(){
            return{
                isCollapse:true,
                screenWidth: document.body.clientWidth,
                shows:true,
                userName:"",
                viewShows:false
            }
        },
        created(){
            this.isShow();
        },
        methods:{
            aaa(){
                this.isCollapse = ! this.isCollapse;
                this.$store.commit('setCollapse',this.isCollapse);
            },
            isShow:function(){
                this.userName = this.$store.state.common.userName;
                if(this.$store.state.common.userName  == "" || this.$store.state.common.userName  == null){
                    this.viewShows = false;
                }else {
                    this.viewShows = true
                }
            },
            logOut:function () {
                this.$store.commit('removeUserName'); //清除用户名
                this.$store.commit('removeManageToken');  //token
                this.$router.push({
                    name: 'IndexHome',
                    path:"/",
                })
            }
        }
    }
</script>

<style  lang = scss scoped>
    .HeaderTop{
        height: 60px;
        line-height: 60px;
        background-color: #3c8dbc;
        overflow: hidden;
        span{
            font-size: 18px;
            color: #ffffff;
            cursor: pointer;
        }
        .userIcon{
            float: right;
            display: inline-block;
            padding-right: 15px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            .userIcon-Dropdown{
                color: #1a1a1a;
                cursor: pointer;
                color: #2258C2;
                font-size: 14px;
                float: left;
                .el-dropdown{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .userIconImg{
                    cursor: pointer;
                    margin: 0 5px;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
            }
        }
    }
</style>