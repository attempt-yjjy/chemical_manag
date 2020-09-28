export default {
    millsToDate(mills){
        if(mills == ''){
            return mills
        }
        let date = new Date(mills)
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    }
}