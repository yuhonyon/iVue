<template>
  <div class="app-sidebar">
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
  li{
    height: 32px;
    padding-left: 30px;
    line-height: 32px;
    cursor: pointer;
  }
}
</style>
