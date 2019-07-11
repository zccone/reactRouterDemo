//Loadable插件需使用Loading
import Loadable from 'react-loadable'
import Loading from '../components/Loading/index';

//定义路由
global.Main = Loadable({
	loader: () => import('../page/index'),
	loading: Loading,
});
//es6
global.es6 = Loadable({
	loader: () => import('../page/es6'),
	loading: Loading,
});
//表单
global.FromDemo = Loadable({
	loader: () => import('../page/General/FromDemo/index'),
	loading: Loading,
});
//网络请求
global.HttpDemo= Loadable({
	loader: () => import('../page/HttpDemo/index'),
	loading: Loading,
});
//弹框提醒
global.Alert = Loadable({
	loader: () => import('../page/AlertDemo/index'),
	loading: Loading,
});
//表格
global.Table = Loadable({
	loader: () => import('../page/TableDemo/index'),
	loading: Loading,
});
//树状图
global.TreeDemo = Loadable({
	loader: () => import('../page/TreeDemo/index'),
	loading: Loading,
});
