import React from 'react';
import { Col, Row, Typography, List } from 'antd';
import { DataMentorAchievement, DataMentorExperience } from 'constants/data';
import ReviewMentor from './ReviewMentor';

const { Title } = Typography;
const Mentor = () => {
  return (
    <section id="mentor" className="mentor">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}>
          <Title level={2}>
            Semua permasalahan performa iklanmu akan terjawab di kelas Instagram
            dan Facebook Ads dari Komclass!
          </Title>
          <span>Komclass berkolaborasi dengan Mentor expert dibidangnya.</span>
          <Row>
            <Col xl={10} md={10} sm={24} xs={24}>
              <img src="./images/mentor/Profile-Fahmi-Audtiya.png" alt="" />
            </Col>
            <Col xl={14} md={10} sm={24} xs={24}>
              <Title level={3}>Fahmi Auditya</Title>
              <Title level={4}>Digital Marketing Expert</Title>
              <p>
                Fahmi Auditya adalah seorang Digital Marketing Expert yang sudah
                berkecimpung di bisnis online sejak 2016. Banyak strategi yang
                sudah dikembangkan untuk meningkatkan penjualan dengan berbagai
                jenis produk dan tantangan di dunia digital. Setelah sukses di
                bisnis online nya, Fahmi Auditya memiliki keinginan kuat untuk
                mengajarkan ilmu dan pengalamannya kepada orang lain agar bisa
                sama-sama berkembang dan menaklukan pasar online di Indonesia.
              </p>
              <Title level={4}>Pengalaman</Title>
              <List
              itemLayout="horizontal"
              dataSource={DataMentorExperience}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<img src={item.img} alt={item.name} />}
                    title={<div>{item.title}</div>}
                    description={<div>{item.desc}</div>}
                  />
                </List.Item>
              )}
              />
              <Title level={4}>Achievement</Title>
              <List
              itemLayout="horizontal"
              dataSource={DataMentorAchievement}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    description={<div>{item.desc}</div>}
                  />
                </List.Item>
              )}
              />
            </Col>
          </Row>
          <Row>
            <ReviewMentor />
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Mentor;
