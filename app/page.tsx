import CaseStudie from "./components/CaseStudie";
import Contact from "./components/Contact";
import FormerCustomers from "./components/FormerCustomers";
import Header from "./components/Header";
import Review from "./components/Review";
import ScrollableSection from "./components/ScrollableSection";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollableSection id="stappen">
        <Steps />
      </ScrollableSection>
      <ScrollableSection id="stappencase-studie">
        <CaseStudie />
      </ScrollableSection>
      <ScrollableSection id="reviews">
        <Review />
      </ScrollableSection>
      <ScrollableSection id="klanten">
        <FormerCustomers />
      </ScrollableSection>
      <ScrollableSection id="contact">
        <Contact />
      </ScrollableSection>
    </>
  );
}
