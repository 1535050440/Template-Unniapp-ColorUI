import config from './config.js'
//	注册路由
import route from './route.js'

import Vue from 'vue'

const webUrl = config.webUrl
const request = {}


request.globalRequest = (url, params = [], method = 'GET') =>{
	//	获取缓存中的token
	const tokenStorage = uni.getStorageSync('token');
	
	const sign =  Date.parse(new Date())/1000;
	
	// 页面加载完
	const promise =  new Promise((resolve, reject) => {
		uni.request({
			url: webUrl + url,
			method,
		    data: params,
			dataType: 'json',
		    header: {
				'token': tokenStorage,
				'sign': sign,
				'token-type': 'USER'
		    },
		    success: (res) => {
				//	系统错误
				if (!res.data.code) {
					uni.showModal({
					    title: '提示',
					    content: '系统错误,请稍后重试',
						showCancel: false,
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					return
				}
				if (res.data.code == 401) {
					console.log('需要验证token，token失效或者不存在')
					//	然后请求登陆接口
					_loginApi()
					console.log('重新获取token-------------------------------------------end')
					return
				}
				if (res.data.code == 400 || res.data.code==500) {
					console.log('参数错误，需要直接抛出异常内容')
					//
					uni.showModal({
					    title: '提示',
					    content: res.data.msg,
						showCancel: false,
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					return
					//
				}
				// console.log('success------------:'+res.data.code)
				resolve(res.data)
				// console.log('success------------')
		    },
			fail: (err) => {
			    // console.log('进入到base,js中======error');
				reject(err)
			}
		})

	})
	return promise
}

function _loginApi(){
	// console.log('请求登陆：---------------------------')
	uni.login({
		provider: 'weixin',
		success: function (loginRes) {
			//	请求登陆接口（code获取token）
			const params = {
				code: loginRes.code
			}
			request.globalRequest(route.loginApi, params, 'POST').then((res)=>{
				const resultData = res.data
				if (resultData.token) {
					// 返回true后，把token存入缓存
					uni.setStorage({
					    key: 'token',
					    data: resultData.token,
					    success: function () {
							console.log('token存入缓存success:'+resultData.token)
					    }
					});
					//	获取用户信息-进行挂载
					request.globalRequest(route.getUserFindApi).then((res)=>{
						console.log(res.data)
						// 返回true后，挂载userFind
						Vue.prototype.userFind = res.data
					})
					//
				}
			})
		
	  }
	});
}

export default request