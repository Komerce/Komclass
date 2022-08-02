import React from 'react';
import { Col, List, Row, Typography } from 'antd';
import { DataHopeLeft, DataHopeRight } from 'constants/data';

const { Title } = Typography;
const Hope = () => {
  return (
    <section id="hope" className="hope">
      <Row className="title" justify="center">
        <Col xl={24} xxl={24}>
          <Row justify="center">
            <Col xl={16} lg={16} md={20} sm={24} xs={24}>
              <Title level={2}>
                Harapan mengikuti kelas periklanan Instagram dan Facebook dari
                Komclass
              </Title>
            </Col>
          </Row>
          <Row justify='center'>
            <Col xl={8} lg={10} md={10} sm={12} xs={24}>
              <List
                itemLayout="horizontal"
                dataSource={DataHopeLeft}
                renderItem={item => (
                  <List.Item className="desc">
                    <List.Item.Meta
                      avatar={item.image}
                      title={<div className='content'>{item.desc}</div>}
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col xl={8} lg={10} md={10} sm={12} xs={24}>
              <List
                itemLayout="horizontal"
                dataSource={DataHopeRight}
                renderItem={item => (
                  <List.Item className="desc">
                    <List.Item.Meta
                      avatar={item.image}
                      title={<div className='content'>{item.desc}</div>}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Hope;
