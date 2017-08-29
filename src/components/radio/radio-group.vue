<template>
  <div :class="prefixCls+'-group'">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../../mixins/emitter';
const prefixCls = 'ivue-radio';
  export default {
  mixins: [Emitter],
  name:'RadioGroup',
    data(){
      return{
        prefixCls:prefixCls
      }
    },
    props: {
      value: {},
      size: String,
      fill: String,
      textColor: String,
      disabled: Boolean
    },
    watch: {
      value(value) {
        this.$emit('change', value);
      }
    }
  };
</script>
