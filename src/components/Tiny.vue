<template>
    <div>
        <el-input v-model="inputTitle" placeholder="在此输入标题" style="margin-bottom: 15px"></el-input>
        <textarea :id="id"></textarea>
        <div  style="display: flex;justify-content: center;align-items: center;margin-top: 15px">
            <el-radio v-model="radio1" label="1">公开</el-radio>
            <el-radio v-model="radio2" label="2">不公开</el-radio>
        </div>
        <div style="display: flex;justify-content: center;align-items: center;margin-top: 20px">
            <el-button type="primary" style="margin: 0 45px" @click="release">保存</el-button>
            <el-button type="primary" style="margin: 0 45px" @click="cancle">取消</el-button>
        </div>
    </div>
</template>

<script>
    //这下面是tinymce的插件
    import tinymce from 'tinymce/tinymce'
    import 'tinymce/themes/silver/theme'
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/code'//代码块插件
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'
    import 'tinymce/skins/ui/oxide/skin.css'

    import 'tinymce/themes/silver'
    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/media'// 插入视频插件
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/link' //超链接插件
    import 'tinymce/plugins/contextmenu'  //右键菜单插件
    import 'tinymce/plugins/wordcount' // 字数统计插件
    import 'tinymce/plugins/colorpicker' //选择颜色插件
    import 'tinymce/plugins/textcolor'  //文本颜色插件
    import 'tinymce/plugins/fullscreen' //全屏
    import 'tinymce/plugins/help'
    import 'tinymce/plugins/charmap'
    import 'tinymce/plugins/paste'
    import 'tinymce/plugins/hr'
    import 'tinymce/plugins/searchreplace'
    import 'tinymce/plugins/insertdatetime'
    import 'tinymce/plugins/toc'
    import 'tinymce/plugins/codesample'


    //这里写你自己存放语言包的路径
    import '../../public/zh_CN.js'
    export default {
        name: "Tiny",
        props:{
            id:String
        },
        data(){
            return{
                init: {
                    selector: '#' + this.id,
                    language: 'zh_CN',
                    skin_url: 'tinymce/skins/ui/oxide',
                    height: 500,
                    //工具栏
                    toolbar: 'bold italic underline strikethrough | fontsizeselect | ' +
                    'forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | ' +
                    'outdent indent blockquote | undo redo | link unlink image code | removeformat',//false禁用工具栏（隐藏工具栏）
                    //隐藏tinymce的标识
                    branding: false,// 去水印
                    language_url: '/tinymce/langs/zh_CN.js',  //导入语言文件
                    menubar: false,// 隐藏最上方menu菜单
                    browser_spellcheck: true, // 拼写检查
                    statusbar: false, // 隐藏编辑器底部的状态栏
                    elementpath: false,  //禁用下角的当前标签路径
                    paste_data_images: true, // 允许粘贴图像
                    //插件
                    plugins: 'lists image media table wordcount code fullscreen help codesample toc insertdatetime  searchreplace  link charmap paste hr',
                },
                inputTitle:"",
                content:"",
                newContent:"",
                radio1:"",
                radio2:"",
                //将msg传递给父组件
                msg: "false",
            }
        },
        created:function(){

        },
        methods:{
            release(){
                this.content = tinymce.get(this.id).getContent()
                var dd = this.content.replace(/<\/?.+?>/g,"");
                this.newContent = dd.replace(/ /g,"");//dds为得到后的内容
                console.log(this.newContent)

            },
            cancle(){
                this.inputTitle = "";

            }
        },

        mounted () {
            //配置的初始化
            tinymce.init(this.init)
        },
        beforeDestroy() {
            //销毁
            tinymce.get(this.id).destroy();
        },


    }
</script>

<style scoped>

</style>