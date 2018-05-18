import React from 'react';
import { Fragment } from 'react';

import APIKEY from '../api';

export default class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			enableBtn: false,
			showResults: false,
			showNotFound: false,
			name: "",
			country: "",
			list: []
		}

		this.inputSearch = React.createRef(); // create reference to the <input> field
	}

	validateInput = () => {
		console.log(this.inputSearch.current.value);

		const value = this.inputSearch.current.value.trim();

		value ? this.setState({enableBtn: true}) : this.setState({enableBtn: false});
	}

	search = () => {
		// console.log('searched', this.inputSearch.current.value);
		const city = this.inputSearch.current.value.trim();

		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`, 
			{ method: 'GET'})
			.then(response => response.json())
			.then(json => {
				console.log('json', json);

				// show results only if response is 200 (actual results returned from api)
				if(json.cod === "200") {
					const city = json.city;

					this.setState(prevState => {
						return {
							showResults: true,
							name: city.name,
							country: city.country,
							list: json.list
						}
					});
				}

				// if not found
				if(json.cod === "404") {
					this.setState({
						showNotFound: true
					});
				}
			})
			.catch(error => {
				console.log('error', error);
			});
	}

	render() {
		console.log('this.state', this.state);

		return (
			<Fragment>
				<div className="search-container">
					<label>Search by city:</label>
					<input type="text" 
						placeholder="New York"
						ref={this.inputSearch}
						onKeyUp={this.validateInput} />
					{
						(this.state.enableBtn) ?
							<button onClick={this.search}>Get Forecast</button>
							:
							<button className="disabled" disabled>Get Forecast</button>
					}
				</div>

				<div className="results">
				{
					(this.state.showResults) ? 
						<h1>{this.state.name}, {this.state.country}</h1>
						: ""
				}
				{
					(this.state.showNotFound) ?
						<h1>Sorry! No results for that city.</h1>
						: ""
				}
				</div>

			</Fragment>
		);
	}
}