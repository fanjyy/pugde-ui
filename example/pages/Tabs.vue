<template>
<div id="tabs-index">
    <div class="title">
        <h1>t<span>a</span>bs</h1>
        <p>选项卡切换组件</p>
    </div>
    
    <code-block>
        <div slot="title">圆角</div>
        <div slot="runtime">
            <Tabs @change="change" type="radius">
                <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
                <div slot="tab" label="tab2" ico="flash-fill"><span class="pager">2</span></div>
                <div slot="tab" label="tab3" ico="addressbook-fill"><span class="pager">3</span></div>
            </Tabs>
        </div>
        <script type="text/template" slot="code">
    <Tabs type="radius">
        <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
        <div slot="tab" label="tab2" ico="flash-fill"><span class="pager">2</span></div>
        <div slot="tab" label="tab3" ico="addressbook-fill"><span class="pager">3</span></div>
    </Tabs>
        </script>
    </code-block>


    <code-block>
        <div slot="title">下划线</div>
        <div slot="runtime">
            <Tabs @change="change" type="line">
                <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
                <div slot="tab" label="tab2" ico="flash-fill"><span class="pager">2</span></div>
                <div slot="tab" label="tab3" ico="addressbook-fill"><span class="pager">3</span></div>
            </Tabs>
        </div>
        <script type="text/template" slot="code">
    <Tabs type="line">
        ...
    </Tabs>
        </script>
    </code-block>

    
    <code-block>
        <div slot="title">卡片</div>
        <div slot="runtime">
            <Tabs @change="change" type="card">
                <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
                <div slot="tab" label="tab2" ico="flash-fill"><span class="pager">2</span></div>
                <div slot="tab" label="tab3" ico="addressbook-fill"><span class="pager">3</span></div>
            </Tabs>
        </div>
        <script type="text/template" slot="code">
    <Tabs type="card">
        ...
    </Tabs>
        </script>
    </code-block>

    <code-block>
        <div slot="title">突出图标</div>
        <div slot="intro">当 <code>type</code> = <code>line</code> / <code>card</code> 时有效。</div>
        <div slot="runtime">
            <Tabs vertical type="line" @change="change">
                <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
                <div slot="tab" label="tab2" ico="flash-fill"><span class="pager">2</span></div>
                <div slot="tab" label="tab3" ico="addressbook-fill"><span class="pager">3</span></div>
            </Tabs>
        </div>
        <script type="text/template" slot="code">
    <Tabs vertical type="card">
        ...
    </Tabs>
        </script>
    </code-block>

    <code-block>
        <div slot="title">超出滚动</div>
        <div slot="intro">当 <code>type</code> = <code>line</code> / <code>card</code> 时有效。</div>
        <div slot="runtime">
            <Tabs scroll type="line" @change="change">
                <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
                <div slot="tab" label="tab2" ico="like-fill"><span class="pager">2</span></div>
                <div slot="tab" label="tab3" ico="like-fill"><span class="pager">3</span></div>
                <div slot="tab" label="tab4" ico="like-fill"><span class="pager">4</span></div>
                <div slot="tab" label="tab5" ico="like-fill"><span class="pager">5</span></div>
                <div slot="tab" label="tab6" ico="like-fill"><span class="pager">6</span></div>
                <div slot="tab" label="tab7" ico="like-fill"><span class="pager">7</span></div>
            </Tabs>
        </div>
        <script type="text/template" slot="code">
    <Tabs horizontal type="line">
        ...
    </Tabs>
        </script>
    </code-block>

    <api-block to="Tabs" />
</div>
</template>
<script>
import Tabs from 'components/Tabs'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'


export default {
    data(){
        return {
            
        }
    },
    created(){

    },
    methods: {
        change(index) {
            
        }
    },
    components: {
        Tabs,
        CodeBlock,
        ApiBlock
    }
}
</script>

<style lang="stylus">
#tabs-index
    .pager
        color #333
        border-radius 50%
        display block
        width 170px
        height 170px
        text-align center
        line-height 170px
        margin 20px auto
        font-size 34px
</style>
