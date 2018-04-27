<template>
    <div :style="warpStyle" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
import {cls,size} from '../../utils';
const prefixCls = cls('buttongroup');
const btnCls = cls('button');
export default {
    name:'ButtonGroup',
    props:{
        type:{
            type:String,
            validator (value) {
                return ['primary','info', 'success', 'warning', 'error'].includes(value);
            }
        },
        mini:{
            type:Boolean,
            default:false
        },
        plain:{
            type:Boolean,
            default:false
        },
        stiff:{
            type:Boolean
        },
        margin:{
            type:[String,Number],
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        //将按钮竖着排列
        vertical:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {}
    },
    mounted(){
        this.$slots.default.forEach((ref)=>{
            if(ref.elm.classList){
                let c = ref.elm.classList;
                this.type && c.add(`${btnCls}-type-${this.type}`)
                this.mini && c.add(`${btnCls}-mini`);
                this.plain && c.add(`${btnCls}-plain`);
                this.loading && c.add(`${btnCls}-loading`);
                this.disabled && c.add(`${btnCls}-disabled`);
            }
        })
    },
    computed:{
        classes(){
            return [
                prefixCls,
                {
                    [`${prefixCls}-stiff`]:this.stiff,
                    [`${prefixCls}-vertical`]:this.vertical
                }
            ]
        },
        warpStyle(){
            if(this.margin)
                return {margin:size(this.margin)}
        }
    }
}
</script>

<style lang="stylus">
@import "~css/config"
pre-group = cls('buttongroup')
pre-btn = cls('button')
.{pre-group}
    display flex
    overflow hidden
    .{pre-btn}
        flex 1
        margin 0
        border-radius 0
        &:first-child
            border-radius 5px 0 0 5px
        &:last-child
            border-radius 0 5px 5px 0
        &.{pre-btn}-plain:not(:first-child)
            border-left-width 0
    &.{pre-group}-stiff
        .{pre-btn}
            &:first-child
                border-radius 0
            &:last-child
                border-radius 0
    &.{pre-group}-vertical
        display block
        .{pre-btn}
        .{pre-btn}.{pre-btn}-plain
            flex none 
            display block
            border-radius 0
            margin 0
            width 100%
            border-bottom-width 0
            &:first-child
                border-radius 5px 5px 0 0
            &:last-child
                border-radius 0 0 5px 5px
                border-bottom-width 1px
            &.{pre-btn}-plain:not(:first-child)
                border-left-width 1px
</style>

