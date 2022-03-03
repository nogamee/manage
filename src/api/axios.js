import axios from 'axios'
import config from '../config/config.js'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getInsedeConfig () {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }

  // 拦截器部分
  interceptors (instance) {
    instance.interceptors.request.use(function (config) {
      return config
    }, function (error) {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = { ...this.getInsedeConfig(), ...options }
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
