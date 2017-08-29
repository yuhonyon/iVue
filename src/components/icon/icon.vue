<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    const prefixCls = 'ivue-icon';


    export default {
        name: 'Icon',
        props: {
            name: String,
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
                return `${prefixCls} ${prefixCls}-${this.name}`;
            },
            styles () {
                let style = {};

                if (this.size) {
                    if(/^[\.\d]*$/.test(this.size)){
                      style['font-size']=`${this.size}px`;
                    }else if(/em$|px$|rem$/.test(this.size)){
                      style['font-size']=this.size;
                    }
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        }
    };
</script>
