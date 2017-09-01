---
  title: ""
  desc: ""
  order: 0
---



```vue
<template>
<Popover
  ref="popover1"
  placement="top-start"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</Popover>

<Popover
  ref="popover2"
  placement="bottom"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</Popover>

<button class='button' v-popover:popover1>hover 激活</button>
<button class='button' v-popover:popover2>click 激活</button>
<Popover
  placement="right"
  title="标题"
  width="200"
  trigger="focus"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <button class='button' slot="reference">focus 激活</button>
</Popover>
</template>

```
