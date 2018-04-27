<template>
  <transition name="notify">
    <div class="_notify" :class="notifyClass" v-if="visible">
      <div class="_ico" :class="icoClass"></div>
      <div class="_content">
        <h2 class="_title"><span>{{title}}</span><i class="_close ico-close" @click="close()"></i></h2>
        <p class="_content">{{content}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
const ICO_TYPE = {
  'success':'ico-success-fill',
  'warning':'ico-remind-fill',
  'error':'ico-prompt-fill',
  'info':'ico-remind-fill'
};
export default {
  name: 'Notify',
  model:{
    prop:'visible',
    event:'change'
  },
  props:{
    visible:{
      type:Boolean
    },
    type:{
      type:String,
      default:'success'
    },
    title:{
      type:String,
      default:''
    },
    content:{
      type:String,
      default:''
    }
  },
  data () {
    return {
     
    }
  },
  created(){
  },
  methods:{
    close(){
      this.$emit('change',false);
      this.$emit('close');
    }
  },
  computed:{
    notifyClass(){
      return ['_notify-'+this.type,this.content ? '' : '_notify-only-title'];
    },
    icoClass(){
      return ICO_TYPE[this.type];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import "~css/config"
._notify
  absolute top 0 left 0
  z-index 9
  width 100%
  text-align left
  padding 15px 5px 15px 0
  box-sizing border-box
  color #fff
  display table
  transition all
  
  &._notify-only-title
    padding-bottom 12px
    ._content
      display none
    ._ico
      width 40px
      font-size 26px
    ._ico:before
      relative top -1px
  &._notify-success
    background-color color-success
  &._notify-info
    background-color color-info
  &._notify-warning
    background-color color-warning
  &._notify-error
    background-color color-error
  ._content
  ._ico
    display table-cell
  ._ico
    font-size 50px
    width 70px
    text-align center
    line-height 0
  ._ico:before
    relative top 16px
  ._title
    line-height 22px
    height 22px
    span
      display inline-block
      text-overflow 140px
    ._close
      color rgba(0,0,0,0.2)
      width 20px
      line-height 24px
      float right
  ._content
    color rgba(255,255,255,.7)
    font-size 14px;
    line-height 18px


.notify-enter
.notify-leave-active
  transform translate(0,-100%)
  opacity 0  
  
.notify-enter-to
  transform translate(0,0%)
  opacity 1
  /*
  class="notify notify-info notify-enter-active notify-enter-to"
    */
</style>
