import { useState } from 'react';
import './Corpo2.css'


function Corpo2() {

const [dados20, setDados20] = useState(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']);
 
 const [dado20, setDado20] = useState([<img className='img' src="Dado20.svg"/>]);

  function ladoDado(){
    if(dados20.length > 0){
      let i = Math.floor(Math.random() * dados20.length)
      setDado20(dados20[i])
      setDados20([...dados20.filter((e) => e != dado20[i])])
      console.log(dados20.length)

    }else{
      alert('acabo')

    }

  }


  return (
    <div className='container-C2'>
   
    <h4 className='texto'>Rolar Dado D20</h4>
   <div className='outra-coisa'></div>
    <p className='dado-d20' onClick={ladoDado}>{dado20}</p>


    </div>
  )
}

export default Corpo2