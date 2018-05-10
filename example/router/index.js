import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:'/',
        name:'index',
        component:resolve => require(["../pages/Index"], resolve)
    },{
        path:'/tabs',
        name:'tabsIndex',
        component:resolve => require(["../pages/Tabs"], resolve)
    },{
        path:'/checkbox',
        name:'checkboxIndex',
        component:resolve => require(["../pages/Checkbox"], resolve)
    },{
        path:'/radio',
        name:'radioIndex',
        component:resolve => require(["../pages/Radio"], resolve)
    },{
        path:'/modal',
        name:'modalIndex',
        component:resolve => require(["../pages/Modal"], resolve)
    },{
        path:'/ico',
        name:'icoIndex',
        component:resolve => require(["../pages/Ico"], resolve)
    },{
        path:'/button',
        name:'buttonIndex',
        component:resolve => require(["../pages/Button"], resolve)
    },{
        path:'/switch',
        name:'switchIndex',
        component:resolve => require(["../pages/Switch"], resolve)
    },{
        path:'/picker',
        name:'pickerIndex',
        component:resolve => require(["../pages/Picker"], resolve)
    }]
});