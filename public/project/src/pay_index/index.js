let vm = new Vue({
    el: "#app",
    data: {
        headerTitleSrc: './images/payOne/zhuti@2x.png',
        coverImg: './images/payFour/1.jpg',
        nowPrice: 49,
        newPrice: 9.9,
        buyNum: 1128,
        contentOneImgSrc: './images/payFour/2.jpg',
        contentTwoImgSrc: './images/payFour/3.jpg',
        contentThreeImgSrc: './images/payFour/4.jpg',
        contentFourImgSrc: '../../images/payOne/qa@2x.png',
        btnNowPrice: 49,
        btnReducePrice: 39,
        buyPirce: 9.9,
        boxTip: {
            icon: '../../images/payOne/success.png',//图标
            success: true,
            name: '购买成功',//提示文字
            none: false //提示框的图标是否显示
        },
        boxShow: false //弹框的显示
    },
    created: function () { //用于初始化数据

    },

    methods: { //写方法函数的地方

        buyBtn: function () { //立即购买点击事件
            var that = this;

            // this.boxShow = true;

            // setTimeout(function () {
            //     that.boxShow = false;
            // }, 2000)


            // that.boxTip = { //购买失败的提示
            //     icon: '../../images/payOne/fail.png',
            //     success: false,
            //     name: '购买失败',
            //     none: false
            // }

            // location.href = 'http://wechat.v2.babystory365.com/wechatOauth2/wxLoginPage?path=toPayGuoXueBooksUrl'
            location.href = '../resource_class/index/index.html'
        }
    }

})