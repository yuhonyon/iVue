---
  title: "小标题"
  desc: "描述"
  order: 0
---



```vue
<template>
  <RadioGroup v-model="radio2">
    <Radio :label="3">备选项</Radio>
    <Radio :label="6">备选项</Radio>
    <Radio :label="9">备选项</Radio>
  </RadioGroup>
</template>

<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```
