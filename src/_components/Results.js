import React from 'react';
// import { Fragment } from 'react';

import Button from './Button';
import DatesContainer from './DatesContainer';

export default class Results extends React.Component {
	view = () => {
		const {showWhat, city, country, results} = this.props;

		console.log(this.props);

		let resultsView; 
		switch(showWhat) {
			case "notFound":
				resultsView = <h1>Sorry! We couldn't find that city.</h1>;
				break;
			case "results":
				resultsView = <DatesContainer city={city} country={country} results={results}/>;
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
					<Button clickHandler={this.props.handleClear} 
						btnCopy="Get Different Forecast" />
					: ""
			}
			</div>
		);
	}
}