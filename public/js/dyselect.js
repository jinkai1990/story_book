(function (doc, win, page_width, font_size) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, function () {
        recalc()
    }, false);
    doc.addEventListener('DOMContentLoaded', function () {
        recalc()
    }, false)
})(document, window, 750, 50);

function selectSwiper(obj) {
    var _self = this;
    _self.el = $(obj.el);
    _self.selectSwiper = null;
    _self.swiperData = {};
    _self.swiperData.mustSelect = obj.mustSelect || false;
    _self.swiperData.activeIndex = (typeof obj.activeIndex === 'number' && obj.activeIndex >= -1) ? obj.activeIndex : -1;
    _self.swiperData.oldIndex = _self.swiperData.activeIndex;
    _self.swiperData.data = obj.data || [];
    _self.swiperData.okFun = obj.okFun;
    _self.swiperData.okFunUndefind = obj.okFunUndefind || function () {};
    _self.swiperData.closeFun = obj.closeFun || function () {};
    _self.swiperData.init = obj.init;
    var hgSelect = `<div class="select"><div class="select-handle clearfix"><span class="close">取消</span><span class="ok">确定</span></div><div class="selectData"><div class="swiper-container"><div class="cloth"></div><div class="swiper-wrapper"><div class="swiper-slide">请选择</div></div></div></div></div>`;
    _self.init = function () {
        _self.el.html(hgSelect);
        _self.el.addClass('click_no');
        _self.selectSwiper = new Swiper(obj.el + ' .swiper-container', {
            direction: 'vertical',
            slidesPerView: 4,
            centeredSlides: true,
            slideToClickedSlide: true,
            onInit: function (swiper) {
                swiper.removeSlide(0);
                var data = _self.swiperData.data;
                var s = [];
                s[0] = '<div class="swiper-slide">请选择</div>';
                for (i = 0; i < data.length; i++) {
                    s[i + 1] = '<div class="swiper-slide">' + data[i] + '</div>'
                }
                swiper.appendSlide(s);
                _self.swiperData.init(_self.swiperData.activeIndex)
            },
            onSlideChangeEnd: function (swiper) {
                _self.swiperData.activeIndex = swiper.activeIndex - 1
            },
        });
        _self.el.find('.ok').on('click', _self.okSelectSwiper);
        _self.el.find('.close').on('click', function () {
            _self.swiperData.activeIndex = _self.swiperData.oldIndex;
            _self.swiperData.closeFun();
            _self.closeSelectSwiper()
        });
        _self.el.on('click', function () {
            _self.el.find('.close').trigger('click')
        });
        $('.select').on('click', function (e) {
            e.stopPropagation()
        })
    };
    _self.openSelectSwiper = function () {
        var _self = this;
        console.log(_self)
        _self.el.addClass('yes');
        _self.selectSwiper.update();
        _self.selectSwiper.slideTo(_self.swiperData.activeIndex + 1, 0)
    };
    _self.okSelectSwiper = function () {
        if (_self.swiperData.mustSelect && _self.swiperData.activeIndex === -1) {
            _self.swiperData.okFunUndefind()
        } else {
            _self.swiperData.okFun(_self.swiperData.activeIndex);
            _self.swiperData.oldIndex = _self.swiperData.activeIndex;
            _self.closeSelectSwiper()
        }
    };
    _self.closeSelectSwiper = function () {
        _self.el.removeClass('yes')
    };
    _self.init()
}