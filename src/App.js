import AppContenedor from './componentes/app-contenedor.js';
import Cabecera from './componentes/Cabecera.js';
import './App.css';
import Formulario from './componentes/Formulario.js';
import Carrousel from './componentes/carousel.js';

function App() {
  return (
    <div className="container-xl text-center aling-items-center App sombreado">
      <Cabecera />
      <div className='container-sm sombreado'>
        <p className='fs-6 espacio'>"Aqui va un breve resumen de mi"</p>
      </div>
      <Carrousel />
      <AppContenedor />
      <Formulario />
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