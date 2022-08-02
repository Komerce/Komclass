import React from 'react';
import { Col, Row, Typography, Card } from 'antd';
import { DataMentorReviewMentor } from 'constants/data';
import { DataReviewMentor } from 'constants/common';

const { Title } = Typography;

const ReviewMentor = () => {
  
  return (
    <section id="ReviewMentor" className="ReviewMentor">
      <div className="site-card-wrapper">
        <Title level={2}>Review Mentor</Title>
        <Row>
        {DataMentorReviewMentor.map((item: DataReviewMentor) => (
            <Col xl={6} lg={6} md={6} sm={12} xs={12} span={12} key={item.id}>
              <Card className='card' key={item.id} bordered={true}>
                <Title level={3}>{item.name}</Title>
                <img src="./images/mentor/Star-group.svg" alt="star group" />
                <div className="desc">{item.desc}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default ReviewMentor;
