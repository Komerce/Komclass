import React from 'react';
import { Col, Row, Typography, Card } from 'antd';
import { DataMentorReviewMentor } from 'constants/data';
import { DataReviewMentor } from 'constants/common';
import SliderMentor from './SliderMentor';

const { Title } = Typography;

const ReviewMentor = () => {
  const settingSlider = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
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
    <section
      data-aos="fade-left"
      data-aos-duration="3000"
      id="ReviewMentor"
      className="ReviewMentor"
    >
      <div className="site-card-wrapper">
        <Title level={2}>Review Mentor</Title>
        <SliderMentor setting={settingSlider}>
          {DataMentorReviewMentor.map((item: DataReviewMentor) => (
            <Card key={item.id} className="card" bordered={true}>
              <Title level={3}>{item.name}</Title>
              <img src="./images/mentor/Star-group.svg" alt="star group" />
              <div className="desc">{item.desc}</div>
            </Card>
          ))}
        </SliderMentor>
      </div>
    </section>
  );
};
export default ReviewMentor;
