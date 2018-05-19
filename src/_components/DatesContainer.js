import React from 'react';
import { Fragment } from 'react';

import { MONTHS, formatDate, formatTime } from '../_helpers'; 

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