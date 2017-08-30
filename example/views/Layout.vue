<template>
  <div class="app-layout">
      <header-nav></header-nav>
      <sidebar></sidebar>
      <app-main></app-main>
  </div>
</template>
<script>
import {AppMain,Sidebar,HeaderNav} from '../components/layout'
export default {
  name: "Layout",
  data: () => ({

  }),
  components: {
    AppMain,Sidebar,HeaderNav
  }
}
</script>
<style lang="scss" scoped>
.app-layout{
  background: #eee;
  min-height: 100%;
}
</style>
