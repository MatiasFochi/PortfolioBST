import '../hojas-de-estilo/Descripcion.css';
import { useState } from 'react';

const Parrafo1 = "Hola! Mi nombre es Matias Fochi.";
const Parrafo2 = "Tengo 25 años y actualmente resido en Junín, Bs As, Argentina. Me considero una persona comunicativa, positiva, detallista, ordenada y curiosa, capaz de trabajar tanto individual como colectivamente. Me adapto fácilmente a cualquier circunstancia buscando crecer y aprender profesionalmente todo el tiempo. Soy un estudiante de tercer año de la carrera de Licenciatura en Sistemas en la Universidad Nacional del Noroeste de la provincia de Buenos Aires (UNNOBA). ";
const Parrafo3 = "Me entusiasma el desarrollo front-end y estoy siempre dispuesto a incorporar nuevas tecnologías y herramientas para mejorar mi desempeño.";
const Saludo1 = "Espero que disfrutes navegar por mi Portfolio.";
const Saludo2 = "Gracias por visitar mi sitio!";


//Acomodar para que cuando el texto sea demasiado largo se resuma con puntos suspensivos
//Agregar boton de ver mas
function Descripcion(){

  const [conoceMas, setConoceMas] = useState(false);

  const [textoBoton, setTextoBoton] = useState('Conocé más de mi!');

  const mostrarMas = () =>{
    if(conoceMas){
      setTextoBoton('Conocé más de mi!');
      setConoceMas(false);
    }
    else{
      setTextoBoton('Ver menos');
      setConoceMas(true);
    }
  };

  return(
    <div className='row justify-content-center espaciado espaciado-lateral contenedor-principal-descripcion'>
      <div className='col align-items-center espaciado espaciado-lateral sombreado contenedor-descripcion'>
        <p className='lh-sm text-center text-wrap font-monospace fts-italic espaciado espaciado-lateral'>
          {Parrafo1}<br/>
        </p>
        <div id='mostrarDescripcion' className='collapse'>
          <p className='lh-sm text-justify text-wrap font-monospace fts-italic espaciado-lateral'>{Parrafo2}<br/><br/>{Parrafo3}<br/></p>
        </div>
        <button className='btn btn-custom espaciado' type="button" data-bs-toggle="collapse" data-bs-target="#mostrarDescripcion" aria-expanded="false" aria-controls="mostrarDescripcion" onClick={mostrarMas} >
            {textoBoton}
        </button>
        <p className='lh-sm text-end text-wrap font-monospace fts-italic espaciado espaciado-lateral'>
          {Saludo1}<br/>{Saludo2}
        </p>
      </div>
    </div>
  );
}

export default Descripcion;
