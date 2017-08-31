<template>
  <li
    :class="[{
      'is-active': active,
      'is-opened': opened
    },prefixCls+'-submenu']"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div :class="prefixCls+'-submenu-title'" ref="submenu-title" @click="handleClick" :style="paddingStyle">
      <slot name="title"></slot>
      <i :class="iconClass">
      </i>
    </div>
    <template v-if="rootMenu.mode === 'horizontal' || (rootMenu.mode === 'vertical' && rootMenu.collapse)">
      <transition :name="menuTransitionName">
        <ul :class="prefixCls" v-show="opened"><slot></slot></ul>
      </transition>
    </template>
    <collapse-transition v-else>
      <ul :class="prefixCls" v-show="opened"><slot></slot></ul>
    </collapse-transition>
  </li>
</template>
<script>
  import CollapseTransition from '../../utils/collapse-transition';
  import menuMixin from './menu-mixin';
  import Emitter from '../../mixins/emitter';

  const prefixCls = 'ivue-menu';
  export default {
    name: 'Submenu',



    mixins: [menuMixin, Emitter],

    components: { CollapseTransition },

    props: {
      name: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        timeout: null,
        items: {},
        submenus: {},
        prefixCls:prefixCls
      };
    },
    computed: {
      iconClass(){
        let iClass=[prefixCls+"-submenu-icon-arrow"];
        if(this.rootMenu.mode === 'horizontal'){
          iClass.push(prefixCls+'-icon-caret-bottom')
        }else{
          iClass.push(prefixCls+'-icon-arrow-down')
          if(this.rootMenu.collapse){
            iClass.push(prefixCls+'-icon-caret-right')
          }
        }
        return iClass
      },
      menuTransitionName() {
        return this.rootMenu.collapse ? 'zoom-in-left' : 'zoom-in-top';
      },
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.name) > -1;
      },
      active: {
        cache: false,
        get() {
          let isActive = false;
          const submenus = this.submenus;
          const items = this.items;

          Object.keys(items).forEach(name => {
            if (items[name].active) {
              isActive = true;
            }
          });

          Object.keys(submenus).forEach(name => {
            if (submenus[name].active) {
              isActive = true;
            }
          });

          return isActive;
        }
      }
    },
    methods: {
      addItem(item) {
        this.$set(this.items, item.name, item);
      },
      removeItem(item) {
        delete this.items[item.name];
      },
      addSubmenu(item) {
        this.$set(this.submenus, item.name, item);
      },
      removeSubmenu(item) {
        delete this.submenus[item.name];
      },
      handleClick() {
        const {rootMenu} = this;
        if (
          (rootMenu.trigger === 'hover' && rootMenu.mode === 'horizontal') ||
          (rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        this.dispatch('Menu', 'submenu-click', this);
      },
      handleMouseenter() {
        const {rootMenu} = this;
        if (
          (rootMenu.trigger === 'click' && rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.name, this.namePath);
        }, 300);
      },
      handleMouseleave() {
        const {rootMenu} = this;
        if (
          (rootMenu.trigger === 'click' && rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.name, this.namePath);
        }, 300);
      }
    },
    created() {
      this.parentMenu.addSubmenu(this);
      this.rootMenu.addSubmenu(this);
    },
    beforeDestroy() {
      this.parentMenu.removeSubmenu(this);
      this.rootMenu.removeSubmenu(this);
    }
  };
</script>
