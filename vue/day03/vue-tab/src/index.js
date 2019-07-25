// var $ = require('jquery');
var Vue = require('../../node_modules/vue/dist/vue');
require('./style/tab.css');

var vm = new Vue({
    el: '#box',
    data: {
        curId: 0,
        button: ["新闻", "娱乐", "体育"],
    },
    template: `<div> 
                    <div  class="tab-bar">
                        <button v-for="(item,index) in button " v-text ="item" @click="tab(index)" :class="{active : index===curId}"></button>
                    </div>
                    <div class="tab-con">
                        <div v-for="(item,index) in button " v-text ="item" :class="{active : index===curId}">新闻 </div>
                    </div>
                </div> `,
    methods: {
        tab(index) {
            this.curId = index;
        }
    }
})