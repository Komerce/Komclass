/* eslint-disable react/jsx-key */
import React from 'react';
import { Col, Row, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { DataPriceLeft, DataPriceRight } from 'constants/data';
import { DataPrice } from 'constants/common';
import ChecklistIcon from 'assets/ChecklistICon';

const { Title } = Typography;
const Price = () => {
  return (
    <section id="learn" className="learn">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}>
          <Title level={2}>Apa yang akan kamu pelajari di Kelas</Title>
          <Row justify="center">
            <Col className="card" xl={9} lg={10} md={10} sm={12} xs={24}>
              <Title level={3}>Hari ke - 1</Title>
              {DataPriceLeft.map((item: DataPrice) => (
                <ul className="desc" key={item.id}>
                  <CheckCircleOutlined className="CheckCircleOutlined" />
                  {item.desc}
                </ul>
              ))}
            </Col>
            <Col className="card" xl={9} lg={10} md={10} sm={12} xs={24}>
              <Title level={3}>Hari ke - 2</Title>
              {DataPriceRight.map((item: DataPrice) => (
                <ul className="desc" key={item.id}>
                  <CheckCircleOutlined className="CheckCircleOutlined" />
                  {item.desc}
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
