<template>
<div id="radio-index">
    <div class="title">
        <h1>R<span>a</span>dio</h1>
        <p>单选组件</p>
    </div>
    
    <code-block>
        <div slot="title">基础示例</div>
        <div slot="intro">使用 <code>v-model</code> 双向绑定数据。</div>
        <div slot="runtime">
            <Radio v-model="checked" @change="change">
                <div slot="radio" label="android" value="0"></div>
                <div slot="radio" label="ios" value="1"></div>
                <div slot="radio" label="pc" value="2"></div>
            </Radio>
        </div>
        <script type="text/template" slot="code">
    <Radio v-model="checked">
        <div slot="radio" label="android" value="0"></div>
        <div slot="radio" label="ios" value="1"></div>
        <div slot="radio" label="pc" value="2"></div>
    </Radio>
    
    export default {
        data(){
            return {
                checked:[]
            }
        }
    }
        </script>
    </code-block>

    <code-block>
        <div slot="title">默认选中</div>
        <div slot="runtime">
            <Radio v-model="default_checked" @change="change">
                <div slot="radio" label="android" value="0"></div>
                <div slot="radio" label="ios" value="1"></div>
                <div slot="radio" label="pc" value="2"></div>
            </Radio>
        </div>
        <script type="text/template" slot="code">
    <Radio v-model="default_checked">
        ...
    </Radio>
    
    export default {
        data(){
            return {
                default_checked:['1']
            }
        }
    }
        </script>
    </code-block>

    <code-block>
        <div slot="title">禁用某项</div>
        <div slot="runtime">
            <Radio v-model="default_checked" @change="change">
                <div slot="radio" label="android" value="0" disabled></div>
                <div slot="radio" label="ios" value="1" ></div>
                <div slot="radio" label="pc" value="2"></div>
            </Radio>
        </div>
        <script type="text/template" slot="code">
    <Radio v-model="checked">
        ...
        <div slot="radio" label="ios" value="1" disabled></div>
        ...
    </Radio>
        </script>
    </code-block>

    <code-block>
        <div slot="title">自定义图标</div>
        <div slot="runtime">
            <Radio v-model="default_checked" @change="change">
                <div slot="radio" label="android" value="0"></div>
                <div slot="radio" label="ios" value="1" ico="right"></div>
                <div slot="radio" label="pc" value="2"></div>
            </Radio>
        </div>
        <script type="text/template" slot="code">
    <Radio v-model="default_checked">
        ...
        <div slot="radio" label="ios" value="1" ico="right"></div>
        ...
    </Radio>
        </script>
    </code-block>

    <code-block>
        <div slot="title">在左侧显示图标</div>
        <div slot="runtime">
            <Radio v-model="checked" @change="change" left-ico>
                <div slot="radio" label="android" value="0"></div>
                <div slot="radio" label="ios" value="1"></div>
                <div slot="radio" label="pc" value="2"></div>
            </Radio>
        </div>
        <script type="text/template" slot="code">
    <Radio v-model="checked" left-ico>
        ...
    </Radio>
        </script>
    </code-block>

    <api-block to="Radio" />
</div>
</template>
<script>
import Radio from 'components/Radio'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'


export default {
    data(){
        return {
            checked:'',
            default_checked:'1'
        }
    },
    created(){

    },
    methods: {
        change(index) {
            
        }
    },
    components: {
        Radio,
        CodeBlock,
        ApiBlock
    }
}
</script>

<style lang="stylus">

</style>
