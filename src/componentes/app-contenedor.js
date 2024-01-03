import '../hojas-de-estilo/app-contenedor.css';

function AppContenedor (props){
  const url = props.vinculo;

  const manejarClic = () =>{
    window.open(url, '_blank')
  };

return(
  <div className="container general">
    <div className="row justify-content-md-center">
      <div className='col col-lg-2'></div>
      <div className="col contenedor-aplicacion">
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
      <div className='col col-lg-2'></div>
    </div>
  </div>
);
}

export default AppContenedor;