import React from 'react';
import {FaTrash,FaInfo,FaEdit,FaExclamation} from 'react-icons/fa';
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
    const handleDeleteAsk =e=>{
      e.preventDefault();
      console.log(e.currentTarget.nextSibling)
     const exclamation=e.currentTarget.nextSibling;
     exclamation.setAttribute('display','block')
     e.currentTarget.remove();
    }
  

  return ( 
    <div style={tarefa.hiden?{display:'none'}:{}}>
  <div className="tarefa-container" style={tarefa.completed?{borderLeft:'6px solid #4824e7'}:{}}>
    <div key={String(tarefa._id)}>
    {tarefa.task}
    </div>
    <div className="buttons-container">
    <button  onClick={handlerInfo}className="info-tarefa"> <FaInfo/></button>
     <button className="editar-tarefa" onClick={handlerEdit}> <FaEdit/></button>
     <button onClick={handleDeleteAsk} className="deletar-tarefa"> <FaTrash/></button>  
     <FaExclamation className="exclamation" size={23} display="none" cursor="pointer" onClick={handleDelete}/>   
    </div>
    </div>
  </div>

  );
  
}
 
export default Tarefa;