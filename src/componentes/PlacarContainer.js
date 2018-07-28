import React from 'react';
import { Time } from './Time';
import { Partida } from './Partida';

const styles = {
  float: 'left',
  textAlign: 'center',
  margin: 10,
  padding: 20
}

export class PlacarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      golsCasa: 0,
      golsVisitante: 0
    };

    this.marcarGolCasa = this.marcarGolCasa.bind(this);
    this.marcarGolVisitante = this.marcarGolVisitante.bind(this);
  }

  marcarGolCasa() {
    this.setState({
      golsCasa: this.state.golsCasa + 1
    });
  }

  marcarGolVisitante() {
    this.setState({
      golsVisitante: this.state.golsVisitante + 1
    });
  }

  render() {
    return (
      <div>
        <div style={styles}>
          <Time 
            nome={this.props.timeCasa.nome}
            gols={this.state.golsCasa}
            marcarGol={this.marcarGolCasa}
          />
        </div>

        <div style={styles}>
         <Partida 
          local={this.props.partida.local}
          data={this.props.partida.data}
          horario={this.props.partida.horario}
         />
        </div>

        <div style={styles}>
        <Time 
            nome={this.props.timeVisitante.nome}
            gols={this.state.golsVisitante}
            marcarGol={this.marcarGolVisitante}
          />
        </div>
      </div>
    );
  }

}