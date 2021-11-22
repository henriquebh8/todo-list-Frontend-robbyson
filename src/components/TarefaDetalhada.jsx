import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { IoIosArrowBack } from "react-icons/io";
import{useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import './TarefaDetalhada.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const TarefaDetalhada = () => {
const baseURL='http://localhost:3001/api';
  const params=useParams();
  const [tarefas1,setTarefas1]=useState([]);
  const history = useHistory();

  function handlerBack1(){
  localStorage.clear();
  history.push('/');
}

  useEffect(()=>{
    const fetchTasks=async()=>{
    const response=await axios.get(`${baseURL}/${params._id}`);
    setTarefas1(response.data[0]);
  };
  fetchTasks();
  },[]);


if(tarefas1.hiden===true){
    return 'tarefa arquivada';
}


 
  return ( 

<div className="container-div">
<div className="tarefa-container-tarefa">
  <h1>Detalhes da Tarefa</h1>
  <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Nome da tarefa</th>
      <th>Descrição da tarefa</th>
      <th>Data de conclusão</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{tarefas1.task}</td>
      <td>{tarefas1.description}</td>
      <td>{tarefas1.dueDate} </td>
      
    </tr>
    <tr>
      <td> <button onClick={handlerBack1} className="btn_cancela"><IoIosArrowBack/></button> </td>
    </tr>
   
  </tbody>
</Table>

</div>

</div>
   );
}
 
export default TarefaDetalhada;
