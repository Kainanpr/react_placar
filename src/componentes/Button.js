import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);

    }

    handleClick(event) {
        
    }

    render() {
        return (
            <button onClick={this.props.onClick}>Gol!</button>
        );
    }
}