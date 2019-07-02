import http from './http'
/**
 * 账号密码登录
 */
export const accountLogin = (params) => http('/v2/login', params, 'POST');