import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./pages/User";
import Alert from "./components/alert/Alert";
import { GithubProvider } from "./context/github/GithubContext";
import Home from "./pages/Home";
import { AlertProvider } from "./context/alert/AlertContext";
import { NotFound } from "./pages/NotFound";
import About from "./pages/About";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto pb-12 px-3">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User/>}   />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
