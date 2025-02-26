"use client";
import Image from "next/image";
import { useRef } from "react";
import './happyc.css';

export default function Happy () {

   
const reviews = [
    {
      name: "Ganesh",
      image: "/images/ellipse.png",
      text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
    },
    {
      name: "Rahul",
      image: "/images/ellipse.png",
      text: "Dynamically re-engineer impactful solutions without collaborative infrastructures. Enthusiastically actualize extensible relationships before distinctive imperatives."
    },
    {
      name: "Anjali",
      image: "/images/ellipse.png",
      text: "Competently fabricate virtual methods of empowerment through focused models. Uniquely deliver high-quality methodologies rather than cross-media initiatives."
    },
    {
      name: "Priya",
      image: "/images/ellipse.png",
      text: "Efficiently fabricate open-source metrics for leveraged catalysts for change. Objectively deliver professional infrastructures before standardized channels."
    },
    {
      name: "Vikram",
      image: "/images/ellipse.png",
      text: "Appropriately benchmark resource maximizing growth strategies for innovative solutions. Efficiently strategize enabled networks before 24/7 best practices."
    },
    {
        name: "Vikram",
        image: "/images/ellipse.png",
        text: "Appropriately benchmark resource maximizing growth strategies for innovative solutions. Efficiently strategize enabled networks before 24/7 best practices."
      },
      {
        name: "Vikram",
        image: "/images/ellipse.png",
        text: "Appropriately benchmark resource maximizing growth strategies for innovative solutions. Efficiently strategize enabled networks before 24/7 best practices."
      },
      {
        name: "Vikram",
        image: "/images/ellipse.png",
        text: "Appropriately benchmark resource maximizing growth strategies for innovative solutions. Efficiently strategize enabled networks before 24/7 best practices."
      },
      {
        name: "Vikram",
        image: "/images/ellipse.png",
        text: "Appropriately benchmark resource maximizing growth strategies for innovative solutions. Efficiently strategize enabled networks before 24/7 best practices."
      }
      
  ];
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; // Adjust scroll amount
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; // Adjust scroll amount
    }
  };
    return (
        <>
        <section
        className="happyclients"
        style={{
            background:'#E6F6FE'
        }}>
            <div className="text-content">
            <h2 className="whychoose-heading">
          Our Happy <span className="whychoose-highlight">Clients</span>
        </h2>
        <p className="whychoose-description">
          Lorem ipsum dolor sit amet consectetur. Magna tristique mi lectus. 
          Lorem ipsum dolor sit amet consectetur.
        </p>
            </div>
            <div className="review-slider-container">
      <button className="nav-button left" onClick={slideLeft}>{"<"}</button>
      <div className="review-slider" ref={sliderRef}>
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <div className="personname">
              
              <div className="image-review">
                <img src={review.image} alt={review.name} />
                <div
                style={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}><div className="name">{review.name}</div>
                <div className="stars">⭐⭐⭐⭐⭐</div></div>
                
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={slideRight}>{">"}</button>
    </div>
        </section>
        </>
    )
}