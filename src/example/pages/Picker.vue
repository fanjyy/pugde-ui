<template>
<div id="tabs-index">
    <div class="title">
        <h1>Ic<span>o</span></h1>
        <p>图标</p>
    </div>
    <Picker title="请选择出行时间" v-model="pickerShow" :data="pickerData" :defaultValue="['火车票','120','荆棘200']" @cancel="pickerCancel" @confirm="pickerConfirm" @change="pickerChange" />
    <p @click="pickerShow = true">切换 Picker 状态 {{pickerShow}}</p>
    <p>选中值：{{ JSON.stringify(pickerSelect) }}</p>
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
        CodeBlock,
        ApiBlock
    },
    methods:{
        pickeronfirm(val) {
            this.pickerSelect = val;
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
            pickerSelect:'',
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
                label: '公交票',
                value: '公交票'
            }, {
                label: '其他',
                value: '其他'
            }]
        }
    }
}
</script>

<style lang="stylus">
</style>
