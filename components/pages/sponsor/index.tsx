/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { DataUmkm } from 'constants/data';
import { ItemSponsor } from 'constants/common';

const { Title } = Typography;
const Sponsor = () => {
  return (
    <section id="sponsor" className="sponsor">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}>
          <Row className='content' justify="center">
            <Title level={2}>
              Kelas Intagram dan Facebook Ads ini diselanggarakan oleh
              <span>
                <img src="./images/LogoKomerceRed.svg" alt="logo komerce" />
              </span>
            </Title>
            <Row justify="center">
              <p>
                Komerce berkomitmen membantu proses digitalisasi UMKM di
                Indonesia
              </p>
              <p>
                Ribuan Pebisnis Online di Indonesia telah mempercayakan
                pengembangan dan peningkatkan performa bisnisnya kepada Komerce
              </p>
            </Row>
          </Row>
          <Row justify='center'>
            {DataUmkm.map((item: ItemSponsor) => (
              <Col span={4} className="sponsortable">
                <Card key={item.id}>
                  <img src={item.image} alt="" />
                </Card>
              </Col>
            ))}
          </Row>
          <Row justify="center">
            <Title level={4}>1000+ Partner lainnya</Title>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Sponsor;
