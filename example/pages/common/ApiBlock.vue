<template>
	<div class="_api-block">
		<div class="props">
			<p class="liter-title">{{to}} Props</p>
			<div class="table" v-for="(props,key) in data.props" :key="key">
				<div class="intro-menu">
					<div class="intro-menu-item intro-menu-name">
						<p class="val name">{{props.name}}</p>
					</div>
					<div v-if="props.type" class="intro-menu-item intro-menu-type">
						<p class="key">类型</p>
						<p class="val type">{{props.type}}</p>
					</div>
					<div v-if="props.default" class="intro-menu-item">
						<p class="key">默认值</p>
						<p class="val">{{props.default}}</p>
					</div>
				</div>
				<div v-if="props.intro" class="intro-txt">
					<p v-html="props.intro"></p>
				</div>
			</div>
		</div>
		<div class="events" v-if="data.events">
			<p class="liter-title">{{to}} Events</p>
			<div class="table" v-for="(events,key) in data.events" :key="key">
				<div class="intro-menu">
					<div class="intro-menu-item intro-menu-name">
						<p class="val name">@{{events.name}}</p>
					</div>
					<div class="intro-menu-item intro-menu-type">
						<p class="key">返回值</p>
						<p class="val">{{events.callback_intro}}</p>
					</div>
				</div>
				<div class="intro-txt">
					<p v-html="events.intro"></p>
				</div>
			</div>
		</div>
		<div class="slot" v-if="data.slot">
			<p class="liter-title">{{to}} Slot</p>
			<div class="table" v-for="(slot,key) in data.slot" :key="key">
				<div class="intro-menu">
					<div class="intro-menu-item intro-menu-name">
						<p class="val name">{{slot.name}}</p>
					</div>
				</div>
				<div class="intro-txt">
					<p v-html="slot.intro"></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Api from '../api'
export default{
	name:'ApiBlock',
	props:{
		to:{
			required:true,
			type:String,
			validator:function(value){
				return Api[value]
			}
		}
	},
	data(){
		return {
			data:null
		}
	},
	created(){
		this.data = Api[this.to];
	}
}
</script>
<style lang="stylus">
@import "~css/config"
._api-block
	padding 20px 10px
	.liter-title
		font-size 18px
		letter-spacing -1px
		line-height 40px
		padding-top 10px
	.table
		width 100%
		margin-bottom 20px
	.intro-txt
		background #f6f6f6
		border-radius 5px
		padding 10px
		p
			font-size 12px
			color #666
			code
				color color-error
	.intro-menu
		display flex
		padding 5px 0
		.intro-menu-item
			flex 1
		.intro-menu-type
			flex none
			width 66px
		.intro-menu-name
			flex none
			width 160px
		.key 
			font-size 10px
			line-height 14px
		.val
			font-size 12px
			color #333
			line-height 18px
			margin-top -2px
			&.name
				text-transform lowercase
				font-size 18px
				line-height 32px
				font-weight bold
			&.type
				text-transform capitalize
</style>