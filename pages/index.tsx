import Banner from 'components/pages/banner';
import LayoutPage from 'components/layout';
import SEO from './seo';

const Home = () => {
  

  return (
    <LayoutPage>
      <SEO />
      <Banner />
    </LayoutPage>
  );
};

export default Home;
