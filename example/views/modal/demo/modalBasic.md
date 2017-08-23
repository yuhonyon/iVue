---
  title: 基本使用
  order: 0
---

```vue
<template>
  <div>
    <modal v-model="showMoal" :title="'题目'">你好吗</modal>
    <button @click="showMoal=true" class="button  is-primary">按钮</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      showMoal:false
    }
  },
  mounted() {
    this.$message.prompt("提示","确认删除当天的胰岛素方案吗？").then((action) => {
        console.log(action)
      })
  }
}
</script>
```
