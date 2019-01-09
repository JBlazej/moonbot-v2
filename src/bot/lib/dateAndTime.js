import moment from 'moment'
import {incrementTimeMinutes} from '../../conf/constant'

export async function getTimeAndDateNow(utc){
    const newDate = utc ? utc : new Date()
    
    const time = getTime(newDate)
    const date = getDate(newDate)
    const year = getYear(newDate)
    const day = getDayOfTheWeek(newDate)
    const set = getByHourIdosSettings(newDate)
    
    return {
        utc : newDate, 
        time : time,
        date : date,
        year : year,
        set : set,
        day : day
    }
}

function getDayOfTheWeek(utcTimeAndDate){
    const actualTime = moment(utcTimeAndDate)
    const dayOfWeek = actualTime.day()

    return dayOfWeek
}

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

export function getYear(utcTimeAndDate){
    const actualYear = moment(utcTimeAndDate).format('YYYY')
    
    return actualYear
}

export function shiftTimeAndDateUTC(utcTimeAndDate){
    const actualTimeAndDateUTC = moment(utcTimeAndDate)
    const increaseForMinutes = increaseTime(utcTimeAndDate)
   
    const shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(increaseForMinutes, 'minutes')

    return shiftedTimeAndDateUTC
}

export function increaseTime(utcTimeAndDate){
    const day = moment(utcTimeAndDate).format('dddd')

    if(day === 'Saturday' || day === 'Sunday'){
        const minutesWeekend = getByHourIdosSettings(utcTimeAndDate, 5)

        return minutesWeekend.idosConstant
    }else {
        console.log(utcTimeAndDate)
        const minutes = getByHourIdosSettings(utcTimeAndDate)
        console.log(minutes)
        
        return minutes.idosConstant
    }
}

export function getByHourIdosSettings(utcTimeAndDate, a){
    const actualTime = moment(utcTimeAndDate)
    const hour = actualTime.add(1, 'hours')
    const formatedHour = hour.format('H')
    const set = incrementTimeMinutes
    
    if (formatedHour === 0) {
        return {
            partOfDay: 'půlnoc',
            idosConstant: a ? a + set.midnight : set.midnight
        }

    }

    if (1 <= formatedHour && formatedHour < 9) {
        return {
            partOfDay: 'ráno',
            idosConstant: a ? a + set.morning : set.morning
        }

    }

    if (9 <= formatedHour && formatedHour < 12) {
        return {
            partOfDay: 'dopoledne',
            idosConstant: a ? a + set.morning : set.morning
        }
    }

    if (12 <= formatedHour && formatedHour < 17) {
        return {
            partOfDay: 'odpoledne',
            idosConstant: a ? a + set.afternoon : set.afternoon
        }
    }

    if (17 <= formatedHour && formatedHour < 20 ) {
        return {
            partOfDay: 'podvečer',
            idosConstant: a ? a + set.early_evening : set.early_evening
        }
    }

    if (20 <= formatedHour && formatedHour < 24) {
        return {
            partOfDay: 'večer',
            idosConstant: a ? a + set.evening : set.evening
        }
    }
}
