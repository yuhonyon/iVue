<template>
  <div class="app-nav">
    <div class="app-nav-content">
      <div class="app-nav-left">
        ivue logo
      </div>

      <div class="app-nav-right">
        <router-link to="/">主页</router-link>
        <router-link to="/component">组件</router-link>
        <router-link to="/">关于</router-link>
      </div>
    </div>
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
  .app-nav{
    height: 50px;
    line-height: 50px;
    background: #09c;
    color: #fff;
    padding: 0 25px;
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    z-index: 1000;
    .app-nav-left{
      float: left;
    }
    .app-nav-right{
      float: right;
    }
  }
</style>
