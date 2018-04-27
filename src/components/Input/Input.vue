<template>
	<div class="_input border-b" :class="inputClass">
		<div class="_input-item">
			<label :style="labelStyle" :for="indexId">
				<i v-if="leftIco" :class="'ico-'+leftIco" class="ico _ico-auto"></i>
				<span class="txt">{{label}}</span>
			</label>
			<input 
				:id="indexId"
				:value="value"
				:type="type"
				:maxLength="maxLength"
				:readonly="disabled"
				:disabled="disabled"
				:name="name"
				:placeholder="placeholder"
				@keyup="changeInput"
				@change="changeSelect"
				/>
			<div class="_right">
				<i v-if="rightIco" :class="'ico-'+rightIco" class="ico _ico-auto"></i>
			</div>
		</div>
	</div>
</template>
<script>
let inputIndex = 0;
export default{
	name:'Input',
	props:{
		value:{
			type:String,
			required:true,
			default:''
		},
		//input 类型
		type:{
			type:String,
			default:'text',
            validator (value) {
                return ['number','password','tel','text','color','date','datetime','datetime-local','checkbox','radio'].includes(value);
            }
		},
		//左侧显示自定义图标
		leftIco:{
			type:String,
			default:''
		},
		//右侧显示自定义图标
		rightIco:{
			type:String,
			default:''
		},
		//input 状态 error|success
		status:{
			type:String,
			default:''
		},
		//规定输入字段中的字符的最大长度。
		maxLength:{
			type:String,
			default:''
		},
		//规定输入字段的值的模式或格式。例如 pattern="[0-9]" 表示输入值必须是 0 与 9 之间的数字。
		pattern:{
			type:String,
			default:''
		},
		//规定输入字段为只读。
		disabled:{
			type:Boolean,
			default:false
		},
		//定义 input 元素的名称。
		name:{
			type:String,
			default:''
		},
		placeholder:{
			type:String,
			default:''
		},
		label:{
			type:String,
			default:''
		}
	},
	data(){
		return {
			option:{

			},
			inputType:'',
			inputIndex:0,
		}
	},
	created(){
		/**
		console.log(this.$parent.name);
		console.log(this.$parent.asd);
		console.log(Object.keys(this.$parent))
		 */

		//if()
		/*
		alert(JSON.stringify(this.$props))
		this.inputType = this.type;
		if(this.type == 'sms'){
			this.inputType = 'number';
		}
		*/
	},
	methods:{
		changeInput(event){
			this.$emit('input',event.target.value);
		},
		changeSelect(event){
			this.$emit('change',event.target.value);
		}
	},
	computed:{
		labelStyle(){
			let syl = {};
			if(this.leftIco && !this.label) syl.width = '28px';
			return syl;
		},
		inputClass(){
			let cls = [];
			this.status && cls.push('_input-status-' + this.status);
			this.disabled && cls.push('_input-disabled');
			return cls;
		},
		indexId(){
			inputIndex += 1;
			return '_input-index-'+inputIndex;
		}
	}
}
</script>
<style lang="stylus">
@import "~css/config"
item-height = 50px
._input
	width 100%
	box-sizing border-box
	padding 0 15px
	background #fff
	overflow hidden
	&._input-disabled
		color #d4d4d4
	&._input-status-error
		._input-item
			&:after
				background color-error
			.ico
				opacity 1
				color color-error

	._input-item
		position relative
		width 100%
		display flex
		height item-height
		label
			font-size 16px
			line-height item-height + 2
			width 90px
			.ico
				float left
		.ico
			width 30px
			line-height item-height
			overflow hidden
			font-size 24px
		input
			flex 1
			border none
			background none
			box-shadow none
			font-size 16px
			-webkit-user-select text
			user-select text
			-webkit-appearance none
			appearance none
			-webkit-appearance none
			
		/*
		.ico
			text-align right
			width 30px
			transition all
		*/
		._right
			.ico
				text-align right
			._send-sms
				text-align center
				color color-primary
				display block
				width 100px
				margin-top 8px
				height 30px
				line-height 30px
				font-size 14px
				border 1px solid color-primary
				border-radius 4px
input::-webkit-input-placeholder{
    color #b9b9b9 !important
}
</style>