import React,{useState} from 'react';
import {isDate} from 'validator';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {get} from 'lodash';
import{useHistory} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import './AddTarefa.css'

const AddTarefa = () => {
  const[task,setTask]=useState('');
  const[description,setDescription]=useState('');
  const[dueDate,setDueDate]=useState('');
  const[completed,setCompleted]=useState(false); 
  const[hiden,setHiden]=useState(false);

  const baseURL='http://localhost:3001/api';

  async function handleSubmit(e){
    e.preventDefault();
      
    let formErrors=false;

    if(description.length<=0||description===null){
    formErrors=true;
    console.log(formErrors)
    toast.error('Campo descrição não pode ser em branco')
    };

    if(task.length<=0||task===null){
      formErrors=true;
      toast.error('Campo tarefa não pode ser em branco');
      };
      if(!isDate(dueDate)||dueDate<=0||dueDate===null){
        formErrors=true;
        toast.error('Campo duedate não pode ser em branco')
        };

        if(formErrors)return;

        try{
          const response = await axios.post(`${baseURL}`,{
            task,description,dueDate,completed,hiden
          });
          toast.success('Tarefa cadastrada com sucesso');
          history.push('/');
          console.log(response.data)
        }catch(err){
          const errors=get(e,'response.data.errors',[]);
          errors.map(error=>toast.error(error));
        }
  }
  const history = useHistory();
  function handlerAdd1(){
    localStorage.clear();
    history.push('/');
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
     
      <div className="btn-form">
      <button type="submit" className="btn_adicionar1"><FaPlus/></button>
      <button onClick={handlerAdd1} className="btn_cancela"><IoIosArrowBack/></button>
      </div>
    </form>
      </div>
         );
}
 
export default AddTarefa;