import React,{useState} from 'react';
import {FaPlus,FaTrash} from 'react-icons/fa';
import './AddTarefa.css'

const AddTarefa = () => {
  const[task,setTask]=useState('');
  const[description,setDescription]=useState('');
  const[dueDate,setDueDate]=useState('');
  const[conclude,setConclude]=useState(false); 
  const[hiden,setHiden]=useState(false);

  function handleSubmit(e){
    e.preventDefault();
    console.log(task)
  }

  
    
    return ( 
      
      <div className="main1">
      <h1 className="titulo1">Adicionar uma nova tarefa</h1>
    <form onSubmit={handleSubmit} className="form">
    <div className="campo-form">
      <input type="text" placeholder="Nome da Tarefa" value={task} onChange={e=>setTask(e.target.value)}/>
      <input type="text" placeholder="Descrição da tarefa" value={description} onChange={e=>setDescription(e.target.value)}/>
      <input type="date" placeholder=" duedate" value={dueDate} onChange={e=>setDueDate(e.target.value)}/>
      </div>
     
      <label className="label"> tarefa concluida? 
      <input type="checkbox"/>
      </label>
      <label className="label">Ocultar tarefa?
      <input type="checkbox"/>
      </label>
      <div className="btn-form">
      <button type="submit" className="btn_adicionar1"><FaPlus/></button>
      <button className="btn_cancela"><FaTrash/></button>
      </div>
    </form>
      </div>
         );
}
 
export default AddTarefa;