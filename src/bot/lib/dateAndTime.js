import moment from 'moment'

export function getTime(utcDate){
    const actualTime = moment(utcDate)
    const shiftedTime = actualTime.add(1, 'hours')
    const formatedTime = shiftedTime.format('HH:mm')
    
    return formatedTime
}

export function getDate(utcDate){
    const actualDate = moment(utcDate).format('D.M.YYYY')
    
    return actualDate
}

export function shiftTimeAndDateUTC(utcTimeAndDate){
    const actualTimeAndDateUTC = moment(utcTimeAndDate)
    const shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(5, 'minutes')

    return shiftedTimeAndDateUTC
}

//2018-11-24T15:52:36.230Z