import moment from 'moment'

export function getTime(utcTimeAndDate){
    const actualTime = moment(utcTimeAndDate)
    const shiftedTime = actualTime.add(1, 'hours')
    const formatedTime = shiftedTime.format('HH:mm')
    
    return formatedTime
}

export function getDate(utcTimeAndDate){
    const actualDate = moment(utcTimeAndDate).format('D.M.YYYY')
    
    return actualDate
}

export function shiftTimeAndDateUTC(utcTimeAndDate){
    const actualTimeAndDateUTC = moment(utcTimeAndDate)
    const increaseForMinutes = increaseTime(utcTimeAndDate)
    console.log(increaseForMinutes)
    const shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(increaseForMinutes, 'minutes')

    return shiftedTimeAndDateUTC
}

export function increaseTime(utcTimeAndDate){
    const day = moment(utcTimeAndDate).format('dddd')
    if(day === 'Saturday' || day === 'Sunday'){
        
        return 12
    }else {

        return 6
    }
}