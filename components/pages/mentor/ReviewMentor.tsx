/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography, Card } from 'antd';
import { DataMentorReviewMentor } from 'constants/data';
import { DataReviewMentor } from 'constants/common';
import SliderComponent from '../banner/SliderComponent';

const { Title } = Typography;

const ReviewMentor = () => {
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
    <section id="ReviewMentor" className="ReviewMentor">
      <div className="site-card-wrapper">
        <Title level={2}>Review Mentor</Title>
        <Row>
        {DataMentorReviewMentor.map((item: DataReviewMentor) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12} span={12}>
              <Card className='card' key={item.id} bordered={true}>
                <Title level={3}>{item.name}</Title>
                <img src="./images/mentor/Star-group.svg" alt="star group" />
                <div>{item.desc}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default ReviewMentor;
