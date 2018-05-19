import React from 'react';

export default class Button extends React.Component {
	render() {
		const theButton = (this.props.isDisabled) ? 
			<button className="disabled" disabled>
				<span>{this.props.btnCopy}</span>
			</button> 
			: 
			<button onClick={this.props.clickHandler}>
				<span>{this.props.btnCopy}</span>
			</button>	

		return (
			theButton
		);
	}
}