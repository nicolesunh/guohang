<template>
    <div class="labelCloud">
        <ul>
            <div class="unshow" style="display:none">
                <h3>
                    标签云
                </h3>
                <div class="biaoQian">

                </div>
                <p>点击感兴趣的关键词 一起畅快阅读吧！</p>
            </div>
            <div class="weixin">
                <img src="../../.././assets/img/weixin.jpg" alt="">
                <span>微信扫一扫快加入我们吧！</span>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LabelCloud"
    }
</script>

<style scoped  lang = scss scoped>
    .labelCloud{
        width: 100%;
        ul{
            width: 92%;
            margin: 0 auto;
            h3{
                font-size: 18px;
                color: #2258c2;
                margin-bottom: 20px;
                padding-bottom: 5px;
                border-bottom: 1px solid #ddd;
                text-align: left;
            }
            .biaoQian{
                height: 200px;
                border: 1px solid #d9d9d9;
            }
            p{
                font-size: 16px;
                color: #000000;
                margin: 10px 0;
                text-align: left;
                border-bottom: 1px solid #ddd;
                padding-bottom: 10px;
            }
            .weixin{
                overflow: hidden;
                img{
                    float: left;
                    width: 70px;
                    height: 70px;
                    vertical-align: middle;
                }
                span{
                    float: right;
                    width: 60%;
                    text-align: left;
                    font-size: 18px;
                    display: inline-block;
                }
            }
        }

    }
</style>
