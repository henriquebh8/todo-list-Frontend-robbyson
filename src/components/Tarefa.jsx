import React from 'react';
import {FaTrash,FaInfo,FaEdit} from 'react-icons/fa';
import{useHistory} from 'react-router-dom';
import axios from 'axios';
import './Tarefa.css';

const Tarefa = ({tarefa}) => {
  const baseURL='http://localhost:3001/api';
  
  const history = useHistory();
    function handlerEdit(){
      localStorage.clear();
      history.push(`/editartarefa/${tarefa._id}`);
  };
  function handlerInfo(){
    localStorage.clear();
    history.push(`/detalhetarefa/${tarefa._id}`);
  }

  const handleDelete=async (e,_id)=>{
    e.persist();
    try{  
      e.target.parentElement.remove();
     await axios.delete(`${baseURL}/${tarefa._id}`);
    }
    catch(err){

    }
   
  }
  return ( 
  <div className="tarefa-container" style={tarefa.completed?{borderLeft:'6px solid #4824e7'}:{}}>
    <div key={String(tarefa._id)}>
    {tarefa.task}
    </div>
    <div className="buttons-container">
    <button  onClick={handlerInfo}className="info-tarefa"> <FaInfo/></button>
     <button className="editar-tarefa" onClick={handlerEdit}> <FaEdit/></button>
     <button onClick={handleDelete} className="deletar-tarefa"> <FaTrash/></button>     
    </div>
 
  </div>

  );
  
}
 
export default Tarefa;