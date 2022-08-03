import React from 'react';
import { Col, Row, Typography } from 'antd';
import { DataSuitable } from 'constants/data';
import { DataHope } from 'constants/common';

const { Title } = Typography;
const Suitable = () => {
  return (
    <section id="suitable" className="suitable">
      <Row className="title" justify="center">
        <Col xl={24} xxl={24}>
          <Row justify='center'>
            <Title level={2}>
              Siapa saja yang cocok mengikuti kelas kali ini ?
            </Title>
          </Row>
          <Row justify='center'>
            {DataSuitable.map((item: DataHope) => (
              <Col key={item.id} xl={7} lg={7} md={7} sm={24} xs={24}>
                <img src={item.image} alt="" />
                <p className='desc'>{item.desc}</p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Suitable;
