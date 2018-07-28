import React from 'react';
import { Button } from './Button';

export class Time extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <Button onClick={this.props.marcarGol}/>
            </div>
        );
    }
}