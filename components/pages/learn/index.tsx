/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography } from 'antd';
import { DataPriceLeft, DataPriceRight } from 'constants/data';
import { DataPrice } from 'constants/common';

const { Title } = Typography;
const Price = () => {
  return (
    <section id="price" className="price">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}>
          <Title level={2}>Apa yang akan kamu pelajari di Kelas</Title>
          <Row>
            <Col xl={10} lg={10} md={10} sm={12} xs={24}>
            <Title level={3}>Hari ke - 1</Title>
              {DataPriceLeft.map((item: DataPrice) => (
                <ul key={item.id}>
                  <li>{item.desc}</li>
                </ul>
              ))}
            </Col>
            <Col xl={10} lg={10} md={10} sm={12} xs={24}>
            <Title level={3}>Hari ke - 2</Title>
              {DataPriceRight.map((item: DataPrice) => (
                <ul key={item.id}>
                  <li>{item.desc}</li>
                </ul>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Price;
