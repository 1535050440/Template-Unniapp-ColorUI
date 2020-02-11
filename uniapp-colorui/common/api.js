import config from './config.js'
import request from './request.js'

const api = {}

api.demo = (url, params = []) => {
	console.log('api--全局定义接口')
}

export default api