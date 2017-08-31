<template>
  <div class="app-nav">
    <div class="app-nav-content">
      <div class="app-nav-left">
        <router-link tag="span" to="/">IVue UI</router-link>
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
    height: 60px;
    line-height: 60px;
    background: #00afe9;
    color: #fff;
    padding: 0 25px;
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    z-index: 1000;
    .app-nav-left{
      font-size: 30px;
      font-weight: bold;
      float: left;
    }
    .app-nav-right{
      float: right;
      a{
        color: #fff;
        margin-left: 20px;
      }
    }

  }
</style>
