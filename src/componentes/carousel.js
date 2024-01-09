import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../hojas-de-estilo/carousel.css';
import Bootstrap from '../logos/bootstrap.png';
import Css from '../logos/css.png';
import Figma from '../logos/figma.png';
import Html from '../logos/html.png';
import Js from '../logos/js.png';
import Npm from '../logos/npm.png';
import react from '../logos/React.png';
import Visual from '../logos/visual studio code.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  desktopMini: {
    breakpoint: { max: 1024, min: 840 },
    items: 5
  },
  tabletBig: {
    breakpoint: { max: 840, min: 610 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 610, min: 411 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 411, min: 0 },
    items: 2
  }
};

function Carrousel(){
  return(
    <div className='container container-md espaciado espaciado-lateral sombreado contenedor-principal-carousel'>
      <Carousel  
        className='carrousell-app'
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        //customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "tabletBig" , "desktopMini", "desktop", "superLargeDesktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        <div>
          <img src={Bootstrap} style={{height: 100 + "px"}} alt="Bootstrap logo" /> 
        </div>
        <div>
          <img src={Html} style={{height: 100 + "px"}} alt="Html logo"/>
        </div>
        <div>
          <img src={Css} style={{height: 100 + "px"}} alt="Css logo"/>
        </div>
        <div>
          <img src={Js} style={{height: 100 + "px"}} alt="Js logo"/>
        </div>
        <div>
          <img src={Npm} style={{height: 100 + "px"}} alt="Npm logo"/>
        </div>
        <div>
          <img src={react} style={{height: 100 + "px"}} alt="react logo"/>
        </div>
        <div>
          <img src={Visual} style={{height: 100 + "px"}} alt="Visual studio code logo"/>
        </div>
        <div>
          <img src={Figma} style={{height: 100 + "px"}} alt="Figma logo"/>
        </div>
      </Carousel>
    </div>
  );
}

export default Carrousel;