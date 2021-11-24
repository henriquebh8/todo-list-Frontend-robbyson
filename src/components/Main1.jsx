import React,{useState} from 'react';
import axios from 'axios';
import{useHistory} from 'react-router-dom';
import {FaPlus,FaSearch} from 'react-icons/fa';
import Tarefa from './Tarefa';
import './Main1.css';



const Main1 = () => {
  const[search,setSearch]=useState('');
  const [tarefas,setTarefas]=useState([]);
  const baseURL='http://localhost:3001/api/busca';

  const fetchTasks=async()=>{
    const response=await axios.get(`${baseURL}/${search}`)
    setTarefas(response.data)
  
  };
     
    function setHiden(){
      setTarefas(()=>tarefas.map(item=>{
  
        let novoItem=JSON.parse(JSON.stringify(item))
        novoItem.hiden=false;
        return novoItem;
      }))
    
     }

    const history = useHistory();
    function handlerAdd(){
      localStorage.clear();
      history.push('/addtarefa');
  }

  return ( 
    
    <div className="main">
    <h1>To do list</h1>
    <form action="#" className="form">
    <input type="text" placeholder="Pesquise aqui uma tarefa" value={search} onChange={e=>setSearch(e.target.value)}/>
    <button type="submit" className="btn_busca" onClick={fetchTasks}><FaSearch/></button>
    <button onClick={handlerAdd} className="btn_adicionar"><FaPlus/></button>
    </form>
    {tarefas.map((tarefa)=>(
     
     <Tarefa
     key={tarefa._id} 
     tarefa={tarefa}
     />
   ))}
    </div>
     );
}
 
export default Main1;