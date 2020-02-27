import Vue from 'vue'
import App from './App'

// 首页
import home from './pages/home/home.vue'
Vue.component('home',home)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

//	追加属性--------start
// 接口地址
import config from './common/config.js'
Vue.prototype.webUrl = config.webUrl

//	封装的api
import request from './common/request.js'
Vue.prototype.request = request

import api from './common/api.js'
Vue.prototype.api = api
//	注册路由
import route from './common/route.js'
Vue.prototype.route = route

//	全局定义变量-背景颜色
Vue.prototype.bgColorFind = 'bg-gradual-purple'

console.log('全局---挂载')
request.globalRequest(route.getConfigApi).then((res)=>{
	console.log('获取全局配置文件')
	const configData = res.data
	//	is_ad
	Vue.prototype.$isAd = configData.is_ad
	//	is_share
	Vue.prototype.$isShare = configData.is_share
	//	首页默认图片
	Vue.prototype.$bannerFind = configData.banner_img
})

request.globalRequest(route.getUserFindApi).then((res)=>{
	console.log('获取当前用户信息')
	const userFindData = res.data
	//	userFind
	Vue.prototype.$userFind = userFindData
})

//	挂载end----------------------------

//	追加属性--------end
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



