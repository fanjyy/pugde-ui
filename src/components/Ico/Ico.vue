<template>
	<i :class="className" :style="{fontSize,color:fontColor}"></i>
</template>
<script>
import {size} from '../../utils';
export default {
    name:'Ico',
    props:{
        type:{
            type:String,
            required:true
        },
        size:{
            type:[String,Number],
            default:'small',
        },
        color:{
            type:String,
            default:''
        }
    },
    data(){
        return {
        }
    },
    computed:{
        className(){
            return 'ico-'+this.type
        },
        fontSize(){
            return size(this.size);
        },
        fontColor(){
            return this.color;
        }
    }
}
</script>

<style lang="stylus">
@import "~css/config"
</style>