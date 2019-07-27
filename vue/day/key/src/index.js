var Vue = require('../../node_modules/vue/dist/vue');
// require("./template")  //html
// require('./styles')  //css
new Vue({
    el: '#box',
    data: {
        html: "你是谁哈啊山东省青岛市广东省victoria",
        html2: "你是谁哈啊山东省青岛市广东省victoria",
        key: null,
    },
    template: `<div >
                    <input v-model="key" />
                    <p v-html="html" :style="{fontSize:'22px'}"></p>
                    <p v-html="newhtml" :style="{fontSize:'22px'}"></p>
                </div>
                `,
    watch: {
        key: function () {
            const reg = new RegExp(this.key, 'gi');
            this.html = this.html2.replace(reg, `<span style="color:red;">${this.key}</span>`)
        }
    },

    computed: {
        newhtml() {
            const reg = new RegExp(this.key, 'gi');
            return this.html2.replace(reg, '<span style="color:yellow";}>' + this.key + '</span>')
            // vm.html = "<b>hah</b>"
        }
    }
})