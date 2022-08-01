/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography, Card } from 'antd';
import { DataMentorReviewMentor } from 'constants/data';
import { DataReviewMentor } from 'constants/common';

const { Title } = Typography;

const ReviewMentor = () => {
  return (
    <section id="ReviewMentor" className="ReviewMentor">
      <div className="site-card-wrapper">
        <Row>
          {DataMentorReviewMentor.map((item: DataReviewMentor) => (
            <Col xl={6} lg={6} md={6} sm={6} xs={6} span={6}>
              <Card key={item.id} bordered={true}>
                <Title level={2}>{item.name}</Title>
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
