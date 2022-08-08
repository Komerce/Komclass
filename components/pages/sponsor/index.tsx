/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { DataUmkm } from 'constants/data';
import { ItemSponsor } from 'constants/common';
import Zoom from 'react-reveal/Zoom';

const { Title } = Typography;
const Sponsor = () => {
  return (
    <section id="sponsor" className="sponsor">
      <Zoom bottom cascade>
        <Row className="title" justify="center">
          <Col span={24}>
            <Row className="content" justify="center">
              <Row
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyItems: 'center',
                  marginBottom: '10px'
                }}
              >
                <Title
                  style={{
                    margin: 0
                  }}
                  level={2}
                >
                  Kelas Intagram dan Facebook Ads ini diselanggarakan oleh
                </Title>
                <span>
                  <img src="./images/LogoKomerceRed.svg" alt="logo komerce" />
                </span>
              </Row>
              <Row justify="center">
                <p>
                  Komerce berkomitmen membantu proses digitalisasi UMKM di
                  Indonesia
                </p>
                <p>
                  Ribuan Pebisnis Online di Indonesia telah mempercayakan
                  pengembangan dan peningkatkan performa bisnisnya kepada
                  Komerce
                </p>
              </Row>
            </Row>
            <Row justify="center">
              {DataUmkm.map((item: ItemSponsor) => (
                <Col
                  className="sponsortable"
                  xxl={4}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={8}
                  xs={10}
                >
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
      </Zoom>
    </section>
  );
};

export default Sponsor;
