<template>
	<div class="_list-warp" :style="{height:height}" @touchmove="isScrollBottom" @touchend="isScrollBottom" ref="listWarp">
		<div class="_list"  :class="'_list-animated-'+animated" ref="list">
			<slot name="item" v-for="dataItem in data" v-bind="dataItem"></slot>
			<div class="_list-loading" v-if="status == 'loading'">
				<slot name="loading"><i class="ico-add"></i> 加载中..</slot>
			</div>
			<div class="_list-end" v-if="status == 'end'">
				<slot name="end">无数据</slot>
			</div>
		</div>
		<div class="_list-init" v-if="init == false">
			<slot name="end">
				<i class="ico-loading _list-spin"></i>
			</slot>
		</div>
		<div class="_list-empty" v-if="status == 'empty'">
			<slot name="end">
				<i class="ico-empty"></i>
				<p>—&nbsp;&nbsp;暂无数据&nbsp;&nbsp;—</p>
				<p><span @click="reset()">重新加载</span></p>
			</slot>
		</div>
	</div>
</template>
<script>
const ANIMATED_TYPE = [
	'fade'
]
export default{
	name:'List',
	props:{
		//获取数据的函数，在该函数内执行ajax获取数据
		page:{
			type:Number,
			default:1
		},
		//动画类型
		animated:{
			type:String,
			default:''
		},
		//列表高度
		height:{
			type:String,
			default(){
				return window.innerHeight + 'px';
			}
		}
	},
	data(){
		return{
			data:[],
			init:false,
			status:'done'
		}
	},
	components:{

	},
	mounted(){
		//alert(this.$slots.length);
	},
	created(){
		this.$emit('paging',this);	
	},
	methods:{
		isScrollBottom(event) {
			if(this.status != 'done' || this.init == false) return;

			let scrollTop = event.currentTarget.scrollTop;
			let clientHeight = this.$refs.listWarp.clientHeight;

			if (event.currentTarget.scrollHeight - scrollTop <= clientHeight){
				this.status = 'loading';
				this.$emit('paging',this);
	        }
		},
		reset(){
			this.page = 1;
			this.init = false;
			this.status = 'done';
			this.$emit('paging',this);		
		},
		end(){
			this.status = this.data.length == 0 ? 'empty' : 'end';
		},
		setData(data){
			if(this.status == 'end') return;

			let prevLength = this.data.length;
			this.data = [...this.data,...data];
			this.init = true;

			if(this.data.length == 0){
				this.status = "empty"
				return;
			}
			
			if(!this.animated){
				this.status = 'done';
				return;
			}
			this.$nextTick(()=>{
				let list = this.$refs.list.querySelectorAll('.animated-item');
				let count = 0;
				for(let i=prevLength;i<list.length;i++){
					let className = 'animated-item-enter';
					
					if(this.animated == 'fadeDiff') 
						className += ['-left','-right'][i%2];

					list[i].classList.add(className);
					list[i].style.animationDelay = list[i].style.webkitAnimationDelay = (count*100) + 'ms';
					count ++;
				}
				this.status = 'done';
			})
			
			
		}
	},
	computed:{
	},
	watch:{
	}
}
</script>
<style lang="stylus">
@import "~css/config"
._list-spin
	animation listSpin 1.5s infinite cubic-bezier(.63,0,.38,1)
._list-warp
	relative top 0 left 0 
	overflow hidden
	overflow-y auto
	._list-init
	._list-empty
		absolute center
		text-align center
		font-size 100px
		opacity .1
	._list-empty
		p
			font-size 12px
	._list
		._list-loading
			background #f9f9f9
			text-align center
			padding 15px 0
		&._list-animated-fade
		&._list-animated-fadeLeft
		&._list-animated-fadeRight
		&._list-animated-fadeTop
		&._list-animated-fadeBottom
		&._list-animated-fadeDiff
			animation NULL 2s bezier-default both
			opacity 0
		&._list-animated-fade
			.animated-item-enter
				animation-name fade
		&._list-animated-fadeLeft
			.animated-item-enter
				animation-name fadeLeft
		&._list-animated-fadeRight
			.animated-item-enter
				animation-name fadeRight
		&._list-animated-fadeTop
			.animated-item-enter
				animation-name fadeTop
		&._list-animated-fadeBottom
			.animated-item-enter
				animation-name fadeBottom
		&._list-animated-fadeDiff
			.animated-item-enter-left
				animation-name fadeLeft
			.animated-item-enter-right
				animation-name fadeRight
@keyframes fade
	0%
		opacity 0
	to
		opacity 1
		
@keyframes fadeLeft
	0%
		transform translateX(30px)
		opacity 0
	to
		transform translateX(0px)
		opacity 1

@keyframes fadeRight
	0%
		transform translateX(-30px)
		opacity 0
	to
		transform translateX(0px)
		opacity 1
@keyframes fadeTop
	0%
		transform translateY(-30px)
		opacity 0
	to
		transform translateY(0px)
		opacity 1
@keyframes fadeBottom
	0%
		transform translateY(30px)
		opacity 0
	to
		transform translateY(0px)
		opacity 1
@keyframes listSpin
	0%
		transform rotate(0deg)
	to
		transform rotate(359deg)
</style>