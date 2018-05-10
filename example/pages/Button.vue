<template>
<div id="button-index">
    <div class="title">
        <h1>Bu<span>tton</span></h1>
        <p>按钮</p>
    </div>
    <Button type="primary">primary</Button>
    <Button type="info">info</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="error">error</Button>

    <Button plain type="primary">plain</Button>
    <Button plain type="info">plain</Button>
    <Button plain type="success">plain</Button>
    <Button plain type="warning">plain</Button>
    <Button plain type="error">plain</Button>

    <Button loading>加载中...</Button>
    <Button disabled>禁用</Button>
    <Button stiff>直角</Button>

    <Button mini>mini 按钮</Button>

    <Button inline style="margin-right:0">内联</Button><Button inline style="margin-right:0">内联</Button><Button inline style="margin-right:0">内联</Button>

    <Button-group>
        <Button><b>B</b></Button>
        <Button loading><u>U</u></Button>
        <Button>T</Button>
        <Button plain><i>I</i></Button>
    </Button-group>

    <Button-group vertical>
        <Button>竖向排列的 Group</Button>
        <Button>竖向排列的 Group</Button>
    </Button-group>

    <Button-group plain>
        <Button ico="eye-fill">图标</Button>
        <Button ico="camera-fill">图标</Button>
    </Button-group>
    
    <code-block>
        <script type="text/template" slot="code">
    <Button type="primary">primary</Button>
    <Button type="info">info</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="error">error</Button>

    <Button plain type="primary">plain</Button>
    <Button plain type="info">plain</Button>
    <Button plain type="success">plain</Button>
    <Button plain type="warning">plain</Button>
    <Button plain type="error">plain</Button>

    <Button loading>加载中...</Button>
    <Button disabled>禁用</Button>
    <Button stiff>直角</Button>

    <Button mini>mini 按钮</Button>

    <Button inline style="margin-right:0">内联</Button><Button inline style="margin-right:0">内联</Button><Button inline style="margin-right:0">内联</Button>
    
    <Button-group>
        <Button><b>B</b></Button>
        <Button loading><u>U</u></Button>
        <Button>T</Button>
        <Button plain><i>I</i></Button>
    </Button-group>

    <Button-group vertical>
        <Button>竖向排列的 Group</Button>
        <Button>竖向排列的 Group</Button>
    </Button-group>

    <Button-group plain>
        <Button ico="eye-fill">图标</Button>
        <Button ico="camera-fill">图标</Button>
    </Button-group>
    import Button from 'components/Button'
    export default {
        components: {
            ButtonGroup:Button.Group
            Button
        },
        data(){
            return {}
        }
    }
        </script>
    </code-block>
    <api-block to="Button" />
    <api-block to="ButtonGroup" />
</div>
</template>
<script>
import Button from 'components/Button'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'

export default {
    components: {
        ButtonGroup:Button.Group,
        Button,
        CodeBlock,
        ApiBlock
    },
    data(){
        return {
            inputVal:123,
        }
    }
}
</script>

<style lang="stylus">
#button-index
    .PG__buttongroup
    .PG__button
        margin 0 10px 10px 10px
    .PG__buttongroup
        .PG__button
            margin 0
</style>
