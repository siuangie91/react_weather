import React from 'react';

export default class Search extends React.Component {
	render() {
		return (
			<div className="search-container">
				<label>Search by city:</label>
				<input type="text" placeholder="New York"/>
				<button>Get Weather</button>
			</div>
		);
	}
}