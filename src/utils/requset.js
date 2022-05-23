import axios from 'axios'
import { Message } from 'element-ui'

//创建axios实例
const service = axios.create({
  // baseURL: 'dev-api',
  timeout: 5000
})

//请求拦截器
service.interceptors.request.use(
  config => {
    //do something

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      //错误信息提示
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 4 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  }, error => {
    Message({
      message: error.message || 'Error',
      type: 'error',
      duration: 4 * 1000
    })
    console.log('error', error)
    return Promise.reject(error)
  }
)

export default service