import React from 'react';
import { Col, Row, Typography } from 'antd';
import { DataSuitable } from 'constants/data';
import { DataHope } from 'constants/common';

const { Title } = Typography;
const Suitable = () => {
  return (
    <section id="suitable" className="suitable">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}></Col>
        <Title level={2}>
          Siapa saja yang cocok mengikuti kelas kali ini ?
        </Title>
        <Row>
          {DataSuitable.map((item: DataHope) => (
          <Col key={item.id} xl={8} lg={8} md={8} sm={8} xs={24}>
            <img src={item.image} alt={item.alt} />
            <p>{item.desc}</p>
          </Col>
          ))}
        </Row>
      </Row>
    </section>
  );
};

export default Suitable;
