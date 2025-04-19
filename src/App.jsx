import HeaderMarquee from "./components/HeaderMarquee";
import "../styles/index.scss";
import HeaderNavBar from "./components/HeaderNavBar";
import MarqueeAndAboutSection from "./components/MarqueeAndAboutSection";
import ChaiTypesSection from "./components/ChaiTypesSection";
import HeroSection from "./components/HeroSection";
import RealPremiumTeaSection from "./components/RealPremiumTeaSection";
import WatchHowUttamTeaSection from "./components/WatchHowUttamTeaSection";
import MeetTheManSection from "./components/MeetTheManSection";
import KnowYourTeasSection from "./components/KnowYourTeasSection";
import BestSellingProduct from "./components/BestSellingProduct";
import InstagramSection from "./components/InstagramSection";
import AssamTeaSection from "./components/AssamTeaSection";
import FAQSection from "./components/FAQSection";
import OtherBenefitsSection from "./components/OtherBenefitsSection";
import ReviewSection from "./components/ReviewSection";
function App() {
  return (
    <>
      <HeaderMarquee />
      <HeaderNavBar />
      <HeroSection />
      <MarqueeAndAboutSection />
      <ChaiTypesSection />
      <RealPremiumTeaSection />
      <WatchHowUttamTeaSection />
      <MeetTheManSection />
      <ReviewSection />
      <BestSellingProduct />
      <InstagramSection />
      <KnowYourTeasSection />
      <AssamTeaSection />
      <FAQSection />
      <OtherBenefitsSection />
    </>
  );
}

export default App;
