import FotoPerfil from '../Imagenes/FotoPerfil.jpeg';
import '../hojas-de-estilo/Cabecera.css';

function Cabecera(props) {
  return(
    <div className='container-sm align-items-center cabecera-contenedor'>
      <div className="card-body" style={{width: 520 + "px"}}>
          <p className="card-text text-center fs-1">Matias Fochi</p>
          <p className="card-text text-center fs-3">Desarrollador Front-End</p>
      </div>
      <div className="card align-items-center " style={{width: 150 + "px", height: 150 + "px"}}>
        <img src={FotoPerfil} className="card-img-top" alt="Foto de perfil" style={{width: 150 + "px",height: 150 + "px"}} />
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