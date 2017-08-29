<template>
  <label :class="prefixCls">
    <span
      :class="[{
        'is-disabled': disabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      },prefixCls+'-input']"
    >
      <span :class="prefixCls+'-inner'"></span>
      <input
        v-if="trueLabel || falseLabel"
        :class="prefixCls+'-original'"
        type="checkbox"
        :name="name"
        :disabled="disabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        :class="prefixCls+'-original'"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span :class="prefixCls+'-label'" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../mixins/emitter';
import { findComponentUpward } from '../../utils/vdom';
const prefixCls = 'ivue-checkbox';
  export default {
    name: 'Checkbox',

    mixins: [Emitter],



    data() {
      return {
        selfModel: false,
        focus: false,
        prefixCls:prefixCls
      };
    },

    computed: {
      parent(){
        return findComponentUpward(this,"CheckboxGroup")
      },
      model: {
        get() {
          return this.isGroup
            ? this.store : this.value !== undefined
            ? this.value : this.selfModel;
        },

        set(val) {
          if (this.isGroup) {
            let isLimitExceeded = false;
            (this.parent.min !== undefined &&
              val.length < this.parent.min &&
              (isLimitExceeded = true));

            (this.parent.max !== undefined &&
              val.length > this.parent.max &&
              (isLimitExceeded = true));

            isLimitExceeded === false &&
            this.dispatch('ElCheckboxGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
            this.selfModel = val;
          }
        }
      },

      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
      },

      isGroup() {
        return !!this.parent;
      },

      store() {
        return this.parent ? this.parent.value : this.value;
      }
    },

    props: {
      value: {},
      label: {},
      indeterminate: Boolean,
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },

    methods: {
      addToStore() {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model = this.trueLabel || true;
        }
      },
      handleChange(ev) {
        this.$emit('change', ev);
        if (this.isGroup) {
          this.$nextTick(_ => {
            this.dispatch('ElCheckboxGroup', 'change', [this.parent.value]);
          });
        }
      }
    },

    created() {
      this.checked && this.addToStore();
    }
  };
</script>
