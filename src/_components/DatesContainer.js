import React from 'react';
import { Fragment } from 'react';

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

const formatDate = function(dateString) {
	const splitDateString = dateString.split('-');

	const year = splitDateString[0];
	const month = splitDateString[1];
	const day = splitDateString[2];

	const formattedDate = `${MONTHS[month]} ${day}, ${year}`;

	return formattedDate;
};

const formatTime = function(timeIn24HrFormat) {
	const splitTime = timeIn24HrFormat.split(':');

	const hour = splitTime[0];
	const minutes = splitTime[1];

	let formmattedHour;
	let dayNight;

	if(+hour <= 11) { // use "+" to force as a number
		if(+hour <= 10) {
			if(+hour == 0) {
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
		if(formmattedHour == 0) {
			formmattedHour = "12";
		}
		dayNight = "PM";
	}

	return `${formmattedHour}:${minutes} ${dayNight}`
}

export default class DatesContainer extends React.Component {
	render() {
		const {city, country, results} = this.props;

		return (
			<Fragment>
				<h1>{city}, {country}</h1>

				{
					results.map((result, i) => {
						return (
							<div className="date" key={i}>
								<h2>{formatDate(result.name)}</h2>
								<ul>
									{
										result.weathers.map((weatherItem, i) => {
											return (
												<li key={i}>
													<strong>{formatTime(weatherItem.dt_txt.split(' ')[1])}</strong> &mdash; 
													{weatherItem.weather[0].main}: {weatherItem.weather[0].description}
												</li>
											);
										})
									}
								</ul>
							</div>	
						)
					})
				}
			</Fragment>
		);
	}
}