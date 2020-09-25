export default function(value){
    let identity_type_options={
        "高级管理员":1,
        "普通管理员":2,
        "使用人员":3
    }

    if(typeof(value) == 'string'){
        return identity_type_options[value]
    }else{
        let result;
        switch(value){
            case 1:result = "高级管理员";break;
            case 2:result = "普通管理员";break;
            case 3:result = "使用人员";break;
        }
        return result;
    }
}