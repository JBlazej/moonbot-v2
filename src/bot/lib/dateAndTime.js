import moment from 'moment'

export async function getTime(utcDate){
    const actualTime = moment(utcDate)
    const shiftedTime = actualTime.add(1, 'hours')
    const formatedTime = shiftedTime.format('HH:mm')
    
    return formatedTime
}

export async function getDate(utcDate){
    const actualDate = moment(utcDate).format('D.M.YYYY')
    
    return actualDate
}
