 /**
  * 兼容IOS输入框的问题
  * @param {*} ele 兼容的输入框DOM
  */
 function compatibleIOS(ele) {
     ele.on('blur', function () {
         setTimeout(function () {
             var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
             window.scrollTo(0, Math.max(scrollHeight - 1, 0));
         }, 100);
     });
 }

 /**
  * 检验输入的内容是否是手机号码
  * @param {*} ele 需要校验input
  */
 function checkPhone(ele) {
     var phone = ele.val().trim();
     if (!(/^1[3456789]\d{9}$/.test(phone))) {
         return false;
     } else {
         return true;
     }
 }

 /**
  * 检验输入的内容是否为空
  * @param {*} ele 需要校验input
  */
 function checkEmpty(ele) {
     return ele.val().replace(/\s+/g, "");
 }


 //字符的校验
 function checkout(inputVal) {
     var regx = /[@#\$%\^&\*\;\'\'\’\’\?\.\<\>\(\)\-\+\；\"\"\”\“\、\,]+/g;
     return regx.exec(inputVal);
 }

 /**
  * 倒计时
  * @param {*Number} time  倒计时的时间
  * @param {*} ele 展示倒计时
  * @param {*} eleTwo 触发倒计时的元素
  */

 function countDown(ele, eleTwo, time) {
     ele.hide();
     eleTwo.show();
     time = time - 1;
     eleTwo.html(time + "s");
     if (time == 0) {
         ele.show();
         eleTwo.hide();
         time = 60;
         return;
     }
     setTimeout('countDown()', 1000);
 }

 /**
  * 返回
  */
 function back() {
     window.history.back();
 }

 //防止多次触发按钮事件，防抖
 function btnClick(fn, wait) {
     var time = null;
     return function () {
         clearTimeout(time)
         time = setTimeout(function () {
             fn.apply(this, arguments) //确保dou函数的this（上下文还是div）
         }, wait);
     }
 }

 /**
  * 微信分享
  * @param {*String} title 分享的标题
  * @param {*String} desc 分享的描述
  * @param {*String} imgUrl 分享的图片
  */
 function wxinit(title, desc, imgUrl) {
     var appId = 'wxd6d9705a395f8187';
     //var signature = '16c7ea3e6fa4ce16e424a5e7533710fefbf9077b';
     var timestamp = '1421664732';
     var nonce = '424934450';
     var locationUrl = location.href.split('#')[0];
     $.ajax({
         type: "GET",
         url: "http://wechat.v2.babystory365.com/wxSignature/getSignatureInfo",
         data: {
             "noncestr": nonce,
             "timestamp": timestamp,
             "url": locationUrl
         },
         dataType: "jsonp",
         crossDomain: true,
         jsonp: "callbackparam",
         jsonpCallback: "success_jsonpCallback",
         success: function (data) {
             var signature = data;
             wx.config({
                 debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                 appId: appId, // 必填，公众号的唯一标识
                 timestamp: timestamp, // 必填，生成签名的时间戳
                 nonceStr: nonce, // 必填，生成签名的随机串
                 signature: signature, // 必填，签名，见附录1
                 jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ',
                     'onMenuShareWeibo'
                 ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
             });
         }
     });

     wx.ready(function () {

         /**朋友圈**/
         wx.onMenuShareTimeline({
             title: title, // 分享标题
             link: locationUrl, // 分享链接
             imgUrl: imgUrl, // 分享图标
             success: function () {

             },
             cancel: function () {

                 // 用户取消分享后执行的回调函数
             }
         });

         /**好友**/
         wx.onMenuShareAppMessage({
             title: title, // 分享标题
             desc: desc, // 分享描述
             link: locationUrl, // 分享链接
             imgUrl: imgUrl, // 分享图标
             type: 'link', // 分享类型,music、video或link，不填默认为link
             dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
             success: function () {

             },
             cancel: function () {

             }
         });

         wx.onMenuShareQQ({
             title: title, // 分享标题
             desc: desc, // 分享描述
             link: locationUrl, // 分享链接
             imgUrl: imgUrl, // 分享图标
             success: function () {
                 // 用户确认分享后执行的回调函数
             },
             cancel: function () {
                 // 用户取消分享后执行的回调函数
             }
         });

         wx.onMenuShareWeibo({
             title: title, // 分享标题
             desc: desc, // 分享描述
             link: link, // 分享链接
             imgUrl: imgUrl, // 分享图标
             success: function () {
                 // 用户确认分享后执行的回调函数
             },
             cancel: function () {
                 // 用户取消分享后执行的回调函数
             }
         });

     });
 }

 /**
  * 获取滚动的高度然后进行隐藏和显示元素
  * @param {*} ele 元素
  * @param {*} scrollH  高度
  */
 function scrollHeight(ele, scrollH) {
     //滚动到一定的位置的时候出现立即购买底部栏
     $(window).scroll(function (event) {
         var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
         if (oTop > scrollH) {
             ele.fadeIn()
         } else {
             ele.fadeOut()
         }
     })
 }

/**
 * 是否是微信环境打开的额
 */
 function isWeiXin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

function srollFn(callBack) {
    //触底事件
    $(window).scroll(function (event) {
      var scrollH = $(document).height() - $(window).height();
      var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body
          .scrollTop;

          console.log(scrollH)
          console.log(oTop)
      if(scrollH === oTop) {
          if(callBack && typeof callBack === 'function') {
            callBack()
          }
      }
     
  });
}