import FotoPerfil from './FotoPerfil.jpeg';
//import '../HojasDeEstilo/Cabecera.css';

function Cabecera(props) {
  return(
    <div className='container'>
        <div className='row justify-content-md-center'>
            <div className='col col-lg-2'>
                <h1 className='nombre' >Matias Fochi</h1>
                <p className='subtitulo'>Desarrollador Front-End</p> 
            </div> 
            <div className='col col-lg-4'></div>
            <div className='col col-lg-2'>
                <img
                className='foto-perfil' 
                src = {FotoPerfil} 
                alt = 'Foto de perfil'
                width={120}/>
            </div>
        </div>
    </div>
  );
}

export default Cabecera;