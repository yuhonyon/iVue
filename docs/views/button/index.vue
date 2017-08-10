<template lang="html">
  <div>
      <markdown></markdown>
  </div>
</template>

<script>
import markdown from "./button.md"
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
  components:{
    markdown
  },
  methods:{
    pageChange(){

    }
  }
}
</script>

<style lang="scss">

</style>
