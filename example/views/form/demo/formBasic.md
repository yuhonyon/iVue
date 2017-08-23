---
  title: 基础表单
  desc: 类名`.input`、`.select`、`.radio`、`.checkbox`、`.textarea`、`.lable`、`.help`
  order: 0
---

```vue
<template>
<div class="field">
  <label class="label">姓名</label>
  <div class="control">
    <input class="input" type="text" placeholder="请输入姓名">
  </div>
</div>
<div class="field">
  <label class="label">选择</label>
  <div class="control">
    <div class="select">
      <select>
        <option>选项一</option>
        <option>选项二</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <label class="label">性别</label>
  <div class="control">
    <label for="" class="radio">
      <input type="radio">男
    </label>
    <label for="" class="radio">
      <input type="radio">女
    </label>
    <label for="" class="radio">
      <input type="radio">其他
    </label>
  </div>
</div>
<div class="field">
  <label class="label">财富</label>
  <div class="control">
    <label for="" class="checkbox">
      <input type="checkbox">钱
    </label>
    <label for="" class="checkbox">
      <input type="checkbox">房
    </label>
    <label for="" class="checkbox">
      <input type="checkbox">票
    </label>
  </div>
</div>
<div class="field">
  <label class="label">记录</label>
  <div class="control">
    <textarea name="name" class="textarea" rows="3" cols="80"></textarea>
  </div>
</div>
<div class="field">
  <label class="label">提示</label>
  <div class="control">
    <input class="input" type="text" placeholder="请出入中文名" value="bulma">
  </div>
  <p class="help">提示:只能输入中文</p>
</div>
</template>
```
