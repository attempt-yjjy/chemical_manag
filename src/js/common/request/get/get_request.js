import request from '../request'

export default function(path,data){
    return request({
        method:'get',
        url:path,
        params:data
    })
}