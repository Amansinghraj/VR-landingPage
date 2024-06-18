
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"
import WorkflowSection from "./components/WorkflowSection"

function App() {


  return (
    <>
       <Navbar/>
       <div className="max-w-7xl mx-auto pt-20 px-6">
       <HeroSection/>
       <FeaturesSection/>
       <WorkflowSection /> 
       <Pricing/>
       <Testimonial/>
       <Footer/>
       </div>
    </>
  )
}

export default App
