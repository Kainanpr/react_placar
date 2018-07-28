import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { PlacarContainer } from './componentes/PlacarContainer';

const dados = {
    timeCasa: {
        nome: 'São Paulo'
    },
    timeVisitante: {
        nome: 'Palmeiras'
    },
    partida : {
        local: 'Morumbi',
        data: '10/06/2016',
        horario: '20:00h'
    }
};


ReactDOM.render(
    <PlacarContainer 
        timeCasa={dados.timeCasa}
        timeVisitante={dados.timeVisitante}
        partida={dados.partida}
    />, 
    document.getElementById('root')
);

registerServiceWorker();
