---
  title: 表单状态
  desc: 类名`.is-success`、`.is-danger`、`.is-warning`
  order: 1
---

```vue
<template>
<div class="field">
  <label class="label">姓名</label>
  <div class="control">
    <input class="input is-danger" type="text" placeholder="请输入姓名">
  </div>
</div>
<div class="field">
  <label class="label">提示</label>
  <div class="control">
    <input class="input is-success" type="text" placeholder="请出入中文名" value="bulma">
  </div>
  <p class="help is-success">提示:只能输入中文</p>
</div>
<div class="field">
  <label class="label">提示</label>
  <div class="control">
    <input class="input is-warning" type="text" placeholder="请出入中文名" value="bulma">
  </div>
  <p class="help is-warning">提示:只能输入中文</p>
</div>
</template>
```
