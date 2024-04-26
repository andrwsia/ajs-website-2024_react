import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";

import ThreeJSPractice from "./components/threejs/ThreeJSPractice";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <ThreeJSPractice /> */}
      <Solutions />
      <Work />
      <About />
      <Footer />
    </>
  )
}

export default App