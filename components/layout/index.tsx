import React from 'react';
import { Layout } from 'antd';
import Footers from 'components/footer';
import Header from 'components/header';

const { Content } = Layout;

const LayoutPage = (props: any) => {
  const { children }: any = props;

  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footers />
    </Layout>
  );
};

export default LayoutPage;
