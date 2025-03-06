import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <Slider {...settings}>
        <div>
          <img
            src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
            alt="Shanghai"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw2_zFJ1wAeEkc0YyaBeCzMnkUtWXTn6dhg&s"
            alt="Image 2"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg"
            alt="Beach View"
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
