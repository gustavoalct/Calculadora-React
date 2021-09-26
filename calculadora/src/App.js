import React, { useState } from 'react';

import Header from './componentes/Header'
import Soma from './componentes/Soma';
import './App.css';
import Divisao from './componentes/Divisao';
import Subtrai from './componentes/Subtrair';
import Multiplica from './componentes/Multiplicacao';

function App() {
  const [num1, setNum] = useState(2)
  const [num2, setNum2] = useState(2)
  const handleNum=(e)=>{
    setNum(e.target.value)
  }
  const handleNum2=(e)=>{
    setNum2(e.target.value)
  }

  return (
    <div className="calculadora-container"> 
      <Header />
      <label  className='label-container'> Digite numero 1  </label> 
      <input type="number" value={num1} onChange={(e)=>handleNum(e)} />
      <br/>
      <label className='label-container'>Digite numero 2  </label>
      <input  type="number" value={num2}  onChange={(e)=>handleNum2(e)} />
      <br/>
      <button type="button" className="btn btn-success buttons">Divisão</button>
      <button type="button" className="btn btn-danger buttons">Multiplica</button>
      <button type="button" className="btn btn-primary buttons">Soma</button>
      <button type="button" className="btn btn-secondary buttons">Subtrai</button>
      <Soma/>
      <Subtrai/>
      <Divisao/>
      <Multiplica />
      
      <hr/>
    </div>
  );
}

export default App;
