import Image from 'next/image';
import Button from '../button/button';
import './Aboutstyles.css'
export default function About () {
    return(
        <>
         <section className="doctors-section">
            {/* Heading and subheading container */}
            <div className="doctors-main-head-sub">
                {/* Doctors section heading */}
                <div className="doctors-main-heading">
                    <h2>Meet our <span className="span-text">specialist</span></h2> 
                </div>
                {/* Doctors section subheading */}
                <div className="doctors-main-subheading">
                    <p>We use only the best quality materials on the market in order<br></br> to provide the best care to our patients.</p>
                </div>
            </div>

            {/* Doctor information and image container */}
            <div className="doctors-information">
                {/* Doctor details text container */}
                <div className="doctors-info-details">
                    <h3>Dr. Yuvrajsingh Gehlot</h3>
                    <p>Laparoscopic Surgeon, General Surgeon, Proctologist</p>
                    <p>MBBS, MS (General Surgery), F.I.S.C.P. (Fellow of the Indian Society of Coloproctology).</p>
                    <p>28+ years of Expertise in surgical gastroenterology and colorectal care, delivering exceptional outcomes.</p>
                    <a href="/appointment">
                        <Button />
                    </a>
                </div>

                {/* Doctor image container */}
                <div className="doctors-info-image">
                    <Image 
                        className="doctors-image" 
                        src="/images/second image.png" 
                        alt="Doctor's image" 
                        fill
                    />
                </div>
            </div>
        </section>
        </>
    )
}