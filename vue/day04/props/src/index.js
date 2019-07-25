var Vue = require('../../node_modules/vue/dist/vue');
require('./index.css');
Vue.component('my-header', {
    data() {
        return {
            // name: '未能获取地址',
            // name2: '请选择收货地址',
            news: '',

        }
    },
    props: ['title', "type", "con", "className", "span"],
    template: `<div class='header'>
                <p v-text="title" :style="{textAlign : type}"></p>
                <div :class="[className]"><span v-text="span"></span> <input  :placeholder ="con" v-model="news" /></div>
              </div>`,
})

new Vue({
    el: '#box',
    data: {
        name: '未能获取地址',
        name2: '选择收货地址',
        value1: '搜索饿了么商家，商品名称',
        value2: '请输入地址',
        spanA: '',
        spanB: '选择...'
    },
    template: `<div id="big">
                    <div >
                        <my-header :title="name" type="left" :con="value1" className="classA" :span="spanA"></my-header>
                        <my-header :title="name2" type="center" :con="value2" className="classB" :span="spanB"></my-header>
                    </div>
                </div>`
})