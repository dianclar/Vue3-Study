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
通过value属性获取，<template/>里不需要
推荐统一使用ref

## computed
需导入
作用与vue2一致
const * = computed(()=>{
  return *
})

## watch
需导入
作用与vue2一致
watch(*,(n,o)=>*,{immediate,deep})

### 监听多数据
watch([*,*],(n,o)=>*)

### 监听具体属性
watch(()=>*.*,(n,o)=>*)

## 生命周期
需导入
beforeCreate/created    => setup
beforeMount/mounted     => onBeforeMount/onMounted
beforeUpdate/updated    => onBeforeUpdate/onUpdated
beforeDestroy/destroyed => onBeforeUnmount/onUnmounted

## props
通过defineProps编译器宏挂载，解析时转换
const props = defineProps(['*'])
通过props.*属性获取，<template/>里不需要

## emit
通过defineEmits编译器宏挂载，解析时转换
const emit = defineEmits(['*'])

emit('*',*)

## 模板引用
需导入ref
先创建ref对象，然后在<template/>里绑定
const * = ref(null)

<* ref="*"/>

##  defineExpose
<script setup></script>内的属性和方法默认不暴露
通过defineExpose指定暴露的属性和方法
defineExpose({*})

## provide&inject
跨层通信,可以传递方法
provide方法传递的参数会被inject方法接收
provide('*',*)

const * = inject('*')

## defineOptions
vue3.3以上，定义options api选项
defineOptions({
    name: '',
})

## v-model
vue3.3以上
<* v-model="*"/> => <* :modelValue="*" @update:modelValue="*=$event">
原使用props&emit实现双向绑定

### defineModel
前期版本需导入和配置vite.config.js
通过defineModel实现双向绑定，可直接“修改”
const * = defineModel()

# pinia
vue3的状态管理工具，vuex => pinia
更简单的api，组合式api

## 安装
npm i pinia

## 配置
main.js创建pinia实例并应用
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')

## 使用
src目录下创建store/ *.js
import { defineStore } from 'pinia

### 选项式

import { defineStore } from "pinia";
export const use*Store = defineStore('*',{
  state: () => {
    return {*}
  },
  actions: {
    *() {
      this.* =
    },
  },
  getters: {
    *: (state) => {
	  return state.*
    }
  },
})

import { use*Store } from '@/store/*'
*().*

### 组合式
import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const use*Store = defineStore('*',()=>{
  const * = ref(*)
  const * = () => *.value = *
  const * = computed(()=>*.value=*)
  return{
    *
  }
})

import { use*Store } from '@/store/*'
*().*

## storeToRefs
需导入
Store属性不能解构，否则丢失响应式,方法可以解构
可使用storeToRefs解构
const {*} = storeToRefs(*())
