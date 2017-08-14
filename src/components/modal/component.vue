<template>
<transition name="dialog-fade">
  <div :class="prefixCls+'modal-wrapper'" v-show="visible" @click.self="handleWrapperClick">
    <div :class="[sizeClass, customClass,prefixCls+'modal']" ref="modal" :style="style">
      <div :class="prefixCls+'modal-header'">
        <slot name="title">
          <span :class="prefixCls+'modal-title'">{{title}}</span>
        </slot>
        <button type="button" :class="prefixCls+'modal-headerbtn'" aria-label="Close" v-if="showClose" @click="handleClose">
            <i :class="[prefixCls+'modal-close', prefixCls+'icon' ,'icon-close']"></i>
          </button>
      </div>
      <div :class="prefixCls+'modal-body'" v-if="rendered">
        <slot>
          {{content}}
          <div :class="prefixCls+'prompt-input'" v-if="type=='prompt'">
            <input v-model="inputVal" type="text" class="input">
          </div>
        </slot>
      </div>
      <div :class="prefixCls+'modal-footer'" v-if="$slots.footer||type">
        <slot name="footer">
          <button class="button is-primary" @click='ok'>{{okText}}</button>
          <button v-if="type!='alert'" class="button is-default" @click='cancel'>{{cancelText}}</button>
        </slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import Popup from '../../utils/popup';
import emitter from '../../mixins/emitter';
const prefixCls = "i-";
export default {
  mixins: [Popup, emitter],
  data() {
    return {
      prefixCls: prefixCls,
      visible: false,
      callback: null,
      inputVal: "",
      okText: "确定",
      cancelText: "取消"
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    size: {
      type: String,
      default: 'small'
    },

    customClass: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },

    top: {
      type: String,
      default: '15%'
    },
    beforeClose: Function
  },

  watch: {

    value(val) {
      this.visible = val;
      this.$emit('input', val);
      if (val) {
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(() => {
          this.$refs.modal.scrollTop = 0;
        });
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        this.$emit('close');
      }
    }
  },

  computed: {
    sizeClass() {
      return `${prefixCls}modal-${ this.size }`;
    },
    style() {
      return this.size === 'full' ? {} : {
        'top': this.top
      };
    }
  },

  methods: {
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.visible = false;
        this.close()
        this.$emit('input', false);
        this.$emit('change', false);
      }
    },
    ok() {
      if (this.type == "prompt") {
        this.$emit('ok', this.inputVal)
      } else {
        this.$emit('ok')
      }
      this.callback("ok")
      this.handleClose();
    },
    cancel() {
      this.$emit('cancel')
      this.callback("cancel")
      this.handleClose();
    },
    updatePopper() {

    }
  },

  mounted() {
    if (this.value) {
      this.rendered = true;
      this.open();
    }
  }
};
</script>
<style lang="scss">
@import "./modal";
</style>
