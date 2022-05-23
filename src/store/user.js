import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken()
}
const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    //返回一个promise对象
    return new Promise((resolve, reject) => {
      // 调用login api进行登录
      login({ username: username.trim(), password: password.trim() }).then(response => {
        const { data } = response
        //设置token。。。。。
        commit('SET_TOKEN', data.token)
        //利用js-cookie 设置cookie
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}
const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  }
}
const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

