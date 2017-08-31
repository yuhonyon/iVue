<template>
  <div class="app-sidebar">
    <Menu acitve="2" >
      <Submenu name="1">
        <template slot="title"><i class="ivue-icon-message"></i>导航一</template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <MenuItem name="1-1">选项1</MenuItem>
          <MenuItem name="1-2">选项2</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="分组2">
          <MenuItem name="1-3">选项3</MenuItem>
        </MenuItemGroup>
        <Submenu name="1-4">
          <template slot="title">选项4</template>
          <MenuItem name="1-4-1">选项1</MenuItem>
        </Submenu>
      </Submenu>
      <MenuItem name="2"><i class="ivue-icon-menu"></i>导航二</MenuItem>
      <MenuItem name="3"><i class="ivue-icon-setting"></i>导航三</MenuItem>
    </Menu>
    <ul>
      <li><router-link to="/component/test">测试</router-link></li>
      <li><router-link to="/component/button">按钮</router-link></li>
      <li><router-link to="/component/form">表单</router-link></li>
      <li><router-link to="/component/page">分页</router-link></li>
      <li><router-link to="/component/modal">模态框</router-link></li>
      <li><router-link to="/component/icon">图标</router-link></li>
    </ul>
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
.app-sidebar{
  position: fixed;
  left: 0;
  top:0;
  bottom:0;
  padding-top: 60px;
  width:200px;
  border-right: 1px solid #ddd;
  z-index: 999;
  background: #f5f5f5;

}
</style>
