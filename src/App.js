import AppContenedor from './componentes/app-contenedor.js';
import Cabecera from './componentes/Cabecera.js';
import './App.css';
import Formulario from './componentes/Formulario.js';

function App() {
  return (
    <div className="container text-center App">
      <div className='col-12'>
        <Cabecera />
      </div>
      <div className='col-12'>
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
      </div>
      <div className='col-12'>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
