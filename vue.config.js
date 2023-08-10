const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
     transpileDependencies: true,
     //关闭eslint
     lintOnSave: false,
     //代理跨域
     devServer: {
          port: 8000,
          proxy: {
               '/api': {
                    target: 'http://gmall-h5-api.atguigu.cn',
               },
          },
     },
})
