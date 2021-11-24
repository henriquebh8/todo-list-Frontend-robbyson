import React,{useState,useEffect} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {get} from 'lodash';
import{useHistory,useParams } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import './EditarTarefa.css'
  
const baseURL="http://localhost:3001/api";
const EditarTarefa = () => {
  const params=useParams();
  const[description,setDescription]=useState('');
  const[dueDate,setDueDate]=useState('');
  const[completed,setCompleted]=useState(); 
  const[hiden,setHiden]=useState();
 

  useEffect(()=>{
    const fetchTasks=async()=>{
    const response=await axios.get(`${baseURL}/${params._id}`);
    setCompleted(response.data[0].completed);
    setHiden(response.data[0].hiden);
    setDueDate(response.data[0].dueDate);
    setDescription(response.data[0].description);

    
   
  };
  fetchTasks();
  
  },[]);
 
   

 
    async function handleSubmit(e){
      e.preventDefault();
           try{
            const response = await axios.patch(`${baseURL}/${params._id}`,{
              description,dueDate,completed,hiden
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
  const handleCompleted = () => {
    setCompleted(!completed);
    console.log(completed)
   
    };

  const handlerHiden = () => {
    if(completed===true){
    setHiden(!hiden);
  }
  };  
      return ( 
        
        <div className="main1"> 
        <h1 className="titulo1">Editar tarefa</h1>      
      <form onSubmit={handleSubmit} className="form">
      <div className="campo-form">
        <input type="text" placeholder="Descrição da tarefa" value={description} onChange={e=>setDescription(e.target.value)}/>
        <input type="date" placeholder=" duedate" value={dueDate} onChange={e=>setDueDate(e.target.value)}/>
        </div>
        <label className="label"> tarefa concluida? 
        <input type="checkbox" value={completed} checked={completed} onChange={handleCompleted}/>
        </label>
        <label className="label">Ocultar tarefa?
        <input type="checkbox" value={hiden} checked={hiden} onChange={handlerHiden}/>
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