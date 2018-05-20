import React from 'react';

import { formatTime } from '../_helpers'; 

export default class ForecastItem extends React.Component {
	render() {
		const {item} = this.props;

		return (
			<li>
				<span><strong>{formatTime(item.dt_txt.split(' ')[1])}</strong></span> 
				<img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].main}/>
				<span className="description">{item.weather[0].description}</span>
				<p>
					<span className="high">H: {Math.round(item.main.temp_max)}</span>
					<span className="low">L: {Math.round(item.main.temp_max)}</span>
				</p>
			</li>
		);
	}
}	