<template>
  <div id="app">
    <transition :name="transitionName">
        <keep-alive>
            <router-view class="router-view"></router-view>
        </keep-alive>
    </transition>
    <!--<Notify v-model="notifyShow" type="error" title="带辅助性文字介绍" content="撒的撒啊撒的撒啊撒的撒啊撒的撒啊" />-->
    <!--
    <Vinput v-model="inputVal" placeholder="请输入QQ/手机号/邮箱" label='用户名' leftIco="success-fill" />

    <Tabs horizontal scroll type="card" :animated="true" @change="tabsChange">
      <div slot="tab" label="科技" ico="like-fill">1</div>
      <div slot="tab" label='娱乐' ico="flash-fill">2</div>
      <div slot="tab" label='国际' ico="addressbook-fill">3</div>
    </Tabs>

    <Picker title="请选择出行时间" v-model="pickerShow" :data="pickerData" :defaultValue="['火车票','120','荆棘200']" @cancel="pickerCancel" @confirm="pickeronfirm" />
    <p @click="pickerShow = true">切换 Picker 状态 {{pickerShow}}</p>

    {{radioVal}}
    <Radio v-model="radioVal" @change="radioChange" leftIco>
      <div slot="radio" label="科技" ico="right" value="科技1"></div>
      <div slot="radio" label="娱乐" value="娱乐2" disabled></div>
      <div slot="radio" label="国际" value="国际3"></div>
    </Radio>

    {{checkboxVal}}
    <Checkbox v-model="checkboxVal" @change="checkboxChange" leftIco>
      <div slot="checkbox" label="微信支付" value="科技1"></div>
      <div slot="checkbox" label="支付宝" value="娱乐2" disabled></div>
      <div slot="checkbox" label="银行卡" ico="right" value="国际3"></div>
    </Checkbox>

    <modal type="prompt" autoClose="6000" shadeColor="rgba(0,0,0,.6)" :shadeClose="true" v-model="modalShow" title="系统通知" content="热烈欢迎产品经理张小明加入芝麻一家亲！张小明毕业于南昌大学，软件工程专业出身，曾经在搜狐等一线互联网公司任职，工作经验非常丰富，是即做过产品的攻城师，又是做过技术的产品！希望大家多多交流，共同学习进步！ " @close="close" />
    <p @click="modalShow = true">切换 Modal 状态 {{modalShow}}</p>
    -->
    

    <!--
        可以直接写HTML  制作自定义的样式
        也
        可以放 媒体和列表的组件来实现分页
        <List @paging="getListData">
        <template slot="item" slot-scope="props">
            <div class="border-b list-item animated-item">{{ props.title }}</div>
        </template>
        </List>

    {{swiperIndex}}
    <Swiper v-model="swiperIndex">
        <div slot="item" src="http://demo.htmleaf.com/1612/201612181445/themes/stones.jpg" url=""></div>
        <div slot="item" src="http://img.htmleaf.com/1612/201612181445.jpg" url=""></div>
        <div slot="item" src="http://img.htmleaf.com/1612/201612181445.jpg" url=""></div>
    </Swiper>

    -->
    

    <!--
    <Radio v-model="radioVal" @change="radioChange">
      <div slot="radio" label="科技" ico="right" value="科技1"></div>
      <div slot="radio" label="娱乐" value="娱乐2" disabled></div>
      <div slot="radio" label="国际" value="国际3"></div>
    </Radio>

    <Checkbox v-model="checkboxVal" @change="checkboxChange">
      <div slot="checkbox" label="微信支付" value="科技1"></div>
      <div slot="checkbox" label="支付宝" value="娱乐2" disabled></div>
      <div slot="checkbox" label="银行卡" ico="right" value="国际3"></div>
    </Checkbox>

    <ISwitch v-model="switchVal" ico="success" label="绑定微信账户" />
    -->


    <!--
  <transition-group name="list" tag="p">
    <p v-for="(item,index) in listData" v-bind:key="index" class="list-item">
      {{ item.title }}
    </p>
  </transition-group>
-->

  </div>
</template>


<script>
export default {
    name: 'app',
    data(){
        return{
            transitionName: 'slide-left'
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
/**
import Notify from 'components/notify'
import Vinput from 'components/input'
import Tabs from 'components/tabs'
import Picker from 'components/picker'
import Radio from 'components/radio'
import Checkbox from 'components/checkbox'
import Modal from 'components/modal'
import List from 'components/list'
import ISwitch from 'components/switch'
import Swiper from 'components/swiper'

export default {
    name: 'app',
    methods: {
        getListData(list) {
            //list.page
            setTimeout(()=>{
                list.setData([])
                list.end();
            },5000)
        }
    },
    data() {
        return {
            listData:[
                { title: '啊实打实的1' }
            ],
            swiperIndex:0,
            props: '',
            notifyShow: true,
            inputVal: '2011-10-08',
            modalShow: false,
            pickerShow: false,
            switchVal:123,
            radioVal: '科技1',
            checkboxVal: [],
            checkboxChange(val) {
                console.log(val);
            },
            radioChange(val) {
                console.log(val);
            },
            pickeronfirm(val) {
                console.log('确定：' + val)
            },
            pickerCancel(val) {
                console.log('取消：' + val)
            },
            close(clickIndex) {

            },
            tabsChange(index) {
                console.log(index);
            },
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
            }]
        }
    },
    created() {
        setInterval(()=>{
            this.listData.push({ title: '啊实打实的2' })
        },200)

        setTimeout(() => {
            return
            this.pickerData = [{
                label: '飞机票2',
                value: '飞机票2'
            }, {
                label: '飞机票3',
                value: '飞机票3'
            }, {
                label: '飞机票4',
                value: '飞机票4'
            }, {
                label: '飞机票5',
                value: '飞机票5'
            }]
        }, 2000)
    },
    components: {
        Notify,
        Vinput,
        Tabs,
        Picker,
        Radio,
        Checkbox,
        Modal,
        List,
        ISwitch,
        Swiper
    }
}
 */
</script>

<style lang="stylus">
@import '~css/base';
@import '~css/config';
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/rBHvpRWBkgyW99dXT88n7yEAvth_LlrfE80CYdSH47w.woff2?123) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/NX1NravqaXESu9fFv7KuqiEAvth_LlrfE80CYdSH47w.woff2?123) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/SKK6Nusyv8QPNMtI4j9J2yEAvth_LlrfE80CYdSH47w.woff2?123) format('woff2');
  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/gFXtEMCp1m_YzxsBpKl68iEAvth_LlrfE80CYdSH47w.woff2?123) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/zhcz-_WihjSQC0oHJ9TCYPk_vArhqVIZ0nv9q090hN8.woff2?123) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcude9INZm0R8ZMJUtfOsxrw.woff2?123) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcrpHcMS0zZe4mIYvDKG2oeM.woff2?123) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcjh33M2A-6X0bdu871ruAGs.woff2?123) format('woff2');
  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fchHJTnCUrjaAm2S9z52xC3Y.woff2?123) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcoWiMMZ7xLd792ULpGE4W_Y.woff2?123) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

body
    font-family 'Montserrat',sans-serif
.title
        padding 20px
    h1
        font-weight 700
        text-transform capitalize
        letter-spacing -1px
        font-size 28px
        span
            color color-primary
    p
        color #aaa
        font-size 14px
        line-height 18px
.router-view
    position absolute
    width 100%
    transition transform .5s cubic-bezier(.55,0,.1,1),opacity .5s cubic-bezier(.55,0,.1,1)
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
