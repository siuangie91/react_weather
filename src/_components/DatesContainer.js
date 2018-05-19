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
							</div>	
						)
					})
				}
			</Fragment>
		);
	}
}