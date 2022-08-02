import React from 'react';
import { Col, Row, Typography } from 'antd';
import WhatsAppOutlined from '@ant-design/icons/lib/icons/WhatsAppOutlined';

const { Title } = Typography;
const Price = () => {
  return (
    <section id="price" className="price">
      <Row className="title" justify="center">
        <Col span={24}>
          <Row justify="center">
            <Title level={2}>Tunggu apa lagi? Dapatkan Harga Spesial</Title>
          </Row>
          <Row className="content" justify="center">
            <Col xl={16} lg={18} md={20} sm={22} xs={24}>
              <Title level={3}>Rp. 3.000.000,-</Title>
              <Title level={2}>
                Hanya <span>Rp. 1.900.000,-</span>
              </Title>
              <div className="desc">Terbatas untuk 30 peserta</div>
              <div className="desc">
                Hubungi kami untuk melakukan pendaftaran
              </div>
              <button className="button">
                <a
                  href="https://wa.me/6282331292258"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppOutlined style={{ fontSize: '18px' }} />
                  <span>Daftar Sekarang</span>
                </a>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Price;
