<template>
<div id="checkbox-index">
    <div class="title">
        <h1><span>Check</span>box</h1>
        <p>多选组件</p>
    </div>
    
    <code-block>
        <div slot="title">基础示例</div>
        <div slot="intro">使用 <code>v-model</code> 双向绑定数据。</div>
        <div slot="runtime">
            <Checkbox v-model="checked" @change="change">
                <div slot="checkbox" label="android" value="0"></div>
                <div slot="checkbox" label="ios" value="1"></div>
                <div slot="checkbox" label="pc" value="2"></div>
            </Checkbox>
        </div>
        <script type="text/template" slot="code">
    <Checkbox v-model="checked">
        <div slot="checkbox" label="android" value="0"></div>
        <div slot="checkbox" label="ios" value="1"></div>
        <div slot="checkbox" label="pc" value="2"></div>
    </Checkbox>
    
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
            <Checkbox v-model="default_checked" @change="change">
                <div slot="checkbox" label="android" value="0"></div>
                <div slot="checkbox" label="ios" value="1"></div>
                <div slot="checkbox" label="pc" value="2"></div>
            </Checkbox>
        </div>
        <script type="text/template" slot="code">
    <Checkbox v-model="default_checked">
        ...
    </Checkbox>
    
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
            <Checkbox v-model="checked" @change="change">
                <div slot="checkbox" label="android" value="0"></div>
                <div slot="checkbox" label="ios" value="1" disabled></div>
                <div slot="checkbox" label="pc" value="2"></div>
            </Checkbox>
        </div>
        <script type="text/template" slot="code">
    <Checkbox v-model="checked">
        ...
        <div slot="checkbox" label="ios" value="1" disabled></div>
        ...
    </Checkbox>
        </script>
    </code-block>

    <code-block>
        <div slot="title">自定义图标</div>
        <div slot="runtime">
            <Checkbox v-model="default_checked" @change="change">
                <div slot="checkbox" label="android" value="0"></div>
                <div slot="checkbox" label="ios" value="1" ico="right"></div>
                <div slot="checkbox" label="pc" value="2"></div>
            </Checkbox>
        </div>
        <script type="text/template" slot="code">
    <Checkbox v-model="default_checked">
        ...
        <div slot="checkbox" label="ios" value="1" ico="right"></div>
        ...
    </Checkbox>
        </script>
    </code-block>

    <code-block>
        <div slot="title">在左侧显示图标</div>
        <div slot="runtime">
            <Checkbox v-model="checked" @change="change" left-ico>
                <div slot="checkbox" label="android" value="0"></div>
                <div slot="checkbox" label="ios" value="1"></div>
                <div slot="checkbox" label="pc" value="2"></div>
            </Checkbox>
        </div>
        <script type="text/template" slot="code">
    <Checkbox v-model="checked" left-ico>
        ...
    </Checkbox>
        </script>
    </code-block>

    <api-block to="Checkbox" />
</div>
</template>
<script>
import Checkbox from 'components/Checkbox'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'

export default {
    data(){
        return {
            checked:[],
            default_checked:['1']
        }
    },
    created(){

    },
    methods: {
        change(index) {
            
        }
    },
    components: {
        Checkbox,
        CodeBlock,
        ApiBlock
    }
}
</script>

<style lang="stylus">

</style>
