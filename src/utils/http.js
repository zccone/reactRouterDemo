/*网路请求配置*/
import axios from 'axios';
import {requestHeader} from './configRelease'
axios.defaults.timeout = 100000;
axios.defaults.baseURL = '';
//http request 拦截器
axios.interceptors.request.use(
	config => {
		config.data = JSON.stringify(config.data);
		config.headers = requestHeader;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);


//http response 拦截器
axios.interceptors.response.use(
	response => {
		if (response.data.errCode === 2) {
			console.log("过期")
			// router.push({
			// 	path: "/login",
			// 	querry: {redirect: router.currentRoute.fullPath}//从哪个页面跳转
			// })
		}
		return response;
	},
	error => {
		return Promise.reject(error)
	}
);


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get(url, params = {}) {
	return new Promise((resolve, reject) => {

		axios.get(url, {
			params: params
		})
			.then(response => {

				landing(url, params, response.data);
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			})
	})
}




/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
	return new Promise((resolve, reject) => {
		axios.post(url, data).then(response => {

			//关闭进度条
			resolve(response.data);
		}, err => {
			reject(err)
		})
	})
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.patch(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				msag(err)
				reject(err)
			})
	})
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.put(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				msag(err)
				reject(err)
			})
	})
}
//统一接口处理，返回数据
export function HttpData (fecth,url, parm) {
	let _data = "";
	let promise = new Promise((resolve, reject) => {
		switch (fecth){
			case "get":
				get(url, parm).then(function (response) {
					_data = Object.assign({}, JSON.parse(JSON.stringify(response.result)));
					resolve (_data);
				}).catch(function (error) {})
				break;
			case "post":
				post(url, parm).then(function (response) {
					_data = Object.assign({}, JSON.parse(JSON.stringify(response.result)));
					resolve (_data);
				}).catch(function (error) {})
				break;
			default:
				break;
		}

	});
	return promise
};
//失败提示
function msag(err) {
	if (err && err.response) {
		switch (err.response.status) {
			case 400:
				alert(err.response.data.error.details);
				break
			case 401:
				alert("未授权，请登录");
				break

			case 403:
				alert("拒绝访问");
				break

			case 404:
				alert("请求地址出错");
				break

			case 408:
				alert("请求超时");
				break

			case 500:
				alert("服务器内部错误");
				break

			case 501:
				alert("服务未实现");
				break

			case 502:
				alert("网关错误");
				break

			case 503:
				alert("服务不可用");
				break

			case 504:
				alert("网关超时");
				break

			case 505:
				alert("HTTP版本不受支持");
				break
			default:
		}
	}
}
/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
	if (data.code === -1) {
	}
}
