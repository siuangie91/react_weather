import React from 'react';

export default class Search extends React.Component {
	render() {
		return (
			<div className="search-container">
				<input type="text"/>
				<button>Get Weather</button>
			</div>
		);
	}
}