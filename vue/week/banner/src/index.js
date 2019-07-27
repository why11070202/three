var Vue = require('../../node_modules/vue/dist/vue');
var template = require("./template/banner.html") //html
require('./styles/banner.css') //css
new Vue({
    el: '#box',
    data: {
        list: [{
                src: require('./img/005CeApqgy1frz9t8m4g2j33vc2kwu0y.jpg'),
                title: "第1张",
                id: 1,
            },
            {
                src: require('./img/005CeApqgy1fte2vk1manj33vc2kwqv6.jpg'),
                title: "第2张",
                id: 2,
            },
            {
                src: require('./img/005CeApqgy1fvrp5iwyekj330c208b29.jpg'),
                title: "第3张",
                id: 3,
            },
            {
                src: require('./img/005CeApqgy1g30zusqjapj32bc1jk1kx.jpg'),
                title: "第4张",
                id: 4,
            },
        ],
        currentIndex: 0,
        timer: null,
    },
    template,

    mounted() {
        this._begin()
    },
    methods: {
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex >= this.list.length) {
                this.currentIndex = 0
            }
        },
        _stop() {
            clearInterval(this.timer)
        },
        _begin() {
            this.timer = setInterval(this.autoPlay, 3000)
        },
        change(index) {
            this.currentIndex = index;
        }
    }

})