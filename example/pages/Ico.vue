<template>
<div id="tabs-index">
    <Modal v-model="modal.show" position="bottom" type="alert" :title="modal.title" style="text-align:center">
        <Ico :type="modal.title" :size="80" />
    </Modal>
    <div class="title">
        <h1>Ic<span>o</span></h1>
        <p>图标</p>
    </div>

<Picker @change="pickerChange" title="请选择出行时间" v-model="pickerShow" :data="pickerData" :defaultValue="['火车票','120','荆棘200']" @cancel="pickerCancel" @confirm="pickeronfirm" />
<p @click="pickerShow = true">切换 Picker 状态 {{pickerShow}}</p>


    <Grid>
        <a @click="modal.show = true;modal.title=ico" slot="item" v-for="ico in icoList" :label="ico" :ico="ico" /></a>
    </Grid>
</div>
</template>
<script>
import Picker from 'components/Picker'
import Modal from 'components/Modal'
import Ico from 'components/Ico'
import Grid from 'components/Grid'
import CodeBlock from './common/CodeBlock'
import ApiBlock from './common/ApiBlock'

export default {
    components: {
        Picker,
        Modal,
        Grid,
        Ico,
        CodeBlock,
        ApiBlock
    },
    methods:{
        pickeronfirm(val) {
            console.log('确定：' + val)
        },
        pickerCancel(val) {
            console.log('取消：' + val)
        },
        pickerChange(val){
            console.log(val)
        }
    },
    data(){
        return {
            pickerShow:false,
            pickerData: [{
                label: '飞机票',
                value: '飞机票',
                child: [{
                    label: '1000',
                    value: '1000',
                    child: [
                        {
                            label: '硬座',
                            value: '硬座',
                        },
                        {
                            label: '软卧',
                            value: '软卧',
                        },
                    ]
                }, {
                    label: '1200',
                    value: '1200',
                    child: [
                        {
                            label: '硬座100',
                            value: '硬座100',
                        },
                        {
                            label: '软卧100',
                            value: '软卧100',
                        },
                    ]
                }, {
                    label: '1500',
                    value: '1500',
                    child: [
                        {
                            label: '硬座200',
                            value: '硬座200',
                        },
                        {
                            label: '软卧200',
                            value: '软卧200',
                        },
                    ]
                }, {
                    label: '1700',
                    value: '1700'
                }]
            }, {
                label: '火车票',
                value: '火车票',
                child: [{
                    label: '100',
                    value: '100',
                    child: [
                        {
                            label: '商务舱100',
                            value: '商务舱100',
                        },
                        {
                            label: '商务舱200',
                            value: '商务舱200',
                        },
                    ]
                }, {
                    label: '120',
                    value: '120',
                    child: [
                        {
                            label: '荆棘100',
                            value: '荆棘100',
                        },
                        {
                            label: '荆棘200',
                            value: '荆棘200',
                        },
                    ]
                }, {
                    label: '150',
                    value: '150'
                }, {
                    label: '170',
                    value: '170'
                }]
            }, {
                label: '的士票',
                value: '的士票'
            }, {
                label: '公交票 (disabled)',
                disabled: true,
                value: '公交票 (disabled)'
            }, {
                label: '其他',
                value: '其他'
            }],
            modal:{
                show:false,
                title:'1'
            },
            icoList:[
                'activity',
                'activity-fill',
                'addition',
                'addition-fill',
                'addpeople',
                'addpeople-fill',
                'addressbook',
                'addressbook-fill',
                'barrage',
                'barrage-fill',
                'eye',
                'eye-fill',
                'brush',
                'brush-fill',
                'businesscard',
                'businesscard-fill',
                'camera',
                'camera-fill',
                'clock',
                'clock-fill',
                'star',
                'star-fill',
                'computer',
                'computer-fill',
                'coordinates',
                'coordinates-fill',
                'createtask',
                'createtask-fill',
                'delete',
                'delete-fill',
                'emoji',
                'emoji-fill',
                'empty',
                'empty-fill',
                'enterinto',
                'enterinto-fill',
                'feedback',
                'feedback-fill',
                'flag',
                'flag-fill',
                'flash',
                'flash-fill',
                'group',
                'group-fill',
                'headlines',
                'headlines-fill',
                'homepage',
                'homepage-fill',
                'integral',
                'integral-fill',
                'interactive',
                'interactive-fill',
                'label',
                'label-fill',
                'like',
                'like-fill',
                'live',
                'live-fill',
                'lock',
                'lock-fill',
                'mail',
                'mail-fill',
                'manage',
                'manage-fill',
                'message',
                'message-fill',
                'mine',
                'mine-fill',
                'mobilephone',
                'mobilephone-fill',                
                'offline',
                'offline-fill',
                'order',
                'order-fill',
                'people',
                'people-fill',
                'picture',
                'picture-fill',
                'play',
                'play-fill',
                'playon',
                'playon-fill',
                'praise',
                'praise-fill',
                'prompt',
                'prompt-fill',
                'qrcode',
                'qrcode-fill',
                'redpacket',
                'redpacket-fill',
                'remind',
                'remind-fill',
                'select',
                'select-fill',
                'service',
                'service-fill',
                'setup',
                'setup-fill',
                'share',
                'share-fill',
                'stealth',
                'stealth-fill',
                'success',
                'success-fill',
                'systemprompt',
                'systemprompt-fill',
                'task',
                'task-fill',
                'tasklist',
                'tasklist-fill',
                'time',
                'time-fill',
                'translation',
                'translation-fill',
                'unlock',
                'unlock-fill',
                'video',
                'video-fill',
                'warning',
                'warning-fill',
                'workbench',
                'workbench-fill',
                'search',
                'search-fill',
                'goods-fill',
                'transaction-fill',
                'financial-fill',
                'marketing-fill',
                'refresh',
                'packup',
                'unfold',
                'shake',
                'add',
                'close',
                'enter',
                'more',
                'other',
                'return',
                'right',
                'scan',
                'switch',
            ]
        }
    }
}
</script>

<style lang="stylus">
</style>
