<template>
<div id="modal-index">
    
    <Modal v-bind="config" @close="config.visible=false">
        <b v-if="config.content == 'close'" @click="config.visible=false">close</b>
        <template v-else-if="config.content == 'input'">
            <Input v-model="inputVal" placeholder="请输入QQ/手机号/邮箱" />
        </template>
        <template v-else-if="config.content == 'tabs'">
            <Tabs scroll type="line">
                <div slot="tab" label="tab1" ico="like-fill"><span class="pager">1</span></div>
                <div slot="tab" label="tab2" ico="like-fill"><span class="pager">2</span></div>
                <div slot="tab" label="tab3" ico="like-fill"><span class="pager">3</span></div>
                <div slot="tab" label="tab4" ico="like-fill"><span class="pager">4</span></div>
                <div slot="tab" label="tab5" ico="like-fill"><span class="pager">5</span></div>
                <div slot="tab" label="tab6" ico="like-fill"><span class="pager">6</span></div>
                <div slot="tab" label="tab7" ico="like-fill"><span class="pager">7</span></div>
            </Tabs>
        </template>
        <div v-else v-html="config.content"></div>
    </Modal>

    <div class="title">
        <h1>M<span>o</span>dal</h1>
        <p>弹窗组件</p>
    </div>
    
    <code-block>
        <div slot="title">基础示例</div>
        <div slot="intro">使用 <code>v-model</code> 控制是否显示</div>
        <div slot="runtime">
            <Button @click="base()">普通弹窗</Button>
            <Button @click="autoclose()">自动关闭</Button>
            <Button @click="insertimg()">插入图片</Button>
        </div>
        <script type="text/template" slot="code">
    <Modal v-model="val" title="title">这是一个普通 modal</Modal>
    <Modal v-model="val" title="title" :auto-close="3000">这个 modal 将会自动关闭</Modal>
    <Modal v-model="val" title="title">
        <img src="http://img4.imgtn.bdimg.com/it/u=4064395044,179921152&fm=27&gp=0.jpg" alt="" />
        插入图片
    </Modal>
        </script>
    </code-block>

    <code-block>
        <div slot="title">改变类型</div>
        <div slot="intro">
            默认为 <code>alert</code>，共有 3 个类型可以选择，它们的区别就是按钮的多少而已
        </div>
        <div slot="runtime">
            <Button @click="alert()">alert</Button>
            <Button @click="confirm()">confirm</Button>
            <Button @click="panel()">panel</Button>
        </div>
        <script type="text/template" slot="code">
    <Modal v-model="val" type="alert" title="title">...</Modal>
    <Modal v-model="val" type="panel" title="panel">...</Modal>
    <Modal v-model="val" type="confirm" title="confirm">...</Modal>
        </script>
    </code-block>

    <code-block>
        <div slot="title">改变位置</div>
        <div slot="intro">默认为 <code>center</code></div>
        <div slot="runtime">
            <Button @click="center()">center</Button>
            <Button @click="top()">top</Button>
            <Button @click="bottom()">bottom</Button>
            <Button @click="left()">left</Button>
            <Button @click="right()">right</Button>
            <Button @click="full()">full</Button>
        </div>
        <script type="text/template" slot="code">
    <Modal v-model="val" type="alert" position="top" title="title">...</Modal>
    <Modal v-model="val" type="alert" position="bottom" title="title">...</Modal>
    <Modal v-model="val" type="alert" position="left" title="title">...</Modal>
    <Modal v-model="val" type="alert" position="right" title="title">...</Modal>
    <Modal v-model="val" type="alert" position="center" title="title">...</Modal>
    <Modal v-model="val" type="panel" position="full" title="title">
        <b @click="val = false">close</b>
    </Modal>
        </script>
    </code-block>


    <code-block>
        <div slot="title">插入 Input</div>
        <div slot="runtime">
            <Button @click="input()">open</Button>
        </div>
        <script type="text/template" slot="code">
    <Modal v-model="val" title="title">
        <Input v-model="inputVal" placeholder="请输入QQ/手机号/邮箱" />
    </Modal>
        </script>
    </code-block>

    <code-block>
        <div slot="title">插入 Tabs</div>
        <div slot="runtime">
            <Button @click="tabs()">open</Button>
        </div>
        <script type="text/template" slot="code">
    <Modal v-model="val" position="right" type="panel">
        <Tabs scroll type="line">
            <div slot="tab" label="tab1" ico="like-fill">1</div>
            <div slot="tab" label="tab2" ico="like-fill">2</div>
            <div slot="tab" label="tab3" ico="like-fill">3</div>
            <div slot="tab" label="tab4" ico="like-fill">4</div>
            <div slot="tab" label="tab5" ico="like-fill">5</div>
            <div slot="tab" label="tab6" ico="like-fill">6</div>
            <div slot="tab" label="tab7" ico="like-fill">7</div>
        </Tabs>
    </Modal>
        </script>
    </code-block>

    <api-block to="Modal" />
</div>
</template>
<script>
import Input from 'components/Input'
import Tabs from 'components/Tabs'
import Button from 'components/Button'
import Modal from 'components/Modal'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'

export default {
    data(){
        return {
            inputVal:'',
            config:{}
        }
    },
    created(){
        
    },
    methods: {
        baseConfig(){
            return {
                visible:true,
                type:'alert',
                title:'title',
                autoClose:0,
                content:' Modal 这个词来自于 Mode ,是后者的形容词形式,意思是“模态的、模式的”。 在用户接口(UI)设计领域,Mode用来表示那些具有2种或多种不同状态的事物。',
                shadeClose:true,
                shadeColor:'rgba(0,0,0,.8)',
                okTxt:'确定',
                cancelTxt:'取消',
                position:'center',
            }
        },
        base(){
            this.config = this.baseConfig();
            this.config.visible = true;
        },
        autoclose(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.autoClose = 3000;
        },
        insertimg(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.content = '<img src="http://img4.imgtn.bdimg.com/it/u=4064395044,179921152&fm=27&gp=0.jpg" alt="" />' + this.config.content
        },
        alert(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.type = "alert";
        },
        panel(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.type = "panel";
        },
        confirm(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.type = "confirm";
        },
        top(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.position = "top"  
        },
        bottom(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.position = "bottom"
        },
        left(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.position = "left"
        },
        right(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.position = "right"
        },
        center(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.position = "center"
        },
        full(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.position = "full"
            this.config.type = "panel"
            this.config.content = 'close'
        },
        input(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.content = 'input'
        },
        tabs(){
            this.config = this.baseConfig();
            this.config.visible = true;
            this.config.title = ''
            this.config.type = 'panel'
            this.config.position = 'right'
            this.config.content = 'tabs'
        },
    },
    components: {
        Tabs,
        Input,
        Button,
        Modal,
        CodeBlock,
        ApiBlock
    }
}
</script>

<style lang="stylus">
#modal-index
    .PG__button-group
    .PG__button
        margin 0 10px 10px 10px
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
