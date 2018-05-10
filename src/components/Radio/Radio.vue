<template>
    <div class="_radio-group" ref="panel">
        <Vinput 
            v-for="(slot,key) in $slots.radio" 
            :key="key"
            v-model="slot.data.attrs.value" 
            :disabled="slot.data.attrs.disabled" 
            type="radio" 
            class="_input-radio" 
            :name="inputName"
            :label="slot.data.attrs.label" 
            :rightIco="getIco(false,slot.data.attrs.ico)" 
            :leftIco="getIco(true,slot.data.attrs.ico)"
            :class="{'_input-raido-active':slot.data.attrs.value==value}" 
            @change="change"
            />
    </div>
</template>
<script>
import Vinput from 'components/Input'
let index = 0;
export default {
    name:'Radio',
    model:{
        prop:'value',
        event:'change'
    },
    props:{
        value:{
            type:String,
            required:true,
            default:''
        },
        ico:{
            type:String,
            default:'success-fill'
        },
        //将图标放置在左侧
        leftIco:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
        }
    },
    methods:{
        change(val){
            this.$emit('change',val);
        },
        getIco(dec,ico){
            return this.leftIco === dec?(ico?ico:this.ico):'';
        }
    },
    computed:{
		inputName(){
            index += 1;
            return '_input-raido-name-'+index;
		}
    },
    components:{
        Vinput
    }
}
</script>

<style lang="stylus">
@import "~css/config"
._radio-group
    ._input-radio
        transition background
        &:not(._input-disabled)
            &:active
                background color-gray
        ._input-item
            .ico
                transition all
                color color-gray
            label
                width 100%
        &._input-raido-active 
            .ico
                opacity 1
                color color-success
</style>

