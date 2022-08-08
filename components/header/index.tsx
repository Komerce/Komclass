import React, { useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import Drawer from 'antd/lib/drawer';
import { MenuFoldOutlined } from '@ant-design/icons';
import LogoIcon from 'assets/LogoIcon';

const Header = () => {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a>
              Tiktok Ads
            </a>
          )
        },
        {
          key: '2',
          label: (
            <a 
            >
              IG & FB Ads
            </a>
          )
        },
        {
          key: '3',
          label: (
            <a
            >
              Google Ads
            </a>
          )
        }
      ]}
    />
  );

  return (
    <div className="header-container">
      <nav className="header-nav">
        <ul className="logo">
          <a href="/">
            <LogoIcon />
          </a>
        </ul>
        <ul className="menu">
          <li>
            <a href="#review" className="active">
              Mengapa Komclass
            </a>
          </li>
          <li>
            <Dropdown className="active" overlay={menu} placement="bottomLeft">
              <a>Kelas</a>
            </Dropdown>
          </li>
          <li>
            <a
              href="https://komerce.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="active"
            >
              Komerce
            </a>
          </li>
          <li>
            <a
              href="https://komerce.id/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="active"
            >
              Blog
            </a>
          </li>
          <Button size="large" className="contact-me">
            <a
              href="https://wa.me/+6282331292258?text=Hai%20Komclass%2C%20saya%20ingin%20mendaftar%20kelas%20Instagram%20%26%20Facebook%20Ads%3F%0ABoleh%20dibantu%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
          </Button>
        </ul>
        <MenuFoldOutlined className="sidenav" onClick={showDrawer} />
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={state}
        >
          <ul className="menu">
            <li>
              <a href="#review" className="active">
                Mengapa Komclass
              </a>
            </li>
            <li>
              <Dropdown
                className="active"
                overlay={menu}
                placement="bottomLeft"
              >
                <a>Kelas</a>
              </Dropdown>
            </li>
            <li>
              <a
                href="https://komerce.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="active"
              >
                Komerce
              </a>
            </li>
            <li>
              <a
                href="https://komerce.id/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="active"
              >
                Blog
              </a>
            </li>
            <Button size="large" className="contact-me">
              <a
                href="https://wa.me/+6282331292258?text=Hai%20Komclass%2C%20saya%20ingin%20mendaftar%20kelas%20Instagram%20%26%20Facebook%20Ads%3F%0ABoleh%20dibantu%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Kami
              </a>
            </Button>
          </ul>
        </Drawer>
      </nav>
    </div>
  );
};

export default Header;
