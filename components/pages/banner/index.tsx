import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import { ListBanner } from 'constants/common';
import { DataBanner } from 'constants/data';
import Typography from 'antd/lib/typography'
import SliderComponent from './SliderComponent';
import MapsIcon from 'assets/MapsIcon';
import WhatsAppIcon from 'assets/WhatsAppIcon';
import { Button } from 'antd';

const { Title } = Typography;

const Banner = () => {
  const settingSlider = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: false,
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
      <SliderComponent setting={settingSlider}>
        {DataBanner.map((item: ListBanner) => (
          <Row key={item.id}>
            <img src={item.img} alt={item.alt} />
            <Row className="text">
              <Col span={24}>
                <Title level={1}>{item.title}</Title>
                <Title level={5}>{item.location}</Title>
                <Title level={5}>{item.time}</Title>
                <div>
                  <Button type="primary" shape="round" icon={<WhatsAppIcon />}>Daftar Sekarang</Button>
                  <span>Info lebih lanjut</span>
                </div>
              </Col>
            </Row>
          </Row>
        ))}
      </SliderComponent>
    </section >
  );
};

export default Banner;
