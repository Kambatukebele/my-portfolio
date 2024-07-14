import Header from "./components/HeroNavigation/Header";
import Services from "./components/services/Services";
import Problem from "./components/problem/Problem";
import Solutions from "./components/solutions/Solutions";
import Testimonials from "./components/testimonial.jsx/Testimonials";
import Portfolios from "./components/portfolios/Portfolios";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import CallToAction from "./components/callToAction/CallToAction";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <main className="font-figtree">
      <Header />
      <Problem />
      <Solutions />
      <Services />
      <Portfolios />
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      <CallToAction />
      <Footer />
    </main>
  );
}
export default App;
