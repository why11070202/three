var Vue = require('../../node_modules/vue/dist/vue');

new Vue({
    el: '#box',
    data: {
        html: "你是谁哈啊山东省青岛市广东省victoria",
        key: null,
    },
    template: `<div >
                    <input v-model="key"/>
                    <p v-html="newhtml" :style="{fontSize:'22px'}"></p>
                </div>
                `,

    computed: {
        newhtml() {
            const reg = new RegExp(this.key, 'gi');
            return this.html.replace(reg, '<span style="color:red";}>' + this.key + '</span>')
            // vm.html = "<b>hah</b>"
        }
    }
})