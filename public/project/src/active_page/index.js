var vm = new Vue({
    el: "#app",
    data: {
        headerImgSrc: '../../images/payTwo/four.png',
        priceImgSrc: '../../images/payTwo/one.png',
        contentImgSrc: '../../images/payTwo/two.png',
        contentImgSrcTwo: '../../images/payTwo/three.png',
        btnImg: '../../images/payTwo/five.png',
        btnImg2: '../../images/payTwo/six.png',
        showDay: '',
        showHour: '',
        showMinute: '',
        showSeconde: '',
        scroll: '', //滚动的距离
        fixedShow: false
    },
    created: function () { //用于初始化数据
        this.timeDown('2020/1/14 00:00:00')
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods: { //写方法函数的地方
        timeDown: function (times) {
            setInterval(() => {
                var timeing = new Date();
                var time = new Date(times);
                var num = time.getTime() - timeing.getTime();
                var day = this.addZero(parseInt(num / (24 * 60 * 60 * 1000)));
                num = num % (24 * 60 * 60 * 1000);
                var hour = this.addZero(parseInt(num / (60 * 60 * 1000)));
                num = num % (60 * 60 * 1000);
                var minute = this.addZero(parseInt(num / (60 * 1000)));
                num = num % (60 * 1000);
                var seconde = this.addZero(parseInt(num / 1000));
                this.showDay = day;
                this.showHour = hour;
                this.showMinute = minute;
                this.showSeconde = seconde;
            }, 1000)

        },

        addZero: function (nums) {
            if (nums < 10) {
                nums = '0' + nums
            } else {
                nums = nums
            }
            return nums
        },

        showRules: function () { //活动规则弹框显示
            this.fixedShow = true;
        },

        hideRules: function () { //活动规则弹框消失
            this.fixedShow = false;
        },
        handleScroll: function () {
            //触底事件
            $(window).scroll(function (event) {
                var scrollH = $(document).height() - $(window).height();
                var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body
                    .scrollTop;

                console.log(scrollH)
                console.log(oTop)
                if (scrollH === oTop) {
                    if (callBack && typeof callBack === 'function') {
                        callBack()
                    }
                }

            });
        }

    },


})