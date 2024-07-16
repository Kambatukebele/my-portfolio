// React Rooter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//End Reacct Rooter
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ErrorComponent from "./pages/ErrorComponent";
function App() {
  return (
    <main className="font-figtree">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="articles" element={<Articles />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
