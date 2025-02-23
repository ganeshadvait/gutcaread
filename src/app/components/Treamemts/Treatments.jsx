import Image from "next/image";
import './tstyles.css'

export default function Treatments ( ) {
    return(
        <>
        <section className="treatment-section">
            <div className="treatment-content">
                <div className="treatment-content-heading-div">
                    <h2 className="treatment-content-heading">
                        Treatments for <span className="treatment-content-heading-span">Piles</span>
                    </h2>
                </div>
                <div className="treatment-content-list-div">
                    <ul className="treatment-content-list">
                        <li>Painless Laser Treatments</li>
                        <li>Hemorrhoidectomy</li>
                        <li>Stapler Surgery</li>
                        <li>Rubberband Ligation</li>
                        <li>Dietary & Lifestyle Modification</li>
                        <li>Simple Medication</li>
                        <li>DG-HAL RAR (HALO)</li>
                        <li>MIPH/ PPH (Stapler Surgery)</li>
                        <li>RFA (RadioFrequency Ablation)</li>
                    </ul>
                </div>
                <div className="treatment-content-button-div">
                    <button className="appointment-button">Book an Appointment</button>
                </div>
            </div>
            <div className="treatment-image-div">
                <Image src="/treatment-image.jpg" alt="Treatment Image" width={300} height={300} className="treatment-image" />
            </div>
        </section>
        </>
    )
}