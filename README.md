#React Webpack Gulp 的使用、配置与注意事项

#根据配置安装依赖组件

    npm install 

#webpack多入口、多生成路径配置

    entry:config.entry,
    config.js
    entry:{
        'app' : './public/jsx/app.js',
        'blog/blog' : './public/jsx/blog/blog.js'
    }

#webpack 运行与监控

    webpack --b --progress -w

#Gulp 运行命令

    gulp
    
#webpack 运行shell脚本

    #!/bin/bash
    webpack -d --progress --config webpack.config.babel.js --display-modules --display-reasons --display-error-details

#webpack 配置注意事项

    一般配置名
    >webpack.config.js
    webpack配置可以用ES6编写但是名字必须改为
    >webpack.config.babel.js
    
#webpack 第三方模块引用

    new webpack.ProvidePlugin({
            $:'jquery',
            _:'lodash'
    })

#webpack React 使用ES6编写，编译配置

    {
          test: /\.js$/,
          loader: 'babel',
          query: {
                presets:['react','es2015']
          }
    }
