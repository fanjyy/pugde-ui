<template>
	<transition name="picker">
	<div class="_picker" :class="{'picker-enter-to':visible}" @touchmove.self.prevent>
		<div class="_picker-header border-b">
			<span class="btn cancel" @click="cancel">取消</span>
			<span>{{title}}</span>
			<span class="btn confirm" @click="confirm">确定</span>
		</div>
		<div class="_picker-warp">
			<div class="_picker-mask"></div>
			<div v-for="(wheel,index) in wheelData" class="_picker-wheel" ref="wheel" :index="index" @touchend="wheelTouchEnd">
				<div class="_picker-content"> 
					<ul>
						<li v-for="data in wheel">{{data.label}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	</transition>
</template>
<script>

export default{
	name:'Picker',
	model:{
		prop:'visible',
		event:'changeVisible'
	},
	props:{
		visible:{
			type:Boolean,
			default:false
		},
		data:{
			type:Array,
			default:()=>[]
		},
		defaultValue:{
			type:Array,
			default:()=>[]
		},
		title:{
			type:String,
			default:''
		}
	},
	data(){
		return {
			value:[],
			wheelData:[],
			currentWheel:0,
			currentItem:0,
			itemHeight:34,
			bodyStyle:{}
		}
	},
	mounted(){
		this.setScrollForValue(this.defaultValue)
	},
	created(){
		this.wheelData = this.data[0].length == undefined ? [this.data] : this.data;
		this.checkChild(this.wheelData[0][0]);
	},
	methods:{
		getRange(start, end){
			return Array(end - start + 1).fill(0).map((v, i) => i + start)
		},
		checkChild(data,index=0){
			if(data.child){
				index += 1
				this.$set(this.wheelData,index,data.child)
				this.checkChild(data.child[0],index);
				if(this.$refs.wheel !== undefined) this.$refs.wheel[index].scrollTop = 0;
			}
		},
		wheelTouchEnd($event){
			let wheel = $event.currentTarget;
			let wheelIndex = parseInt(wheel.getAttribute('index'));
			let pst,cst;
			let touchEndTimer = setInterval(()=>{
				cst = wheel.scrollTop;
				if(pst == cst){
					this.currentItem = Math.round(wheel.scrollTop / this.itemHeight);
					wheel.scrollTop = this.currentItem * this.itemHeight;
					let item = this.wheelData[wheelIndex][this.currentItem]
					this.checkChild(item,wheelIndex);
					this.setValue(wheelIndex,item.value)

					this.$emit('change',{index:wheelIndex,item});

					this.currentWheel = wheelIndex;
					clearInterval(touchEndTimer)
				}
				pst = wheel.scrollTop;
			},100)
		},
		setScrollForValue(val){
			if(val.length > 0){
				val.forEach((val,wheelIndex)=>{
					let wheel = this.$refs.wheel[wheelIndex];
					if(wheel == undefined) return;
					for(let pair of this.wheelData[wheelIndex].entries()){
						let [itemIndex,item] = pair;
						if(item.value == val){
							this.setValue(wheelIndex,val)
							this.$emit('change',{index:wheelIndex,item});
							this.checkChild(item,wheelIndex);
							wheel.scrollTop = itemIndex * this.itemHeight;
							break;
						}
					}

				})
			}else{
				for(let pair of this.wheelData.entries()){
					let [index,item] = pair;
					this.setValue(index,item[0].value)
				}
			}
		},
		setValue(index,val){
			this.value[index] = val;
		},
		cancel(){
			this.$emit('changeVisible',false);
			this.$emit('cancel',this.value);
		},
		confirm(){
			this.$emit('changeVisible',false);
			this.$emit('confirm',this.value);
		}
	},
	watch:{
		visible(newval){
			if(newval == true){		
				this.bodyStyle.overflow = document.body.style.overflow;
				this.bodyStyle.width = document.body.style.width;
				this.bodyStyle.position = document.body.style.position;
				document.body.style.overflow = 'hidden';
				document.body.style.width = '100%';
				document.body.style.position = 'fixed';
			}else{
				document.body.style.overflow = this.bodyStyle.overflow;
				document.body.style.width = this.bodyStyle.width;
				document.body.style.position = this.bodyStyle.position;
			}
		}
	},
	computed:{
	}
}
</script>
<style lang="stylus">
@import "~css/config"
item-height = 34px
picker-height = item-height * 7
._picker
	background rgba(0,0,0,.6)
	fixed top 0 left 0
	z-index 9
	width 100%
	height 100%
	transition all
	transform translate(-0%,-5px)
	opacity 0
	visibility hidden
	font-size 18px
	/*-webkit-transition -webkit-transform 1s ease 2s,opacity 1s ease;*/
	._picker-header
	._picker-warp
		absolute bottom 0 left 0
		background #fff
		width 100%
	._picker-header
		bottom picker-height
		box-sizing border-box
		text-align center
		height 48px
		line-height 48px
		padding 0 15px
		.btn
			font-size 14px
			display inline-block
			&.cancel
				color #ccc
				float left
			&.confirm
				float right
				color color-success
	._picker-warp
		height picker-height
		display flex
		._picker-mask
			background-image linear-gradient(0, #fff item-height * 3, transparent item-height * 3.2, transparent),
							 linear-gradient(0, transparent item-height * 3.8, #fff item-height * 4);
			opacity .85
			z-index 1
			pointer-events none
			absolute top 0 left 0
			height 100%
			width 100%
		._picker-wheel
			flex 1
			height 100%
			overflow hidden
			overflow-y auto
			._picker-content
				margin-top item-height * 3
				margin-bottom item-height * 3
				li
					height item-height
					line-height item-height
					text-align center

._picker.picker-enter-to
	opacity 1
	visibility visible
	transform translate(0%, 0px)
</style>