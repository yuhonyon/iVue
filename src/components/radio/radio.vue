<template>
  <label :class="prefixCls">
    <span
      :class="[{
        'is-disabled': isDisabled,
        'is-checked': model === label,
        'is-focus': focus,
      },prefixCls+'-input']"
    >
      <span :class="prefixCls+'-inner'"></span>
      <input
        :class="prefixCls+'-original'"
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled">
    </span>
    <span :class="prefixCls+'-label'">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from '../../mixins/emitter';
import { findComponentUpward } from '../../utils/vdom';
const prefixCls = 'ivue-radio';
  export default {
    name:"Radio",

    mixins: [Emitter],


    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String
    },

    data() {
      return {
        prefixCls: prefixCls,
        focus: false
      };
    },

    computed: {
      parent(){
        return findComponentUpward(this, 'RadioGroup')
      },
      isGroup() {
        return !!this.parent
      },

      model: {
        get() {
          return this.isGroup ? this.parent.value : this.value;
        },

        set(val) {
          if (this.isGroup) {
            this.dispatch('RadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },

      isDisabled() {
        return this.isGroup
          ? this.parent.disabled || this.disabled
          : this.disabled;
      }
    }
  };
</script>
