import moment from 'moment';

export function getTimeAndDateNow(utc) {
	const newDate = utc ? utc : new Date();

	const time = getTime(newDate);
	const date = getDate(newDate);
	const year = getYear(newDate);
	const day = getDayOfTheWeek(newDate);
	const set = getPartOfTheDay(newDate);

	return {
		utc: newDate,
		time: time,
		date: date,
		year: year,
		set: set,
		day: day
	};
}

export function shiftTimeAndDateUTC(utcTimeAndDate, shift) {
	const actualTimeAndDateUTC = moment(utcTimeAndDate);
	const increaseForMinutes = shift;

	const shiftedTimeAndDateUTC = actualTimeAndDateUTC.add(increaseForMinutes, 'minutes');

	return shiftedTimeAndDateUTC;
}

function getTime(utcTimeAndDate) {
	const actualTime = moment(utcTimeAndDate);
	const shiftedTime = actualTime.add(1, 'hours');
	const formatedTime = shiftedTime.format('HH:mm');

	return formatedTime;
}

function getDate(utcTimeAndDate) {
	const actualDate = moment(utcTimeAndDate).format('D.M.YYYY');

	return actualDate;
}

function getYear(utcTimeAndDate) {
	const actualYear = moment(utcTimeAndDate).format('YYYY');

	return actualYear;
}

function getDayOfTheWeek(utcTimeAndDate) {
	const actualTime = moment(utcTimeAndDate);
	const dayOfWeek = actualTime.day();

	return dayOfWeek;
}

function getPartOfTheDay(utcTimeAndDate) {
	const actualTime = moment(utcTimeAndDate);
	const hour = actualTime.add(1, 'hours');
	const formatedHour = hour.format('H');

	if (formatedHour === 0) {
		return {
			partOfDay: 'půlnoc'
		};
	}

	if (1 <= formatedHour && formatedHour < 9) {
		return {
			partOfDay: 'ráno'
		};
	}

	if (9 <= formatedHour && formatedHour < 12) {
		return {
			partOfDay: 'dopoledne'
		};
	}

	if (12 <= formatedHour && formatedHour < 17) {
		return {
			partOfDay: 'odpoledne'
		};
	}

	if (17 <= formatedHour && formatedHour < 20) {
		return {
			partOfDay: 'podvečer'
		};
	}

	if (20 <= formatedHour && formatedHour < 24) {
		return {
			partOfDay: 'večer'
		};
	}
}
