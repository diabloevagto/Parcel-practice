# parcel practice
parcel 測試，參考此篇連結實做
[Everything You Need To Know About Parcel: The Blazing Fast Web App Bundler](https://medium.freecodecamp.org/all-you-need-to-know-about-parcel-dbe151b70082)

## 安裝 parcel
> npm install parcel-bundler --save-dev

## 實驗原生 js
1. 新增 html & js 檔案
2. 在 package.json 新增 start script
3. 使用 `npm run start` 之後將會啟動 webserver & HMR

## 實驗 scss
1. 新增 scss 檔案
2. 直接執行 `npm run start`，parcel 會自動安裝 `node-sass` 不用自己先安裝

## 實驗 react
1. 新增 react 相關檔案
2. 安裝所需檔案 `npm install babel-preset-env babel-preset-react --save-dev` & `npm install react react-dom`
3. 執行 `npm run start`

## 實驗 vue
1. 新增 vue 相關檔案
2. 安裝所需檔案 `npm install parcel-plugin-vue --save-dev` & `npm install vue`
3. 執行 `npm run start`

## todo
[ ] source map
[ ] vue devtools 無法正確偵測到 vue 元件
[ ] import `vue` 不能直接 from，要改寫成 `'vue/dist/vue.js'`