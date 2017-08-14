<template lang="html">
  <div>
    <page @on-change="pageChange" :total="pageConfig.total" :page-size="pageConfig.pageSize" :current="pageConfig.page"  show-elevator></page>
    <modal v-model="showMoal" :title="'题目'">你好吗</modal>
    <button @click="showMoal=true" class="button  is-primary">按钮</button>


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
      },
      showMoal:false
    }
  },
  mounted() {
    this.$message.prompt("提示","确认删除当天的胰岛素方案吗？").then((action) => {
        console.log(action)
      })
  },
  methods:{
    pageChange(){

    }
  }
}
</script>

<style lang="scss">

</style>
