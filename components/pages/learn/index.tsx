/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { DataPriceLeft, DataPriceRight } from 'constants/data';
import { DataPrice } from 'constants/common';
import { Roll, Bounce } from 'react-reveal';

const { Title } = Typography;
const Learn = () => {
  return (
    <section id="learn" className="learn">
      <Row className="title" justify="center">
        <Col xl={24} xxl={24}>
          <Roll bottom>
            <Title level={2}>Apa yang akan kamu pelajari di Kelas</Title>
          </Roll>
          <Bounce bottom>
            <Row justify="center">
              <Col
                className="card"
                xl={9}
                lg={10}
                md={10}
                sm={10}
                xs={24}
              >
                <Title level={3}>Hari ke - 1</Title>
                {DataPriceLeft.map((item: DataPrice) => (
                  <ul className="desc" key={item.id}>
                    <CheckCircleOutlined className="CheckCircleOutlined" />
                    {item.desc}
                  </ul>
                ))}
              </Col>
              <Col
                className="card"
                xl={9}
                lg={10}
                md={10}
                sm={10}
                xs={24}
              >
                <Title level={3}>Hari ke - 2</Title>
                {DataPriceRight.map((item: DataPrice) => (
                  <ul className="desc" key={item.id}>
                    <CheckCircleOutlined className="CheckCircleOutlined" />
                    {item.desc}
                  </ul>
                ))}
              </Col>
            </Row>
          </Bounce>
        </Col>
      </Row>
    </section>
  );
};

export default Learn;
