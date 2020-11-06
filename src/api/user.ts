import request from '../utils/request'

export const Login = (parms:any)=>{
    return request({
        url:'/user/login',
        method:'POST',
        data:parms
    })
}