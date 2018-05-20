import React from 'react';

export default class ForecastItem extends React.Component {
	render() {
		return (
			<li>
				<span><strong>{this.props.date}</strong></span> 
				<img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt={this.props.main}/>
				<span className="description">{this.props.description}</span>
				<p>
					<span className="high">H: {this.props.max}</span>
					<span className="low">L: {this.props.min}</span>
				</p>
			</li>
		);
	}
}	