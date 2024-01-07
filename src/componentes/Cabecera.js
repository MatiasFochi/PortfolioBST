import FotoPerfil from '../Imagenes/FotoPerfil.jpeg';
import '../hojas-de-estilo/Cabecera.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Cabecera(props) {
  return(
    <div className='container-md align-items-center cabecera-contenedor espacio sombreado row row-cols-2'>
      <div className='row col-12 justify-content-md-start'>
        <div className="card-body col-8 espacio">
            <p className="card-text text-center fs-1 text-decoration-underline fw-bold">Matias Fochi</p>
            <p className="card-text text-center fs-3 fw-semibold">Desarrollador Front-End</p>
        </div>
        <div className="card col col-4 align-items-center perfil espacio espacio-lateral perfil-contenedor" >
          <img src={FotoPerfil} className="perfil" alt="Foto de perfil" />
        </div>
      </div>
      <div className='row col-12 justify-content-md-start espacio'>
        <div className=' col col-md-auto'></div>
        <div className='col col-1'>
         <a href='https://github.com/MatiasFochi' target='_blank' rel="noreferrer" className="bi bi-github"></a>  
        </div>
        <div className='col col-1'>
          <a href='https://www.linkedin.com/in/matias-fochi/' target='_blank' rel="noreferrer" className="bi bi-linkedin"></a>
        </div>
        <div className='col col-1'>
          <a href='https://www.instagram.com/matias_fochi?igsh=bXR6ejJhZ3NuNm84' target='_blank' rel="noreferrer" className="bi bi-instagram"></a>
        </div>
        <div className='col col-md-auto'></div>
      </div>
    </div>
  );
}

export default Cabecera;

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