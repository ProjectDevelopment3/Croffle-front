const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://34.64.32.174:8080/",
        changeOrigin: true,
      },
      "/v1": {
        target: "https://openapi.naver.com/",
        changeOrigin: true,
      },
      "/v2": {
        target: "https://api.ipify.org?format=json/",
        changeOrigin: true,
      },
      "/v3": {
        target: "https://geolocation.apigw.ntruss.com",
        changeOrigin: true,
      },
      // "/": {
      //   target: "http://34.64.32.174:8080/",
      //   changeOrigin: true,
      // },
    },
  },
});
