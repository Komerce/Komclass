import React from 'react'
import { Col, Row, Typography, List } from 'antd';
import { DataAdvertise } from 'constants/data';
import Fade from 'react-reveal/Fade';

const { Title } = Typography;
const Advertise = () => {
  return (
    <section id="advertise" className="advertise">
      <Fade left>
        <Row className="title" justify="center">
          <Col span={24}>
            <Row justify="space-evenly">
              <Title
                level={2}
              >
                Kamu baru memulai atau sudah menjalankan iklan cukup lama tapi
                mengalami kendala seperti ini?
              </Title>
            </Row>
            <Row justify="center">
              <Col
                xl={10}
                lg={11}
                md={11}
                sm={18}
                xs={24}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={DataAdvertise}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={item.avatar}
                        title={<div className="desc">{item.title}</div>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col
                xl={12}
                lg={12}
                md={13}
                sm={13}
                xs={24}
                >
                <img src="/images/hero-advertise.png" alt="hero-advertise" />
              </Col>
            </Row>
            <Row justify="center" className="last-row">
              <Title level={4}>
                Dan banyak permasalahan lainnya yang sering dialami para
                advertiser pemula?
              </Title>
            </Row>
          </Col>
        </Row>
      </Fade>
    </section>
  );
}

export default Advertise