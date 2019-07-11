/*发布配置*/
//设置是开发(1)、测试(2)、生产(3)，number类型
 const  releaseConfigure=1;
//网路请求头部设置
//判断是否是本地环境，如果是，则加上ad账号
const _domain = document.domain;
let _parm ={};
switch (_domain){
	case "localhost":
		_parm={
			/* 'Content-Type':'application/x-www-form-urlencoded'*/
			'Content-Type': 'application/json',
			"ad":"ooo",
		};
		break;
	default:
		_parm={
			'Content-Type': 'application/json',
		};
		break;
}
const  requestHeader=_parm;

export {releaseConfigure,requestHeader}