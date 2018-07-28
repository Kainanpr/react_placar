import React from 'react';

export class Partida extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.local}</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.horario}</span>
                </div>    
            </div>
        );
    }

}