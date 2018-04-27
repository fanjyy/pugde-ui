<template>
    <div class="_swiper" ref="swiper">
        <div class="_swiper-slots">
            <slot name="item"></slot>
        </div>
        <ul class="_swiper-warp" 
            ref="warp" 
            :class="{'_animated':animated}"
            :style="{width:(slotData.length + 2) * 100 + '%'}" 
            @touchstart="touchstart" 
            @touchmove="touchmove" 
            @touchend="touchend">
            <li class="_swiper-item" v-for="(data,index) in slotData" :style="{backgroundImage:`url(${data.src})`}">
                <div v-html="data.html"></div>
            </li>
        </ul>
        <div class="_swiper-navigation" v-if="!navHide">
            <span v-for="(data,index) in slotData" :class="{active:currentIndex == index}"></span>
        </div>
    </div>

</template>
<script>
export default {
    name:'Swiper',
    model:{
        prop:'currentIndex',
        event:'changeIndex'
    },
    props:{
        currentIndex:{
            type:Number,
            default:0
        },
        navHide:{
            type:Boolean,
            default:false
        },
        autoPlay:{
            type:Number,
            validator: function (value) {
                return value >= 3000
            },
            default:3000
        }
    },
    data(){
        return {
            index:0,
			slotData:[],
            warpWidth:0,
            itemWidth:0,
            itemLength:0,
            start:0,
            move:0,
            threshold:0,
            animated:false,
            autoPlayTimer:undefined,
        }
    },
    mounted(){
        this.slotData = this.$slots.item.map((ref,index) => Object.assign(ref.data.attrs,{ html:this.$slots.item[index].elm.innerHTML }))
        this.$nextTick(()=>{
            let items = this.$refs.warp.querySelectorAll('li')
            let first = items[0].cloneNode(true)
            let last = items[items.length - 1].cloneNode(true)
            this.$refs.warp.appendChild(first);
            this.$refs.warp.insertBefore(last,this.$refs.warp.firstChild);

            this.warpWidth = this.$refs.warp.clientWidth
            this.itemLength = this.slotData.length + 2
            this.itemWidth = this.warpWidth / this.itemLength
            this.$refs.warp.style.left = -this.itemWidth+'px';
            this.threshold = this.itemWidth/2
            if(this.autoPlay) this.createAutoPlay();
        })
    },
    created(){

    },
	methods:{
        createAutoPlay(){
            this.autoPlayTimer = setInterval(()=>{
                this.animated = true
                this.move = -this.itemWidth;
                this.setTranslateX(this.move);
                this.touchend()
            },this.autoPlay);
        },
        touchstart(event){
            if(this.autoPlayTimer){
                this.autoPlayTimer = clearInterval(this.autoPlayTimer);
            }
            this.start = event.touches[0].pageX
        },
        touchmove(event){
            this.animated = true
            this.move = this.start - event.touches[0].pageX
            this.setTranslateX(this.move);
        },
        touchend(event){
            if(!this.autoPlayTimer && this.autoPlay) this.createAutoPlay()
            
            if(Math.abs(this.move) > this.threshold){
                let index = this.currentIndex + (this.move > 0 ? -1 : 1);
                if(index < 0 || index >= this.slotData.length){
                    this.setTranslateX(0,index);
                    setTimeout(()=>{
                        this.animated = false;
                        this.$emit('changeIndex',index < 0 ? this.slotData.length - 1 : 0);
                    },1000)
                }else{
                    this.$emit('changeIndex',index);
                }
            }else{
                this.setTranslateX();
            }
        },
        setTranslateX(_move = 0,index = this.currentIndex){
            let move = -(index * this.itemWidth) + _move;
            this.$refs.warp.style.transform = 
            this.$refs.warp.style.webkitTransform = `translateX(${move}px)`;
        },
        _changeCurrentIndex(index){
            if(this.currentIndex != index) this.$emit('changeIndex',index);
        }
	},
    watch:{
        currentIndex(val){
            this.setTranslateX();
        }
    }
}
</script>

<style lang="stylus">
@import "~css/config"
._swiper 
    display inline-block
    text-align left
    position relative
    overflow-x hidden
    width 100%
    ._swiper-slots
        display none
    ._swiper-warp
        overflow-x hidden
        height 220px
        display flex
        transform translateX(0)
        position relative
        li._swiper-item
            flex 1
    ._animated
        transition transform 1s
    ._swiper-navigation 
        padding 15px
        absolute bottom 0 right 0
        z-index 10
        font-size 0
        line-height 0
        text-align center
        -webkit-touch-callout none
        user-select none
        span
            position relative
            display inline-block
            cursor pointer
            border-radius 50%
            margin 0 5px
            width 8px
            height 8px
            background #000
            opacity .3
            &.active
                opacity .8
                background #fff

</style>