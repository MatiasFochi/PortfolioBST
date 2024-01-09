import FotoPerfil from '../Imagenes/FotoPerfil.jpeg';
import '../hojas-de-estilo/Cabecera.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fontsource/montserrat"; // Peso por defecto 400
import "@fontsource/montserrat/400.css"; // Especificar peso
import "@fontsource/montserrat/400-italic.css"; // Especificar peso y estilo



//Agrandar columnas

function Cabecera(props) {
  return(
    <div className='container align-content-center justify-content-center espaciado espaciado-lateral sombreado row row-cols-2 contenedor-principal-cabecera'>
      <div className='row col col-8 justify-content-md-start columna-cabecera1'>
        <div className="card-body col espaciado columna-cabecera-titulos">
            <p className="card-text text-center fs-1 text-decoration-underline fw-bold cabecera-titulo-principal">Matias Fochi</p>
            <p className="card-text text-center fs-3 fw-semibold cabecera-titulo-secundario">Desarrollador Front-End</p>
        </div>
        <div className='row col justify-content-center espaciado columna-cabecera-links'>
          <div className='col col-sm-auto icono-contenedor'>
            <a href='https://github.com/MatiasFochi' target='_blank' rel="noreferrer">
              <i className='bi bi-github icono'></i>  
            </a>  
          </div>
          <div className='col col-sm-auto icono-contenedor'>
            <a href='https://www.linkedin.com/in/matias-fochi/' target='_blank' rel="noreferrer">
              <i className='bi bi-linkedin icono'></i>  
            </a>
          </div>
          <div className='col col-sm-auto icono-contenedor'>
            <a href='https://www.instagram.com/matias_fochi?igsh=bXR6ejJhZ3NuNm84' target='_blank' rel="noreferrer">
              <i className='bi bi-instagram icono'></i> 
            </a>
          </div>
        </div>
      </div>      
      <div className="col col-4 align-items-center perfil espaciado espaciado-lateral" >
        <img src={FotoPerfil} className="perfil" alt="Foto de perfil" />
      </div>
    </div>
  );
}

export default Cabecera;

//Columna Titulo

/*

*/

//Columna Imagen

/*
      
*/

//Columna links-logos

/*


*/




/*
  <div className='container text-center row'>
      <div className='uno col-8'>
          <h1 className='nombre' >Matias Fochi</h1>
          <p className='subtitulo'>Desarrollador Front-End</p> 
      </div>
      <div className='uno col'>
          <img
          className='foto-perfil' 
          src = {FotoPerfil} 
          alt = 'Foto de perfil'
          width={120}/>
      </div>
  </div>
*/