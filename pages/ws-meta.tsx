import LayoutPage from 'components/layout';
import { Advertise, Banner, Hope, Learn, Mentor, Price, Review, Sponsor, Suitable } from 'components/pages';
import React from 'react';
import SEO from './seo';

const Home = () => (
  <LayoutPage>
    <SEO />
    <Banner />
    <Advertise />
    <Mentor />
    <Learn />
    <Hope />
    <Suitable />
    <Price />
    <Review />
    <Sponsor />
  </LayoutPage>
);

export default Home;
