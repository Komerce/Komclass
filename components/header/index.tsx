/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Drawer from 'antd/lib/drawer';
import Button from 'antd/lib/button';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import LogoIcon from 'assets/LogoIcon';

interface DataMenu {
  label: string;
  path: string;
  data: any;
}

const Header = () => {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  const menu = [
    {
      label: 'Mengapa Komclass',
      path: 'banner',
    },
    {
      label: 'Kelas',
      path: 'class',
    },
    {
      label: 'Komerce',
      path: 'book',
    },
    {
      label: 'Blog',
      path: 'book',
    },
  ];

  const NavMenu = () => (
    <>
      {menu.map((e: DataMenu, i: number) => (
        <span key={i}>
          <li>
            <Scroll
              activeClass="active"
              to={e.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a className="active">
                {e.label}
              </a>
            </Scroll>
          </li>
        </span>
      ))
      }
      <Button size='large' className='contact-me'>Hubungi Kami</Button>
    </>
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
          <NavMenu />
        </ul>
        <MenuFoldOutlined className="sidenav" onClick={showDrawer} />
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={state}
        >
          <NavMenu />
        </Drawer>
      </nav>
    </div>
  );
};

export default Header;
