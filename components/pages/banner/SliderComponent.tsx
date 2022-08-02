import Slider from 'react-slick';

const SliderComponent = ({ children, setting }) => {
  const settings = {
    ...setting,
    infinite: true,
    autoPlay: true,
    speed: 600,
    initialSlide: 0,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: () => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
