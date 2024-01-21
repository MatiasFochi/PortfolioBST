import FotoPerfil from '../Imagenes/FotoPerfil.jpeg';
import '../hojas-de-estilo/Cabecera.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import LogoMF from '../logos/LogoPersonalBlanco2.png';

function Cabecera(props) {
  return(
    <div className='row row-cols-3 justify-content-around align-items-center espaciado contenedor-principal-cabecera'>  {/* Div principal (3 columnas, 1 fila) */}
      <div className="col col-3 logo-cabecera-contenedor" >                     {/* 1er columna */}
        <img src={LogoMF} className="logo-cabecera" alt="Logo MF" />
      </div>
      <div className='col-6 row row-cols-1 justify-content-center align-items-between contenedor-texto-cabecera'>            {/* 2da columna (3 filas) */}
        <div className='col-12 contenedor-titulo'>                                                                             {/* 1ra fila */}
          <h2 className='text-center fw-bold cabecera-titulo-principal'>Matias Fochi</h2>
        </div>
        <div className='col-12 contenedor-subtitulo'>                                                                             {/* 1ra fila */}
          <h4 className='text-center  fw-semibold cabecera-titulo-secundario'>Desarrollador Front-End</h4>  {/* 2da fila */}
        </div>
        <div className='col-12 row row-cols-3 justify-content-evenly iconos-contenedor-cabecera'>
          <div className='col-2 icono-contenedor'>
            <a href='https://github.com/MatiasFochi' target='_blank' rel="noreferrer">
              <i className='bi bi-github icono'></i>  
            </a>  
          </div>
          <div className='col-2 icono-contenedor'>
            <a href='https://www.linkedin.com/in/matias-fochi/' target='_blank' rel="noreferrer">
              <i className='bi bi-linkedin icono'></i>  
            </a>
          </div>
          <div className='col-2 icono-contenedor'>
            <a href='https://www.instagram.com/matias_fochi?igsh=bXR6ejJhZ3NuNm84' target='_blank' rel="noreferrer">
              <i className='bi bi-instagram icono'></i> 
            </a>
          </div>
        </div>
      </div>
      <div className="col col-3 perfil-cabecera-contenedor" >                   {/* 3er columna */}
        <img src={FotoPerfil} className="perfil" alt="Foto de perfil" />
      </div>
    </div>
  );
}

export default Cabecera;

/*

1er columna



2da columna

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


3ra columna

      <div className="col col-4 perfil espaciado espaciado-lateral" >
        <img src={FotoPerfil} className="perfil" alt="Foto de perfil" />
      </div>

*/