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

# 构建 Vue 项目 create-Vue

cli 基于 webpack
create 基于 vite

## 初始化

npm init vue@latest

## 安装依赖

npm i

## 运行

npm run dev

## vue-official

vscode 的语法插件

# 目录变化

## vite.config.js

基于 vite 的配置文件

## main.js

new Vue() => createApp()
createRouter() createStore()
封装实例保障独立性

## App.vue

先 `<script setup/>`，再 `<template/>`,后 `<style/>`
允许多个多根元素

# 组合式 api

## Setup

早于 beforecreate 钩子
this 为 undefined
需要 return

<script setup></script>为Setup的语法糖，省略return

## reactive

需导入
接受对象并返回响应式对象

## ref

需导入
接受数据并返回响应式对象
通过 value 属性获取，<template/>里不需要
推荐统一使用 ref

## computed

需导入
作用与 vue2 一致
const _ = computed(()=>{
return _
})

## watch

需导入
作用与 vue2 一致
watch(_,(n,o)=>_,{immediate,deep})

### 监听多数据

watch([*,*],(n,o)=>\*)

### 监听具体属性

watch(()=>_._,(n,o)=>\*)

## 生命周期

需导入
beforeCreate/created => setup
beforeMount/mounted => onBeforeMount/onMounted
beforeUpdate/updated => onBeforeUpdate/onUpdated
beforeDestroy/destroyed => onBeforeUnmount/onUnmounted

## props

通过 defineProps 编译器宏挂载，解析时转换
const props = defineProps(['*'])
通过 props.\*属性获取，<template/>里不需要

## emit

通过 defineEmits 编译器宏挂载，解析时转换
const emit = defineEmits(['*'])

emit('_',_)

## 模板引用

需导入 ref
先创建 ref 对象，然后在<template/>里绑定
const \* = ref(null)

<_ ref="_"/>

## defineExpose

<script setup></script>内的属性和方法默认不暴露

通过 defineExpose 指定暴露的属性和方法
defineExpose({\*})

## provide&inject

跨层通信,可以传递方法
provide 方法传递的参数会被 inject 方法接收
provide('_',_)

const _ = inject('_')

## defineOptions

vue3.3 以上，定义 options api 选项
defineOptions({
name: '',
})

## v-model

vue3.3 以上
<_ v-model="_"/> => <_ :modelValue="_" @update:modelValue="\*=$event">
原使用 props&emit 实现双向绑定

### defineModel

前期版本需导入和配置 vite.config.js
通过 defineModel 实现双向绑定，可直接“修改”
const \* = defineModel()

# pinia

vue3 的状态管理工具，vuex => pinia
更简单的 api，组合式 api

## 安装

npm i pinia

## 配置

main.js 创建 pinia 实例并应用
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')

## 使用

src 目录下创建 store/ \*.js
import { defineStore } from 'pinia

### 选项式

import { defineStore } from "pinia";
export const use*Store = defineStore('*',{
state: () => {
return {_}
},
actions: {
_() {
this._ =
},
},
getters: {
_: (state) => {
return state.\*
}
},
})

import { use*Store } from '@/store/*'
_()._

### 组合式

import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const use*Store = defineStore('*',()=>{
const _ = ref(_)
const _ = () => _.value = _
const _ = computed(()=>_.value=_)
return{ \*
}
})

import { use*Store } from '@/store/*'
_()._

## storeToRefs

需导入
Store 属性不能解构，否则丢失响应式，方法可以解构
可使用 storeToRefs 解构
const {_} = storeToRefs(_())

## pinia-plugin-persistedstate

pinia 持久化插件
与 vuex-persistedstate 相似的 api

### 安装

npm i pinia-plugin-persistedstate

### 注册

src/main.js 下
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
createApp(App).use(pinia.use(persist)).mount('#app')

### 使用

export const use*Store = defineStore('*',{
persist: true
})

export const use*Store = defineStore('*',()=>{},{persist: true})

### 配置

persist: {
key: '_',
storage: sessionStorage,
paths: ['_']
}
