export default {
  computed: {
    namePath() {
      var path = [this.name];
      var parent = this.$parent;
      while (parent.$options.name !== 'Menu') {
        if (parent.name) {
          path.unshift(parent.name);
        }
        parent = parent.$parent;
      }
      return path;
    },
    rootMenu() {
      var parent = this.$parent;
      while (
        parent &&
        parent.$options.name !== 'Menu'
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ['Menu', 'Submenu'].indexOf(parent.$options.name) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle() {
      if (this.rootMenu.mode !== 'vertical') return {};

      let padding = 20;
      let parent = this.$parent;

      if (this.rootMenu.collapse) {
        padding = 20;
      } else {
        while (parent && parent.$options.name !== 'Menu') {
          if (parent.$options.name === 'Submenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
      }
      return {paddingLeft: padding + 'px'};
    }
  }
};
