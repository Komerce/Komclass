/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography } from 'antd';
import SliderReview from './SliderReview';
import { CarouselReview } from 'constants/data';
import { DataReview } from 'constants/common';

const { Title } = Typography;
const Review = () => {
  const settingSlider = {
    arrow: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplaySpeed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
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
        <Col span={24}>
          <Row justify="center">
            <Title level={2}>Apa Kata Mereka?</Title>
          </Row>
          <Row justify="center">
            <Title level={2}>
              Para Alumni Kelas Yang Telah diselenggarakan Oleh Komclass
            </Title>
          </Row>
          <SliderReview setting={settingSlider}>
            {CarouselReview.map((item: DataReview) => (
              <Row className="slider-review" justify="center" key={item.id}>
                <Col className="reviewcarousel" span={20}>
                  <img src={item.image} alt="" />
                  <Title className="title" level={4}>
                    {item.name} - {item.address}
                  </Title>
                  <div className="desc">"{item.desc}"</div>
                </Col>
              </Row>
            ))}
          </SliderReview>
        </Col>
      </Row>
    </section>
  );
};

export default Review;
