import request from '../request'

export default function(path,data){
    return request.get(path,data)
}