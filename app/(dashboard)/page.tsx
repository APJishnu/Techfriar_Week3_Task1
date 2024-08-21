import HeroSection from "../../components/Hero/HeroSection";
import Carousel from "@/components/Carousel/Carousel";
import Cars from '../../components/Cars/Cars'; 
import Subscription from "@/components/Subscription/Subscription";
import Guildlines from "@/components/Guildlines/Guildlines";
import Location from "@/components/Location/Location";
import Faq from "@/components/Faq/Faq";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Carousel />
      <Cars />
      <Subscription/>
      <Guildlines/>
      <Location/>
      <Faq/>
      
    </>
  );
};

export default Home;
