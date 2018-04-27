<template>
	<div :class="classes">
        <Flex :col="col" :padding="padding" :border="border">
            <a slot="item" v-for="slot in slots" v-on="slot.on">
                <i :style="{color:slot.attrs['ico-color'] || icoColor,fontSize:icoFontSize}" :class="`ico-${slot.attrs.ico}`"></i>
                <p :class="txtClasses" :style="{color:slot.attrs['label-color'] || labelColor}" v-html="slot.attrs.label"></p>
            </a>
        </Flex>
    </div>
</template>
<script>
import Flex from 'components/Flex'
import {cls,array_rand} from '../../utils';
const prefixCls = cls('grid');
export default {
    name:'Grid',
    props:{
        col:{
            type:[Number,String],
            default:4
        },
        padding:{
            type:String,
            default:'20px 10px'
        },
        border:{
            type:Boolean,
            default:true
        },
        labelColor:{
            type:String,
            default:'#666'
        },
        icoColor:{
            type:String,
            default:'#333'
        },
        randColor:{
            type:[Boolean,Array]
        }
    },
    data(){
        return {
            colorMap:[
                '#20a0ff',
                '#13ce66',
                '#f7ba2a',
                '#ff4949',
                '#50BFFF'
            ]
        }
    },
    created(){
        
    },
    methods:{
    },
    computed:{
        slots(){
            return this.$slots.item.map((ref)=>{
                if(this.randColor && !ref.data.attrs['ico-color']){
                    let colormap = typeof(this.randColor) != 'boolean' ? this.randColor : this.colorMap;
                    ref.data.attrs['ico-color'] = array_rand(colormap)
                }
                return ref.data
            })
        },
        icoFontSize(){
            return 40 - this.col * 2.5 + 'px'
        },
        classes(){
            return [prefixCls]
        },
        txtClasses(){
            return [`${prefixCls}-txt`]
        }

    },
    components:{
        Flex
    }
}
</script>

<style lang="stylus">
@import "~css/config"
pre-grid = cls('grid')
pre-flex = cls('flex')
.{pre-grid}
    .{pre-flex}
        text-align center
        .{pre-flex}-item
            &:active
                background #f3f3f3
    .{pre-grid}-txt
        overflow hidden
        text-overflow clip
        white-space nowrap
        font-size 12px
        line-height 14px
        padding-top 6px
</style>