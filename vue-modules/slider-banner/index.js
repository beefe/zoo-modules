var Vue = require('vue-plus');

var component = Vue.extend({

	template: __inline('./index.tpl'),

	ready: function() {
		// 轮播图设置
		require.async('swiper', function(Swiper) {
			new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        paginationClickable: true,
		        spaceBetween: 0,
		        centeredSlides: true,
		        autoplay: 5000,
		        autoplayDisableOnInteraction: false
		    });
	    });
	}

});

/* @require style.less */
module.exports = component;