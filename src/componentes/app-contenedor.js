import '../hojas-de-estilo/app-contenedor.css';

function AppContenedor (props){
  const url = props.vinculo;

  const manejarClic = () =>{
    window.open(url, '_blank')
  };

  return(
    <div className="container text-center row justify-content-md-center">
      <div className='col contenedor-aplicacion'></div>
      <div className="col-6 contenedor-aplicacion">
        <a><strong>{props.nombre}</strong></a>
        <img 
        src='' 
        className="aplicacion-logo"/> 
        <button 
        onClick={manejarClic}
        className="btn btn-warning">
            {props.nombre}
        </button>
      </div>
      <div className='col contenedor-aplicacion'></div>
    </div>
  );
}

export default AppContenedor;