<template>
	<transition name="modal">
		<!-- @click.self="close('cancel')" 只点击遮罩关闭-->
		<div :class="className" :style="{backgroundColor:shadeColor}" ref="model-warp"  @click.self="shadeClose == true && close()" v-show="visible">
			<div class="_modal">
				<p v-if="title" class="_modal-title">{{title}}</p>
				<div class="_modal-content">
					<slot></slot>
				</div>
				<div class="_modal-button">
					<span class="_modal-button-cancel" v-if="type != 'alert'" @click="close()">
						<i v-if="cancelIco" :class="'ico-'+cancelIco" class="_ico"></i>
						{{cancelTxt}}
					</span>
					<span class="_modal-button-ok" @click="close('ok')">
						{{okTxt}} 
						<i v-if="okIco" :class="'ico-'+okIco" class="_ico"></i>
					</span>
				</div>

			</div>
		</div>
	</transition>
</template>
<script>
let scrollTop;
export default{
	name:"Modal",
	model:{
		prop:"visible",
		event:"close"
	},
	props:{
		//v-model 显示弹窗
		visible:{
			type:Boolean,
			default:false
		},
		//标题
		title:{
			type:String,
			default:""
		},
		//弹窗卡类型 MODAL_TYPE
		type:{
			type:String,
			default:'alert',
            validator (value) {
                return ['alert','confirm','panel'].includes(value);
            }
		},
		position:{
			type:String,
			default:'center',
            validator (value) {
                return ['top','bottom','left','right','center','full'].includes(value);
            }
		},
		//取消按钮的图标
		cancelIco:{
			type:String,
			default:""
		},
		//取消按钮的文字
		cancelTxt:{
			type:String,
			default:"取消"
		},
		//确定按钮的图标
		okIco:{
			type:String,
			default:""
		},
		//确定按钮的文字
		okTxt:{
			type:String,
			default:"确定"
		},
		//遮罩颜色
		shadeColor:{
			type:String,
			default:'rgba(0,0,0,.8)'
		},
		//点击遮罩是否关闭
		shadeClose:{
			type:Boolean,
			default:true
		},
		//自动关闭毫秒
		autoClose:{
			type:Number,
			default:0
		}
	},
	data(){
		return {
			timeout:0
		}
	},
	created(){
	},
	methods:{
		close(clickIndex='cancel'){
			if(this.autoClose != 0) clearTimeout(this.timeout);
			if(this.visible == true){
				this.$emit("close");
			}
		}
	},
	computed:{
		className(){
			return [
				'_modal-warp',
				'_modal-warp-'+this.type,
				'_modal-position-'+this.position
			];
		}
	},
	watch:{
		visible(val){
			if(val == true){
				scrollTop = document.scrollingElement.scrollTop;
				document.body.classList.add('__modal_open');
				document.body.style.top = -scrollTop + 'px';
				if(this.autoClose != 0) this.timeout = setTimeout(()=>this.close(),this.autoClose)
			}else{
				document.body.classList.remove('__modal_open');
				document.scrollingElement.scrollTop = scrollTop
			}
		}
	}
}
</script>
<style lang="stylus">
@import "~css/config"
._modal-warp
	fixed top 0 left 0
	z-index 10
	width 100%
	height 100%
	transition all .3s ease-out
	._modal
		transition transform
		transform rotate(0deg)
		overflow hidden
		box-shadow 0px 0px 10px #666;
		background-color #fff
		width 100%
		img 
			display block
			width 100%
			margin-bottom 10px
		._modal-title
			text-align center
			height 30px
			font-size 20px
			color #333
			line-height 58px
		._modal-content
			padding 20px 20px 15px 20px
			line-height 22px
			color #666
			._tabs
				margin -20px -20px -15px -20px
		._modal-button
			text-align center
			background-color #f9f9f9
			display flex
			justify-content space-around
			width 100%
			span
				flex 1
				height 48px
				line-height 52px
				transition all 1s
				&._modal-button-ok
					color color-primary
				&._modal-button-cancel
					color color-ignore
				&._modal-button-ok:active,
				&._modal-button-cancel:active
					background-color color-gray
				._ico
					font-size 20px
					relative top 2px
&._modal-warp-panel
	._modal
		._modal-button
			display none
&.modal-enter
&.modal-leave-active
	opacity 0
	._modal
		transform translateY(10px)
&.modal-enter-to
	opacity 1
	._modal
		transform translateY(0)
&._modal-position-center
&._modal-position-top
	&.modal-enter
	&.modal-leave-active
		opacity 0
		._modal
			transform translateY(-10px)
	&.modal-enter-to
		opacity 1
		._modal
			transform translateY(0)

&._modal-position-center
	display flex
	align-items center
	justify-content center
	._modal
		border-radius 5px
		width 80%
&._modal-position-bottom
	display flex
	align-items flex-end
	justify-content flex-end
&._modal-position-right
&._modal-position-left
	._modal
		height 100%
		width 220px
	&.modal-enter-to
		opacity 1
		._modal
			transform translateX(0)
&._modal-position-right
	._modal
		absolute top 0 right 0
	&.modal-enter
	&.modal-leave-active
		opacity 0
		._modal
			transform translateX(10px)
&._modal-position-left
	._modal
		absolute top 0 left 0
	&.modal-enter
	&.modal-leave-active
		opacity 0
		._modal
			transform translateX(-10px)
&._modal-position-full
	._modal
		height 100%
	&.modal-enter
	&.modal-leave-active
		opacity 0
		._modal
			transform translateY(10px)
	&.modal-enter-to
		opacity 1
		._modal
			transform translateY(0)
&._modal-position-right
&._modal-position-left
&._modal-position-full
	._modal
		._modal-button
			absolute left 0 bottom 0
		._modal-content
			padding-bottom 60px
</style>