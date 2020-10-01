import request from '../request'

export default function(path,data){

    return request({
        method:'post',
        url:path,
        data,
        headers:{'Content-Type':'application/json'}
    })
}