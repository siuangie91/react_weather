import React from 'react';
import { Fragment } from 'react';

export default class Results extends React.Component {
	constructor(props) {
		super(props);
	}

	view = () => {
		const {showWhat, city, country, results} = this.props;

		console.log(this.props);

		let resultsView; 

		switch(showWhat) {
			case "notFound":
				resultsView = <h1>Sorry! We couldn't find that city.</h1>;
				break;
			case "results":
				resultsView = <h1>{city}, {country}</h1>;
				break;
			default:
				break;
		}

		return resultsView;
	}

	render() {
		return (
			<div className="results">
				{this.view()}
			{
				(this.props.showWhat) ? 
					<button onClick={this.props.handleClear}>Get Different Forecast</button>	
					: ""
			}
			</div>
		);
	}
}