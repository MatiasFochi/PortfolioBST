import '../hojas-de-estilo/Formulario.css';

function Formulario (props){

  const alertPlaceholder = (e) => {
    document.getElementById('liveAlertPlaceholder').append(e);
  };

  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder(wrapper);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    appendAlert('El mensaje se ha enviado correctamente', 'success');
    e.target.reset();
  };


  return(
    <div className='container-sm text-center align-items-center sombreado espacio'>
      <h2 className='espacio-lateral espacio text-start'><strong>Contacto</strong></h2>
      <div id="liveAlertPlaceholder"></div>
      <form className='was-validated espacio espacio-lateral' onSubmit={manejarEnvio}>
        <div className="input-group mb-3 espacio">
          <span className="input-group-text" id="basic-addon1">Nombre</span>
          <input type="text" className="form-control" placeholder="Ingrese su nombre..." aria-label="Username" aria-describedby="basic-addon1" required/>
        </div>
        <div className="input-group mb-3 espacio">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" required/>
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" placeholder="Ejemplo.com" aria-label="Server" required/>
        </div>
        <div className="input-group espacio">
          <span className="input-group-text">Mensaje:</span>
          <textarea className="form-control" aria-label="Escriba aqui..." required></textarea>
        </div>
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button className='btn btn-secondary' >Enviar!</button>
        </div>
      </form>
    </div> 
  );
}

export default Formulario;

/*
  //Funcionalidad de alerta al enviar el contacto
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
  }

  const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
    })
  }
  //-----------------------------------------------------------------------------------------------------
*/


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