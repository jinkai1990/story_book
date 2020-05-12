Vue.component('box',{
    template: `<div class='box-content'><div class='box-tip'><img v-if='!boxTip.none' class='box-img' :src='boxTip.icon' /><div class='box-name'>{{boxTip.name}}</div></div></div>`,
    props: ['box-tip']

})