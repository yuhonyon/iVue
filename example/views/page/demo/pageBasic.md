---
  title: 基本使用
  order: 0
---

```vue
<template>
  <div>
    <page @on-change="pageChange" :total="pageConfig.total" :page-size="pageConfig.pageSize" :current="pageConfig.page"  show-elevator></page>
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
```
