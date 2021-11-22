import React,{useState} from 'react';
import {isDate} from 'validator';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {get} from 'lodash';
import{useHistory,useParams } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import './EditarTarefa.css'


const EditarTarefa = (tarefa,tarefas) => {
  const params=useParams();  
 
    const[description,setDescription]=useState('');
    const[dueDate,setDueDate]=useState('');
    const[conclude,setConclude]=useState(false); 
    const[hiden,setHiden]=useState(false);

 
    async function handleSubmit(e){
      e.preventDefault();
    
      let formErrors=false;
  
      if(description.length<=0||description===null){
      formErrors=true;
      console.log(formErrors)
      toast.error('Campo descrição não pode ser em branco')
      };
  
        if(!isDate(dueDate)||dueDate<=0||dueDate===null){
          formErrors=true;
          toast.error('Campo duedate não pode ser em branco')
          };
  
          if(formErrors)return;
  
          try{
            const response = await axios.post('http://localhost:3001/api',{
              description,dueDate,conclude,hiden
            });
            toast.success('Tarefa editada com sucesso');
            console.log(response.data)
            history.push('/');
          }catch(err){
            const errors=get(e,'response.data.errors',[]);
            errors.map(error=>toast.error(error));
          }
    }
    const history = useHistory();
    function handlerBack(){
      localStorage.clear();
      history.push('/');
  }
  
  
      return ( 
        
        <div className="main1"> 
        <h1 className="titulo1">Editar tarefa</h1>      
      <form onSubmit={handleSubmit} className="form">
      <div className="campo-form">
    
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
        <button onClick={handlerBack} className="btn_cancela"><IoIosArrowBack/></button>
        </div>
      </form>
        </div>
           );
  }
 
export default EditarTarefa;