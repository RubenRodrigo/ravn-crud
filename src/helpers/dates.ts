const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export function getDelayDate(dueDate: Date) {
	const newDate = new Date(dueDate);
	const now = new Date();

	// Discard the time and time-zone information.
	const utc1 = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
	const utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const getDateTime = (dateTime?: Date) => {
	let date: Date;

	if (dateTime) {
		date = new Date(dateTime)
	} else {
		date = new Date()
	}

	let day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear(),
		hour = date.getHours(),
		min = date.getMinutes();

	let monthStr = (month < 10 ? "0" : "") + month;
	let dayStr = (day < 10 ? "0" : "") + day;
	let hourStr = (hour < 10 ? "0" : "") + hour;
	let minStr = (min < 10 ? "0" : "") + min;

	let today = year + "-" + monthStr + "-" + dayStr,
		displayTime = hourStr + ":" + minStr;

	return {
		today,
		displayTime
	}

}