import Page from './components/page';
import Modal from './components/modal';
import Message from './components/modal/confirm';
import Icon from './components/icon';
import {Radio,RadioGroup} from './components/radio';
import {Checkbox,CheckboxGroup} from './components/checkbox';
const ivue = {
    Page,
    Modal,
    Icon,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup
};


const install = function (Vue, opts = {}) {
    Object.keys(ivue).forEach((key) => {
        Vue.component(key, ivue[key]);
    });
    Vue.prototype.$message = Message
};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);

}

export default Object.assign(ivue, {install});
