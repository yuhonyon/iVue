<template>
  <menu-collapse-transition>
    <ul
      :key="+collapse"
      :class="ulClass"
    >
      <slot></slot>
    </ul>
  </menu-collapse-transition>
</template>
<script>
  import emitter from '../../mixins/emitter';
  import { addClass, removeClass, hasClass } from '../../utils/dom';
const prefixCls = 'ivue-menu';
  export default {
    name: 'Menu',

    mixins: [emitter],

    provide() {
      return {
        rootMenu: this
      };
    },

    components: {
      'menu-collapse-transition': {
        functional: true,
        render(createElement, context) {
          const data = {
            props: {
              mode: 'out-in'
            },
            on: {
              beforeEnter(el) {
                el.style.opacity = 0.2;
              },

              enter(el) {
                addClass(el, 'opacity-transition');
                el.style.opacity = 1;
              },

              afterEnter(el) {
                removeClass(el, 'opacity-transition');
                el.style.opacity = '';
              },

              beforeLeave(el) {
                if (!el.dataset) el.dataset = {};

                if (hasClass(el, prefixCls+'-collapse')) {
                  removeClass(el, prefixCls+'-collapse');
                  el.dataset.oldOverflow = el.style.overflow;
                  el.dataset.scrollWidth = el.scrollWidth;
                  addClass(el, prefixCls+'-collapse');
                }

                el.style.width = el.scrollWidth + 'px';
                el.style.overflow = 'hidden';
              },

              leave(el) {
                if (!hasClass(el, prefixCls+'-collapse')) {
                  addClass(el, 'horizontal-collapse-transition');
                  el.style.width = '64px';
                } else {
                  addClass(el, 'horizontal-collapse-transition');
                  el.style.width = el.dataset.scrollWidth + 'px';
                }
              },

              afterLeave(el) {
                removeClass(el, 'horizontal-collapse-transition');
                if (hasClass(el, prefixCls+'-collapse')) {
                  el.style.width = el.dataset.scrollWidth + 'px';
                } else {
                  el.style.width = '64px';
                }
                el.style.overflow = el.dataset.oldOverflow;
              }
            }
          };
          return createElement('transition', data, context.children);
        }
      }
    },
    computed:{
      ulClass(){
        let iClass=[prefixCls]
        if(this.mode==='horizontal'){
          iClass.push(prefixCls+'-horizontal')
        }
        if(this.theme==='dark'){
          iClass.push(prefixCls+'-dark')
        }
        if(this.collapse){
          iClass.push(prefixCls+'-collapse')
        }

        return iClass
      }
    },

    props: {
      mode: {
        type: String,
        default: 'vertical'
      },
      active: {
        type: String,
        default: ''
      },
      open: Array,
      theme: {
        type: String,
        default: 'light'
      },
      accordion: Boolean,
      router: Boolean,
      trigger: {
        type: String,
        default: 'hover'
      },
      collapse: Boolean
    },
    data() {
      return {
        activedName: this.active,
        openedMenus: this.open ? this.open.slice(0) : [],
        items: {},
        submenus: {}
      };
    },
    watch: {
      active(value) {
        const item = this.items[value];
        if (item) {
          this.activedName = item.name;
          this.initOpenedMenu();
        } else {
          this.activedName = '';
        }

      },
      open(value) {
        this.openedMenus = value;
      },
      collapse(value) {
        if (value) this.openedMenus = [];
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
      openMenu(name, namePath) {
        let openedMenus = this.openedMenus;
        if (openedMenus.indexOf(name) !== -1) return;
        // 将不在该菜单路径下的其余菜单收起
        if (this.accordion) {
          this.openedMenus = openedMenus.filter(name => {
            return namePath.indexOf(name) !== -1;
          });
        }
        this.openedMenus.push(name);
      },
      closeMenu(name, namePath) {
        this.openedMenus.splice(this.openedMenus.indexOf(name), 1);
      },
      handleSubmenuClick(submenu) {
        const { name, namePath } = submenu;
        let isOpened = this.openedMenus.indexOf(name) !== -1;

        if (isOpened) {
          this.closeMenu(name, namePath);
          this.$emit('close', name, namePath);
        } else {
          this.openMenu(name, namePath);
          this.$emit('open', name, namePath);
        }
      },
      handleItemClick(item) {
        let { name, namePath } = item;
        this.activedName = item.name;
        this.$emit('select', name, namePath, item);

        if (this.mode === 'horizontal' || this.collapse) {
          this.openedMenus = [];
        }

        if (this.router) {
          this.routeToItem(item);
        }
      },
      // 初始化展开菜单
      initOpenedMenu() {
        const name = this.activedName;
        const activeItem = this.items[name];
        if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

        let namePath = activeItem.namePath;

        // 展开该菜单项的路径上所有子菜单
        namePath.forEach(name => {
          let submenu = this.submenus[name];
          submenu && this.openMenu(name, submenu.namePath);
        });
      },
      routeToItem(item) {
        let route = item.route || item.name;
        try {
          this.$router.push(route);
        } catch (e) {
          console.error(e);
        }
      }
    },
    mounted() {
      this.initOpenedMenu();
      this.$on('item-click', this.handleItemClick);
      this.$on('submenu-click', this.handleSubmenuClick);
    }
  };
</script>
