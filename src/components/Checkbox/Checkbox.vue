<template>
    <div class="_checkbox-group" ref="panel">
        <Vinput 
            v-for="slot in $slots.checkbox" 
            v-model="slot.data.attrs.value" 
            :disabled="slot.data.attrs.disabled" 
            type="checkbox" 
            class="_input-checkbox" 
            :name="inputName"
            :label="slot.data.attrs.label" 
            :rightIco="getIco(false,slot.data.attrs.ico)" 
            :leftIco="getIco(true,slot.data.attrs.ico)"
            :class="{'_input-checkbox-active':_value.has(slot.data.attrs.value)}" 
            @change="change"
            />
    </div>
</template>
<script>
import Vinput from '../Input'
let index = 0;
export default {
    name:'Checkbox',
    model:{
        prop:'value',
        event:'change'
    },
    props:{
        value:{
            type:Array,
            required:true,
            default:()=>[]
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
            _value:null
        }
    },
    created(){
        this._value = new Set(this.value);
    },
    methods:{
        change(val){
            if(this._value.delete(val) === false) this._value.add(val);
            this.$emit('change',Array.from(this._value));
        },
        getIco(dec,ico){
            return this.leftIco === dec?(ico?ico:this.ico):'';
        }
    },
    computed:{
		inputName(){
            index += 1;
            return '_input-checkbox-name-'+index;
		}
    },
    components:{
        Vinput
    }
}
</script>

<style lang="stylus">
@import "~css/config"
._checkbox-group
    ._input-checkbox
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
        &._input-checkbox-active 
            .ico
                opacity 1
                color color-success
</style>

