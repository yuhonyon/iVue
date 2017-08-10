<template lang="html">
  <div>
    <page @on-change="pageChange" :total="pageConfig.total" :page-size="pageConfig.pageSize" :current="pageConfig.page"  show-elevator></page>

    <button class="btn  btn-primary">按钮</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageConfig:{
        pageSize:5,
        page:1,
        total:200
      }
    }
  },
  methods:{
    pageChange(){

    }
  }
}
</script>

<style lang="scss">

</style>
