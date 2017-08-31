<template>
  <li
    :style="paddingStyle"
    @click="handleClick"
    :class="[{
      'is-active': active,
      'is-disabled': disabled
    },prefixCls+'-item']">
    <Tooltip
      v-if="$parent === rootMenu && rootMenu.collapse"
      effect="dark"
      placement="right">
      <div slot="content"><slot name="title"></slot></div>
      <div style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;">
        <slot></slot>
      </div>
    </Tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>
<script>
  import Menu from './menu-mixin';
  import Emitter from '../../mixins/emitter';
const prefixCls = 'ivue-menu';
  export default {
    name: 'MenuItem',


    mixins: [Menu, Emitter],
    data(){
      return{
        prefixCls:prefixCls
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      route: {
        type: Object,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      active() {
        return this.name === this.rootMenu.activedName;
      }
    },
    methods: {
      handleClick() {
        this.dispatch('Menu', 'item-click', this);
        this.$emit('click', this);
      }
    },
    created() {
      this.parentMenu.addItem(this);
      this.rootMenu.addItem(this);
    },
    beforeDestroy() {
      this.parentMenu.removeItem(this);
      this.rootMenu.removeItem(this);
    }
  };
</script>
