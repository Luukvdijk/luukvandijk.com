import CaseStudie from "./components/CaseStudie";
import Contact from "./components/Contact";
import FormerCustomers from "./components/FormerCustomers";
import Header from "./components/Header";
import Review from "./components/Review";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div>
      <Header />
      <CaseStudie />
      <Steps />
      <FormerCustomers />
      <Review />
      <Contact />
    </div>
  );
}
