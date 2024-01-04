import { useState } from 'react';
import '../hojas-de-estilo/Formulario.css';

function Formulario (props){

  const [input, setInput] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("mensaje enviado")
    e.target.reset();
  };

  return(
    <div className='container-sm text-start align-items-center sombreado espacio'>
      <h2 className='espacio-lateral espacio'><strong>Contacto</strong></h2>
      <div class="input-group mb-3 espacio">
        <span class="input-group-text" id="basic-addon1">Nombre</span>
        <input type="text" class="form-control" placeholder="Ingrese su nombre..." aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3 espacio">
        <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
        <span className="input-group-text">@</span>
        <input type="text" className="form-control" placeholder="Ejemplo.com" aria-label="Server" />
      </div>
      <div className="input-group espacio">
        <span className="input-group-text">Mensaje:</span>
        <textarea className="form-control" aria-label="Escriba aqui..."></textarea>
      </div>
    </div> 
  );
}

export default Formulario;

/*
<div className="containter text-center row">
<div className='col'></div>
<div className='col-6 tres'>
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
    <button className="btn btn-primary submit"  >Enviar</button>
  </form>
</div>
<div className='col'></div>
</div>
*/