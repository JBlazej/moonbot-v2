import moment from 'moment'

export async function getTime(utcDate){
    const actualTime = moment(utcDate).format('HH:mm')
    console.log(actualTime)
    return actualTime
}

export async function getDate(utcDate){
    const actualDate = moment(utcDate).format('D.M.YYYY')
    console.log(actualDate)
    return actualDate
}