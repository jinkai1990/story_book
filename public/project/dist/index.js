'use strict';

$(function () {
    var num = 0; //初始化的选择的奖品索引
    var speedNum = 0; //转动了次数
    var time = null; //创建的setInterval
    var speed = 1000; //抽奖选择的速度
    var isClick = true; //
    var isDraw = false; //是否抽过奖
    var NoticeData = [{
        text: '158*******9获得一个月VIP！'
    }, {
        text: '132*******8获得华为儿童手表！'
    }, {
        text: '188*******4获得一个月VIP！'
    }, {
        text: '158*******5获得14只老鼠绘本！'
    }, {
        text: '136*******1获得一个月VIP！'
    }, {
        text: '132*******9获得一个月VIP！'
    }, {
        text: '186*******9获得米奇乐高积木！'
    }, {
        text: '183*******4获得一年VIP！'
    }, {
        text: '188*******2获得一个月VIP！'
    }, {
        text: '187*******3获得一个月VIP！'
    }, {
        text: '186*******9获得14只老鼠绘本！'
    }, {
        text: '138*******8获得14只老鼠绘本！'
    }, {
        text: '188*******2获得华为儿童手表！'
    }, {
        text: '152*******1获得一个月VIP！'
    }, {
        text: '132*******7获得米奇乐高积木！'
    }, {
        text: '186*******9获得一个月VIP！'
    }, {
        text: '138*******1获得一个月VIP！'
    }, {
        text: '151*******9获得一个月VIP！'
    }, {
        text: '137*******4获得一年VIP！'
    }, {
        text: '153*******1获得14只老鼠绘本！'
    }, {
        text: '136*******0获得一个月VIP！'
    }, {
        text: '186*******8获得14只老鼠绘本！'
    }, {
        text: '158*******2获得一个月VIP！'
    }, {
        text: '138*******0获得一个月VIP！'
    }, {
        text: '183*******5获得华为儿童手表！'
    }, {
        text: '137*******1获得一个月VIP！'
    }, {
        text: '158*******1获得14只老鼠绘本！'
    }, {
        text: '186*******5获得一个月VIP！'
    }, {
        text: '180*******1获得一个月VIP！'
    }, {
        text: '136*******8获得米奇乐高积木！'
    }, {
        text: '158*******6获得一年VIP！'
    }, {
        text: '139*******8获得一个月VIP！'
    }, {
        text: '139*******4获得一个月VIP！'
    }, {
        text: '177*******2获得14只老鼠绘本！'
    }, {
        text: '189*******5获得14只老鼠绘本！'
    }, {
        text: '159*******5获得华为儿童手表！'
    }, {
        text: '185*******3获得一个月VIP！'
    }, {
        text: '135*******3获得米奇乐高积木！'
    }, {
        text: '186*******2获得一个月VIP！'
    }, {
        text: '139*******4获得一个月VIP！'
    }, {
        text: '137*******8获得一个月VIP！'
    }, {
        text: '189*******0获得一年VIP！'
    }, {
        text: '139*******7获得14只老鼠绘本！'
    }, {
        text: '180*******8获得一个月VIP！'
    }, {
        text: '187*******8获得14只老鼠绘本！'
    }, {
        text: '135*******8获得一个月VIP！'
    }, {
        text: '186*******6获得一个月VIP！'
    }, {
        text: '186*******8获得华为儿童手表！'
    }, {
        text: '137*******8获得一个月VIP！'
    }, {
        text: '185*******2获得14只老鼠绘本！'
    }, {
        text: '136*******2获得一个月VIP！'
    }, {
        text: '177*******7获得一个月VIP！'
    }, {
        text: '159*******6获得米奇乐高积木！'
    }, {
        text: '183*******4获得一年VIP！'
    }, {
        text: '188*******2获得一个月VIP！'
    }, {
        text: '187*******3获得一个月VIP！'
    }, {
        text: '185*******3获得一个月VIP！'
    }, {
        text: '186*******9获得14只老鼠绘本！'
    }, {
        text: '138*******8获得14只老鼠绘本！'
    }, {
        text: '188*******2获得华为儿童手表！'
    }, {
        text: '152*******1获得一个月VIP！'
    }, {
        text: '132*******7获得米奇乐高积木！'
    }, {
        text: '186*******9获得一个月VIP！'
    }, {
        text: '138*******8获得一个月VIP！'
    }, {
        text: '151*******9获得一个月VIP！'
    }, {
        text: '137*******4获得一年VIP！'
    }, {
        text: '153*******1获得14只老鼠绘本！！'
    }, {
        text: '136*******0获得一个月VIP！'
    }, {
        text: '186*******8获得14只老鼠绘本！'
    }, {
        text: '158*******2获得一个月VIP！'
    }, {
        text: '186*******5获得一个月VIP！'
    }, {
        text: '180*******1获得一个月VIP！'
    }, {
        text: '136*******8获得米奇乐高积木！'
    }, {
        text: '158*******6获得一年VIP！'
    }, {
        text: '139*******8获得一个月VIP！'
    }, {
        text: '139*******4获得一个月VIP！'
    }, {
        text: '177*******2获得14只老鼠绘本！'
    }, {
        text: '189*******5获得14只老鼠绘本'
    }, {
        text: '159*******5获得华为儿童手表！'
    }, {
        text: '185*******3获得一个月VIP！'
    }, {
        text: '135*******3获得米奇乐高积木！'
    }, {
        text: '186*******2获得一个月VIP！'
    }, {
        text: '139*******4获得一个月VIP！'
    }, {
        text: '137*******8获得一个月VIP！'
    }, {
        text: '189*******0获得一年VIP！'
    }, {
        text: '139*******7获得14只老鼠绘本！'
    }, {
        text: '180*******8获得一个月VIP！'
    }, {
        text: '187*******8获得14只老鼠绘本！'
    }, {
        text: '135*******8获得一个月VIP！'
    }];

    createNoticeList(NoticeData);
    time = setInterval(draw, speed);
    getCountDown('2020/1/18 00:00:00'); //倒计时
    //抽奖的点击事件
    $('.draw-active').on('click', function () {
        if (isClick) {
            //防止抽奖的过程中重复点击
            if ($('.draw-nums').html() == 0) {
                $('#fixed-box').fadeIn();
                $('.award-img').attr('src', '../../images/lottery_draw/tanchuang_1@3x.png ');
                $('.btn-img').attr('src', '../../images/lottery_draw/lijigoumai@3x.png');
                isClick = true;
                return;
            } else {
                isClick = false;
                speedNum = 0;
                isDraw = true;
                clearInterval(time);
                speed = 100;
                time = setInterval(drawActive, speed);
            }
        }
    });
    //初始化方法
    function draw() {
        num++;
        if (num > 7) {
            num = 0;
        }
        $('.kinds-c').eq(num).addClass('active').parent().siblings().children().removeClass('active');
    }
    //点击事件的方法
    function drawActive() {
        speedNum++;
        num++;
        if (num > 7) {
            num = 0;
        }

        if (speedNum > 32) {
            speed = 300;
            clearInterval(time);
            time = setInterval(drawActive, speed);
        }

        if (speedNum > 48) {
            speed = 500;
            clearInterval(time);
            time = setInterval(drawActive, speed);
        }

        if (speedNum > 56) {
            speed = 800;
            clearInterval(time);
            time = setInterval(drawActive, speed);
            if (num === 2 || num === 4 || num === 7) {
                clearInterval(time);
                $('#fixed-box').fadeIn();
                $('.draw-nums').html(0);
                $('.award-img').attr('src', '../../images/lottery_draw/tanchuang_2@3x.png');
                $('.btn-img').attr('src', '../../images/lottery_draw/konw.png');
                isClick = true;
            }
        }
        $('.kinds-c').eq(num).addClass('active').parent().siblings().children().removeClass('active');
    }
    //倒计时
    function getCountDown(times) {
        var set = setInterval(function () {
            var timeing = new Date();
            var time = new Date(times);
            var day = null,
                hour = null,
                minute = null,
                seconde = null;

            var num = time.getTime() - timeing.getTime();
            if (num > 0) {
                day = addZero(num / (24 * 60 * 60 * 1000));
                num = num % (24 * 60 * 60 * 1000);
                hour = addZero(num / (60 * 60 * 1000));
                num = num % (60 * 60 * 1000);
                minute = addZero(num / (60 * 1000));
                num = num % (60 * 1000);
                seconde = addZero(num / 1000);
                getDHMS(day, hour, minute, seconde);
            } else {
                //防止时间到期后的出现负数
                clearInterval(set);
                getDHMS('00', '00', '00', '00');
            }
        }, 1000);
    }

    function getDHMS(dayT, hourT, minuteT, secondT) {
        $('#dayOne').html(dayT.toString().split('')[0]);
        $('#dayTwo').html(dayT.toString().split('')[1]);
        $('#hourOne').html(hourT.toString().split('')[0]);
        $('#hourTwo').html(hourT.toString().split('')[1]);
        $('#minuteOne').html(minuteT.toString().split('')[0]);
        $('#minuteTwo').html(minuteT.toString().split('')[1]);
        $('#secondOne').html(secondT.toString().split('')[0]);
        $('#secondTwo').html(secondT.toString().split('')[1]);
    }

    function addZero(nums) {
        if (nums < 10) {
            nums = '0' + nums;
        } else {
            nums = nums;
        }
        return nums;
    }

    //创建抽奖通知信息
    function createNoticeList(data) {
        for (var i = 0; i < data.length; i++) {
            $('.list-p').append($('<p>' + data[i].text + '</p>'));
        }
        var noticeNum = 0;
        var noticeSet = setInterval(function () {
            noticeNum++;
            if (noticeNum > data.length) {
                noticeNum = 0;
                $('.list-p').css('marginTop', 0);
            } else {
                var mt = -noticeNum * 112 + 'px';
                $('.list-p').animate({
                    marginTop: mt
                }, 'slow');
            }
        }, 2000);
    }

    //关闭弹窗
    $('.close-img').on('click', function () {
        $('#fixed-box').fadeOut();
    });
    //我的礼品盒填写信息点击事件
    $('.btn').on('click', function () {
        if (!isClick) {
            return;
        }
        if (!isDraw) {
            $('#fixed-box').fadeIn();
            $('.award-img').attr('src', '../../images/lottery_draw/tanchuang_1@3x.png');
            $('.btn-img').attr('src', '../../images/lottery_draw/lijigoumai@3x.png');
        } else {
            $('#fixed-box').fadeIn();
            $('.award-img').attr('src', '../../images/lottery_draw/tanchuang_2@3x.png');
            $('.btn-img').attr('src', '../../images/lottery_draw/konw.png');
        }
    });
    //弹框点击事件
    $('.btn-img').on('click', function () {
        if ($(this).attr('src') === '../../images/lottery_draw/lijigoumai@3x.png') {
            //这是点击购买的时候跳转购买年会员页面
            console.log('点击购买');
        } else {
            $('#fixed-box').fadeOut();
        }
    });

    $(window).scroll(function (event) {
        var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
        if (oTop > 700) {
            $('.draw-fixed').fadeIn();
        } else {
            $('.draw-fixed').fadeOut();
        }
    });
});
