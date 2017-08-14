import Page from './components/page';
import Modal from './components/modal';
import Message from './components/modal/confirm';
const ivue = {
    Page,
    Modal
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
