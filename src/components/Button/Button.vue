<template>
    <div @click="emitClick" :class="classes" :style="warpStyle">
        <i v-if="icoClasses" :class="icoClasses"></i>
        <slot></slot>
    </div>
</template>
<script>
import {cls,size} from '../../utils';
const prefixCls = cls('button');

export default {
    name:'Button',
    props:{
        type:{
            type:String,
            default:'primary',
            validator (value) {
                return ['primary','info', 'success', 'warning', 'error'].includes(value);
            }
        },
        // 小号按钮
        mini:{
            type:Boolean,
            default:false
        },
        // 空心按钮
        plain:{
            type:Boolean,
            default:false
        },
        // 宽度100%
        inline:{
            type:Boolean,
            default:false
        },
        // 禁用按钮
        disabled:{
            type:Boolean,
            default:false
        },
        // 加载动画按钮
        loading:{
            type:Boolean,
            default:false
        },
        // 按钮图标
        ico:{
            type:String,
            default:''
        },
        //直角的按钮
        stiff:{
            type:Boolean
        },
        margin:{
            type:[String,Number]
        }
    },
    data(){
        return {}
    },
    created(){
        
    },
    methods:{
        emitClick(e){
            this.$emit('click',e);
        }
    },
    computed:{
		classes(){
            return [
                `${prefixCls}`,
                `${prefixCls}-type-${this.type}`,
                {
                    [`${prefixCls}-mini`]:this.mini,
                    [`${prefixCls}-plain`]:this.plain,
                    [`${prefixCls}-inline`]:this.inline,
                    [`${prefixCls}-loading`]:this.loading,
                    [`${prefixCls}-disabled`]:this.disabled,
                    [`${prefixCls}-stiff`]:this.stiff,
                }
            ];
		},
        icoClasses(){
            let ico = (this.loading && this.ico == '') ? 'ico-loading' : 'ico-'+this.ico;
            if(ico == 'ico-') return false
            return ico;
        },
        warpStyle(){
            if(this.margin !== undefined)
                return {margin:size(this.margin)}
        }
    },
    components:{
    }
}
</script>

<style lang="stylus">
@import "~css/config"
pre = cls('button')
.{pre}
    vertical-align middle
    text-align center
    border-radius 5px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    padding 0 10px
    box-sizing border-box
    color #fff
    transition all .4s ease
    user-select none
    display block
    width auto
    height 46px
    line-height 48px
    font-size 18px
    &:active
        filter:contrast(.7);
    &.{pre}-type-primary
        background color-primary
        &.{pre}-plain
            color color-primary
            border 1px solid color-primary
    &.{pre}-type-success
        background color-success
        &.{pre}-plain
            color color-success
            border 1px solid color-success
    &.{pre}-type-warning
        background color-warning
        &.{pre}-plain
            color color-warning
            border 1px solid color-warning
    &.{pre}-type-error
        background color-error
        &.{pre}-plain
            color color-error
            border 1px solid color-error
    &.{pre}-type-info
        background color-info
        &.{pre}-plain
            color color-info
            border 1px solid color-info
    &.{pre}-plain
            background #fff;
            line-height 46px
            &:active
                filter contrast(1)
                background #f1f1f1
    &.{pre}-mini
        line-height 30px
        height 30px
        font-size 14px
        padding 0 15px
        &.{pre}-plain
            line-height 28px
    &.{pre}-inline
        display inline-block
        width auto
        padding 0 25px
    &.{pre}-loading
        pointer-events none
        opacity .6
        i
            animation spin 1.5s infinite cubic-bezier(.63,0,.38,1)
    &.{pre}-disabled
        touch-action none
        pointer-events none
        background #f7f7f7
        color #ccc
    &.{pre}-stiff
        border-radius 0
</style>

