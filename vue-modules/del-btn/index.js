/*
	导入模板
	<del-btn val="{{@yourField}}"></del-btn>
 */
/* @require ./style.less */
module.exports = {
	props: {
		val: {
			twoWay: true
		}
	},
	template: __inline('./index.tpl')
};
