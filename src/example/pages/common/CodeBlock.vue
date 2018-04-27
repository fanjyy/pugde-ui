<template>
	<div class="_code-block">
		<p class="use-title">
			<span>
				<slot name="title"></slot>
			</span>
		</p>
		<p v-if="$slots.intro" class="intro">
			<slot name="intro"></slot>
		</p>
		<div class="runtime">
			<slot name="runtime"></slot>
		</div>
		<highlight v-if="$slots.code">
			<slot name="code"></slot>
		</highlight>
	</div>
</template>
<script>
import Highlight from './Highlight'
let inputIndex = 0;
export default{
	name:'Input',
	props:{
		value:{
			type:String,
			default:''
		}
	},
	data(){
		return {
		}
	},
	created(){
	},
	methods:{
	},
	computed:{
	},
	components:{
		Highlight
	}
}
</script>
<style lang="stylus">
@import "~css/config"
._code-block
	.use-title
		color #333
		margin 20px 20px
		position relative
		span
			background red
			position relative
			left 16px
			background #fff
			color #000
			border-radius 3px
			z-index 1
			font-size 16px
		&:before
			content ""
			display block
			width 100%
			height 100%
			width 4px
			background #333
			position absolute
			top 0px
			left 0
	.intro
		padding 0 20px 20px 20px
		color #666
		code
			color color-error
</style>