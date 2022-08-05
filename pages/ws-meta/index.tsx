import LayoutPage from 'components/layout';
import { Advertise, Banner, Hope, Learn, Mentor, Price, Review, Sponsor, Suitable } from 'components/pages';
import SEO from '../seo';

const WsMeta = () => (
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

export default WsMeta;
