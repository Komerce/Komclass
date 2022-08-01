/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography } from 'antd';
import SliderComponent from '../banner/SliderComponent';
import { CarouselReview } from 'constants/data';
import { DataReview } from 'constants/common';

const { Title } = Typography;
const Review = () => {
  const settingSlider = {
    dots: true,
    arrows: false,
    slidesToShow: 2,
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
    <section id="review" className="review">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}>
          <Row justify="center">
            <Title level={2}>Apa Kata Mereka?</Title>
          </Row>
          <Row justify="center">
            <Title level={2}>
              Para Alumni Kelas Yang Telah diselenggarakan Oleh Komclass
            </Title>
          </Row>
          <SliderComponent setting={settingSlider}>
            {CarouselReview.map((item: DataReview) => (
              <Row justify="center">
                <Col className='reviewcarousel' key={item.id} span={10}>
                  <img src={item.image} alt="" />
                  <div>
                    {item.name} - <span>{item.address}</span>
                  </div>
                  <div>{item.desc}</div>
                </Col>
              </Row>
            ))}
          </SliderComponent>
        </Col>
      </Row>
    </section>
  );
};

export default Review;
