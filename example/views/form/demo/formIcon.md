---
  title: 带图标表单
  desc: 类名`.is-success`、`.is-danger`、`.is-warning`
  order: 2
---

```vue
<template>
  <div class="field">
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Email">
      <span class="icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fa fa-check"></i>
      </span>
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
