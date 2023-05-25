import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img className="rounded-md" src={img1} alt="Img1" />
        </div>
        <div>
          <img className="rounded-md" src={img2} alt="Img2" />
        </div>
        <div>
          <img className="rounded-md" src={img3} alt="Img3" />
        </div>
        <div>
          <img className="rounded-md" src={img4} alt="Img4" />
        </div>
        <div>
          <img className="rounded-md" src={img5} alt="Img5" />
        </div>
        <div>
          <img className="rounded-md" src={img6} alt="Img6" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
