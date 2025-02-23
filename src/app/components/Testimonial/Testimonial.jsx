import Image from "next/image";
import './testimonialstyles.css'

export default function Testimonials () {
    return (
        <>
             <section className="testimonial-section">
            <div className="testimonial-container">
                <h1 className="testimonial-h1tag">Testimonials</h1>
                <p className="testimonial-ptag">
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </p>
                <video className="testimonial-video" controls poster="/path-to-thumbnail.jpg">
                    <source src="/path-to-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        </>
    )
}