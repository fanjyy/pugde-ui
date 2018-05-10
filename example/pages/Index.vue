<template>
<div id="index">
    <div class="title">
        <h1>p<span>u</span>dge</h1>
        <p>基于 VUE 2.0 的移动端框架</p>
    </div>
    <ul class="menu">
        <li><router-link to="/tabs"><span>选项卡 </span>Tabs</router-link></li>
        <li><router-link to="/checkbox"><span>多选框 </span>Checkbox</router-link></li>
        <li><router-link to="/radio"><span>单选框 </span>Radio</router-link></li>
        <li><router-link to="/modal"><span>弹窗 </span>Modal</router-link></li>
        <li><router-link to="/ico"><span>图标 </span>Ico</router-link></li>
        <li><router-link to="/button"><span>按钮 </span>Button</router-link></li>
        <li><router-link to="/switch"><span>开关 </span>Switch</router-link></li>
        <li><router-link to="/"><span>分页 </span>List <small><i>todo</i></small></router-link></li>
        <li><router-link to="/"><span>通知 </span>Notify <small><i>todo</i></small></router-link></li>
        <li><router-link to="/"><span>输入框 </span>Input <small><i>todo</i></small></router-link></li>
        <li><router-link to="/"><span>选择器 </span>Picker <small><i>todo</i></small></router-link></li>
        <li><router-link to="/"><span>滑动窗 </span>Swiper <small><i>todo</i></small></router-link></li>
        <li><router-link to="/"><span>... </span>Grid <small><i>todo</i></small></router-link></li>
        <li><router-link to="/"><span>... </span>Flex <small><i>todo</i></small></router-link></li>
    </ul>
</div>
</template>


<script>
import Button from 'components/Button'
export default {
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="stylus">
@import "~css/config"
#index
    user-select none
    .menu
        text-indent 20px
        a
            display block
            height 50px
            line-height 50px
            color #333
            transition all
            &:active
                background #f9f9f9
                color #000
                letter-spacing 4px
            span
                display none
</style>
