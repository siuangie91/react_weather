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
				resultsView = <h2>Sorry! We couldn't find that city.</h2>;
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
				{
					(this.props.showWhat) ? 
						<Button clickHandler={this.props.handleClear} 
							btnCopy="Get Different Forecast" />
						: ""
				}

				{this.view()}
			</div>
		);
	}
}