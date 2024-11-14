import CaseStudie from "./components/CaseStudie";
import FormerCustomers from "./components/FormerCustomers";
import Header from "./components/Header";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div>
      <Header />
      <CaseStudie />
      <Steps />
      <FormerCustomers />
    </div>
  );
}
