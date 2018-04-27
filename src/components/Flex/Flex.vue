<template>
	<div :class="classes">
        <slot name="item"></slot>
    </div>
</template>
<script>
import {cls} from '../../utils';
const prefixCls = cls('flex');
export default {
    name:'Flex',
    props:{
        col:{
            type:[Number,String]
        },
        padding:{
            type:String
        },
        border:{
            type:Boolean
        }
    },
    data(){
        return {

        }
    },
    created(){
        
    },
    mounted(){
        if(this.$slots.item){
            this.$slots.item.map((ref) => {
                let el = ref.elm;
                if(this.col) el.style.width = 100 / this.col + '%';
                if(this.padding) el.style.padding = this.padding;
                el.classList.add(`${prefixCls}-item`);
                if(this.border) el.classList.add('border-l','border-b');
            })
        }
    },
    computed:{
        classes(){
            return [
                prefixCls,
                this.col && `${prefixCls}-col`,
                this.border && ['border-t','border-r']
            ]
        }
    }
}
</script>

<style lang="stylus">
@import "~css/config"
pre = cls('flex')
.{pre}
    display flex
    &.{pre}-col
        flex-wrap wrap
        .{pre}-item
            flex none
    .{pre}-item
        display block
        flex 1
        box-sizing border-box
        color #333
</style>