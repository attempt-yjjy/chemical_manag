import request from '../request'

export default function(path,data){
    // return request.post(path,data,{
    //     headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    // })
    return request({
        method:'post',
        url:path,
        data,
        headers:{'Content-Type':'application/x-www-form-urlencoded'}
    })
}