import { Carousel } from "react-bootstrap";
import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";
import { Link } from "react-router-dom";

const CarouselSliders = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Link  to="/category/accesorios">
          <img className="w-100" src={slider1} alt="Primer slider del carousel" />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item >
        <Link >
          <img className="w-100" src={slider2} alt="Segundo slider del carousel" />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item>
        <Link >
          <img className="w-100" src={slider3} alt="Tercer slider del carousel" />
        </Link>
        
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSliders;
