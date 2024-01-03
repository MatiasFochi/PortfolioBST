import { useState } from 'react';
//import '../HojasDeEstilo/Formulario.css';

function Formulario (props){

  const [input, setInput] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("mensaje enviado")
  };

  return(
    <div className="container general">
        <div className="row justify-content-md-center">
            <div className='col col-lg-2'></div>
            <div className='col'>
                <h1 className='titulo'>Contacto</h1>
                <form
                className="formulario"
                onSubmit={manejarEnvio}>
                    <input 
                    className='mail-input'
                    type='text'
                    placeholder='Ingrese su correo electronico'
                    name='texto'/>
                    <input 
                    className='empresa-input'
                    type='text'
                    placeholder='Ingrese la empresa que representa'
                    name='texto'/>
                    <input 
                    className='mensaje-input'
                    type='text'
                    placeholder='Escriba su mensaje'
                    name='texto'/>
                    <button className="btn btn-success submit"  >Enviar</button>
                </form>
            </div>
            <div className='col col-lg-2'></div>
        </div>
    </div>
  );
}

export default Formulario;