import request from '../utils/request.js'

export const codeService = () => {
  return request.get('/Verify/getVerify', { responseType: 'blob' })
}
export const userLoginService = (params: any) => {
  return request.post('/admin/login', params)
}

//获取个人信息
export const userInfoGetService = () => {
  return request.get('/admin/userInfo')
}

//获取群组
export const groupGetService = () => {
  return request.get('/admin/getGroup')
}

//更新群组
export const groupUpdateService = (params: any) => {
  return request.post('/admin/updateGroup', params)
}

//创建群组
export const groupCreateService = (params: any) => {
  return request.post('/admin/addGroup', params)
}

//创建用户
export const guardCreateService = (params: any) => {
    
  return request.post('/admin/addGuard', params)
}

//获取用户
export const guardGetService = (params: any) => {
    
    return request.post('/admin/getGuard', params)
}

