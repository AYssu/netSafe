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

//通过审核

export const guardReviewService = (params: any) => {
  return request.post('/admin/reviewGuard', params)
}

//更新保安信息
export const guardUpdateService = (params: any) => {
  return request.post('/admin/updateGuard', params)
}

//更新密码
export const guardrePassService = (params: any) => {
  return request.post('/admin/passwordGuard', params)
}

//更新管理员资料
export const adminUpdateService = (params: any) => {
  return request.post('/admin/updateAdmin', params)
}



//删除用户
export const guardDeletedService = (params: any) => {
  return request.post('/admin/deletedGuard', params)
}


//批量审核

export const guardbatchAllowedService = (params: any) => {
  return request.post('/admin/batchAllowedGuards', params)
}

//批量禁用

export const guardbatchDisabledService = (params: any) => {
  return request.post('/admin/batchDisabledGuards', params)
}