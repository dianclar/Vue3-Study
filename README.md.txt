# Vue3-Study

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# Vue3
更易维护
更快速度
更小体积
更优响应

# 构建Vue项目create-Vue
cli基于webpack
create基于vite

## 初始化
npm init vue@latest

## 安装依赖
npm i

## 运行
npm run dev

## vue-official
vscode的语法插件

# 目录变化

## vite.config.js
基于vite的配置文件

## main.js
new Vue() => createApp()
createRouter() createStore()
封装实例保障独立性

## App.vue
先<script setup/>，再<template/>,后<style/>
允许多个多根元素

# 组合式api

## Setup
早于beforecreate钩子
this为undefined
需要return

<script setup/>为Setup的语法糖，省略return

## reactive
接受对象并返回响应式对象

## ref
接受数据并返回响应式对象
通过value属性获取，<template/>里不需要
推荐统一使用ref

## computed
作用与vue2一致
const * = computed(()=>{
  return *
})

## watch
作用与vue2一致
watch(*,(n,o)=>*,{immediate,deep})
监听具体属性时
watch(()=>*.*,(n,o)=>*)


