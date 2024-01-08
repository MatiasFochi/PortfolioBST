import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

function Carrousel(){
  return(
    <div className='container-md espaciado sombreado'>
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
        removeArrowOnDeviceType={["tablet", "mobile","desktop", "superLargeDesktop"]}
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