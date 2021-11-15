import React from 'react';
import Tarefa from './Tarefa';
import './Tarefas.css';
const Tarefas = ({tarefas}) => {
  return ( 
  <>
  <div className="titulo"><h1>Minhas Tarefas</h1></div>
  
  <div className="main">
  {tarefas.map(tarefa=><Tarefa tarefa={tarefa}/>)}
  </div>  
  </>
    );
}
 
export default Tarefas;