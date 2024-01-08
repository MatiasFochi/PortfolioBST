import '../hojas-de-estilo/app-contenedor.css';

function AppContenedor (props){
  const calculadora = "https://startling-marzipan-de3cc9.netlify.app";
  const Tareas = "https://soft-liger-d3063a.netlify.app";
  const Contador = "https://cerulean-tartufo-5802ec.netlify.app";

  return(
    <div className='container-md sombreado espaciado'>
      <h2 className='espaciado-lateral espaciado text-start'><strong>Aplicaciones</strong></h2>
      <div className="accordion accordion-flush sombreado espaciado" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>Aplicacion Calculadora</strong>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicacion de calculadora.</p>
            <a href={calculadora} target='_blank' rel="noreferrer" className='btn btn-primary'>Ver aplicacion</a>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>Aplicacion Organizador de Tareas</strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicacion de Organizador de Tareas.</p>
            <a href={Tareas} target='_blank' rel="noreferrer" className='btn btn-primary'>Ver aplicacion</a>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Aplicacion Contador de Clicks</strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse text-end contenedor-oculto" data-bs-parent="#accordionFlushExample">
            <p className='text-start detalle'>Aplicacion de Contador de Clicks.</p>
            <a href={Contador} target='_blank' rel="noreferrer" className='btn btn-primary'>Ver aplicacion</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppContenedor;

//Acordion always open

/*
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Aplicacion Calculadora
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <p>Descripcion Aplicacion de calculadora</p>
            <a className='btn btn-primary'>LINK</a>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
*/

//Acordion flush

/*
  <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Aplicacion Calculadora
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse text-center" data-bs-parent="#accordionFlushExample">
        <p>Aplicacion de calculadora.</p>
        <a href={calculadora} target='_blank' className='btn btn-primary'>LINK</a>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
  </div>

*/


//Codigo carrusel bootstrap

/*
      <div className='row'>
        <div id="carouselExampleIndicators" className="carousel slide col-8">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Calculadora} className="d-block w-100" alt="Vista previa de aplicacion: calculadora" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Calculadora</h5>
            <p>Aplicacion que emula una calculadora funcional.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Contador} className="d-block w-100" alt="Vista previa de aplicacion: testimonios"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Contador de clicks</h5>
            <p>Aplicacion que cuenta clics en un boton.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Tareas} className="d-block w-100" alt="Vista previa de aplicacion: tareas"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Organizador de Tareas</h5>
            <p>Aplicacion que lista tareas ingresadas por el usuario hasta que se completen.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div class="list-group col-4">
      <a href="https://startling-marzipan-de3cc9.netlify.app" target='-blank' class="list-group-item list-group-item-action" aria-current="true">Aplicacion Calculadora</a>
      <a href="https://cerulean-tartufo-5802ec.netlify.app" target='-blank' class="list-group-item list-group-item-action">Aplicacion Contador de Clicks</a>
      <a href="https://soft-liger-d3063a.netlify.app" target='-blank' class="list-group-item list-group-item-action">Aplicacion Organizador de Tareas</a>
    </div>
  </div>

*/


//Codigo sin bootstrap

/*
  const url = props.vinculo;

  const manejarClic = () =>{
    window.open(url, '_blank')
  };

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
*/