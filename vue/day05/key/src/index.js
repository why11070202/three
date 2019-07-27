var Vue = require('../../node_modules/vue/dist/vue');
var template = require('./template/components.html');
var template2 = require('./template/Vue.set.html');


new Vue({
    el: '#box',
    data: {

    },
    template: `<my-header></my-header>
                `,
    components: {
        'my-header': {
            data() {
                return {
                    name: 'components',
                    song: '屋顶着火',
                }
            },
            template
        }
    }
})

//use
var vm = new Vue({
    el: '#box2',
    data: {
        arr: [{
            name: '宋茜',
            song: ['屋顶着火', 'Bad boy', '九龙诀']
        }, {
            name: '金泰妍',
            song: ['I', '11：11', 'why']
        }, {
            name: '郑秀晶',
            song: ["I Don't want love you ", 'sorry', 'Butterfly']
        }],
        team: 'f(x)',
        render: null

    },
    template: template2,

})

//set
Vue.set(vm.arr[2], 'name', "krystal");
Vue.set(vm, 'team', '小破团');

// delete  Vue 实例或 Vue 实例的根数据对象。
Vue.delete(vm.arr[2].song, 1, );


//compile
var res = Vue.compile('<div><span>{{ team }}</span></div>');
Vue.set(vm, 'render', res.render);
console.log(res.render);
console.log(res.staticRenderFns);


//extend
var idol = Vue.extend({
    data() {
        return {
            name: '少女时代',

        }
    },
    computed: {
        colora() {
            return state.color1
        },
    },
    template: `<div>
                <p v-text="name" @click="test"></p>
                <p>{{colora}}</p>
            </div>`,
    methods: {
        test() {
            state.color1 = 'green'
        }
    }
})
//组件
Vue.component('my-idol', idol);

//observable
const state = Vue.observable({
    color1: 'red'
})

new Vue({
    el: "#box3",
    template: `<div>
                    <h1>component、extend、observeable</h1>
                    <my-idol ></my-idol>
                </div>
    `,

})