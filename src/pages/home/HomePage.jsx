import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <HomePageProductCard />
            <Testimonial />
        </Layout>
    );
}

export default HomePage;
