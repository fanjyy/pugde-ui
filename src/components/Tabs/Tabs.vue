<template>
	<div class="_tabs" :class="tabsClass">
		<div class="_menu-container">
			<ul class="_menu">
			    <li v-for="(slot,index) in $slots.tab" :class="{active:currentIndex == index}" @click='change(index)'>
			    	<i v-if="slot.data.attrs.ico" :class="'_ico ico-' + slot.data.attrs.ico"></i>
			    	<span class="_label">{{slot.data.attrs.label}}</span>
			    	<p v-if="index == 0 && type == 'line'" :style="lineTranslateX" class="_line"></p>
			    </li>
			</ul>
		</div>
		<div class="_panel" :style="panelTranslateX" ref="panel">
			<slot name="tab"></slot>
		</div>
	</div>
</template>
<script>
export default{
	name:'Tabs',
	props:{
		//是否让导航悬浮在顶部
		fixed:{
			type:Boolean,
			default:false
		},
		//当导航元素过多时，是否能够滚动
		scroll:{
			type:Boolean,
			default:false
		},
		//是否让图标竖排 只支持line和card类型的导航
		vertical:{
			type:Boolean,
			default:false
		},
		//导航类型
		type:{
			type:String,
			default:'line',
            validator (value) {
                return ['line','card', 'radius'].includes(value);
            }
		},
		//动画支持
		notAnimated:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			panelDom:[],
			currentIndex:0,
			scrollMap:[]
		}
	},
	components:{

	},
	mounted(){
		this.panelDom = this.$refs.panel.children;
		this.panelDom[this.currentIndex].style.display = 'block';
	},
	computed:{
		tabsClass(){
			let cls = [];
			this.fixed && cls.push('_tabs-fixed');
			this.scroll && cls.push('_tabs-scroll');
			this.vertical && cls.push('_tabs-ico-vertical');
			this.notAnimated && cls.push('_tabs-not-animated');
			cls.push(`_tabs-type-${this.type}`);
			return cls;
		},
		lineTranslateX(){
			let val = this.currentIndex * 100 + '%';
			let style = {transform:`translateX(${val})`};
			return {transform:`translateX(${val})`};
		},
		panelTranslateX(){
			let x = 100 / this.panelDom.length * this.currentIndex + '%';
			let style = {
				transform:`translateX(-${x})`,
				width:100 * this.panelDom.length + '%'
			};
			return style;
		}
	},
	watch:{
		currentIndex(valIndex,oldIndex){
			if(valIndex != oldIndex) {
				this.$emit('change',{valIndex});
			}
		}
	},
	methods:{
		change(index){
			this.currentIndex = index
		}
	}
}
</script>
<style lang="stylus">
@import "~css/config"
menu-height = 48px
._tabs
	overflow-x hidden
	overflow-y auto
	background #fff
	&._tabs-fixed
		padding-top menu-height
		._menu-container
			width 100%
			fixed top 0 left 0
			z-index 8
	._menu-container
		height menu-height
		._menu
			background #fff
			display flex
			text-align center
			height 100%
			li
				flex 1
				transition all
				padding-top 16px
				line-height 18px
				font-size 14px
				box-sizing border-box
				position relative
				color color-ignore
			li:active
				background-color color-gray
			li.active
				color color-primary
			._line
				width 100%
				height 2px
				background color-primary
				absolute bottom 0 left 0
				z-index 1
				transition all 1s
				transform translateX(0)
	._panel
		transition transform 1s
		transform translateX(0)
		display flex
		> div
			margin-top 10px
			flex 1
	&._tabs-type-radius
		._menu-container
			background #fff
		._menu
			border-radius 100px
			width 70%
			position relative
			top 12%
			margin 0 auto
			overflow hidden
			height 76%
			li
				padding-top 10px
				background color-gray
			li.active
			li:active
				background-color color-primary
				color #fff
			._line
				display none
	&._tabs-type-card
		._panel
			background color-gray
		._menu-container
			height menu-height
			._menu
				li.active
					background-color color-gray
				._line
					display none
	&._tabs-not-animated
		._menu
			li,._line
				transition none
		._panel
			transition none
	&._tabs-type-line._tabs-ico-vertical
	&._tabs-type-card._tabs-ico-vertical
		&._tabs-fixed
			padding-top 78px
		._menu-container
			height 78px
			._menu 
				li
					padding-top 14px
					._label
						display block
					._ico
						font-size 34px
	&._tabs-scroll
		._menu-container
			width 100%
			background rgba(255,255,255,0)
			z-index 1
			white-space nowrap
			overflow hidden
			overflow-x scroll
			-webkit-backface-visibility hidden
			-webkit-perspective 1000
			-webkit-overflow-scrolling touch
			text-align justify
			&::-webkit-scrollbar
				display none
			._menu
				display block
				text-align left
				width 100%
				li
					display inline-block
					height 100%
					width 100px
					text-align center
</style>