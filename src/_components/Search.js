import React from 'react';
import { Fragment } from 'react';

import APIKEY from '../api';

export default class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			showResults: false,
			name: "",
			country: "",
			list: []
		}

		this.inputSearch = React.createRef(); // create reference to the <input> field
	}

	search = () => {
		// console.log('searched', this.inputSearch.current.value);
		const city = this.inputSearch.current.value.trim();

		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`, 
			{ method: 'GET'})
			.then(response => response.json())
			.then(json => {
				console.log('json', json);

				const city = json.city;

				this.setState(prevState => {
					return {
						showResults: true,
						name: city.name,
						country: city.country,
						list: json.list
					}
				})
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
						ref={this.inputSearch}/>
					<button onClick={this.search}>Get Weather</button>
				</div>

				{
					(this.state.showResults) ? 
						<div className="results">
							<h1>{this.state.name}, {this.state.country}</h1>
						</div>
						: ""
				}
			</Fragment>
		);
	}
}