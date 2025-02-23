import Image from "next/image";
import './Whystyles.css'

export default function WhyChoose () {
    return (
        <>
       <section className="whychoose-container">
      <div className="whychoose-image-container">
        <div className="whychoose-image-placeholder"></div> 
      </div>

      <div className="whychoose-content">
        <h2 className="whychoose-heading">
          Why Choose <span className="whychoose-highlight">Gutcare</span> For
          Your Piles Treatments?
        </h2>
        <p className="whychoose-description">
          Lorem ipsum dolor sit amet consectetur. Magna tristique mi lectus. 
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <ul className="whychoose-features-list">
          <li>✔ All insurances accepted</li>
          <li>✔ 28 years experience</li>
          <li>✔ Laser treatment for Piles</li>
          <li>✔ Cure piles in 30 mins</li>
          <li>✔ Same day discharge</li>
          <li>✔ Piles treatment without surgery</li>
        </ul>

        <a href="/appointment" className="whychoose-button">
          Book an appointment
        </a>
      </div>
    </section>
        </>
    )
}