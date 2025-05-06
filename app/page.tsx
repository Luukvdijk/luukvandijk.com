import CaseStudie from "./components/CaseStudie";
import Contact from "./components/Contact";
import FormerCustomers from "./components/FormerCustomers";
import Header from "./components/Header";
import Review from "./components/Review";
import ScrollableSection from "./components/ScrollableSection";
import Steps from "./components/Steps";
import { constructMetadata } from "./lib/metadata";

export const metadata = constructMetadata({
  title: "Webdesign, Development & Hosting | Luuk van Dijk",
  description:
    "Professionele websites op maat met focus op design, gebruiksvriendelijkheid en performance. Van concept tot livegang — inclusief hosting en onderhoud.",
  keywords:
    "webdesign, webdevelopment, hosting, Luuk van Dijk, website laten maken, frontend developer, UI UX design, maatwerk websites, WordPress alternatief, Next.js websites",
});

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
