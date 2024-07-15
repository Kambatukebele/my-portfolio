// React Rooter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//End Reacct Rooter
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
