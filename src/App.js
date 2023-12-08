import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#d4f0Ff'
    },
    {
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'DevOPS',
      corPrimaria: '#E06869',
      corSecundaria: '#FDf7f8'
    }
  ]

  const [colaboradores, setColaboladores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    debugger
    setColaboladores([...colaboradores, colaborador])
  } 

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {aoNovoColaboradorAdicionado}/>
      {times.map(time => <Time nome = {time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores = {colaboradores.filter(colaborador => colaborador.time ===time.nome)} />)}
      <Rodape />
    </div>
  );
}

export default App;
