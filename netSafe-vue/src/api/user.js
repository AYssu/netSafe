import request from '@/utils/request.js'

export const sendCodeService = (phone)=>
{
    return request.get("/user/send?phone="+phone)
}

export const userRegisterService = (parms)=>
{
    const params = new URLSearchParams();
    for(let key in parms)
    {
        params.append(key,parms[key]);
    }
    return request.post("/user/register",params)
}

export const userLoginService = (parms)=>
{
    const params = new URLSearchParams();
    for(let key in parms)
    {
        params.append(key,parms[key]);
    }
    return request.post("/user/login",params)
}

export const userInfoServices = ()=>{
    return request.get('/user/userInfo');
}
