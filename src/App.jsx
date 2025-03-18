import './App.css'
import { useState } from 'react';


function App() {


  {/**=============================================     IMAGENS 1       =============================================*/}

  const [imgs, setImgs] = useState([ <img className='img' src="CavaleiroNegro.ico" alt="" />,<img className='img' src="CavaleiroAmarelo.png" alt="" />,
  <img className='img' src="CavaleiroVerde.ico" alt="" />,<img className='img' src="CavaleiroCinca.ico" alt="" />,<img className='img' src="CavaleiroAmarelo.png" alt="" />,
  <img className='img' src="ArqueiroDourado.png" alt="" />,<img className='img' src="ArqueiroMarrom.png" alt="" />,<img className='img' src="ArquiroAzul.png" alt="" />,
  <img className='img' src="MagoAzul.png" alt="" />,<img className='img' src="MagoRoxo.png" alt="" />,<img className='img' src="MagoVermelho.webp" alt="" />]);
     
     const [img, setImg] = useState([<img className='img' src="MagoRoxo.png" alt="" />]);
    
      function imagens(){
        if(imgs.length > 0){
          let i = Math.floor(Math.random() * imgs.length)
          setImg(imgs[i])
          setImgs([...imgs.filter((e) => e != img[i])])
          console.log(imgs.length)
        }else{
          alert('acabo')
        }
      }


 {/**=============================================     IMAGENS 2       =============================================*/}

      const [imgs2, setImgs2] = useState([ <img className='img' src="CavaleiroNegro.ico" alt="" />,<img className='img' src="CavaleiroAmarelo.png" alt="" />,
        <img className='img' src="CavaleiroVerde.ico" alt="" />,<img className='img' src="CavaleiroCinca.ico" alt="" />,<img className='img' src="CavaleiroAmarelo.png" alt="" />,
        <img className='img' src="ArqueiroDourado.png" alt="" />,<img className='img' src="ArqueiroMarrom.png" alt="" />,<img className='img' src="ArquiroAzul.png" alt="" />,
        <img className='img' src="MagoAzul.png" alt="" />,<img className='img' src="MagoRoxo.png" alt="" />,<img className='img' src="MagoVermelho.webp" alt="" />]);
           
           const [img2, setImg2] = useState([<img className='img' src="ArquiroAzul.png" alt="" />]);
          
            function imagens2(){
              if(imgs2.length > 0){
                let i = Math.floor(Math.random() * imgs2.length)
                setImg2(imgs[i])
                setImgs2([...imgs2.filter((e) => e != img2[i])])
                console.log(imgs2.length)
              }else{
                alert('acabo')
              }
            }


     {/**=============================================     Luta      =============================================*/}

      const [lutas, setLutas] = useState([ <img className='img' src="Player1.png" alt="" />, <img className='img' src="Player2.webp" alt="" />]);
           
           const [luta, setLuta] = useState([<img className='img' src="Lutar.webp" alt="" />]);
          
            function Lutass(){
              if(lutas.length > 0){
                let i = Math.floor(Math.random() * lutas.length)
                setLuta(lutas[i])
                setLutas([...lutas.filter((e) => e != luat[i])])
                console.log(lutas.length)
              }else{
                alert('acabo')
              }
            }



  return (
    <>
     <div className='container'> 

    <div className='titulo1'><h1 className='texto'>Player 1</h1></div>  
    <p className='d' onClick={imagens}>{img}</p>
    

    <div className='titulo2'><h1 className='texto'>Player 2</h1></div>  
    <p className='d' onClick={imagens2}>{img2}</p>

    <div className='titulo2'><h1 className='texto'>Lutar</h1></div>  
    <p className='d' onClick={Lutass}>{luta}</p>


    
    

     </div>
    </>
  )
}

export default App
