import Image from "next/image";
import Faqs from "./components/FAQs/faqs";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyChoose from './components/whychoose/Whychoose';
import Treatments from "./components/Treamemts/Treatments";
import Testimonials from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
   <>
     <Hero />
     <About />
     <WhyChoose />
     <Treatments />
     <Testimonials />
     <Faqs />
    
      </>
   
    
  );
}
