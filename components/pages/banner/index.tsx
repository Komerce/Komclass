import { Col, Row } from 'antd';

const Banner = () => {
  const settingSlider = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="banner" className="banner">
      <Row justify="center">
        <Col xl={24} xxl={18}>
          <img src="/images/placeholderbanner.png" alt="Landing Page" />
          <div className="text">
            <strong>SELAMAT DATANG</strong>
            <br />
            DILAYANAN PERPUSTAKAAN DIGITAL{' '}
            <span>"Galo"</span>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
