import request from '../request'

export default function(path,data){
    return request.post(path,data)
}