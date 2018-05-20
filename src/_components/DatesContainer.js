import React from 'react';
import { Fragment } from 'react';

import { formatDate } from '../_helpers'; 

import ForecastItem from './ForecastItem';

/*const createForecastItem = function(item, index) {
	return (
		<li key={index}>
			<span><strong>{formatTime(item.dt_txt.split(' ')[1])}</strong></span> 
			<img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].main}/>
			<span className="description">{item.weather[0].description}</span>
			<p>
				<span className="high">H: {Math.round(item.main.temp_max)}</span>
				<span className="low">L: {Math.round(item.main.temp_max)}</span>
			</p>
		</li>
	);
};*/

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
											.map((weatherItem, i) => <ForecastItem item={weatherItem} key={i}/>)
									}
								</ul>

								<ul className="row">
									{
										result.weathers.slice(4) // the remaining
											.map((weatherItem, i) => <ForecastItem item={weatherItem} key={i}/>)
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