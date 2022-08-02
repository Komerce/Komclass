import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import { ListBanner } from 'constants/common';
import { DataBanner } from 'constants/data';
import Typography from 'antd/lib/typography';
import SliderComponent from './SliderComponent';
import WhatsAppOutlined from '@ant-design/icons/lib/icons/WhatsAppOutlined';

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
            <Col xl={24} xxl={24}>
            <img src={item.img} alt={item.alt} />
            <Row className="text">
              <Col xxl={24} xl={17} lg={17} md={17} sm={17} xs={24}>
                <Title level={1}>{item.title}</Title>
                <Title className="content" level={5}>
                  <img className="icon" src={item.iconLocation} alt="" />
                  Lokasi :{item.location}
                </Title>
                <Title level={5}>
                  <img className="icon" src={item.iconClock} alt="" />
                  Waktu :{item.time}
                </Title>
                <div>
                  <button className="button">
                    <a href="https://wa.me/6282331292258" target="_blank" rel="noreferrer">
                      <WhatsAppOutlined style={{ fontSize: '18px' }} />
                      <span>Daftar Sekarang</span>
                    </a>
                  </button>
                  <a href="#advertise">
                  <span className="info">Info lebih lanjut</span>
                  </a>
                </div>
              </Col>
            </Row>
            </Col>
          </Row>
        ))}
      </SliderComponent>
    </section>
  );
};

export default Banner;
