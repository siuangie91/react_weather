import React from 'react';
import { Fragment } from 'react';

import APIKEY from '../api';

import Results from './Results';
import Button from './Button';

export default class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			showSearch: true,
			enableBtn: false,
			showWhat: "",
			name: "",
			country: "",
			list: [],
			categorizedList: [],
		}

		this.inputSearch = React.createRef(); // create reference to the <input> field
	}

	validateInput = () => {
		// console.log(this.inputSearch.current.value);
		const value = this.inputSearch.current.value.trim();

		value ? this.setState({enableBtn: true}) : this.setState({enableBtn: false}); // enable button if input field is not empty
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
							showSearch: false,
							showWhat: "results",
							city: city.name,
							country: city.country,
							list: json.list,
							categorizedList: this.categorizeResults()
						}
					});
				}

				// if not found
				if(json.cod === "404") {
					this.setState({
						showSearch: false,
						showWhat: "notFound"
					});
				}

				return false;
			})
			.catch(error => {
				console.log('error', error);
			});
	}

	categorizeResults = () => {
		// get an array of all the dates
		// use values of that array to filter out the results

		const dates = this.state.list
			.map((item, i) => {
				return item.dt_txt.split(" ")[0];
			})
			.filter((item, i, currArr) => {
				return currArr.indexOf(item) === i;
			});

		// console.log('dates', dates);

		// create a new object with those dates as keys
		let sortedResults = {};
		for(let theDate of dates) {
			sortedResults[`${theDate}`] = [];
		}

		// loop through the response list, and map each item to the sortedResults object based on date
		for(let item of this.state.list) {
			let itemDate = item.dt_txt.split(" ")[0];

			sortedResults[itemDate].push(item);
		}

		// console.log('sortedResults', sortedResults);
		return sortedResults;
	}

	handleClear = () => {
		// clear input field
		// this.inputSearch.current.value = "";

		this.setState({
			showSearch: true,
			enableBtn: false,
			showWhat: ""
		});
	}

	render() {
		return (
			<Fragment>
				{
					(this.state.showSearch)	?
						<div className="search-container">
							<label>Search by city:</label>
							<input type="text" 
								placeholder="New York"
								ref={this.inputSearch}
								onKeyUp={this.validateInput} />
									
							<Button 
								isDisabled={!this.state.enableBtn}
								clickHandler={this.search}
								btnCopy="Get Forecast" />
						</div>
						: ""
				}

				{
					(this.state.showWhat) ? 
						<Results 
							showWhat={this.state.showWhat}
							city={this.state.city}
							country={this.state.country}
							results={this.state.categorizeResults}
							handleClear={this.handleClear} />
						: ""		
				}

			</Fragment>
		);
	}
}