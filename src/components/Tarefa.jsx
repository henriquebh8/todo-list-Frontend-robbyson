import React from 'react';
import {FaTrash,FaInfo} from 'react-icons/fa';
import './Tarefa.css'
const Tarefa = ({tarefa}) => {
  return ( 
  <div className="tarefa-container">
    {tarefa.title}
    {tarefa.completed}
    <div className="buttons-container">
     <button className="deletar-tarefa"> <FaTrash/></button>
     <button className="mostrar-tarefa"> <FaInfo/></button>
     
    </div>
 
  </div>

  );
  
}
 
export default Tarefa;