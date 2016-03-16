var Vue = require('vue-plus');

var component = Vue.extend({

	data: function() {
		return {
			content: '',
			isAnim: false
		};
	},

	template: __inline('./index.tpl'),

	methods: {
		setAnimation: function() {
			if (this.isAnim) { return; }
			Vue.nextTick(function() {
				var maxWidth = getWidth(this.$$.broadcastBd);
				var width = getWidth(this.$$.broadcastContent);
				var rate = width / maxWidth;
				if (rate > 1) {
					this.$$.broadcastContent.style.webkitAnimation = ['broadcast', (width/maxWidth*7)+'s', 'linear', 'infinite'].join(' ');
					this.$$.broadcastContent.style.animation = ['broadcast', (width/maxWidth*7)+'s', 'linear', 'infinite'].join(' ');
				} else {
					this.$$.broadcastContent.style.opacity = '1';
				}
			}.bind(this));
			this.isAnim = true;
		},
		setContent: function(content) {
			if (content != '') {
				this.content = content;
				this.setAnimation();
			}
		}
	},

	ready: function() {
		Vue.ajax({
			url: 'http://qianlong.hrbbwx.com/api/user/friend/invited',
			// url: 'http://172.16.5.235/demo/demo.php',
			method: 'get'
		})
		.success(reqSuccess(function(resp) {
			var content = resp.data ? resp.data.invited : '';
			this.setContent(content);
			// set cache
			localDB.setItem('broadcast_text', content);
		}, this));
		// use cache
		this.setContent(localDB.getItem('broadcast_text') || '');
	}
});

function getWidth(el) {
	return parseFloat(getComputedStyle(el, null).width);
}

/*@require style.less*/
module.exports = component;






