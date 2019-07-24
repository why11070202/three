const Vue = require('../../node_modules/vue/dist/vue');
var vm = new Vue({
    el: '#demo2',
    data: {
        name: 'vic',
        isB: true,
        isC: false,
        classA: 'active',
        arr: [{
            name: '宋茜',
            age: 22,
            name2: ['vic', 'leader', 'victoria'],
        }, {
            name: '郑秀晶',
            age: 22,
            name2: ['kry', 'krystal'],
        }, {
            name: '林允儿',
            age: 22,
            name2: [],
        }]
    },
    template: `<div>
                    <p v-text="name"></p>
                    <hr/>
                    <ul>
                        <li v-for="e in arr" >
                            <p v-text="e.name"></p>
                            <p v-for="i in e.name2" v-text ="i"></p>
                        </li>
                    </ul>
                    <hr/>
                    <p :class="[classA,{classB:isB,classC:isC}]" v-html="name" :style="{color:'green',fontSize:'40px'}"></p>
                </div>`
})