import AppContenedor from './componentes/app-contenedor.js';
import Cabecera from './componentes/Cabecera.js';
import './App.css';
import Formulario from './componentes/Formulario.js';
import Carrousel from './componentes/carousel.js';

function App() {
  const Parrafo1 = "Me llamo Matias Fochi, tengo 25 años y actualmente resido en Junin, Bs As, Argentina. Me considero una persona comunicativa, positiva, detallista, ordenada y curiosa, capaz de trabajar tanto individual como colectivamente. Me adapto fácilmente a cualquier circunstancia buscando crecer y aprender profesionalmente todo el tiempo.";
  const Parrafo2 = "Soy un estudiante de tercer año de la carrera de Licenciatura en Sistemas en la Universidad Nacional del Noroeste de la provincia de Buenos Aires (UNNOBA). ";
  const Parrafo3 = "Me apasiona el desarrollo front-end y estoy siempre dispuesto a incorporar nuevas tecnologias y herramientas para mejorar mi desempeño.";
  const Parrafo4 = "Espero que disfrutes navegar por mi Portfolio.";
  const Saludo = "Gracias por visitar mi sitio!";

  return (
    <div className="container-xl text-center aling-items-center App sombreado">
      <Cabecera />
      <div className='row espacio'>
        <div className='col'></div>
        <div className='col-10 container-sm align-items-center text-start text-wrap fst-italic cv-contenedor espacio espacio-lateral sombreado'>
          <p className='lh-sm text-start font-monospace fts-italic espacio-lateral' style={{marginTop: 10+ "px"}}>{Parrafo1}</p>
          <p className='lh-sm text-start font-monospace fts-italic espacio-lateral'>{Parrafo2}</p>
          <p className='lh-sm text-start font-monospace fts-italic espacio-lateral'>{Parrafo3}</p>
          <p className='lh-sm text-end font-monospace fts-italic espacio-lateral'>{Parrafo4}</p>
          <p className='lh-sm text-end font-monospace fts-italic espacio-lateral' style={{marginBottom: 10 + "px"}}>{Saludo}</p>
        </div>
        <div className='col'></div>
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