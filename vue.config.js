var path = require('path')
const resolve = (dir) => path.join(__dirname, dir);


let outdir="dist";
if( process.env.NODE_ENV === 'production'){      //执行 npm run build:prod  和 npm run build都会生成dist_prod
    outdir="dist_prod" ;
}else if(process.env.NODE_ENV === 'test'){       //执行 npm run build:test   生成dist_test
    outdir="dist_test" ;
}

module.exports = {
  publicPath: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir:outdir, // 打包生成目录        运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'static', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScrip t 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  filenameHashing: true,
  lintOnSave: false, // 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: {
   // extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {
     less: {
            javascriptEnabled: true //less 配置
     },
     sass: {
            javascriptEnabled: true //sass 配置
     }
	},
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  chainWebpack: () => {},
  configureWebpack: {
	resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js',
          },
          symlinks:true,
	}
  },
  parallel: require("os").cpus().length > 1,
  //反向代理
   devServer: {
     port: 7000,
     https: false,
     disableHostCheck:true,
     hotOnly: false,
     open: true, //配置自动启动浏览器
   // //反向代理  暂不需要
   // //   proxy: 'http://localhost:4000',//配置一个
   //   proxy: {//配置多个
   //     '/hrm/api': {
   //        //target: 'http://192.168.1.209:10751/', // Dev环境
   //        //  target: 'http://192.168.1.238:10751/', // Test环境
   //        // target: 'http://192.168.1.215:10751/', // Rls环境
   //        target: 'http://192.168.1.218:10751/', // 正式环境
   //        changeOrigin: true,
   //        autoRewrite: true,
   //        cookieDomainRewrite: true,
   //        pathRewrite: {
   //          '^/hrm/api/': '/'
   //        }
   //      }
   //    }
   },
  pluginOptions: {
		
  }
}
