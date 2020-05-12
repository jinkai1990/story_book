  /**
   * 兼容IOS输入框的问题
   * @param {*} ele 兼容的输入框DOM
   */
  function compatibleIOS(ele) {
    ele.on('blur', function () {
        setTimeout(function(){
            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
            window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
    });
}
/**
 * 根据不同屏幕的宽度设置字体的大小
 */
function screenChange() {
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 20 + 'px';
}
/**
 * 检验输入的内容是否是手机号码
 * @param {*} ele 需要校验input
 */
function checkPhone(ele) { 
    var phone = ele.val().trim();
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
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
    return ele.val().replace(/\s+/g,"");
}
/**
 * 关闭弹框
 * @param {*} closeEle 点击对象
 * @param {*} boxEle 关闭的对象
 */
function closeBox(closeEle, boxEle, callBack) {
    closeEle.on('click', function (e) {
        e.stopPropagation()
        boxEle.fadeOut()
        if ( callBack && typeof callBack === 'function') {
            callBack()
        }
    }) 
}
/**
 * 打开弹框
 * @param {*} showEle 打开的对象
 * @param {*} tipEle 弹框中提示元素
 * @param {*} tipWord 提示的信息
 */
function showBox(showEle, tipEle, tipWord) {
    showEle.fadeIn();
    if (tipEle) {
        tipEle.html(tipWord)
    }
   
}

//字符的校验
function checkout (inputVal) {
    var regx = /[@#\$%\^&\*\;\'\'\’\’\?\.\<\>\(\)\-\+\；\"\"\”\“\、\,]+/g;
    return regx.exec(inputVal);
}
/**
 * 倒计时
 * @param {*} time 倒计时的时间
 * @param {*} $('.time-out') 展示倒计时
 * @param {*} $('.send-code') 触发倒计时的元素
 */
var time = 60;
function countDown() { 
    $('.send-code').hide(); 
    $('.time-out').show(); 
    time = time - 1;  
    $('.time-out').html(time + "s");  
    if (time == 0) {  
        $('.send-code').show(); 
        $('.time-out').hide();
        time = 60;  
        return;  
    }  
    setTimeout('countDown()', 1000);  
}
/**
 * 底部下拉选择
 * @param {*} inpt 选择后显示的输入框
 * @param {*} data 底部选择的值
 * @param {*} callBack 确定按钮的回调函数
 */
var num = 0;
function selectButtom(inpt, data, callBack) {
    console.log(data)
    var hgS3 = new selectSwiper({
    el: '.select_box3',
    mustSelect: true,
    activeIndex: num,
    data: data,
    init: function (index) {
     
    },
    okFunUndefind: function () {
        showBox($('#tipBox'), $('#tipName'), '请选择一项!')
        return false;
    },
    okFun: function (index) {
        inpt.val(this.data[index]);
        num = index;
        if ( callBack && typeof callBack === 'function') {
            callBack()
        }
    },
    closeFun: function () {
        
    },
 });
     hgS3.openSelectSwiper()
}

function getArrEqual(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if(arr1[j] === arr2[i]){
                newArr.push(arr1[j]);
            }
        }
    }
    return newArr;
}

/**
 * 返回
 */
function back () {
    window.history.back();
}