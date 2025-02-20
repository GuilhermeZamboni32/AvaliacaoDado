import { useState } from 'react';
import './Corpo.css'


function Corpo() {

const [dados, setDados] = useState([<img className='img' src="Dado-1.svg"/>,  <img className='img' src="Dado-2.svg"/>,  <img className='img' src="Dado-3.svg"/>,  
<img className='img' src="Dado-4.svg"/>,  <img className='img' src="Dado-5.svg"/>,  <img className='img' src="Dado-6.svg"/>]);
 
 const [dado, setDado] = useState([<img className='img' src="Dado6.svg"/>]);

  function ladoDado(){
    if(dados.length > 0){
      let i = Math.floor(Math.random() * dados.length)
      setDado(dados[i])
      setDados([...dados.filter((e) => e != dado[i])])
      console.log(dados.length)

    }else{
      alert('acabo')

    }

  }





  return (
    <div className='container-C1'>
    <h4 className='texto'>Rolar Dado D6</h4>
    <div className='alguma-coisa'></div>
    
    <p className='dado-d6' onClick={ladoDado}>{dado}</p>

     
       

    </div>
  )
}

export default Corpo