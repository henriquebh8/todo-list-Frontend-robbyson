import React from 'react';
import {FaPlus,FaSearch} from 'react-icons/fa';
import './Main1.css';
import{useHistory} from 'react-router-dom';


const Main1 = () => {
  const handleInputChange=(e)=>{
    console.log(e)
    };
    const history = useHistory();
    function handlerAdd(){
      localStorage.clear();
      history.push('/addtarefa');
  }

  return ( 
    
    <div className="main">
    <h1>To do list</h1>
    <form action="#" className="form">
    <input onChange={handleInputChange}type="text" placeholder="Pesquise aqui uma tarefa"/>
    <button type="submit" className="btn_busca"><FaSearch/></button>
    <button onClick={handlerAdd} className="btn_adicionar"><FaPlus/></button>
    </form>
    </div>
     );
}
 
export default Main1;