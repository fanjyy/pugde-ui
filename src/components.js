import "css/base"
import Notify from 'components/Notify'
import Vinput from 'components/Input'
import Tabs from 'components/Tabs'
import Picker from 'components/Picker'
import Radio from 'components/Radio'
import Checkbox from 'components/Checkbox'
import Modal from 'components/Modal'
import List from 'components/List'
import ISwitch from 'components/Switch'
import Swiper from 'components/Swiper'


const pudge = {
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
};

Object.keys(pudge).forEach(key => {
    Vue.component(key, pudge[key]);
});
