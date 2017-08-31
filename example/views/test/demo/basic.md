---
  title: ""
  desc: ""
  order: 0
---



```vue
<template>
<Menu theme="dark" :active="activeName" class="Menu-demo" mode="horizontal" @select="handleSelect">
  <Menu-item name="1">处理中心</Menu-item>
  <Submenu name="2">
    <template slot="title">我的工作台</template>
    <Menu-item name="2-1">选项1</Menu-item>
    <Menu-item name="2-2">选项2</Menu-item>
    <Menu-item name="2-3">选项3</Menu-item>
  </Submenu>
  <Menu-item name="3"><a href="" target="_blank">订单管理</a></Menu-item>
</Menu>
<div class="line"></div>
<Menu :active="activeName2" class="Menu-demo" mode="horizontal" @select="handleSelect">
  <Menu-item name="1">处理中心</Menu-item>
  <Submenu name="2">
    <template slot="title">我的工作台</template>
    <Menu-item name="2-1">选项1</Menu-item>
    <Menu-item name="2-2">选项2</Menu-item>
    <Menu-item name="2-3">选项3</Menu-item>
  </Submenu>
  <Menu-item name="3"><a href="" target="_blank">订单管理</a></Menu-item>
</Menu>
</template>
<script>

  export default {
    data() {
      return {
        activeName: '1',
        activeName2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
