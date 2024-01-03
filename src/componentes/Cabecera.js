import FotoPerfil from './FotoPerfil.jpeg';
import '../hojas-de-estilo/Cabecera.css';

function Cabecera(props) {
  return(
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
  );
}

export default Cabecera;