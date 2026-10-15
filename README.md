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

```
# cmd
npm init vue@latest
```

## 安装依赖

```
# cmd
npm i
```

## 运行

```
# cmd
npm run dev
```

## vue-official

vscode 的语法插件

# 目录变化

## vite.config.js

基于 vite 的配置文件

## main.js

```
// main.js
new Vue() => createApp()
createRouter() createStore()
```

封装实例保障独立性

## App.vue

先 `<script setup/>`，再 `<template/>`,后 `<style/>`
允许多个多根元素

# 组合式 api

## Setup

早于 beforecreate 钩子
this 为 undefined
需要 return

```
<!-- html -->
<!-- 为Setup的语法糖，省略return -->
<script setup></script>
```

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

```
// js
const * = computed(() => {
  return *
})
```

## watch

需导入
作用与 vue2 一致

```
// js
watch(*, (n, o) => *, { immediate, deep })
```

### 监听多数据

```
watch([*, *], (n, o) => *)
```

### 监听具体属性

```
watch(() => *.*, (n, o) => *)
```

## 生命周期

需导入

```
// js
beforeCreate/created => setup
beforeMount/mounted => onBeforeMount/onMounted
beforeUpdate/updated => onBeforeUpdate/onUpdated
beforeDestroy/destroyed => onBeforeUnmount/onUnmounted
```

## props

通过 defineProps 编译器宏挂载，解析时转换

```
// js
const props = defineProps(['*'])
props.* // 获取

<!-- html -->
{{ * }}
```

## emit

通过 defineEmits 编译器宏挂载，解析时转换

```
// js
const emit = defineEmits(['*'])
emit('*', *)
```

## 模板引用

需导入 ref
先创建 ref 对象，然后在元素 ref 里绑定

```
// js
const * = ref()

<!-- html -->
<* ref="*" />
```

## defineExpose

setup 内的属性和方法默认不暴露

通过 defineExpose 指定暴露的属性和方法

```
// js
defineExpose({*})
```

## provide&inject

跨层通信,可以传递方法
provide 方法传递的参数会被 inject 方法接收

```
// js
provide('*', *) // 组组件

const * = inject('*') // 子组件
```

## defineOptions

vue3.3 以上，定义 options api 选项

```
// js
defineOptions({
  name: '',
})
```

## v-model

vue3.3 以上
原使用 props&emit 实现双向绑定

```
<* :modelValue="*" @update:modelValue="* = $event"> => <* v-model="*"/>
```

### defineModel

前期版本需导入和配置 vite.config.js
通过 defineModel 实现双向绑定，可直接“修改”

```
// js
const * = defineModel()
```

# pinia

vue3 的状态管理工具，vuex => pinia
更简单的 api，组合式 api

## 安装

```
# cmd
npm i pinia
```

## 配置

main.js 创建 pinia 实例并应用

```
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
```

## 使用

src 目录下创建 store/\*.js

```
// store.js
import { defineStore } from 'pinia
```

### 选项式

```
// store.js
import { defineStore } from "pinia";
export const use*Store = defineStore('*',{
  state: () => {
    return {*}
  },
  actions: {
    *() {
      this.* = *
    },
  },
  getters: {
    *: (state) => {
      return state.*
    }
  },
})

// js
import { use*Store } from '@/store/*'
*().*
```

### 组合式

```
// store.js
import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const use*Store = defineStore('*', () => {
  const * = ref(*) // state
  const * = () => *.value = * // action
  const * = computed(() => *.value = *) // getter
  return{*}
})

// 使用同上
```

## storeToRefs

需导入
Store 属性不能解构，否则丢失响应式，方法可以解构
可使用 storeToRefs 解构

```
// js
const {*} = storeToRefs(*())
```

## pinia-plugin-persistedstate

pinia 持久化插件
与 vuex-persistedstate 相似的 api

### 安装

```
# cmd
npm i pinia-plugin-persistedstate
```

### 注册

src/main.js 下

```
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
createApp(App).use(pinia.use(persist)).mount('#app')
```

### 使用

```
// store.js
export const use*Store = defineStore('*',{
  ...,
  persist: true
})

export const use*Store = defineStore('*', () => {}, { persist: true })
```

### 配置

```
// store.js
persist: {
  key: '*', // 指定存储的 key
  storage: sessionStorage, // 指定存储方式，默认 localStorage
  paths: ['*'] // 指定持久化的属性
}
```

# router

```
# cmd
npm install vue-router@4
```

```
// router.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./*') }
]

export default createRouter({ // 创建路由实例
  history: createWebHistory(), // 使用 history 模式，参数为路径前缀，可为环境变量
  routes,
})
```

```
// main.js
import router from './router'

createApp(App).use(router).mount('#app')
```

```
<!-- html -->
<router-view />
```

```
// js
useRouter() // 获取 router 对象
useRoute() // 获取 route 参数
```

## beforeEach

不再需要 next

```
// router.js
router.beforeEach((to, from) => {
  if (*) return '/*' // true/undefined放行，false返回，url 跳转
})
```

# 环境变量

import.meta.env 对象暴露的内建变量
import.meta.env.BASE_URL 为 vite.config.js 中的 bash 项
