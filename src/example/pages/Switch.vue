<template>
<div id="switch-index">
    <code-block>
        <div slot="title">开关</div>
        <div slot="intro">默认为 <code>center</code></div>
        <div slot="runtime">
            <PSwitch v-model="switchVal" label="饭后一支烟？" />
        </div>
        <script type="text/template" slot="code">
    <PSwitch v-model="switchVal" label="饭后一支烟？" />
        </script>
    </code-block>
    <api-block to="Switch" />
</div>
</template>
<script>
import PSwitch from 'components/Switch'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'

export default {
    components: {
        PSwitch,
        CodeBlock,
        ApiBlock
    },
    methods:{
    },
    data(){
        return {
            inputVal:'',
            switchVal:false
        }
    }
}
</script>

<style lang="stylus">
</style>
