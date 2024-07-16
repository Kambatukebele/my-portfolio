// React Rooter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//End Reacct Rooter
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import ErrorComponent from "./pages/ErrorComponent";
function App() {
  return (
    <main className="font-figtree">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route
            path="articles/:slugId/:articleId"
            element={<SingleArticle />}
          />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
