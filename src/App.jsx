import React,{useState} from 'react';
import Tarefas from './components/Tarefas';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import axios from 'axios';

import Main1 from './components/Main1';
import AddTarefa from './components/AddTarefa';
import './App.css'
import DetalhesTarefas from './components/DetalhesTarefas';


const App= () => {
  const [tarefas,setTarefas]=useState([
    {
      id:'1',
      title:'testando colocar tarefas no documento',
      description:'loren5',
      dueDate:'2018-01-01',
      completed: true,
      hidden: false
    },
    {
      id:'2',
      title:'tarefa2',
      description:'loren5',
      dueDate:'2018-01-01',
      completed: true,
      hidden: false
    },
    {
      id:'3',
      title:'criando o todo list ',
      description:'loren5',
      dueDate:'2018-01-01',
      completed: true,
      hidden: false
    },
  
  ])
  return ( 
    //<Route path="/:tarefa" exact component={DetalhesTarefas}/>
    <Router>
    <div className="container">
    <Route path="/" exact render={()=>(
    <>
    <Main1/>
    <Tarefas tarefas={tarefas}/>
 
    </>
    )} 
    />
    <Route path="/addtarefa" exact component={()=>(
   <AddTarefa/>
       )} 
       />
    
    </div>

    </Router>
    );
    }
    export default App;