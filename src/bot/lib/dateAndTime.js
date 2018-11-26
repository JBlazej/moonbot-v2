import moment from 'moment'
import {incrementTimeMinutes} from '../../conf/constant'

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
        const minutes = getByHourIdosSettings(utcTimeAndDate)
    
        return minutes.idosConstant
    }
}

function getByHourIdosSettings(utcTimeAndDate, a){
    const hour = moment(utcTimeAndDate).format('h')
    const set = incrementTimeMinutes

    if (hour === 0) {
        console.log('Půlnoc')
        return {
            partOfDay: 'půlnoc',
            idosConstant: a ? a + set.midnight : set.midnight
        }

    }

    if (1 <= hour && hour < 9) {
        console.log('Ráno')
        return {
            partOfDay: 'ráno',
            idosConstant: a ? a + set.morning : set.morning
        }

    }

    if (9 <= hour && hour < 12) {
        console.log('Odpoledne')
        return {
            partOfDay: 'odpoledne',
            idosConstant: a ? a + set.afternoon : set.afternoon
        }
    }

    if (12 <= hour && hour < 17) {
        console.log('Dopoledne')
        return {
            partOfDay: 'dopoledne',
            idosConstant: a ? a + set.morning : set.morning
        }
    }

    if (17 <= hour && hour < 20 ) {
        console.log('Podvečer')
        return {
            partOfDay: 'podvečer',
            idosConstant: a ? a + set.early_evening : set.early_evening
        }
    }

    if (20 <= hour && hour < 24) {
        console.log('Večer')
        return {
            partOfDay: 'večer',
            idosConstant: a ? a + set.evening : set.evening
        }
    }
}

export function getTimeAndDateNow(utc){
    const newDate = utc ? utc : new Date()
    
    const time = getTime(newDate)
    const date = getDate(newDate)
    const year = getYear(newDate)

    const set = getByHourIdosSettings(newDate)
    
    return {
        utc : newDate, 
        time : time,
        date : date,
        year : year,
        set : set
    }
}