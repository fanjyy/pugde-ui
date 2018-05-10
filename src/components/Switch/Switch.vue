<template>
	<div :class="classes">
		<div :class="itemClasses">
			<label :for="indexId">
				<i v-if="ico" :class="'ico-'+ico" class="ico"></i>
				<span class="txt">{{label}}</span>
			</label>
            <input :id="indexId" type="checkbox" :disabled="disabled" :readonly="disabled" :checked="_value" @change="change" />
        </div>
    </div>
</template>
<script>
import {cls,size} from '../../utils';
const prefixCls = cls('switch');
let switchIndex = 0;
export default {
    name:'PSwitch',
    model:{
        prop:'value',
        event:'change'
    },
    props:{
		value:{
			type:[String,Boolean,Number],
			default:false
		},
		//左侧显示自定义图标
		ico:{
			type:String,
			default:''
		},
		true:{
			type:[String,Boolean,Number],
			default:true
		},
		false:{
			type:[String,Boolean,Number],
			default:false
		},
		label:{
			type:String,
			default:''
		},
		//规定字段为只读。
		disabled:{
			type:Boolean,
			default:false
		}
    },
    data(){
        return {
			_value:false
        }
    },
    created(){
		this._value = this.value == this.true ? true : false;
    },
	methods:{
		change(event){
			this.$emit('change',event.target.checked == true ? this.true : this.false);
		}
	},
	computed:{
		classes(){
            return [
				`${prefixCls}`,
				`border-b`,
				{
					[`${prefixCls}-disabled`]:this.disabled
				}
            ];
		},
		itemClasses(){
			return `${prefixCls}-item`
		},
		indexId(){
			switchIndex += 1;
			return '_switch-index-'+switchIndex;
		}
	}
}
</script>

<style lang="stylus">
@import "~css/config"
pre = cls('switch')
item-height = 50px
.{pre}
	width 100%
	box-sizing border-box
	padding 0 15px
	overflow hidden
	background #fff
	transition background
	/*
	&:active
		background color-gray
	*/
	&.{pre}-disabled
		color #d4d4d4
		input
			opacity .5
	.{pre}-item
		position relative
		width 100%
		display flex
		justify-content space-between
		-webkit-justify-content space-between
		height item-height
		label
			width 100%
			font-size 16px
			line-height item-height + 2
			.ico
				float left
		input
			width 60px
			height 31px
			position relative
			top 10px
			border 1px solid #eee
			background-color #eee
			box-shadow #eee 0 0 0 0 inset
			border-radius 20px
			background-clip content-box
			display inline-block
			-webkit-appearance none
			user-select none
			outline none
			transition all
			&:before
				content ''
				width 29px
				height 29px
				position absolute
				border-radius 20px
				background-color #fff
				box-shadow 0 1px 3px rgba(0, 0, 0, 0.4)
				transition transform
				transform translateX(0)
			&:checked
				box-shadow color-success 0 0 0 16px inset
				background-color color-success
				transition border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s
				&:before
					transform translateX(20px)
		.ico
			width 30px
			line-height item-height - 1
			overflow hidden
			font-size 24px
</style>