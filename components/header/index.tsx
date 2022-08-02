/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';
import Drawer from 'antd/lib/drawer';
import { MenuFoldOutlined } from '@ant-design/icons';
import Link from 'next/link';
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
            <a className='dropdown'
            >
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
          <Link href="/">
            <LogoIcon />
          </Link>
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
              rel="noreferrer"
              className="active"
            >
              Komerce
            </a>
          </li>
          <li>
            <a
              href="https://komerce.id/blog"
              target="_blank"
              rel="noreferrer"
              className="active"
            >
              Blog
            </a>
          </li>
        </ul>
        <Button size="large" className="contact-me">
          <a
            href="https://wa.me/6282331292258"
            target="_blank"
            rel="noreferrer"
          >
            Hubungi Kami
          </a>
        </Button>
        <MenuFoldOutlined className="sidenav" onClick={showDrawer} />
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={state}
        >
          {/* <NavMenu /> */}
        </Drawer>
      </nav>
    </div>
  );
};

export default Header;
