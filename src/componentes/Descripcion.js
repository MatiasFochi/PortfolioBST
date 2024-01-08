const Parrafo1 = "Me llamo Matias Fochi, tengo 25 años y actualmente resido en Junin, Bs As, Argentina. Me considero una persona comunicativa, positiva, detallista, ordenada y curiosa, capaz de trabajar tanto individual como colectivamente. Me adapto fácilmente a cualquier circunstancia buscando crecer y aprender profesionalmente todo el tiempo.";
const Parrafo2 = "Soy un estudiante de tercer año de la carrera de Licenciatura en Sistemas en la Universidad Nacional del Noroeste de la provincia de Buenos Aires (UNNOBA). ";
const Parrafo3 = "Me apasiona el desarrollo front-end y estoy siempre dispuesto a incorporar nuevas tecnologias y herramientas para mejorar mi desempeño.";
const Parrafo4 = "Espero que disfrutes navegar por mi Portfolio.";
const Saludo = "Gracias por visitar mi sitio!";

function Descripcion(){
  return(
    <div className='container-md row justify-content-md-center espaciado'>
      <div className='col col-sm-auto container-sm align-items-center text-start text-wrap fst-italic cv-contenedor espaciado espaciado-lateral sombreado'>
        <p className='lh-sm text-start font-monospace fts-italic espaciado-lateral' style={{marginTop: 10+ "px"}}>{Parrafo1}</p>
        <p className='lh-sm text-start font-monospace fts-italic espaciado-lateral'>{Parrafo2}</p>
        <p className='lh-sm text-start font-monospace fts-italic espaciado-lateral'>{Parrafo3}</p>
        <p className='lh-sm text-end font-monospace fts-italic espaciado-lateral'>{Parrafo4}</p>
        <p className='lh-sm text-end font-monospace fts-italic espaciado-lateral' style={{marginBottom: 10 + "px"}}>{Saludo}</p>
      </div>
    </div>
  );
}

export default Descripcion;