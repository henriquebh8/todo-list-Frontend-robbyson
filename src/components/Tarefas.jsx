import React from 'react';
import {FaEye} from 'react-icons/fa';
import Tarefa from './Tarefa';
import './Tarefas.css';


const Tarefas = ({tarefas,setTarefas}) => {

  function setHiden(){
    setTarefas(()=>tarefas.map(item=>{

      let novoItem=JSON.parse(JSON.stringify(item))
      novoItem.hiden=false;
      return novoItem;
    }))
  
   }
  
  return ( 
  <>
  <div className="titulo"><h1>Minhas Tarefas</h1></div>
  <div className="main">
  <FaEye className="button-hiden" onClick={setHiden} size={20} cursor="pointer"/> Ver ocultos
  {tarefas.map((tarefa)=>(
     
    <Tarefa
    key={tarefa._id} 
    tarefa={tarefa}
    />
  ))}
  
  </div>  
  </>
    );
  
}
 
export default Tarefas;