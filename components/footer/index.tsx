import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Typography from 'antd/lib/typography'
import LogoKomerce from 'assets/LogoKomerce';
import LocationIcon from 'assets/LocationIcon';
import { DataFooter, DataSocmed, DataSponsor } from 'constants/data';
import WhatsAppIcon from 'assets/WhatsAppIcon';
import EmailIcon from 'assets/EmailIcon';
import { ListIcon, ListSponsor, MenuList } from 'constants/common';
import Card from 'antd/lib/card'

const { Footer } = Layout;
const { Title } = Typography;

const Footers = () => {
  return (
    <Footer>
      <LogoKomerce />
      <Row gutter={[64, 64]}>
        <Col xxl={7} xl={7} lg={24} md={12} sm={24} xs={24}>
          <Row className='footer-address'>
            <LocationIcon />
            <Title className='address' level={5}>{DataFooter.address}</Title>
          </Row>
          <Row className='footer-address'>
            <WhatsAppIcon />
            <Title level={5}>{DataFooter.phone_number}</Title>
          </Row>
          <Row className='footer-address'>
            <EmailIcon />
            <Title level={5}>{DataFooter.email}</Title>
          </Row>
          <Row className='footer-address' justify='space-between'>
            <Title level={5} underline>{DataFooter.toc}</Title>
            <Title level={5} underline style={{ marginTop: 0 }}>{DataFooter.privacy}</Title>
          </Row>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12} className="footer-menu">
          <Title level={5}>Company</Title>
          {DataFooter.menu.map((item: MenuList) => (
            <Title className='footer-menu-text' level={5} key={item.id}>{item.name}</Title>
          ))}
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12} className="footer-menu">
          <Title level={5}>Kelas</Title>
          {DataFooter.class.map((item: MenuList) => (
            <Title className='footer-menu-text' level={5} key={item.id}>{item.name}</Title>
          ))}
        </Col>
        <Col xxl={5} xl={5} lg={5} md={12} sm={6} xs={24} className="footer-menu">
          <Title level={5}>Find Out Our Latest News</Title>
          <Row>
            {DataSocmed.map((item: ListIcon) => (
              <div key={item.id}>{item.component}</div>
            ))}
          </Row>
          <Title level={5}>Find Out Our Latest News</Title>
          <Card>
            <Row justify='center'>
              {DataSponsor.map((item: ListSponsor) => (
                <Col span={6} key={item.id} >
                  <img src={item.img} alt={item.alt} />
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
      <div className='copyright'>
        <Title level={5}>COPYRIGHT © {new Date().getFullYear()} Komerce.All Rights Reserved</Title>
        <Title level={5} style={{ marginTop: 0 }}>{DataFooter.trademark}</Title>
      </div>
    </Footer>
  );
};

export default Footers;
