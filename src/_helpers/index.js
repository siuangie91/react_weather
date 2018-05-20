const MONTHS = {
	"01": "January",
	"02": "February",
	"03": "March",
	"04": "April",
	"05": "May",
	"06": "June", 
	"07": "July",
	"08": "August",
	"09": "September",
	"10": "August",
	"11": "November",
	"12": "December"
}

export const formatDate = function(dateString) {
	const splitDateString = dateString.split('-');

	const year = splitDateString[0];
	const month = splitDateString[1];
	const day = splitDateString[2];

	const formattedDate = `${MONTHS[month]} ${day}, ${year}`;

	return formattedDate;
};

export const formatTime = function(timeIn24HrFormat) {
	const splitTime = timeIn24HrFormat.split(':');

	const hour = splitTime[0];
	const minutes = splitTime[1];

	let formmattedHour;
	let dayNight;

	if(+hour <= 11) { // use "+" to force as a number
		if(+hour <= 10) {
			if(+hour === 0) {
				formmattedHour = "12";
			} else {
				formmattedHour = hour[1]; // don't take the beginning zero
			}
		} else {
			formmattedHour = hour;
		}

		dayNight = "AM";
	} else {
		formmattedHour = +hour - 12;
		if(formmattedHour === 0) {
			formmattedHour = "12";
		}
		dayNight = "PM";
	}

	return `${formmattedHour}:${minutes} ${dayNight}`
}
























