import LayoutPage from 'components/layout';
import { Advertise, Banner, Learn, Mentor, Price, Review, Sponsor } from 'components/pages';
import SEO from './seo';

const Home = () => (
  <LayoutPage>
    <SEO />
    <Banner />
    <Advertise />
    <Mentor />
    <Learn />
    <Price />
    <Review />
    <Sponsor />
  </LayoutPage>
);

export default Home;
