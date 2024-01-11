import AppContenedor from './componentes/app-contenedor.js';
import Cabecera from './componentes/Cabecera.js';
import './App.css';
import Formulario from './componentes/Formulario.js';
import Carrousel from './componentes/carousel.js';
import Descripcion from './componentes/Descripcion.js';

function App() {

  return (
    <div className="App d-flex flex-column align-items-center">
      <section className='Seccion1'>
        <Cabecera />
      </section>  
      <section className='Seccion2'>  
        <Descripcion />
      </section>
      <section className='Seccion3'>
        <Carrousel />
      </section>
      <section className='Seccion4'>
        <AppContenedor />
      </section>
      <section className='Seccion5'>
        <Formulario />
      </section>
      <div className='footer'>
        {"by "}
        <a href='https://www.linkedin.com/in/matias-fochi/' target='_blank' rel='noreferrer' className='texto-footer' >MatiasFochi</a>
      </div>
    </div>
  );
}

export default App;

/*
      <AppContenedor
        vinculo= 'https://startling-marzipan-de3cc9.netlify.app' 
        nombre= 'Calculadora' 
      />
      <AppContenedor 
        vinculo='https://soft-liger-d3063a.netlify.app'
        nombre='Administrador de Tareas'
      />
      <AppContenedor 
        vinculo= 'https://frabjous-taffy-5e61b4.netlify.app' 
        nombre= 'Testimonios' 
      />
      <AppContenedor 
        vinculo='https://cerulean-tartufo-5802ec.netlify.app'
        nombre='Contador de clicks'
      />
*/