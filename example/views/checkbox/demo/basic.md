---
  title: "小标题"
  desc: "描述"
  order: 0
---



```vue
<template>
  <CheckboxGroup v-model="checkList">
    <Checkbox label="复选框 A"></Checkbox>
    <Checkbox label="复选框 B"></Checkbox>
    <Checkbox label="复选框 C"></Checkbox>
    <Checkbox label="禁用" disabled></Checkbox>
    <Checkbox label="选中且禁用" disabled></Checkbox>
  </CheckboxGroup>
</template>
<script>
  export default{
    data(){
      return{
        checkList:['复选框 A']
      }
    }
  }
</script>

```
