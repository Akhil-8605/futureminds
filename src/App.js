import "./App.css";
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";
import ActivitiesPage from "./Pages/ActivityPage";
import HomePage from "./Pages/Homepage";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
