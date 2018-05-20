import React from 'react';
import { Fragment } from 'react';

import { formatDate, formatTime } from '../_helpers'; 

const createForecastItem = function(item, index) {
	return (
		<li key={index}>
			<span className="time"><strong>{formatTime(item.dt_txt.split(' ')[1])}</strong></span> 
			<img className="icon" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].main}/>
			<span className="description">{item.weather[0].description}</span>
		</li>
	);
};

export default class DatesContainer extends React.Component {
	render() {
		const {city, country, results} = this.props;

		return (
			<Fragment>
				<h2>{city}, {country}</h2>

				{
					results.map((result, i) => {
						return (
							<div className="date" key={i}>
								<h3>{formatDate(result.name)}</h3>
								
								{/* split the forecasts into 2 rows*/}
								<ul className="row"> 
									{
										result.weathers.slice(0,4) // the first 4
											.map((weatherItem, i) => createForecastItem(weatherItem, i))
									}
								</ul>

								<ul className="row">
									{
										result.weathers.slice(4) // the remaining
											.map((weatherItem, i) => createForecastItem(weatherItem, i))
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