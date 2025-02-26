import Image from "next/image";
import Button from "../button/button";
import './Herostyles.css'
export default function Hero () {
    return(
        <>
          <section className="hero-section">
      
      <div className="hero-content">
        <h1 className="hero-title">
          Best Hospital for <span>Piles</span><br></br> Treatment in Bangalore
        </h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet consectetur. magnis tristique mi lectus. Lorem ipsum dolor sit amet consectetur. magnis tristique mi lectus.Lorem ipsum dolor sit amet consectetur. magnis tristique mi lectus.
        </p>
        <div className="hero-button-review">          
          <Button />
          <div className="hero-review">
            <div className="hero-reviews-image-rating">
              <div className="hero-review-number">
                <span className="text-gray-900 font-semibold text-lg ml-2">5.0</span>
              </div>
            </div>
            <div>
              <span className="review-stars">⭐</span>
              <span className="review-stars">⭐</span>
              <span className="review-stars">⭐</span>
              <span className="review-stars">⭐</span>
              <span className="review-stars">⭐</span>
              <span className="review-text">Review</span>
            </div>
          </div>
        </div>
      </div>
     
      <div className="image-grid">
        <div className="image-box">
        <Image src="/images/image.png" className="heroimage"  alt="Hero Image"  fill />


        </div>
      </div>
    </section>
        </>
    )
}
