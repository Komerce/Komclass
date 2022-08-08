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
    autoplaySpeed: 4000,
    autoplay: true,
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
          slidesToScroll: 1,
          arrow: false,
        }
      }
    ]
  };
  return (
    <section id="review" className="review">
      <Row
        className="title"
        justify="center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="2000"
      >
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
              <Row className="slider-review" justify="center">
                <Col
                  className="reviewcarousel"
                  key={item.id}
                  xl={18}
                  lg={18}
                  md={19}
                  sm={20}
                  xs={20}
                >
                  <img src={item.image} alt="" />
                  <Title className="title-content" level={4}>
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
