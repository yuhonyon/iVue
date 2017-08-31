<template>
  <li :class="prefixCls+'-item-group'">
    <div :class="prefixCls+'-item-group-title'" :style="{paddingLeft: levelPadding + 'px'}">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
const prefixCls = 'ivue-menu';
  export default {
    name: 'MenuItemGroup',
    inject: ['rootMenu'],
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        paddingLeft: 20,
        prefixCls:prefixCls
      };
    },
    computed: {
      levelPadding() {
        let padding = 10;
        let parent = this.$parent;
        if (this.rootMenu.collapse) return 20;
        while (parent && parent.$options.componentName !== 'ElMenu') {
          if (parent.$options.componentName === 'ElSubmenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
        padding === 10 && (padding = 20);
        return padding;
      }
    }
  };
</script>
