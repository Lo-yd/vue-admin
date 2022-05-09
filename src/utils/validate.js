/* 验证 */
//验证登录账号
export function validUsername (value) {
  const validAccount = ['admin', 'editor']
  return validAccount.includes(value.trim())
}