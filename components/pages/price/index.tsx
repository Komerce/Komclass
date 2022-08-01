import React from 'react';
import { Col, Row, Typography, List } from 'antd';
import WhatsAppIcon from 'assets/WhatsAppIcon';

const { Title } = Typography;
const Price = () => {
  return (
    <section id="price" className="price">
      <Row className="title" justify="center">
        <Col xl={24} xxl={18}>
          <Title level={2}>Tunggu apa lagi? Dapatkan Harga Spesial</Title>
          <Row>
            <Col xl={16} lg={18} md={20} sm={22} xs={24}>
              <Title level={3}>Rp. 3.000.000,-</Title>
              <Title level={2}>Hanya Rp. 1.900.000,-</Title>
              <div>Terbatas untuk 30 peserta</div>
              <div>Hubungi kami untuk melakukan pendaftaran</div>
              <button>
                <WhatsAppIcon />
                Whatsapp
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Price;
