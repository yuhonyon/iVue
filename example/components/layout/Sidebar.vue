<template>
<div class="app-sidebar">
  <Menu acitve="/component/test" :router="true">
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
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.app-sidebar {
  overflow: auto;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    padding-top: 60px;
    width: 250px;
    border-right: 1px solid #ddd;
    z-index: 999;
    background: #f5f5f5;
}
</style>
