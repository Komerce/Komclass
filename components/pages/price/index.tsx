import React from 'react';
import { Col, Row, Typography } from 'antd';
import WhatsAppOutlined from '@ant-design/icons/lib/icons/WhatsAppOutlined';
import LightSpeed from 'react-reveal/LightSpeed';

const { Title } = Typography;
const Price = () => {
  return (
    <section id="price" className="price">
      <LightSpeed left>
        <Row className="title" justify="center">
          <Col span={24}>
            <Row justify="center">
              <Title level={2}>
                Tunggu apa lagi? Dapatkan Harga Spesial
              </Title>
            </Row>
            <Row
              className="content"
              justify="center"
            >
              <Col xl={16} lg={18} md={20} sm={22} xs={24}>
                <Title level={3}>Rp 3.000.000,-</Title>
                <Title level={2}>
                  Hanya <span>Rp 1.900.000,-</span>
                </Title>
                <div className="desc">Terbatas untuk 30 peserta</div>
                <div className="desc">
                  Hubungi kami untuk melakukan pendaftaran
                </div>
                <button className="button">
                  <a
                    href="https://wa.me/+6282331292258?text=Hai%20Komclass%2C%20saya%20ingin%20mendaftar%20kelas%20Instagram%20%26%20Facebook%20Ads%3F%0ABoleh%20dibantu%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppOutlined style={{ fontSize: '18px' }} />
                    <span>Daftar Sekarang</span>
                  </a>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </LightSpeed>
    </section>
  );
};

export default Price;
