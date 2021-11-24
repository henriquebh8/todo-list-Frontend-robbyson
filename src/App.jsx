import React,{useState,useEffect} from 'react';
import Tarefas from './components/Tarefas';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Main1 from './components/Main1';
import AddTarefa from './components/AddTarefa';
import EditarTarefa from './components/EditarTarefa';
import TarefaDetalhada from './components/TarefaDetalhada';
import './App.css'



const App= () => {
  const [tarefas,setTarefas]=useState([]);
  useEffect(()=>{
    const fetchTasks=async()=>{
    const response=await axios.get('http://localhost:3001/api');
    setTarefas(response.data);
  };
  fetchTasks();
  },[]);

  
 
  return ( 
    <Router>
    <div className="container">
    <Route path="/" exact render={()=>(
    <>
    <Main1/>
    <Tarefas tarefas={tarefas} setTarefas={(itens)=>setTarefas(itens)}/>
 
    </>
    )} 
    />
     <ToastContainer autoclose={1000} className="toast-container"/>
    <Route path="/addtarefa" exact  component={AddTarefa}/>  
    
    </div>
    <Route path="/editartarefa/:_id" exact component={EditarTarefa}/>
    <Route path="/detalhetarefa/:_id" exact component={TarefaDetalhada}/>
    
    </Router>
    );
    }
    export default App;