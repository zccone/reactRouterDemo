/*全局配置*/
//网络请求
// import {post, get, put} from './utils/http'
import {HttpData} from './utils/http'
//全局样式
import './App.css';
//全局路由文件
export * from './router/config';
//接口api
export * from './utils/globalAPI'
/*全局网络请求*/
// global.$post=post;
// global.$get=get;
global.HttpData=HttpData;
//临时变量
global.menus = [
	{
		title: '首页',
		icon: 'page',
		key: '/'
	},{
		title: 'es6',
		icon: 'message',
		key: '/page/es6',
	},
	{
		title: '网络请求',
		icon: 'laptop',
		key: '/page/HttpDemo',
	},
	{
		title: '表单',
		icon: 'laptop',
		key: '/page/general/fromDemo',
	},
	{
		title: '弹出框',
		icon: 'bars',
		key: '/page/AlertDemo',
	},
	{
		title: '表格',
		icon: 'desktop',
		key: '/page/TableDemo',
	},
	{
		title: '树状图',
		icon: 'message',
		key: '/page/TreeDemo',
	},
	// {
	// 	title: '其它',
	// 	icon: 'bulb',
	// 	key: '/page/Other',
	// 	subs: [
	// 		{key: '/page/AlertDemo', title: '弹出框', icon: ''},
	// 	]
	// },
]