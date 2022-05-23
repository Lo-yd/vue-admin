import request from '@/utils/requset'

//用户登录api
export const login = data => request({
  url: 'vue-admin/user/login',
  method: 'post',
  data
})