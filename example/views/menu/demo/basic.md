---
  title: "小标题"
  desc: "描述"
  order: 0
---



```vue
<template>
<div style="width:250px">
<Menu acitve="/component/test" :router="true" >
  <MenuItemGroup title="测试">
    <MenuItem name="/component/test">组件测试</MenuItem>
  </MenuItemGroup>
  <MenuItemGroup title="基础样式">
    <MenuItem name="/component/button">按钮</MenuItem>
    <MenuItem name="/component/form">表单</MenuItem>
  </MenuItemGroup>
  <MenuItemGroup title="组件">
    <MenuItem name="/component/icon">图标Icon</MenuItem>
    <MenuItem name="/component/tabs">切换Tabs</MenuItem>
    <MenuItem name="/component/modal">模态框Modal</MenuItem>
    <MenuItem name="/component/page">分页Page</MenuItem>
    <MenuItem name="/component/checkbox">多选框Checkbox</MenuItem>
    <MenuItem name="/component/radio">单选框Radio</MenuItem>
    <MenuItem name="/component/switch">开关Switch</MenuItem>
    <MenuItem name="/component/menu">菜单Menu</MenuItem>
    <MenuItem name="/component/tooltip">提示工具Tooltip</MenuItem>
    <MenuItem name="/component/popover">弹窗框Popover</MenuItem>
  </MenuItemGroup>
</Menu>
</div>
</template>

```
