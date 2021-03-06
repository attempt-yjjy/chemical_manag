export default {
    millsToDate(mills){
        if(!mills){
            return ''
        }
        let date = new Date(mills)
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    },
    stringToDate(str){
        let date = new Date(str)
        return date
    },
    dateToString(date){
        if(date == null || date == undefined){
            date = new Date()
        }
        let result
        result = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        return result
    }
}