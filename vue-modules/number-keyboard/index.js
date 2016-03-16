var Vue = require('vue-plus');

var component = Vue.extend({
	
	template: __inline('./index.tpl'),

	methods: {
		handleKeypress: function(ev) {
			var keyId = ev.target.id;
			if (keyId === 'del') {
				return this.$dispatch('deleteKey');
			}
			this.$dispatch('inputKey', keyId);
		}
	}
});

/* @require ./style.less */
module.exports = component;