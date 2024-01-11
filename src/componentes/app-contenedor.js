import '../hojas-de-estilo/app-contenedor.css';

const calculadora = "https://calculadora-matiasfochi.netlify.app/";
const Tareas = "https://organizadortareas-matiasfochi.netlify.app/";
const Contador = "https://contadorclicks-matiasfochi.netlify.app/";
const Frases = 'https://frasealeatoria-matiasfochi.netlify.app/';

function AppContenedor (props){
  return(
    <div className='container container-md sombreado espaciado espaciado-lateral contenedor-principal-aplicaciones'>
      <h2 className='espaciado-lateral espaciado text-start titulo-aplicaciones'><strong>Desarrollos</strong></h2>
      <div className="accordion accordion-flush sombreado espaciado acordeon-aplicaciones" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>Aplicación Calculadora</strong>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicación de calculadora.</p>
            <a href={calculadora} target='_blank' rel="noreferrer" className='btn btn-custom'>Ver aplicación</a>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>Aplicación Organizador de Tareas</strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicación de Organizador de Tareas.</p>
            <a href={Tareas} target='_blank' rel="noreferrer" className='btn btn-custom'>Ver aplicación</a>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Aplicación Contador de Clicks</strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicación de Contador de Clicks.</p>
            <a href={Contador} target='_blank' rel="noreferrer" className='btn btn-custom'>Ver aplicación</a>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              <strong>Aplicacion Frases Aleatorias</strong>
            </button>
          </h2>
          <div id='flush-collapseFour' className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicacion de frases aleatorias.</p>
            <a href={Frases} target='_blank' rel="noreferrer" className='btn btn-custom'>Ver aplicacion</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppContenedor;
/* 
  <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseELNUMEROQUESIGUE(INLGES)" aria-expanded="false" aria-controls="flush-collapseELNUMEROQUESIGUE(INLGES)">
      <strong>NOMBRE APLICACION</strong>
    </button>
  </h2>
  <div id='flush-collapseELNUMEROQUESIGUE(INLGES)' className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
    <p className='text-start detalle'>DESCRIPCION APLICACION</p>
    <a href={Frases} target='_blank' rel="noreferrer" className='btn btn-custom'>Ver aplicacion</a>
  </div> 
*/