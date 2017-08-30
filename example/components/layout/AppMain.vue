<template>
  <section class="app-main">
    <div class="app-content">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.app-main{
  padding: 50px 0 0 200px;
  .app-content{
    margin: 20px;
    background: #fff;
    padding:40px 25px;
  }
}
</style>
